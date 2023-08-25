"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongomiddleware_1 = __importDefault(require("./middleware/mongomiddleware"));
require("dotenv/config");
const mainRouter_1 = __importDefault(require("./router/mainRouter"));
// import swaggerUi from 'swagger-ui-express';
// import yaml from 'yaml';
// import * as fs from 'node:fs';
// import { OpenApiValidator } from 'express-openapi-validator/dist/openapi.validator';
const port = process.env.PORT;
const app = (0, express_1.default)();
app.use(express_1.default.json());
// const openAPIDoc = './doc/swagger.yaml'
// const file = fs.readFileSync(openAPIDoc, 'utf-8')
// const swaggerDoc = yaml.parse(file)
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
// app.use(OpenApiValidator.middleware({
//   apiSpec: openAPIDoc,
//   validateRequests: true,
// }))
app.use(mongomiddleware_1.default);
app.use(mainRouter_1.default);
app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});
