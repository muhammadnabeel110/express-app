var express = require("express");
var app = express();
const cors = require('cors');
const routerApi= require('./routes/apiRouter');
const port = process.env.PORT ? process.env.PORT : 3030;

//object alignment
app.set('json spaces', 3);


app.use(cors());


//sever up everything in public
app.use(express.static("public"));
app.use('/',routerApi);



//Start the app listening on port 3030(if it's available)

app.listen(port,function(){
    console.log(`Server Running on port: http://localhost:${port}`);
});