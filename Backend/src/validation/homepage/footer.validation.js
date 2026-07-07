import { body } from "express-validator";
import { validationMessages } from "../../utils/validationMessages.js";

export const footerValidation = [

    body("address")
        .trim()
        .notEmpty(),

    body("phone")
        .trim()
        .notEmpty(),

    body("email")
        .trim()
        .isEmail()
        .withMessage(validationMessages.invalidEmail),
];