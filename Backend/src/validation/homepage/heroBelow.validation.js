import { body } from "express-validator";
import { validationMessages } from "../../utils/validationMessages.js";

export const heroBelowValidation = [

    body("title")
        .trim()
        .notEmpty()
        .withMessage(validationMessages.required("Title"))
        .isLength({ max: 500 }),

    body("subtitle")
        .trim()
        .notEmpty()
        .withMessage(validationMessages.required("Subtitle"))
        .isLength({ max: 3000 }),

];