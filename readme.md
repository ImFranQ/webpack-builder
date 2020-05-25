# Webpack Builder

A fantastic template for ES6 projects

## Get started

run

```
$ git clone https://github.com/ImFranQ/webpack-builder
$ cd webpack-builder
$ npm i // or yarn
```

### Build project

Run

`$ npm run dev` or `$ npm run watch` for live reload bundles

### Run server

`$ npm run serve`

## Create a vue.js project

run: `$ npm install vue` and `$ npm i -D vue-loader vue-template-compiler`

open `package.json`

change the next scripts to:

```
"scripts": {
  ...
  "dev": "webpack --mode=development --config=./webpack/webpack-vue.config.js",
  "serve": "webpack-dev-server --config=./webpack/webpack-vue.config.js --open --port=8000"
}

```

open `src/app/index.html` and change body for:

```
<body>
  <div id="app">
    {{ message }}
  </div>
</body>
```

open `src/app/index.js` and create a vue instance 


```
import Vue from 'vue'

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```