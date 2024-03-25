import express from "express"
import zod from "zod"

const app = express();

const inputSchema1 = zod.array(zod.number())

// type-2

// email: string => email
// password: atleast 8 letters
// country: "IN", "US"



const inputSchema2 = zod.object({
    email: zod.string().email(),
    password: zod.string(),
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(zod.number())
})

app.use(express.json())

app.post("/route1", (req, res) => {
    console.log(req.body);

    const kidneys = req.body.kidneys;
    const response = inputSchema1.safeParse(kidneys)

    if (!response.success) {
        res.status(411).json({
            msg: "input is invalid"
        })
    }
    else {
        res.status(200).json({
            response,
            msg: "Hi there this is just the post request from the backend"
        })
    }


})


app.post("/route2", (req, res) => {
    const userInput = req.body;
    console.log(userInput);
    const response = inputSchema2.safeParse(userInput)

    if (!response.success) {
        console.error(response.error);
        res.status(411).json({
            msg: "input is invalid",
            error: response.error
        })
    } else {
        res.status(200).json({
            response,
            msg: "Input Correct"
        })
    }
})


app.listen(8000)
import express from "express"
import zod from "zod"

const app = express();

const inputSchema1 = zod.array(zod.number())

// type-2

// email: string => email
// password: atleast 8 letters
// country: "IN", "US"



const inputSchema2 = zod.object({
    email: zod.string().email(),
    password: zod.string(),
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(zod.number())
})

app.use(express.json())

app.post("/route1", (req, res) => {
    console.log(req.body);

    const kidneys = req.body.kidneys;
    const response = inputSchema1.safeParse(kidneys)

    if (!response.success) {
        res.status(411).json({
            msg: "input is invalid"
        })
    }
    else {
        res.status(200).json({
            response,
            msg: "Hi there this is just the post request from the backend"
        })
    }


})


app.post("/route2", (req, res) => {
    const userInput = req.body;
    console.log(userInput);
    const response = inputSchema2.safeParse(userInput)

    if (!response.success) {
        console.error(response.error);
        res.status(411).json({
            msg: "input is invalid",
            error: response.error
        })
    } else {
        res.status(200).json({
            response,
            msg: "Input Correct"
        })
    }
})


app.listen(8000)
