// 如何导入不同的属性呢?
import React, { Component, PropTypes } from 'react'

import { Provider } from 'react-redux'
import routes from '../routes'
import DevTools from './DevTools'
import { Router } from 'react-router'

export default class Root extends Component {
  render() {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <div>
          <Router history={history} routes={routes} />
          <DevTools />
        </div>
      </Provider>
    )
  }
}

// 两种不同的Class的定义方法
Root.propTypes = {
  store: PropTypes.object.isRequired
}
