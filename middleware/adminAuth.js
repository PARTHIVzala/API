const Admin = require("../model/admin")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.registerAdmin = async (req, res) => {
    try {
        const { email, password } = req.body
        const img = req.file ? req.file.filename : null;

        const isAdminExists = await Admin.findOne({ email: req.body.email });
        if (isAdminExists) {
            return res.json({
                message: "User is Exists"
            })
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const AdminBase = await Admin.create({
            ...req.body,
            password: hashedPassword,
            image: img
        })

        res.json({
            message: "Admin Register Succesful",
            admin: {
                _id: AdminBase.id,
                firstname: AdminBase.firstname,
                lastname: AdminBase.lastname,
                email: AdminBase.email,
                role: AdminBase.role,
                postion: AdminBase.position      
            }
        })
    } catch (error) {
        console.log(error);
    }
};
exports.loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body
        const admin = await Admin.findOne({ email });

        if (!admin) {
            return res.json({
                message: "User Not Found "
            })
        }
        const isPasswordValid = await bcrypt.compare(password, admin.password)

        if (!isPasswordValid) {
            return res.json({
                message: "Invalid password"
            })
        }
        const token = jwt.sign({
            id: admin._id,
            firstname: admin.firstname,
            postion: admin.position,
            email: admin.email,
            role: admin.role,
        }, "PARTHIV1710");

        res.cookie("cookie", token);
        res.json({
            message: "Admin Succesfully Login",
            admin: {
                _id: admin.id,
                email: admin.email,
                password: admin.password
            }
        })
    } catch (error) {
        console.log(error);
    }
}