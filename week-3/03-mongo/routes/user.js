import userMiddleware from "../middleware/user.js"
import { User, Course } from "../db/db.js";
import { Router } from "express";
const router = Router();

// User Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username,
        password
    })

    res.status(200).json({ msg: "User created successfully" })

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({})
    res.json({
        msg: "These are the courses",
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const username = req.headers.username;
    const courseId = req.params.courseId;


    await User.updateOne({
        username: username
    },
        {
            "$push": {
                purchasedCourses: courseId
            }
        }
    )

    return res.json({ msg: "Purchased Complete" })
});

router.get('/purchasedcourses', userMiddleware, async (req, res) => {

     const user = await User.findOne({
        username: req.headers.username
     });
    

    const courses = await Course.find({
        _id: {
            "$in":user.purchasedCourses
        }
    })

    res.json({
        courses: courses
    })

});

export default router