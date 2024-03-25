import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

const Connection = async () => {

    try {
        const connectToDb = await mongoose.connect('mongodb+srv://admin:2ZWrVX6S0tlKvx8L@cluster0.vorriid.mongodb.net/db1')
        console.log("Connected to database successfully");
        return connectToDb;

    } catch (error) {
        console.log("Problem while connnection to database");
    }
};

Connection();

const UserSchema = mongoose.model('UserCollection', {
    name: String,
    username: { type: String, unique: true },
    password: String
})

app.post("/signup", async function (req, res) {


    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await UserSchema.findOne({ username: username });

    if (existingUser) {
        console.log("User already exists...try using new credentials...");
        return res.status(400).json({
            msg: "User already exists..."
        })
    }

    const newUser = new UserSchema({
        name: name,
        username: username,
        password: password
    })

    try {
        await newUser.save();
        console.log("Information saved successfully");
        return res.status(200).json({ msg: "Information saved successfully" })

    } catch (error) {
        return res.status(400).json({ msg: "Something went wrong while signup" })
    }

})


app.listen(8000, () => {
    console.log("Port started successfully on PORT on 8000");
})
