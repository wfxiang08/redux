import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// 注意: index.js的含义
// 就像python的package中的  __init__.py文件一样，可以直接把 reducer作为一个包，那么: index.js中的文件就可以直接引入了
import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp)

// 项目的入口
// 通过Provider来指定了全局的 store
//
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
