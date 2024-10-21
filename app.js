const express=require("express");
const app=express();
const dotenv=require("dotenv");
dotenv.config()
const cors=require("cors");
const port= process.env.PORT;

const {dbConnect}=require('./helpers/dbConnect');

app.set('view engine' , 'ejs')
app.set("views",__dirname + "/views");

app.use(express.static(__dirname+'/public'));

app.use('/',require('./routers/frontRouters'));

dbConnect();

app.use((req,res)=>{
    res.status(404).render("404",{
        titulo:'ERROR 404'
    })
})

app.listen(port,()=>{
    console.log(`server on port ${port}`);
})