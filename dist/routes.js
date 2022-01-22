"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const middlewareAuth_1 = require("./config/middlewareAuth");
const controllers_1 = require("./controllers");
const routes = (0, express_1.Router)();
exports.routes = routes;
const createStudentController = new controllers_1.CreateStudentController();
const deleteStudentController = new controllers_1.DeleteStudentController();
const showStudentController = new controllers_1.ShowStudentController();
const updateStudentController = new controllers_1.UpdateStudentController();
const createUserController = new controllers_1.CreateUserController();
const createMailController = new controllers_1.CreateMailController();
const activateUserController = new controllers_1.ActivateUserController();
routes.get("/students", middlewareAuth_1.middlewareAuth, showStudentController.show);
routes.post("/students", middlewareAuth_1.middlewareAuth, createStudentController.handle);
routes.get("/students/:id", middlewareAuth_1.middlewareAuth, showStudentController.index);
routes.delete("/students/:id", middlewareAuth_1.middlewareAuth, deleteStudentController.delete);
routes.put("/students/:id", middlewareAuth_1.middlewareAuth, updateStudentController.edit);
routes.post("/users", createUserController.handle, createMailController.handle);
routes.get("/active-mail/:email", activateUserController.mail);
routes.post("/login", passport_1.default.authenticate("local", {
    successRedirect: "http://localhost:3000/students",
}));
//# sourceMappingURL=routes.js.map