import Home from './views/Home.vue'
import About from './views/About.vue'
import Projects from './views/Projects.vue'
import Pricing from './views/Pricing.vue'
import Calendar from './views/Calendar.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/about', component: About, meta: { title: 'About' } },
  { path: '/projects', component: Projects, meta: { title: 'Projects' } },
  { path: '/pricing', component: Pricing, meta: { title: 'Pricing' } },
  { path: '/calendar', component: Calendar, meta: { title: 'Calendar' } },
  { path: '/:path(.*)', component: NotFound },
]
