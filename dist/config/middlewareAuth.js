"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewareAuth = void 0;
const middlewareAuth = (request, response, next) => request.isAuthenticated()
    ? next()
    : response.redirect("https://next-school.vercel.app/");
exports.middlewareAuth = middlewareAuth;
//# sourceMappingURL=middlewareAuth.js.map