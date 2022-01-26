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
exports.CreateCourse = void 0;
const CreateUserService_1 = require("../../services/Course/CreateUserService");
class CreateCourse {
    handle(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = request.body;
            const { userId } = request;
            const createCourseService = new CreateUserService_1.CreateCourseService();
            const course = yield createCourseService.execute({ name, userId });
            return response.json(course);
        });
    }
}
exports.CreateCourse = CreateCourse;
//# sourceMappingURL=CreateCourse.js.map