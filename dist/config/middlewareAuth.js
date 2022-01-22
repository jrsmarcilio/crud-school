"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewareAuth = void 0;
const middlewareAuth = (request, response, next) => request.isAuthenticated()
    ? next()
    : response.status(301).redirect("http://localhost:3000/");
exports.middlewareAuth = middlewareAuth;
//# sourceMappingURL=middlewareAuth.js.map