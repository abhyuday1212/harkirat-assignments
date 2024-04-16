import { Router } from "express";
import userMiddleware from "../middleware/user.js"
import jwt from "jsonwebtoken";
import { User } from "../db/db.js";



const router = Router();
 

// User Routes
// User Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic

    try {
        const username = req.body.username;
        const password = req.body.password;

        const checkUserExistance = await User.findOne({ username: username, password: password })

        if (checkUserExistance) {
            return res.status(403).json({
                msg: "User User Already Existed"
            })
        }

        await User.create({
            username,
            password
        })

        return res.status(200).json({ msg: "User Signup successful" })

    } catch (error) {
        console.log(error);
        return res.status(200).json({ msg: "User Signup unsuccessful" })

    }

});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const jwtSecretKey = process.env.JWT_SECRET_KEY;
    // check if this user exists in the database

    try {
        const checkUserExistance = await User.findOne({ username: username, password: password })

        if (!checkUserExistance) {
            console.log("You are not authorized, input a correct username and password");
            return res.status(403).json({
                msg: "You are not authorized, input a correct username and password"
            })
        }

        if (checkUserExistance) {
            const token = jwt.sign({ username }, jwtSecretKey)

            return res.json({ token })
        }

    }
    catch (error) {
        return res.json({ msg: "Error while sign in, please try again later" })
    }


});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    /*
    Here you want to use the username but it is in jwt token, so we can send the username in other handlers, without requiring it from the backend as we have previously used the username in user Middleware.
    */
        
  
    try {
        const username = req.username;
        console.log(username);
        return res.json({msg:"Api worked in fine format"})
    } catch (error) {
        return res.json({ msg: "Api not worked in fine format" })

    }
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

export default router