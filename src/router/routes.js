export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '/home', name: 'home', component: () => import('pages/Home') },
      { path: '/signin', name: 'signin', component: () => import('pages/SignIn') },
      { path: '/register', name: 'register', component: () => import('pages/SignIn') },
      { path: '/chat', name: 'chat', component: () => import('pages/Chat'), meta: { requiresAuth: true } },
      { path: '/history', name: 'history', component: () => import('pages/History') },
      { path: '/quests', name: 'quests', component: () => import('pages/Quests') },
      { path: '/questedit', name: 'questedit', component: () => import('pages/QuestForm') },
      { path: '/questview/:id', name: 'questview', component: () => import('pages/QuestView'), props: true },
      { path: '/nodeedit/:type/:parentType/:id', name: 'questview', component: () => import('pages/NodeForm'), props: true }

    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
