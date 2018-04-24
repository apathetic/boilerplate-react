This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Notable additions

* Redux
* SSR
* Flow

## Getting Started

This is designed to work with [Contentful](http://contentful.com).
You can enter your space id and your api key in the config.js.

After you do that, simply run:
```
npm i
npm run start
```
And then browse to http://localhost:3000 and TADA!
If you go to page 2 and you have a site in your content type, it will display the title.

You can look at the store and the reducers to determine what fields are being loaded in each component.

