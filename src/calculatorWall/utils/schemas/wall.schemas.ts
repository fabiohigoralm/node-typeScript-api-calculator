import Joi from 'joi';

const message_validador = {
    "number.base": "A chave {#key} deve ser um numero",
    "any.required": "Os objetos devem conter a chave {#key}."
}

export const wallSchema = Joi.object({
    widthWall: Joi.number().required(),
    wallHeight: Joi.number().required(),
    quantityDoor: Joi.number().required(),
    quantityWindow: Joi.number().required(),

}).messages(message_validador);
export const arrayWallSchema = Joi.array().items(wallSchema).min(4).required().messages({
    "array.base": "O campo da requisição deve conter um array.",
    "array.min": "O array deve conter 4 objetos.",
})

