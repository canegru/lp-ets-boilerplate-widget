import React, { Component } from 'react';
import { makeStyles } from '@material-ui/styles';
import { withRouter } from 'react-router-dom';
import { Icon, Input, Paper, Tabs, Tab, Fab, Typography, Button, Card, CardContent, TextField } from '@material-ui/core';
import EtsAnimate from 'app/@ets/components/EtsAnimate';
import TableWidget from './widget/Table';

function List() {
  return (
    <React.Fragment>
      <div className="ets-header">
      </div>
      <div className="p-10">
        
          
            <TableWidget />
     
        
      </div>
    </React.Fragment>
  )
}

export default withRouter(List);