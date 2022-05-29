const User = require("./../Models/User")
const bcrypt = require("bcrypt")

//REGISTER
const Register = async (req, res) => {
    try {

        // Hash Password
        const hash = bcrypt.hashSync(req.body.password, 10);

        // CREATE NEW ACCOUNT
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        })
        // SAVE NEW ACCOUNT AND RES
        const user = await newUser.save();
        res.status(200).json(user);

    } catch (error) {
        res.json(error)
    }
}


//LOGIN

const Login = async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.body.username
        });
        if (!user) return res.status(404).json("User not found")
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) return res.status(400).json("Wrong password")
        return res.status(200).json({ username: user.username, email: user.email })
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { Register, Login }