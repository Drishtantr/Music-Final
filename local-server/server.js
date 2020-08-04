let express=require("express");
let app = express();
app.use(function(req,res,next){
    console.log(`${new Date()}-${req.method} request for ${req.url}`);
    next();
});

app.use(express.static("../static"));

app.listen(81, function(){
console.log("Serving static on 81")
});

//rm -rf node_modules package-lock.json && npm install && npm start

