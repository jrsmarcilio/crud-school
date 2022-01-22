"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressAssyncErrorsConfig = void 0;
const ExpressAssyncErrorsConfig = (err, request, response, next) => {
    if (err instanceof Error)
        return response.status(400).json({ error: err.message });
    return response
        .status(500)
        .json({ status: "error", message: "Internal Server Error" });
};
exports.ExpressAssyncErrorsConfig = ExpressAssyncErrorsConfig;
//# sourceMappingURL=expressAssyncErrorsConfig.js.map