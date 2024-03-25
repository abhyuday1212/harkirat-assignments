//Syntax for get request
//Any request is in perspective of the frontend, means if the frontend wants some data then they need to send a get request from the frontend;
// If someBody want to Give some particular data from the frontend or any request server to the backend than They use POST request, 

import express from "express"
const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// Getting a bit complex object

import express from "express"
let PORT2 = 8000;

const app2 = express()

app2.get("/", (req, res) => {
    res.json({
        name: "Abhyuday",
        mob: "6969",
        address:"Kya kroge aakr"        
    })
})

app2.listen(PORT2, () => {
    console.log(`App is listening on port ${PORT}`);
})








import express from "express"
let PORT3 = 8000;

const app3 = express()


//post requwst ki testing kewl postman se ki ja skti h whereas get request ki testing simply browser se ki ja skti h
app3.post("/", (req, res) => {
    res.send({
        msg: "Abhyuday"
    })
})

app3.listen(PORT3, () => {
    console.log(`App is listening on port ${PORT}`);
})