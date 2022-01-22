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
exports.ShowStudentController = void 0;
const ShowStudentService_1 = require("../../services/Student/ShowStudentService");
class ShowStudentController {
    show(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const showStudentService = new ShowStudentService_1.ShowStudentService();
            const students = yield showStudentService.findAll();
            return response.status(200).json(students);
        });
    }
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const showStudentService = new ShowStudentService_1.ShowStudentService();
            const student = yield showStudentService.findOne(Number(id));
            return response.status(200).json(student);
        });
    }
}
exports.ShowStudentController = ShowStudentController;
//# sourceMappingURL=ShowStudentController.js.map