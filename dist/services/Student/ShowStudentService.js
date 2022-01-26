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
exports.ShowStudentService = void 0;
const typeorm_1 = require("typeorm");
const StudentRepositories_1 = require("../../repositories/StudentRepositories");
class ShowStudentService {
    findAll(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const studentRepository = (0, typeorm_1.getCustomRepository)(StudentRepositories_1.StudentRepositories);
            const students = yield studentRepository.find({
                where: { user: { id: idUser } },
            });
            if (!students)
                throw new Error("Students not found");
            return students;
        });
    }
    findOne(idStudent, idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const studentRepository = (0, typeorm_1.getCustomRepository)(StudentRepositories_1.StudentRepositories);
            const student = yield studentRepository.findOne({
                where: { id: idStudent, user: { id: idUser } },
            });
            if (!student)
                throw new Error("Student not found");
            return student;
        });
    }
}
exports.ShowStudentService = ShowStudentService;
//# sourceMappingURL=ShowStudentService.js.map