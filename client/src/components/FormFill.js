import React , { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 26,
    },
    pos: {
      marginBottom: 12,
    },
    gridRoot: {
        flexGrow: 1,
      },
    gridItem:{
      margin: theme.spacing(5)
     },
     question:{
         color: 'green'
     }
  }));

const FormFill =(props)=>{
    const [form,setForm]=useState({});
    useEffect(()=>{
        fetch('/form?fId='+props.match.params.fId).then(res=>{
            res.json().then(data=>{
                setForm(data);
                console.log(data);
            }).catch(err=>{
                console.log('There is some Error');
            })
        }).catch(err=>{
            
        })
    },[])
    const classes = useStyles();
    return(
        <>
        <br/>
        <div className={classes.gridRoot}>
            <Grid container spacing={3} justify="center" direction='row'>
            {form.title?<><Grid item xs={10} lg={6} className={classes.gridItem}  >  
                <Card className={classes.root} style={{boxShadow:'5px 5px 5px #888888'}}>
                <CardContent>
                    <Typography component={'span'} className={classes.title} color="primary" align='center' gutterBottom>
                    <Box fontWeight="fontWeightBold" m={1}>
                    {form.title}
                    </Box>
                    </Typography>    
                </CardContent>  
                </Card>
            </Grid>
            {form.questions.map((question,index)=>(
            <Grid item xs={10} lg={6} className={classes.gridItem} key={index} >  
            <Card className={classes.root} style={{boxShadow:'5px 5px 5px #888888'}}>
            <CardHeader
            title={question.question+" ?"}
            className={classes.question}
            align='center'
            />
            <CardContent>   
            </CardContent>  
            </Card>
            </Grid>
            ))}</>
            :null}    
            
            </Grid>
        </div>    
        </>
    );
}
 export default  FormFill;