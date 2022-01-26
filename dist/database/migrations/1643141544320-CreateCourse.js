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
exports.CreateCourse1643141544320 = void 0;
const typeorm_1 = require("typeorm");
class CreateCourse1643141544320 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: "courses",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isGenerated: true,
                        generationStrategy: "increment",
                        isPrimary: true,
                    },
                    {
                        name: "course",
                        type: "varchar",
                        length: "50",
                        isNullable: false,
                    },
                ],
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            queryRunner.dropTable("courses");
        });
    }
}
exports.CreateCourse1643141544320 = CreateCourse1643141544320;
//# sourceMappingURL=1643141544320-CreateCourse.js.map