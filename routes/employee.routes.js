const express = require("express");
const { login } = require("../middleware/employeeAuth");
const { profile ,employeeProfileUpdate,AllEmployee} = require("../controllers/employee.controller");
const { verify } = require("../middleware/verify");
const routes = express.Router();

routes.post("/login",login)
routes.get("/AllEmployee",verify("employee"),AllEmployee)
routes.get("/profile",verify("employee"),profile)
routes.put("/profileUpdate",verify("employee"),employeeProfileUpdate)
module.exports = routes;