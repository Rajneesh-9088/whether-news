const express =   require('express') 
const path = require('path')
const app = express()

const port = process.env.PORT || 3000


app.use(express.static(path.join(__dirname, "../public")))
// routing
app.get("/", (req,res) =>{
    res.send("Welcome to you in home page")
})

app.get("/about", (req,res) =>{
    res.send("Welcome to you in about page")
})
app.get("/whether", (req,res) =>{
    res.send("Welcome to you in whether page")
    
})
app.get("*", (req,res) =>{
    res.send("404 error page oops")
    // res.status(404)
})


app.listen(port,() =>{
    console.log(`server started on http://localhost:${port}`);
})