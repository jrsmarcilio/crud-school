"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Courses = void 0;
const typeorm_1 = require("typeorm");
const Student_1 = require("./Student");
const Users_1 = require("./Users");
let Courses = class Courses {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], Courses.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, length: 50 }),
    __metadata("design:type", String)
], Courses.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Student_1.Student, (student) => student.user),
    __metadata("design:type", Array)
], Courses.prototype, "students", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, users => users.students),
    __metadata("design:type", Users_1.Users)
], Courses.prototype, "user", void 0);
Courses = __decorate([
    (0, typeorm_1.Entity)({ name: "courses" })
], Courses);
exports.Courses = Courses;
//# sourceMappingURL=Courses.js.map