"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteStudentController = void 0;
const DeleteStudentService_1 = require("../../services/Student/DeleteStudentService");
class DeleteStudentController {
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(request.params.id);
            const { userId } = request;
            const deleteStudentService = new DeleteStudentService_1.DeleteStudentService();
            yield deleteStudentService.exclude(id, userId);
            return response
                .status(200)
                .json({ message: "Student deleted successfully." });
        });
    }
}
exports.DeleteStudentController = DeleteStudentController;
//# sourceMappingURL=DeleteStudentController.js.map