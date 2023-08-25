import express, {Request, Response, NextFunction} from 'express';
import mongoMiddleware from './middleware/mongomiddleware'
import 'dotenv/config'
import router from './router/mainRouter';
// import swaggerUi from 'swagger-ui-express';
// import yaml from 'yaml';
// import * as fs from 'node:fs';
// import { OpenApiValidator } from 'express-openapi-validator/dist/openapi.validator';

const port = process.env.PORT;
const app = express()

app.use(express.json())

// const openAPIDoc = './doc/swagger.yaml'
// const file = fs.readFileSync(openAPIDoc, 'utf-8')
// const swaggerDoc = yaml.parse(file)


// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// app.use(OpenApiValidator.middleware({
//   apiSpec: openAPIDoc,
//   validateRequests: true,
// }))

app.use(mongoMiddleware)
app.use(router)

app.listen(port, () => {
  console.log(`Server is running on port:${port}`)
})