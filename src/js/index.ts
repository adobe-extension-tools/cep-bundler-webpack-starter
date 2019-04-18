/// <reference path="./index.d.ts" />

import './style.css'
import './console'
import './loadExtendscript'

declare global {
  interface NodeModule {
    hot: any
  }
}

if (module.hot) {
  module.hot.accept(() => {})
}