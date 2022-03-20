import express from 'express';
import { CommonRoutesConfig } from '../src/comnon/comnon.routes.config';
import { CalculatorRoutes } from './calculatorWall/routes/calculator.routes.config';
import 'dotenv/config'

const app: express.Application = express();

app.use(express.json());
const routes: Array<CommonRoutesConfig> = [];

routes.push(new CalculatorRoutes(app));

app.listen(process.env.PORT || 3000 , () => {
    console.log(`Server on http://localhost:${process.env.PORT}`)
});