
const express = require('express');
const app = express();
app.use(express.json())
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};
setInterval(() => {
  numberOfRequestsForUser = {};
}, 1000)

app.use(function (req, res, next) {
  const userId = req.headers["user-id"];

  if (numberOfRequestsForUser[userId]) {
    // agr requests exists krte h bt abhi unka number nhi pta h
    
    numberOfRequestsForUser[userId] = numberOfRequestsForUser[userId] + 1;

    if (numberOfRequestsForUser[userId] > 5) {
      res.status(400).json({ msg: "Your request limit exceeded, No entry" })

    }
    else {
      next();

    }
    //allow to view task

  }
  else {
    //us particular user id ka ek  request nhi h to uska logic
    numberOfRequestsForUser[userId] = 1;
    next();
  }


})

app.get('/user', function (req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function (req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;