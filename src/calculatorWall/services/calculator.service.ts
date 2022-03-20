import calculatorPaintRoom from '../utils/calculatorPaintRoom/calculatorPaintRoom'
import { wall, objMessage } from '../utils/calculatorPaintRoom/calculatorPaintRoom.interfaces'

class CalculatorService {
    async calcWall(room: wall[]) {
        const objInfo = room.map((element: wall) => calculatorPaintRoom.calcLimiteAreaWall(element));
        return objInfo
    }
    
    async calcGallon(info: objMessage[]) {
        const resp = info.reduce((acc, item) => {
            acc = acc + item.totalMeters
            return acc
        }, 0)

        const total = calculatorPaintRoom.quantityGallons(resp)
        return total
    }
}

export default new CalculatorService();