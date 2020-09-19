import React, { useState } from 'react';
import Question from './Question';
import './create.css';
import {makeStyles} from  '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Badge from '@material-ui/core/Badge';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    CardRoot: {
        height: 'auto',
      }, 
    gridItem:{
      margin: theme.spacing(5)
    },
         
  }));


const CreateF = ()=>{
    const classes = useStyles();
    return(<>
        <br/>
         <div className={classes.root}>
      <Grid container spacing={3} justify="center" direction='row'>
        <Grid item xs={10} lg={6} className={classes.gridItem} >
        <Card className={classes.cardRoot} style={{boxShadow:'5px 5px 5px #888888'}} variant="outlined" >
            <CardContent>
                <Typography variant='h5' color='primary'>Form Title</Typography>
            <TextField
            id="title"
            label="Form Title"
            fullWidth
            margin="normal"
            value="Untitled Form"
            required
            />
            </CardContent>
          </Card>     
        </Grid>
        {/* question Section */}
        
        <Grid item xs={10} lg={6} className={classes.gridItem} >
        <Card className={classes.cardRoot} style={{boxShadow:'5px 5px 5px #888888'}} variant="outlined" >
            <CardContent>
                <Typography variant='h5' color='primary'>Write a Question</Typography>
            <TextField
            label="Question"
            fullWidth
            margin="normal"
            
            required
            />
            </CardContent>
          </Card>  
        </Grid>
      </Grid>
      </div>
    
    </>)
}
export default CreateF;