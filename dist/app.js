"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongomiddleware_1 = __importDefault(require("./middleware/mongomiddleware"));
require("dotenv/config");
const mainRouter_1 = __importDefault(require("./router/mainRouter"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const yaml_1 = __importDefault(require("yaml"));
const fs = __importStar(require("node:fs"));
const OpenApiValidator = __importStar(require("express-openapi-validator"));
const port = process.env.PORT;
const app = (0, express_1.default)();
app.use(express_1.default.json());
const openAPIDoc = './doc/swagger.yaml';
const file = fs.readFileSync(openAPIDoc, 'utf-8');
const swaggerDoc = yaml_1.default.parse(file);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDoc));
app.use(OpenApiValidator.middleware({
    apiSpec: openAPIDoc,
    validateRequests: true,
}));
app.use(mongomiddleware_1.default);
app.use(mainRouter_1.default);
app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});
