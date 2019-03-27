const express = require( 'express');
const app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
const axios = require( 'axios');

app.use(express.static("./../react-app/build/")); 

const itemList=[{ status: 0, buttonColor: "beforeclick", itemDisplayName: "Learn React", visibility: true },
                { status: 0, buttonColor: "beforeclick", itemDisplayName: "Learn Redux", visibility: true },
                { status: 0, buttonColor: "beforeclick", itemDisplayName: "Learn Node", visibility: true }]

app.get("/list",(request, response)=>{
    response.json({payload:itemList});
  
})
app.post("/addtolist", (request, response) => {
    
    itemList.push({ status: 0, buttonColor: "beforeclick", itemDisplayName:  request.body.itemDisplayName, visibility: true }
       
    );
    response.json({
        status: true,
    })
})

app.put("/updatelist", (request, response)=>{
    for(var i=0; i<itemList.length; i++){
        if(request.body.itemDisplayName.length>0){
            for(j=0;j<request.body.itemDisplayName.length;j++){
                if(itemList[i].itemDisplayName === request.body.itemDisplayName[j].itemDisplayName){
                    itemList[i]=request.body.itemDisplayName[j];
                }
            }
        }    
    }
    response.json({
        status: true,
    })
})

app.listen(5000 ,()=>{

});