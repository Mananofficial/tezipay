import { body } from "express-validator";
import { validationMessages } from "../../utils/validationMessages.js";

export const blueprintValidation = [

    body("header")
        .trim()
        .notEmpty(),

    body("title")
        .trim()
        .notEmpty(),

    body("description")
        .trim()
        .notEmpty(),

    body("points")
        .optional()
        .isArray(),

    body("image")
        .optional()
        .isString(),

];