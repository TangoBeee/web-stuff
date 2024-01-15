const { Router } = require("express");

const Auth = require("../controllers/Auth.controller")
const OTP = require("../controllers/OTP.controller")
const Session = require("../controllers/Session.controller")
const User = require("../controllers/User.controller")

const router = Router();

// POST Method
router.route("/register").post(Auth.register); // For signup
router.route("/login").post(Auth.login); // For login
router.route("/welcomeMail").post(Auth.welcomeMail); // Sending welcome email
router.route("/userAuthentication").post(User.userAuthenticate); // Checking user existence

// GET Method
router.route("/user/:username").get(User.getUser); // Getting user data by it's username
router.route("/generateOTP").get(OTP.generateOTP); // Generating OTP for password reset
router.route("/verifyOTP").get(OTP.verifyOTP); // Verifying the password reset OTP
router.route("/createResetSession").get(Session.resetSession); // reseting the current sessions from the client side (browser)

// PUT Method
router.route("/updateUser").put(User.updateUser); // Updating whole user profile
router.route("/resetPassword").put(Auth.resetPassword); // Reseting the password

module.exports = router;
