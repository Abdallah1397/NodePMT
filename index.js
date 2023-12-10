const express=require('express');

const app=express();
app.get('/pmt/profiles',(req,res)=>{
    res.send({
        id:1,
        username:"Attallah",
        phone:'01021973233',
    })
});

app.listen(8000,()=>{
    console.log('I am Listening in port 8000')
});