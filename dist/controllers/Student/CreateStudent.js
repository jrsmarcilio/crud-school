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
exports.CreateStudent = void 0;
const CreateStudentService_1 = require("../../services/Student/CreateStudentService");
class CreateStudent {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, course, gender, register } = request.body;
            const { userId } = request;
            const createStudentService = new CreateStudentService_1.CreateStudentService();
            const student = yield createStudentService.execute({
                name,
                gender,
                register,
                email,
                course,
                userId,
            });
            return response.json(student);
        });
    }
}
exports.CreateStudent = CreateStudent;
//# sourceMappingURL=CreateStudent.js.map