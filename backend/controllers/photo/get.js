const router = require("express").Router();
const { photo } = require("../../models");

router.get("/photos/:pageNr", async (req, res) => {
  res.json({
    photos: await photo.getPhotosByPage(req.params)
  });
});

module.exports = router;