import Dashboard from 'app/pages/Dashboard'
import Example from 'app/pages/Example'

const routerConfig = [
  {
    path: '/',
    component: Dashboard,
    exact: true
  },
  {
    path: '/dashboard',
    component: Example,
    exact: true
  }

]

export default routerConfig