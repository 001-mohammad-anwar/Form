import express from "express"
import cors from "cors"
import bodyParser from "body-parser";
const app = express()
const port = 3000;

app.use(cors())
app.use(bodyParser.json())
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})
app.post('/', (req, res) => {
    console.log(req.body);
  res.send('Succesfully submited your form');
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})