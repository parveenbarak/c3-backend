const jwt = require("jsonwebtoken");
require("dotenv").config();

const roleBasedAccess = (roles) => {
  return async (req, res, next) => {
    const token = req.headers.token;
    if (!token) {
      return res.status(401).send("Token is missing. Unauthorized access.");
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = decoded;
      if (!roles.includes(decoded.role)) {
        return res.status(403).send("Forbidden: You don't have the necessary permissions.");
      }
      next();
    } catch (e) {
      console.error("Error", e);
      res.status(500).send("Internal Server Error");
    }
  };
};

module.exports = { roleBasedAccess };
