import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { routerConfig } from 'app/@config';
import NavigationBar from 'app/@ets/layout/Navigation';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey['100'],
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    minHeight: '100vh'
  },
}));

function Layout() {
  const classes = useStyles();

  return (
    <HashRouter>
      <CssBaseline />
      <div className={classes.root}>
        <NavigationBar />

        <div>
          <Switch>
            {routerConfig.map(route => <Route key={route.path} {...route} />)}
          </Switch>
        </div>

      </div>
    </HashRouter>
  )
}
export default Layout