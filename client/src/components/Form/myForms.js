import React, { useEffect }  from 'react';
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
   useEffect(()=>{
    fetch('/user/myForms',{
        method:'GET',
        credentials:'same-origin'
      }).then(res=>{
       res.json().then(data=>{
           console.log(data);
       })
    }).catch(err=>{
        console.log(err);
    })
   },[]) 
    return(<>
    <br/>
    <Box display='flex' justifyContent="center" className={classes.root}>
     <Box>
     <div >
  
      <List component="nav" aria-label="main mailbox folders" variant='outline'>
      <ListItemLink href="/about" >
          <ListItemIcon>
            <FormatAlignCenterIcon />
          </ListItemIcon>
          <ListItemText primary="Draj sdfkjsdjf sfdljdsk" />
        </ListItemLink>
        <Divider/>
      </List>
      
    </div>
    </Box>
    </Box>
    
    </>)
}
export default MyForms;