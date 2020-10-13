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
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Icon from '@material-ui/core/Icon';
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
     },
    button: {
        margin: theme.spacing(1),
    }
  }));

const FormFill =(props)=>{
    const [form,setForm]=useState(false);
    const [errors,setErrors]=useState(false);
    const [email,setEmail]= useState('');
    const [emailError,setEmailError]=useState(false);
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
    const changeEmail=(event)=>{
        setEmail(event.target.value);
    }
    const handleSubmit = async()=>{
        const a=[];
        form.questions.map((question,index)=>{     
            if(question.answer===''){
                a[index]=true;    
            }else{
                a[index]=false;
            }
        })
        setErrors(a);
        if(email===''){
            setEmailError('Email address cannot be empty!')
        }else if(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)===false){
            setEmailError('Please enter a valid email address!')
        }else {
            setEmailError(false);
        }
    }
    const handleAnswer = (key,event,type)=>{
        const values={...form};
        type===1?values.questions[key].answer=event.target.value:values.questions[key].answer=parseInt(event.target.value)
        setForm(values);
    }
    const classes = useStyles();
    return(
        <>
        <br/>
        <div className={classes.gridRoot}>
            <Grid container spacing={3} justify="center" direction='row'>
            {form?<><Grid item xs={10} lg={6} className={classes.gridItem}  >  
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
                {question.type==1?
                <TextField
                label="Your Answer"
                error={!question.required?false:errors?errors[index]:false}
                helperText={!question.required?'':!errors?null:errors[index]?"Cannot leave empty!":null}
                fullWidth
                margin="normal"
                value={question.answer}
                onChange={(event)=>handleAnswer(index,event,1)}
                required={question.required?true:false}
                />:<RadioGroup aria-label="Options"
                 name="options"
                 onChange={(event)=>handleAnswer(index,event,2)}
                  value={question.required?question.answer||0:question.answer} >
                    {question.options.map((option,ind)=>(
                        <FormControlLabel value={ind}
                         control={<Radio />} 
                         label={option.option} 
                         key={ind} />
                    ))}
                 </RadioGroup>}  
            </CardContent>  
            </Card>
            </Grid>
            ))}</>
            :null} 
            {/* Email Section */}
            {!form?null:
            <Grid item xs={10} lg={6} className={classes.gridItem}  >  
                <Card className={classes.root} style={{boxShadow:'5px 5px 5px #888888'}}>
                <CardHeader
                    title='Enter Your Email Address ?'
                    className={classes.question}
                    align='center'
                />
                <CardContent> 
                    <TextField
                    label="Your Email"
                    fullWidth
                    error={emailError?true:false}
                    helperText={emailError?emailError:null}
                    value={email}
                    onChange={changeEmail}
                    margin="normal"
                    required={true}
                    /> 
                </CardContent>  
                </Card>
            </Grid>
            }
            </Grid>
            {/* Submit Section */}  
            {!form?null:
            <Box display='flex' mb={5} justifyContent='center'>
            <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            className={classes.button}
            endIcon={<Icon>send</Icon>}>
            Submit
            </Button>
            </Box>
            }
            
        </div>    
        </>
    );
}
 export default  FormFill;