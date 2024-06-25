
import express from "express";
import bodyParser from 'body-parser'
import userRoute from "./routes/user.js";


const app = express()
const PORT = 5000 


app.use(bodyParser.json()) //req.body return a json 

app.get('/', (req, res) => {
    res.send('Homepage')
})

app.use('/users', userRoute)


app.listen(PORT, () => `App runing on http://localhost:${PORT}`)