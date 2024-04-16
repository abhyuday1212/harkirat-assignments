import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

const URL = process.env.DB_URI

// Connect to MongoDB

const connectDB = async () => {
    const connection = await mongoose.connect(URL);
    console.log("Conneccted to main database successfully");
}

connectDB()

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
})

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageLink: String,
    price: Number
});

// Variable_name = mongoose.model("Collection_Name",Schema_Name)
// export the variable

const Admin = mongoose.model("Admin", AdminSchema)
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

export { Admin, User, Course };