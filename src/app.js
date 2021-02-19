const express =   require('express') 
const path = require('path')
const app = express()

const port = process.env.PORT || 3000


app.use(express.static(path.join(__dirname, "../public")))
app.set('view engine','hbs')

// routing
app.get("/", (req,res) =>{
    res.render('index')
})
// app.get("", (req,res) =>{
//     res.render('index')
// })

app.get("/about", (req,res) =>{
    res.render('about')
})
app.get("/wheather", (req,res) =>{
    res.render("Welcome to you in wheather page")
    
})
app.get("*", (req,res) =>{
    res.render("404 error page oops")
    // res.status(404)
})


app.listen(port,() =>{
    console.log(`server started on http://localhost:${port}`);
})