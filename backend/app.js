const express=require("express");
const app=express();
const cors=require("cors");
const connectDB = require('./conn/conn.js');
const path = require("path");
const auth= require("./routes/auth.js")
const list= require("./routes/list.js");
app.use(express.json());
app.use(cors())
// Connect to the database
connectDB();



app.use("/api/v1",auth);
app.use("/api/v2",list);


app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "frontend", "build")));
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

//Server Listening
app.listen(1000,()=>{
    console.log("Server Started");
});
