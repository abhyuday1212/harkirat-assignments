import express from "express"
import dotenv from "dotenv"
import { createTodo, updateTodo } from "./Types.js"
import { todos, update } from "./db.js"
import cors from "cors"

dotenv.config();

const PORT = process.env.PORT

const app = express();

app.use(express.json())
app.use(cors())


/* 
 body {
 title: string;
 description: string;
 }
 */
app.post("/todo", async function (req, res) {

    //* ZOD validation
    const createPayload = req.body;
    console.log(createPayload);

    const parsePayload = createTodo.safeParse(createPayload)
    if (!parsePayload.success) {
        console.log(createPayload);
        return res.status(411).json({ msg: "Enter valid inputs" })
    }

    //save the parse payload to db
    //* Method 1
    //! If the body is having the schema defined from frontend
    // const saveToDb = await new todos(createPayload)
    // saveToDb.save();

    //* Method 2

    await todos.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })


    res.json({
        msg: "Todo Created"
    })
})

app.get("/todos", async function (req, res) {
    const foundTodos = await todos.find({})
    return res.json({
        foundTodos
    })
})

app.put("/completed", async function (req, res) {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload)
    if (!parsePayload.success) {
        return res.status(411).json({
            msg: "Enter the correct inputs"
        })
    }

    // Update the data in the database
    try {
        await todos.findByIdAndUpdate(
            {
                _id: req.body.id
            },
            {
                completed: true
            }
        )

        return res.json({
            msg: "Todo updated successfully"
        })
    } catch (error) {
        return res.json({
            msg: "Something went wrong while updation"
        })
    }

})

app.listen(PORT, () =>
    console.log(`Server is running successfully on PORT ${PORT}`)
);