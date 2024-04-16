import {User} from "../db/db.js"

async function userMiddleware(req, res, next) {

    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    const checkUser = await User.findOne({
        username: username,
        password: password
    })

    if (checkUser) {
        next();

    }
    else {
        return res.status(403).json({
            msg: "User does not exists"
        })
    }
}
export default userMiddleware