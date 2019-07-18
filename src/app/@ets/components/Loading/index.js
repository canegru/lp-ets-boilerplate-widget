import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Fab, CircularProgress } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import EtsAnimate from 'app/@ets/components/EtsAnimate';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

function Loading(props) {
  const classes = useStyles();
  const { success } = props;
  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });
  return (
    <div className="flex justify-center">
      <EtsAnimate animation="transition.slideUpIn" delay={300}>
        <div className={classes.wrapper}>
          <Fab
            aria-label="Save"
            color="default"
            className={buttonClassname}
          >
            {success ?
              <CheckIcon className="text-white" />
              :
              <EtsAnimate animation="transition.slideUpIn" delay={500}>
                <DirectionsRunIcon className="text-white"/>
              </EtsAnimate>
            }
          </Fab>
          {!success && <CircularProgress size={68} className={classes.fabProgress} />}
        </div>
      </EtsAnimate>
    </div>
  )
}

export default React.memo(Loading);