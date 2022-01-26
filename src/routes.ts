import { Router } from "express";
import { middlewareAuth } from "./middlewares/auth";

import * as Controller from "./controllers";

const routes = Router();

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

routes.get("/students", middlewareAuth, showStudent.show);
routes.post("/students", middlewareAuth, createStudent.handle);
routes.get("/students/:id", middlewareAuth, showStudent.index);
routes.delete("/students/:id", middlewareAuth, deleteStudent.delete);
routes.put("/students/:id", middlewareAuth, updateStudent.edit);

routes.post("/courses", middlewareAuth, createCourse.handle);
routes.get("/courses", middlewareAuth, showCourse.show);

routes.post("/users", createUser.handle, createMail.handle);
routes.get("/active-mail/:email", activateUser.mail);

routes.post("/sessions", createSession.store);
routes.get("/check-session", middlewareAuth, checkSession.check);

export { routes };
