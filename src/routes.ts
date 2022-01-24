import { Router } from "express";
import { middlewareAuth } from "./middlewares/auth";

import {
  CreateStudentController,
  DeleteStudentController,
  ShowStudentController,
  UpdateStudentController,
  CreateUserController,
  CreateMailController,
  ActivateUserController,
  CreateSessionController,
} from "./controllers";

const routes = Router();

const createStudentController = new CreateStudentController();
const deleteStudentController = new DeleteStudentController();
const showStudentController = new ShowStudentController();
const updateStudentController = new UpdateStudentController();
const createUserController = new CreateUserController();
const createMailController = new CreateMailController();
const activateUserController = new ActivateUserController();
const createSessionController = new CreateSessionController();

routes.get("/students", middlewareAuth, showStudentController.show);
routes.post("/students", middlewareAuth, createStudentController.handle);
routes.get("/students/:id", middlewareAuth, showStudentController.index);
routes.delete("/students/:id", middlewareAuth, deleteStudentController.delete);
routes.put("/students/:id", middlewareAuth, updateStudentController.edit);

routes.post("/users", createUserController.handle, createMailController.handle);
routes.get("/active-mail/:email", activateUserController.mail);

routes.post("/sessions", createSessionController.store);

export { routes };
