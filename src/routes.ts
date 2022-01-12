import { Router } from "express";
import {
  CreateStudentController,
  DeleteStudentController,
  ShowStudentController,
  UpdateStudentController,
} from "./controllers";

const routes = Router();

const createStudentController = new CreateStudentController();
const deleteStudentController = new DeleteStudentController();
const showStudentController = new ShowStudentController();
const updateStudentController = new UpdateStudentController();

routes.get("/students", showStudentController.show);
routes.post("/students", createStudentController.handle);
routes.get("/students/:id", showStudentController.index);
routes.delete("/students/:id", deleteStudentController.delete);
routes.put("/students/:id", updateStudentController.edit);

export { routes };
