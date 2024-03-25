import express from "express"
import jwt from "jsonwebtoken"
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "harkirat singh",
    },
    {
        username: "alpha@gmail.com",
        password: "12345678",
        name: "Raman singh",
    },
    {
        username: "radhe@gmail.com",
        password: "123",
        name: "Radhe kumari",
    },
];

function userExists(username, password) {
    // write logic to return true or false if this user exists
    // in ALL_USERS array

    let userExists = false;
    ALL_USERS.forEach(element => {
        if (username == element.username && password == element.password) {
            userExists = true;
            return userExists;
        }

    });

    return userExists;
}

app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesnt exist in our in memory db",
        });
    }

    var token = jwt.sign({ username: username }, "secretKey");
    return res.json({
        token,
    });
});

app.get("/users", function (req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        // return a list of users other than this username
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(8000, () => {
    console.log("Server is running successfully on the PORT 8000");
})