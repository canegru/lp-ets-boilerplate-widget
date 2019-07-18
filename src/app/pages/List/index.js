import React, { Component } from 'react';
import { makeStyles } from '@material-ui/styles';
import { withRouter } from 'react-router-dom';
import { Icon, Input, Paper, Tabs, Tab, Fab, Typography, Button, Card, CardContent, TextField } from '@material-ui/core';
import EtsAnimate from 'app/@ets/components/EtsAnimate';
import TableWidget from './widget/Table';

function List() {
  return (
    <React.Fragment>
      <div className="p-10">
        <EtsAnimate animation="transition.slideUpIn" delay={300}>
          <Paper className="flex-grow items-center justify-center p-10 shadow-0">
            <TableWidget />
          </Paper>
        </EtsAnimate>
      </div>
    </React.Fragment>
  )
}

export default withRouter(List);