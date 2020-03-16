import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { adminRoutes } from './routes'
import { Frame } from './components'

// const testHOC = (WrappedComponent) => {
//   return class HOCComponent extends Component {
//     render() {
//       return (
//         <>
//           <WrappedComponent />
//           <h2>
//             这是高阶组建
//           </h2>
//         </>
//       )
//     }
//   }
// }
// // @testHOC
class App extends Component {
  render() {
    return (
      <Frame menu={adminRoutes}>
        <Switch>
          {
            adminRoutes.map((route) => {
              if (!route.children) {
                return (
                  <Route
                    path={route.pathname}
                    key={route.pathname}
                    exact={route.exact}
                    render={(routerProps) => {
                      return <route.component {...routerProps}/>
                    }}
                  />
                )
              } else {
                return (
                  route.children.map(routeChildren => {
                    return (
                      <Route
                        path={routeChildren.pathname}
                        key={routeChildren.pathname}
                        exact={routeChildren.exact}
                        render={(routerChildrenProps) => {
                          return <routeChildren.component {...routerChildrenProps}/>
                        }}
                      />
                    )
                  })
                )
              }
            })
          }
          <Redirect to={adminRoutes[0].pathname} from="/admin" exact />
          <Redirect to="/404" />
        </Switch>
      </Frame>
    )
  }
}

export default App
// export default testHOC(App)