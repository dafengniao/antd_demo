import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import './index.less'

import { mainRoutes } from './routes'
render(
  <Router>
    <Switch>
      <Route path="/admin" render={(routerProps) => {
        // 权限验证 登陆访问admin
        return <App {...routerProps} />
      }}/>
      {
        mainRoutes.map(route => {
          return <Route key={route.pathname} path={route.pathname} component={route.component} />
        })
      }
      <Redirect to="/admin" from="/" exact />
      <Redirect to="/404" />
    </Switch>
  </Router>,
  document.getElementById('root')
)