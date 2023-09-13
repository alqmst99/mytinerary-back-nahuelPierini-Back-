import joi from 'joi'
import joiPwd from 'joi-password-complexity'

//complexyti options
const complexityOptions= {
    min: 5,
    max: 30,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 2,
}

//schema validator
export const singUpSchema = joi.object({
 email: joi.string().required().messages({
        "string.empty": "the email is't empty",
        "any.required": "the field is requiered",
        "string.email": "the email have @ and .com"
    }),
    password: joiPwd(complexityOptions),
    name: joi.string().required().min(3).max(15),
    lastName: joi.string().optional().uri(),
    age: joi.number().required(),
    verified: joi.boolean()
})