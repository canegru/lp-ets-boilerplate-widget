import Dashboard from 'app/pages/Dashboard';
import Graph from 'app/pages/Graph';
import List from 'app/pages/List';

const routerConfig = [
  {
    path: '/',
    component: Dashboard,
    exact: true
  },
  {
    path: '/graph',
    component: Graph,
    exact: true
  },
  {
    path: '/list',
    component: List,
    exact: true
  }

]

export default routerConfig