import joi from 'joi'
import joiPwd from 'joi-password-complexity'
const complexityOptions = {
    min: 4,
    max: 30,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 3,
}

export const loginSchema= joi.object({
    email: joi.string().email().required().messages({
        "string.empty": "the email is't empty",
        "any.required": "the field is requiered",
        "string.email": "the email have @ and .com"
    }),
    password: joiPwd(complexityOptions).messages({
        "string.empty": "the email is't empty",
        "any.required": "the field is requiered",
      
    })
})