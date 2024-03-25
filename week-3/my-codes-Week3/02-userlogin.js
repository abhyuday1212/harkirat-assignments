
import express from "express";

const app = express();



function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if (username !== "alpha" || password !== "alpha") {
        res.status(400).json({ "msg": "Bhaiya dekho, ya to password galat dale ho ya username" });

    }
    else {
        next()
    }
}

function kidenyMiddleware(req, res, next) {
    const kidneyId = req.query.kidneyId;

    if (kidneyId !== "1" && kidneyId !== "2") {
        res.status(400).json({ "msg": "Bhaiya dekho, galat kidney ki id na daalo" });
    }
    else {
        next()
    }
}

app.get("/health-check", userMiddleware, kidenyMiddleware, function (req, res) {

    res.status(200).json({ "msg": "Kidney is ok, let's start with gurda" });
});

app.get("/gurda-check", userMiddleware, kidenyMiddleware, function (req, res) {

    res.status(200).json({ "msg": "gurda is ok..." });
});

app.listen(8000, () => {
    console.log("App is running successfully on 8000");
});
