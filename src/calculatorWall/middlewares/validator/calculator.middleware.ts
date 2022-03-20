import express from "express";
import { arrayWallSchema } from "../../utils/schemas/wall.schemas";
import { objMessage, messageError } from "../../utils/calculatorPaintRoom/calculatorPaintRoom.interfaces";
import CalculatorService from '../../services/calculator.service'
const BAD_REQUEST = 400

class UsersMiddleware {
    async validateBody(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const { error } = await arrayWallSchema.validate(req.body);
        if (error) res.status(BAD_REQUEST).json({"Error":error.details[0].message});
        else next();
    }
    async validateCalculator(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const { body } = req;
        const objInfo = await CalculatorService.calcWall(body)
        const errorFind = objInfo.filter((element: objMessage) => element['error'] === true);
        const message: messageError[] = []
        errorFind.forEach((item, index) => message.push({ [`Wall${index + 1}`]: item.message }))
        if (errorFind.length != 0) res.status(BAD_REQUEST).json({ Errors: message });
        else {
            res.locals.objInfo = objInfo
            next()
        }
    }
}

export default new UsersMiddleware();
