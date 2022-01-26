"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const auth_1 = require("./middlewares/auth");
const Controller = __importStar(require("./controllers"));
const routes = (0, express_1.Router)();
exports.routes = routes;
const createStudent = new Controller.CreateStudent();
const deleteStudent = new Controller.DeleteStudent();
const showStudent = new Controller.ShowStudent();
const updateStudent = new Controller.UpdateStudent();
const createUser = new Controller.CreateUser();
const createMail = new Controller.CreateMail();
const activateUser = new Controller.ActivateUser();
const createSession = new Controller.CreateSession();
const createCourse = new Controller.CreateCourse();
const showCourse = new Controller.ShowCourse();
const checkSession = new Controller.CheckSession();
routes.get("/students", auth_1.middlewareAuth, showStudent.show);
routes.post("/students", auth_1.middlewareAuth, createStudent.handle);
routes.get("/students/:id", auth_1.middlewareAuth, showStudent.index);
routes.delete("/students/:id", auth_1.middlewareAuth, deleteStudent.delete);
routes.put("/students/:id", auth_1.middlewareAuth, updateStudent.edit);
routes.post("/courses", auth_1.middlewareAuth, createCourse.handle);
routes.get("/courses", auth_1.middlewareAuth, showCourse.show);
routes.post("/users", createUser.handle, createMail.handle);
routes.get("/active-mail/:email", activateUser.mail);
routes.post("/sessions", createSession.store);
routes.get("/check-session", auth_1.middlewareAuth, checkSession.check);
//# sourceMappingURL=routes.js.map