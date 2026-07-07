import { body } from "express-validator";
import { validationMessages } from "../../utils/validationMessages.js";

const hex = /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/;

export const colorsValidation = [

    body("primary")
        .matches(hex)
        .withMessage(validationMessages.invalidColor),

    body("secondary")
        .matches(hex)
        .withMessage(validationMessages.invalidColor),

    body("primaryBackground")
        .matches(hex)
        .withMessage(validationMessages.invalidColor),

    body("secondaryBackground")
        .matches(hex)
        .withMessage(validationMessages.invalidColor),

    body("primaryForeground")
        .matches(hex)
        .withMessage(validationMessages.invalidColor),

    body("secondaryForeground")
        .matches(hex)
        .withMessage(validationMessages.invalidColor),

];