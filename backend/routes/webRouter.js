const express = require("express");
const webRouter = express.Router();

/*
webRouter.get("/csrf-token", (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

webRouter
  .route("/admin-login")
  .post(logParams, loginValidation, adminUserLogin);

  */

module.exports = webRouter;
