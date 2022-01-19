import { Router } from "express";
import {
  CreateStudentController,
  DeleteStudentController,
  ShowStudentController,
  UpdateStudentController,
  CreateUserController
} from "./controllers";

const routes = Router();

const createStudentController = new CreateStudentController();
const deleteStudentController = new DeleteStudentController();
const showStudentController = new ShowStudentController();
const updateStudentController = new UpdateStudentController();
const createUserController = new CreateUserController();

routes.get("/students", showStudentController.show);
routes.post("/students", createStudentController.handle);
routes.get("/students/:id", showStudentController.index);
routes.delete("/students/:id", deleteStudentController.delete);
routes.put("/students/:id", updateStudentController.edit);

routes.post("/users", createUserController.handle);

export { routes };
