const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/register").post(userController.register);
router.route("/login").post(userController.login);
router.route("/:id").post(userController.findById);
router.route("/friendRequest/:username").post(userController.findFriendRequest);
router.route("/acceptFriendRequest/:username").post(userController.acceptFriendRequest);
router.route("/declineFriendRequest/:username").post(userController.declineFriendRequest);
router.route("/getFriends/:username").post(userController.getFriends);
router.route("/getFriendsPantheon/:username").post(userController.getFriendsPantheon);
router.route("/addFriend/:username").post(userController.addFriend);
router.route("/pantheonInteractions/:username").post(userController.pantheonInteractions);
router.route("/pantheon/:id").post(userController.acceptPantheon);
router.route("/pantheonDeclined/:id").post(userController.declinePantheon);


// router.route("/review/:userId").post(userController.saveReview);
// router.route("/mediaReview/:spotifyId").post(userController.getReview);




module.exports = router;
