import express from "express"

const app = express();

let counter = 0;

function calculatedRequests(req, res, next) {
    counter++;
    console.log(counter);
    next()
}

function personalMiddleware(req, res, next) {
    console.log("Personal middleware bulaya gya h ji");
    next()
}


// * If a middleware has to be called for every single api requests than it should use app.use

// app.use(personalMiddleware)
app.use(express.json())
// ! without this app.use , the body will not get extracted


app.post("/route1", calculatedRequests, (req, res) => {
    console.log(req.body);

    res.json({
        msg: "Hi there this is just the post request from the backend"
    })

})

app.post("/route2", function (req, res) {
    // kidenys = [1,2]

    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;
    res.send("You have " + kidneyLength + " kidneys")

})



//  *  Global catches

// ! universal backedn server error handler  

app.use(function (err, req, res, next) {
    errorCount++;

    res.json({
        msg: "Sorry , something is up with our server"
    })
})


app.listen(8000)
