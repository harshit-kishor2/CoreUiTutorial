const cookieParser = require("cookie-parser");
const csurf = require("csurf");

const appRouter = require("./appRouter");
const webRouter = require("./webRouter");

const routes = (app) => {
  /**
   * ==============================
   * CSRF Protection
   * ==============================
   */
  const csurfProtection = csurf({
    cookie: true,
  });

  /**
   * ==============================
   * Web Routes
   * ==============================
   */
  app.use("/api/web", cookieParser(), csurfProtection, webRouter);

  /**
   * ==============================
   *  App Routes
   * ==============================
   */
  app.use("/api/app", appRouter);
};

module.exports = routes;
