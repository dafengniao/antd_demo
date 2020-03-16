import {
  Dashborad,
  Login,
  NotFound,
  Settings,
  ArticleList,
  ArticleEdit
} from '../views'

export const mainRoutes = [{
  pathname: '/login',
  component: Login
}, {
  pathname: '/404',
  component: NotFound
}]

export const adminRoutes = [{
  title: '首页',
  pathname: '/admin/dashborad',
  component: Dashborad,
  isNav: true
}, {
  title: '文章设置',
  isNav: true,
  key: '/admin/topic',
  children: [
    {
      pathname: '/admin/topic/article',
      component: ArticleList,
      title: '文章',
      isNav: true,
      exact: true
    }, {
      pathname: '/admin/topic/article/edit/:id',
      component: ArticleEdit,
      title: '文章编辑',
      isNav: false
    }
  ]
}, {
  title: '基础设置',
  isNav: true,
  key: '/admin/basic',
  children: [
    {
      pathname: '/admin/basic/settings',
      component: Settings,
      title: '设置',
      isNav: true
    }
  ]
}]

// export const adminRoutes = [{
//   pathname: '/admin/dashborad',
//   component: Dashborad,
//   title: '仪表盘',
//   isNav: true
// }, {
//   pathname: '/admin/article',
//   component: ArticleList,
//   title: '文章',
//   isNav: true,
//   exact: true
// }, {
//   pathname: '/admin/article/edit/:id',
//   component: ArticleEdit,
//   title: '文章编辑',
//   isNav: true
// }, {
//   pathname: '/admin/settings',
//   component: Settings,
//   title: '设置',
//   isNav: true
// }]