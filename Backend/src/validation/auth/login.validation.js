import { body } from "express-validator";
import { validationMessages } from "../../utils/validationMessages.js";

export const loginValidation = [

    body("username")
        .trim()
        .notEmpty()
        .withMessage(validationMessages.required("Username")),

    body("password")
        .trim()
        .notEmpty()
        .withMessage(validationMessages.required("Password"))
        .isLength({ min: 6 })
        .withMessage(validationMessages.minLength("Password", 6))

];