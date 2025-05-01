const jwt = require("jsonwebtoken");

module.exports.genrateToken = function (user) {
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};