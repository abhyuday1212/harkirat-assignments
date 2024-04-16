import { Router } from "express";
import { Admin, Course } from "../db/db.js"
import adminMiddleware from "../middleware/admin.js";

// -----------------------------
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    // Check if the user already exists

    const checkUserExistance = await Admin.findOne({ username: username, password: password })

    if (checkUserExistance) {
        return res.status(403).json({
            msg: "Admin User Already Existed"
        })
    }

    try {
        await Admin.create({
            username: username,
            password: password
        });

        return res.status(200).json({
            msg: "Admin created successfully"
        });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({
            msg: "Failed to create admin"
        });
    }


});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.desciption;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    // Use Zod to validate the user response in the prooject based scenario


    try {
        const newCourse = await Course.create({
            // we have to map the mongoose ke model ki value with the user input...
            title: title,
            description,
            imageLink,
            price

        })

        return res.status(200).json({
            msg: "Course created successfully", courseId: newCourse._id
        })
    } catch (error) {


    }


});

router.get('/getcourses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({})
    res.json({
        msg: "These are the courses",
        courses: response
    })
});

export default router;