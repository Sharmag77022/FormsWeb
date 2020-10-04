import React, { useState,useEffect }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import  Box from '@material-ui/core/Box'
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    gridRoot: {
        flexGrow: 1,
      }
  }));
  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }  
function MyForms(){    
    const classes = useStyles();
    var [forms,setForms]=useState([])
   useEffect(()=>{
    fetch('/user/myForms',{
        method:'GET',
        credentials:'same-origin'
      }).then(res=>{
        if(res.status===200){
              res.json().then(async(data)=>{
              //console.log(data);
              setForms(data);
              
          })
        }
       
    }).catch(err=>{
        console.log(err);
    })
   },[]) 
   console.log(forms);
    return(<>
    <br/>
    <Box display='flex'  justifyContent="center" className={classes.root} style={{color:'blue',background:'gray'}}>
     
     <div >
  
      <List component="nav" aria-label="myForms" variant='outline' >
      {forms.map((form,index)=>(
        
      <ListItem button  key={index} id={form._id} >
          <ListItemIcon>
            <FormatAlignCenterIcon />
          </ListItemIcon>
          <ListItemText primary={form.title} />
        </ListItem>
        
        
      ))}
      </List>
      
    </div>
    </Box>
    
    </>)
}
export default MyForms;