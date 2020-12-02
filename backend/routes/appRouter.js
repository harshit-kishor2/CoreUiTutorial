const express = require("express");
const { testController } = require("../controller/testController");
const appRouter = express.Router();

/*
appRouter.get("/csrf-token", (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

webRouter
  .route("/admin-login")
  .post(logParams, loginValidation, adminUserLogin);

  */

appRouter
  .route("/test")
  .get((req, res) => res.json({ message: "Welcome to test page" }))
  .post(testController);

module.exports = appRouter;
