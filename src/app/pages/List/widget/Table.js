import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Typography, ListItemText, List, ListItem, ListItemAvatar, Avatar, Divider, makeStyles } from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';
import Requests from 'app/services/Requests'
import EtsAnimateGroup from 'app/@ets/components/EtsAnimateGroup';
import Loading from 'app/@ets/components/Loading';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  orangeAvatar: {
    color: '#fff',
    backgroundColor: deepOrange[400],
  },
}));

function Table() {
  const classes = useStyles();
  const [init, setInit] = useState(true);
  const [{ data, loading, error, success }, setConfig] = Requests();

  if (init) {
    setConfig({
      url: 'https://api.cnegru.com/widget/array',
      delay: 1200, // used for animations
    })
    setInit(false);
  }

  if (loading || success || error) {
    return <Loading success={success} error={error} />
  }
  return (
    <EtsAnimateGroup className="w-full"
      enter={{
        animation: "transition.slideUpBigIn",
        delay: 300
      }}
    >
      {
        data.map(user => {
          const avatarName = `${user.name.split(' ')[0][0]}${user.name.split(' ')[1][0]}`
          return (
            <React.Fragment key={user.id}>
              <List className={classes.root}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar className={classes.orangeAvatar}>{avatarName}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={user.name}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          {user.email}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </List>
            </React.Fragment>
          )
        })
      }
    </EtsAnimateGroup>
  )
}

export default React.memo(Table);