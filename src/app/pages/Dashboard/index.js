import React, { Component, useContext, useEffect, setState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { withRouter } from 'react-router-dom';
import { Icon, Input, Paper, Tabs, Tab, Fab, Typography, Button, Card, CardContent, TextField } from '@material-ui/core';
import EtsAnimate from 'app/@ets/components/EtsAnimate';
import { StoreContext } from 'app/@store/StoreContext'
import { types } from "app/@store/reducers";

function Dashboard() {
  const { state, dispatch, actions } = useContext(StoreContext);


  console.log(state)
  return (
    <React.Fragment>
      <div className="p-10">
        <EtsAnimate animation="transition.slideUpIn" delay={300}>
          <Paper className="flex flex-col items-center justify-center p-32 shadow-0">

            <Button
              onClick={() =>
                dispatch({ type: types.ADD_TO_TECH_LIST, payload: 'test' })
              }
            >TEst</Button>
          </Paper>
        </EtsAnimate>
      </div>
    </React.Fragment>
  )

}

export default Dashboard;