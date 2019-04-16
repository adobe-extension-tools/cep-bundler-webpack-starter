/// <reference path="./global.d.ts" />

import './style.css'
import './console'
import { evalExtendscript } from 'cep-interface'

// load the ExtendScript bundle
import bundle from '!!raw-loader!../../dist/extendscript.js'
evalExtendscript(bundle)

declare global {
  interface NodeModule {
    hot: any
  }
}
if (module.hot) {
  module.hot.accept(() => {})
}