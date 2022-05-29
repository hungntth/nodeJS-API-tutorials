const express = require("express");
const router = express.Router();
const user = require("./../App/Controllers/User")

// Update User
router.put("/:id", user.updateUser)
router.delete("/:id", user.deleteUser)
router.get("/:id", user.getUserByID)
router.put("/:id/follow", user.followUser)
router.put("/:id/unfollow", user.unfollowUser)

module.exports = router