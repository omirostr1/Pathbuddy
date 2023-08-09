const { authJwt } = require("../middleware");
const controller = require("../controllers/userController");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/all", controller.allAccess);

  app.get(
    "/api/user",
     [authJwt.verifyToken, authJwt.isUser],
     controller.userBoard
  );

  app.get(
    "/api/admin",
     [authJwt.verifyToken, authJwt.isAdmin],
     controller.adminBoard
  );
};
