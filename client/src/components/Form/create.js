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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import InputAdornment from "@material-ui/core/InputAdornment";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
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
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    }
         
  }));


const CreateF = ()=>{
  const [title,setTitle]= useState('Untitled Form');
  const newTitle = (event)=>{
    setTitle(event.target.value);
  }
  const [questions,setQuestion]= useState([
    {question:'',
      type:1,
      options:[{option:'option1'}]
    }
  ]);
  const opChange=(i,index,event)=>{
    const values = [...questions];
    const options = values[index].options;
    const opValues= [...options];
    opValues[i].option= event.target.value;
    values[index].options= opValues;
    setQuestion(values);
  }
  const textChange=(key,event)=>{
    const values = [...questions];
    values[key].question = event.target.value;
    setQuestion(values);
  }
  const typeChange=(key,event)=>{
    const values = [...questions];
    values[key].type = event.target.value;
    setQuestion(values);
  }
  
  const addQ = (index)=>{
    const values = [...questions];
    for(let i=values.length;i>index+1;i--){
        values[i]=values[i-1];
    }
    values[index+1]={question:'',type:1, options:[{option:'option1'}]}
    setQuestion(values);
  }
  const addO = (i,index)=>{
    const values = [...questions];
    const options=values[index].options;
    const opValues= [...options];
    for(let k=opValues.length;k>i+1;k--){
      opValues[k]=opValues[k-1];
    }
    opValues[i+1]={option:'New Option'};
    values[index].options= opValues;
    setQuestion(values);
  }
  const deleteQ = (index)=>{
    const values = [...questions];
    values.splice(index,1);
    setQuestion(values);
  }
  const removeO = (i,index)=>{
    const values = [...questions];
    const options=values[index].options;
    const opValues= [...options];
    opValues.splice(i,1);
    values[index].options= opValues;
    setQuestion(values);
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
            <Box display='flex' justifyContent="flex-end" >
                
                <Box>
                  <Tooltip title="Add Question">
                      <IconButton aria-label="Add" onClick={event=>addQ(-1)} >
                        <AddCircleOutlineIcon fontSize='large' color='primary' margin={5}/>
                      </IconButton>
                  </Tooltip>
                </Box>
                </Box >
          </Card>     
        </Grid>
        {/* question Section */}
        {questions.map((question,index)=>(
            <Grid item xs={10} lg={6} className={classes.gridItem} key={index} >
            <Card className={classes.cardRoot} style={{boxShadow:'5px 5px 5px #888888'}} variant="outlined" >
                <CardContent>
                <Box display='flex' justifyContent="space-between">
                <Box >
                    <Typography variant='h5' color='primary'>Write a Question</Typography>
                </Box>
                <Box>
                    <FormControl className={classes.formControl} variant="filled">
                          <InputLabel >Type</InputLabel>
                          <Select
                            value={question.type}
                            onChange={(event)=>typeChange(index,event)}
                          >
                            <MenuItem value={1}>Paragraph</MenuItem>
                            <MenuItem value={2}>Multiple choice</MenuItem>\
                          </Select>
                        </FormControl> 
                </Box></Box>
                    
                       
                <TextField
                label="Question"
                fullWidth
                margin="normal"
                value={question.question}
                onChange={event=>textChange(index,event)}
                required
                />
                <Box display='flex' justifyContent="space-between" >
                  <Box mt={1}>
                 {(question.type===2)?
                 question.options.map((option,i)=>(
                <TextField
                key={i} 
                required 
                 id="standard-required"
                  label="Required"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment>
                          <FiberManualRecordIcon fontSize='small' color='primary'/>
                      </InputAdornment>
                    )
                   , endAdornment: (
                    <InputAdornment>
                       <Tooltip title="Add an Option">
                      <IconButton onClick={(event)=>addO(i,index)} >
                        <AddIcon  />  
                      </IconButton>
                      </Tooltip>
                      <Tooltip title="Remove Option">
                      <IconButton onClick={(event)=>removeO(i,index)}>
                        <RemoveIcon /> 
                      </IconButton>
                      </Tooltip>
                    </InputAdornment>
                  )
                
                  }}
                   value={option.option}
                   onChange={(event)=>opChange(i,index,event)}
                    />
                 ))
                  :null
                }</Box>
                <Box display='flex'>
                  <Box>
                    <Tooltip title="Add Question">
                        <IconButton aria-label="Add" onClick={event=>addQ(index)} >
                          <AddCircleOutlineIcon fontSize='large' color='primary' margin={5}/>
                        </IconButton>
                    </Tooltip>
                  </Box>
                  <Box >
                  <Tooltip title="Delete">
                        <IconButton aria-label="delete" onClick={event=>deleteQ(index)}>
                         <DeleteOutlineIcon fontSize='large' color='secondary'/>
                        </IconButton>
                  </Tooltip>  
                  </Box></Box>
                </Box>
                </CardContent>
              </Card>  
            </Grid>
        ))}
      </Grid>
      </div>
    
    </>)
}
export default CreateF;