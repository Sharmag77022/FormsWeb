import React, { useState } from 'react';
import './create.css';
import {makeStyles} from  '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import  Box from '@material-ui/core/Box'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

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
  const [title,setTitle]= useState('Untitled Form');
  const newTitle = (event)=>{
    setTitle(event.target.value);
  }
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
            onChange={newTitle}
            value={title}
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
            <Box display='flex' justifyContent="flex-end" >
            <Tooltip title="Add Question">
                    <IconButton aria-label="Add" disableFocusRipple={true}>
                      <AddCircleOutlineIcon fontSize='large' color='primary' margin={5}/>
                    </IconButton>
                  </Tooltip>
              <Box>
                  
              
              </Box>
              <Box >
              <Tooltip title="Delete">
                    <IconButton aria-label="delete">
                     <DeleteOutlineIcon fontSize='large' color='secondary'/>
                    </IconButton>
              </Tooltip>
                
              </Box>
            </Box>
            </CardContent>
          </Card>  
        </Grid>
      </Grid>
      </div>
    
    </>)
}
export default CreateF;