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
exports.UpdateStudentController = void 0;
const UpdateStudentService_1 = require("../../services/Student/UpdateStudentService");
class UpdateStudentController {
    edit(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, course } = request.body;
            const { id } = request.params;
            const { userId } = request;
            const updatedStudentService = new UpdateStudentService_1.UpdateStudentService();
            yield updatedStudentService.updated({
                id: Number(id),
                userId,
                name,
                email,
                course,
            });
            return response
                .status(200)
                .json({ message: "Student updated successfully." });
        });
    }
}
exports.UpdateStudentController = UpdateStudentController;
//# sourceMappingURL=UpdateStudentController.js.map