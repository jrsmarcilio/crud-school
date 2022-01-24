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
exports.DeleteStudentService = void 0;
const typeorm_1 = require("typeorm");
const StudentRepositories_1 = require("../../repositories/StudentRepositories");
class DeleteStudentService {
    exclude(id, idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const studentRepository = (0, typeorm_1.getCustomRepository)(StudentRepositories_1.StudentRepositories);
            if (!id)
                throw new Error("Id incorrect");
            const student = yield studentRepository.findOne({
                where: {
                    id: id,
                    user: {
                        id: idUser,
                    },
                },
            });
            if (!student)
                throw new Error("Student not found");
            return yield studentRepository.remove(student);
        });
    }
}
exports.DeleteStudentService = DeleteStudentService;
//# sourceMappingURL=DeleteStudentService.js.map