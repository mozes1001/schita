
const routes = [
  {
    path: '/',
    component: () => import('pages/UserPage')
  },{
    path: '/start-process',
    component: () => import('pages/StartP')
  },{
    path: '/status-shochet',
    component: () => import('pages/SchitaStatusP')
  },{
    path: '/status-bodek-pnim',
    component: () => import('pages/BodekPnimP')
  },{
    path: '/status-bodek-chutz',
    component: () => import('pages/BodekChutzP')
  },{
    path: '/status',
    component: () => import('pages/StatusPage')
  },{
    path: '/final-report',
    component: () => import('pages/FinalReportP')
  },{
    path: '/test3D',
    component: () => import('pages/test3D')
  },{
    path: '/test2D',
    component: () => import('pages/test2D')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
