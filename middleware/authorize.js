const authorize = (role) => {
  return (req, res, next) => {
    if (req.user && req.user.role === role) {
      next(); // Role matches, grant access
    } else {
      res.status(403).json({ message: "Access denied" });
    }
  };
};
module.exports = authorize;
