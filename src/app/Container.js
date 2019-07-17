import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { routerConfig } from 'app/@config';
import NavigationBar from 'app/@ets/layout/Navigation';


function Layout() {
  return (
    <HashRouter>
      <NavigationBar />
      <Switch>
        {routerConfig.map(route => <Route {...route} />)}
      </Switch>
    </HashRouter>
  )
}
export default Layout