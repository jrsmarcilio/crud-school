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
exports.UpdateStudentService = void 0;
const typeorm_1 = require("typeorm");
const StudentRepositories_1 = require("../../repositories/StudentRepositories");
class UpdateStudentService {
    updated({ id, userId, name, email, course }) {
        return __awaiter(this, void 0, void 0, function* () {
            const studentRepository = (0, typeorm_1.getCustomRepository)(StudentRepositories_1.StudentRepositories);
            const studentAlreadExists = yield studentRepository.findOne({
                id,
                user: { id: userId },
            });
            if (!studentAlreadExists)
                throw new Error("Student not found");
            return yield studentRepository.update({ id }, {
                email: email || studentAlreadExists.email,
                name: name || studentAlreadExists.name,
                course: course || studentAlreadExists.course,
            });
        });
    }
}
exports.UpdateStudentService = UpdateStudentService;
//# sourceMappingURL=UpdateStudentService.js.map