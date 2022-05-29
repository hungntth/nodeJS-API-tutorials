const User = require("./../Models/User")
const bcrypt = require("bcrypt")


// UPDATE USER
const updateUser = async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
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
    if (req.body.userId === req.params.id || req.body.isAdmin) {
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

//follow a user
const followUser = async (req, res) => {
    if (req.body.userId != req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId } });
                await currentUser.updateOne({ $push: { followings: req.params.id } });
                res.status(200).json("user has been followed");
            } else {
                res.status(403).json("you allready follow this user");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        return res.status.json("You cant follow yourself")
    }
}

//unfollow

const unfollowUser = (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: req.body.userId } });
                await currentUser.updateOne({ $pull: { followings: req.params.id } });
                res.status(200).json("user has been unfollowed");
            } else {
                res.status(403).json("you dont follow this user");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("you cant unfollow yourself");
    }
}

module.exports = { updateUser, deleteUser, getUserByID, followUser, unfollowUser }