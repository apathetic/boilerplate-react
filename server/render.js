const path = require('path');
const fs = require('fs');

const React = require('react');
const {Provider} = require('react-redux');
const {renderToString} = require('react-dom/server');
const {StaticRouter} = require('react-router-dom');

const {default: Store} = require('../src/store');
const {default: App} = require('../src/App');


export function render(url) {
  const filePath = path.resolve(__dirname, '..', 'build', 'index.html')

  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, htmlData) => {
      if (err) {
        reject('read err', err);
      }

      const context = {};
      const store = Store();
      const markup = renderToString(
        <Provider store={store}>
          <StaticRouter
            location={url}
            context={context}
          >
            <App/>
          </StaticRouter>
        </Provider>
      );

      resolve(htmlData.replace('{{SSR}}', markup));
    });
  });
}
