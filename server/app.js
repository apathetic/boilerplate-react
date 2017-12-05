import Koa from 'koa';
import Router from 'koa-router';
import compression from 'koa-compress';
import send from 'koa-send';
import serve from 'koa-static';

import {render} from './render';

const path = require('path');
const app = new Koa();
const router = new Router();
const rootPath = path.resolve(__dirname, '..', 'build');

// Routes
// -----------------------------------------
router.get ('/', async (context, next) => {
  const url = context.request.url;

  try {
    context.body = await render(url);
  } catch(err) {
    console.error(err);
  }
  return next();
});

router.get('/api', (context, next) => {
  context.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  });
  context.body = {}; // JSON.stringify({})
  return next();
});


// Middlewares
// -----------------------------------------

// Logger
app.use(async (context, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${context.method} ${context.url} - ${ms}`);
});

// Error Handling
app.use(async (context, next) => {
  try {
    await next();
  } catch (err) {
    context.status = err.status || 500;
    context.body = err.message;
    if (process.env.NODE_ENV === 'production') {
      context.app.emit('error', err, context);
    }
  }
});

// Support Gzip
app.use(compression());

// Static
app.use(serve(rootPath));

// Set up routes
app.use(router.routes());


export default app;
