const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})
require('./db/conn')


const PORT =process.env.PORT ||5000

//to understand the json data by our app
app.use(express.json())

//we are going to register the router here 
app.use(require('./router/auth'))

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})