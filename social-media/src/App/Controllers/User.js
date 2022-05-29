const User = require("./../Models/User")
const bcrypt = require("bcrypt")


// UPDATE USER
const updateUser = async (req, res) => {
    if (req.body.userId === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            try {
                req.body.password = bcrypt.hashSync(req.body.password, 10);
            }
            catch (err) {
                return res.status(500).json(err)
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body })
            return res.status(200).json(`Account ${user.username} has been updated`)
        } catch (error) {
            return res.json(error)


        }
    } else {
        return res.status(403).json("You can update only your account!")
    }
}

// DELETE USER

const deleteUser = async (req, res) => {
    if (req.body.userId === req.params.id || req.user.isAdmin) {
        try {
            const user = await User.findByIdAndDelete(req.params.id)
            return res.status(200).json(`Account ${user.username} has been deleted`)
        } catch (error) {
            return res.json(error)


        }
    } else {
        return res.status(403).json("You can update only your account!")
    }
}

// get a user

const getUserByID = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, updatedAt, ...other } = user._doc
        res.status(200).json(other)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { updateUser, deleteUser, getUserByID }