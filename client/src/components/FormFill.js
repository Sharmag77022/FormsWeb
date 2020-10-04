import React , { useEffect } from "react";


const FormFill =(props)=>{
    useEffect(()=>{
        fetch('/form?fId='+props.match.params.fId).then(res=>{
            res.json().then(data=>{
                console.log(data);
            }).catch(err=>{
                console.log('There is some Error');
            })
        }).catch(err=>{
            
        })
    },[])
    return(<h1>This is just a Testing</h1>);
}
 export default  FormFill;