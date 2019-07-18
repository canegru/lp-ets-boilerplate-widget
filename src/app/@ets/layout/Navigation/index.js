import React, { useState,useEffect } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import { Link, withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link as MaterialLink } from '@material-ui/core'
import { menuConfig } from 'app/@config';

const styles = theme => ({
  appBar: {
    position: 'relative',
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.grey['100']}`,
    backgroundColor: 'white',


  },
  inline: {
    display: 'inline'
  },
  flex: {
    display: 'flex'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  tagline: {
    display: 'inline-block'
  },
  iconContainer: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  },
  iconButton: {
    float: 'right'
  },
  tabContainer: {
    marginLeft: 32,
  },
  tabItem: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    minWidth: 'auto'
  }
})

function Topbar(props) {

  const [nav, setNav] = useState(0);

  useEffect(() => {
    setNav(menuConfig.findIndex(item => item.pathname === props.location.pathname));
  }, [props])

  function handleChange(e,value) {
    setNav(value)
  }

  const { classes } = props;

  return (
    <AppBar position="absolute" color="default" className={classes.appBar}>
      <Toolbar>
        <Grid container alignItems="flex-start">
          <Grid item xs={12} className={classes.flex}>
            <div className={classes.tabContainer}>
              <Tabs
                value={nav}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
              >
                {menuConfig.map((item, index) => (
                  <Tab key={index} component={item.external ? MaterialLink : Link} href={item.external ? item.pathname : null} to={item.external ? null : { pathname: item.pathname, search: props.location.search }} classes={{ root: classes.tabItem }} label={item.label} />
                ))}
              </Tabs>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )

}

export default withRouter(withStyles(styles)(Topbar))