const router = require("express").Router();

router.use("/api", [
  require("./photo")
]);

module.exports = () => {
  return router;
}