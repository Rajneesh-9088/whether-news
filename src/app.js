const express =   require('express') 
const app = express()

const port = process.env.PORT || 3000



app.get("/", (req,res) =>{
    res.send("Welcome to your Entry")
})

app.get("/about", (req,res) =>{
    res.send("Welcome to your Entry")
})


app.listen(port,() =>{
    console.log(`server started on http://localhost:${port}`);
})