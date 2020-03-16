import loadable from '@loadable/component'
// import { Loading } from '../components'

const Dashborad = loadable(() => import('./Dashborad'))
// loadable({
//   loader: () => import('./Dashborad'),
//   loading: Loading
// })

const Login = loadable(() => import('./Login'))

// const Login = loadable({
//   loader: () => import('./Login'),
//   loading: Loading
// })

const NotFound = loadable(() => import('./NotFound'))

// const NotFound = loadable({
//   loader: () => import('./NotFound'),
//   loading: Loading
// })

const Settings = loadable(() => import('./Settings'))

// const Settings = loadable({
//   loader: () => import('./Settings'),
//   loading: Loading
// })

const ArticleList = loadable(() => import('./Article'))

// const ArticleList = loadable({
//   loader: () => import('./Article'),
//   loading: Loading
// })

const ArticleEdit = loadable(() => import('./Article/edit'))

// const ArticleEdit = loadable({
//   loader: () => import('./Article/edit'),
//   loading: Loading
// })

export {
  Dashborad,
  Login,
  NotFound,
  Settings,
  ArticleList,
  ArticleEdit
}
