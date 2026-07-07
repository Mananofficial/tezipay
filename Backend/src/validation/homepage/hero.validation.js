import { body } from "express-validator";
import { validationMessages } from "../../utils/validationMessages.js";

export const heroValidation = [

    body("heading")
        .trim()
        .notEmpty()
        .withMessage(validationMessages.required("Heading"))
        .isLength({ max: 500 })
        .withMessage(validationMessages.maxLength("Heading", 500)),

    body("subheading")
        .trim()
        .notEmpty()
        .withMessage(validationMessages.required("Subheading"))
        .isLength({ max: 3000 })
        .withMessage(validationMessages.maxLength("Subheading", 3000)),

    body("leftButton")
        .trim()
        .notEmpty()
        .withMessage(validationMessages.required("Left Button")),

    body("rightButton")
        .trim()
        .notEmpty()
        .withMessage(validationMessages.required("Right Button")),

    body("rightImage")
        .optional()
        .isString()

];