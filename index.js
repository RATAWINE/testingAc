const express = require("express")

const app = express()

app.get("/", (req,res)=>{
    // res.sendFile(__dirname +'/index.html', {status: 200})
    res.send("<h1>Welcome to Circleci pipeline tool</h1>")
})


const PORT = process.env.PORT || 5000


app.listen(PORT, ()=>{
    console.log(`Listining on ${PORT}`)
})

module.exports = app