import { wall, objMessage } from './calculatorPaintRoom.interfaces'
const WINDOWS_WIDTH = 2
const WINDOWS_HEIGHT = 1.2
const DOOR_WIDTH = 0.8
const DOOR_HEIGHT = 1.9
const MAX_DOOR_HEIGHT = 2.2
const ARRAY_SIZE_GALLON: Array<number> = [18, 3.6, 2.5, 0.5]
const MAX_AREA_WALL = 15
const MIN_AREA_WALL = 1
const LITERS_PER_METER = 5

export default class calculatorPaintRoom {

    static calcWindowArea() {
        return WINDOWS_WIDTH * WINDOWS_HEIGHT
    }

    static calcDoorArea() {
        return DOOR_WIDTH * DOOR_HEIGHT
    }

    static calcWallArea(wall: wall) {
        return wall.widthWall * wall.wallHeight
    }
    
    static calcLimiteAreaWall(wall: wall) {
        const infoRoom: objMessage = { wall: wall, error: false, 'message': [], totalMeters: 0 }
        const totalMetersDoor = wall.quantityDoor * this.calcDoorArea()
        const totalMetersWindows = wall.quantityWindow * this.calcWindowArea()
        const totalMetersWall = this.calcWallArea(wall)
        const metersWallPercentage = ((totalMetersDoor + totalMetersWindows) * 100) / totalMetersWall
        const totalMetersRoom = totalMetersWall - (totalMetersDoor + totalMetersWindows)

        if (this.calcWallArea(wall) > MAX_AREA_WALL || this.calcWallArea(wall) < MIN_AREA_WALL) {
            infoRoom.error = true
            infoRoom.message.push("Nenhuma parede pode ter menos de 1 metro quadrado nem mais de 15 metros quadrados")
        }
        if (wall.quantityDoor > 0 && wall.wallHeight < MAX_DOOR_HEIGHT) {
            infoRoom.error = true
            infoRoom.message.push("A altura das paredes deve ser no minimo 30cm maior que a altura da porta.")
        }
        if (metersWallPercentage > 50) {
            infoRoom.error = true
            infoRoom.message.push("O total de área das portas e janelas deve ser no máximo 50% da área de parede.")
        }
        infoRoom.totalMeters = totalMetersRoom
        return infoRoom
    }

    static quantityGallons(totalLiters: number) {
        totalLiters = totalLiters / LITERS_PER_METER
        let i = 0
        const objGallons = ARRAY_SIZE_GALLON.map((item) => {
            return { 'gallonLiter': item, quantity: 0 }
        })
        while (totalLiters > 0) {
            if (objGallons[i].gallonLiter <= totalLiters) {
                totalLiters -= ARRAY_SIZE_GALLON[i]
                objGallons[i].quantity += 1
            }
            else if (i < objGallons.length - 1) i++
            else {
                objGallons[i].quantity += 1
                break
            }
        }
        return objGallons
    }
}

