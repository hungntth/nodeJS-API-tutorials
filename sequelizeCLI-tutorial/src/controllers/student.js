const db = require('../models/index')
// REGISTER STUDENT

const register = async (req, res) => {
    const checkAccountExists = await db.Student.findOne({ where: { email: req.body.email } });
    if (checkAccountExists) {
        return res.status(400).json("Email already exists");
    } else {
        await db.Student.create({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            rollNo: req.body.rollNo,
        })
        return res.json({
            name: req.body.name,
            email: req.body.email,
        })
    }
}

//LOGIN STUDENT

const login = async (req, res) => {
    const checkAccountExists = await db.Student.findOne({ where: { email: req.body.email } });
    if (!checkAccountExists) return res.status(400).json("Email wrong!")

    if (req.body.password !== checkAccountExists.password) return res.status(401).json("Password wrong!")

    return res.status(200).json("login succes!")

}

module.exports = { register, login }