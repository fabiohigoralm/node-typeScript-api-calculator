import { CommonRoutesConfig } from '../../comnon/comnon.routes.config';
import CalculatorController from '../controllers/calculator.controller'
import express from 'express';
import UsersMiddleware from '../middlewares/validator/calculator.middleware'

export class CalculatorRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'CalculatorRoutes');
    }

    configureRoutes() {
        this.app.route(`/calculadora`)
            .post(UsersMiddleware.validateBody,
                UsersMiddleware.validateCalculator
                , CalculatorController.calcController)
        return this.app;
    }
}
