import { Router } from "express";
import adminMiddleware from "../middleware/admin.js"
const router = Router();
import { Admin, User, Course } from "../db/db.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic

    try {
        const username = req.body.username;
        const password = req.body.password;

        const checkUserExistance = await Admin.findOne({ username: username, password: password })

        if (checkUserExistance) {
            return res.status(403).json({
                msg: "Admin User Already Existed"
            })
        }

        await Admin.create({
            username,
            password
        })

        return res.status(200).json({ msg: "Admin Signup successful" })

    } catch (error) {
        console.log(error);
        return res.status(200).json({ msg: "Admin Signup unsuccessful" })

    }

});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const jwtSecretKey = process.env.JWT_SECRET_KEY;
    // check if this user exists in the database

    try {
        const checkUserExistance = await Admin.findOne({ username: username, password: password })

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

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.desciption;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    // Use Zod to validate the user response in the prooject based scenario


    try {
        const newCourse = new Course({
            // we have to map the mongoose ke model ki value with the user input...
            title: title,
            description,
            imageLink,
            price

        })
        await newCourse.save()

        return res.status(200).json({
            msg: "Course created successfully", courseId: newCourse._id
        })
    } catch (error) {
        return res.status(200).json({
            msg: "Error while creating the course"
        })

    }


});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

export default router;