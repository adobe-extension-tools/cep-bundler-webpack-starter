/// <reference path="./index.d.ts" />

import './style.css'
import './console'
import './extendscript'

declare global {
  interface NodeModule {
    hot: any
  }
}

document.body.innerHTML = 'hello, world!'

if (module.hot) {
  module.hot.accept(() => {})
}