const express = require("express");
const { registerAdmin, loginAdmin } = require("../middleware/adminAuth");
const { adminProfile, AlladminProfile, adminProfileDelete, adminProfileUpdate, addManager, getAllManager, deleteManager, updateManager, getManager, getAllEmployees } = require("../controllers/admin.controller");
const upload = require("../middleware/multer");
const { verify } = require("../middleware/verify");
const routes = express.Router();

routes.post("/register", upload.single("image"), registerAdmin);
routes.post("/login", loginAdmin);

routes.get("/AlladminProfile", AlladminProfile);
routes.get("/profile/:id", verify("admin"), adminProfile);
routes.put("/updateProfile/:id", verify("admin"), adminProfileUpdate);
routes.delete("/deleteProfile/:id", verify("admin"), adminProfileDelete);

routes.post("/managers", upload.single("image"), verify("admin"), addManager);
routes.get("/managerss", verify("admin"), getAllManager);
routes.get("/managers/:id", verify("admin"), getManager);
routes.put("/UpdateManager/:id", verify("admin"), updateManager);
routes.delete("/DeleteManager/:id", verify("admin"), deleteManager);

routes.get("/employees", getAllEmployees)
module.exports = routes