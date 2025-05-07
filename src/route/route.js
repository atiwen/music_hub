
  const routes = [

        {
            path: '/about_us',
            name: 'about_us',
            component: () => import( '../components/about_us.vue')
        },
        {
            path: '/',
            name: 'list',
            component: () => import( '../components/list.vue')
        },
      
        {
            path: '/fav',
            name: 'fav',
            component: () => import( '../components/fav.vue')
        },
        {
            path: '/artist/:id',
            name: 'artist',
            component: () => import( '../components/Artist.vue')
        },
    ]
export default routes 