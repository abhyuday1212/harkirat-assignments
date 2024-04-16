import { Admin  } from "../db/db.js"

// Middleware for handling auth
async function adminMiddleware(req, res, next) {

    const username = req.headers.username;
    const password = req.headers.password;

    const checkAdminUser = await Admin.findOne({
        username: username,
        password: password
    })

    if (checkAdminUser) {
        next();

    }
    else {
        return res.status(403).json({
            msg: "Admin User does not exists"
        })
    }
}

export default adminMiddleware