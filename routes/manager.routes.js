const express = require("express");
const { login } = require("../middleware/managerAuth");
const upload = require("../middleware/multer");
const { managerProfile, managerProfileUpdate, addEmployee, deleteEmployee, getAllEmployee, updateEmployee } = require("../controllers/manager.controller");
const { verify } = require("../middleware/verify");

const routes = express.Router();

routes.post("/login", login);

routes.get("/profile", verify("manager"), managerProfile);

routes.put("/profileUpdate", verify("manager"), managerProfileUpdate);

routes.get("/employees", verify("manager"), getAllEmployee);
routes.post("/employee", upload.single("image"), verify("manager"), addEmployee);
routes.put("/updateEmployee/:id", verify("manager"), updateEmployee);
routes.delete("/deleteEmployee/:id", verify("manager"), deleteEmployee);

module.exports = routes;