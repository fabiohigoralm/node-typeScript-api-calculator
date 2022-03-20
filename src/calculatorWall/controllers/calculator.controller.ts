'use strict'
import express from 'express';
import calculatorService from '../services/calculator.service';
const OK = 200


class CalculatorController {
    async calcController(req: express.Request, res: express.Response) {
        const resp = await calculatorService.calcGallon(res.locals.objInfo)
        return res.status(OK).json(resp);
    }
}
export default new CalculatorController();