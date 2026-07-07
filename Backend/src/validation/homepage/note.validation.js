import { body } from "express-validator";
import { validationMessages } from "../../utils/validationMessages.js";

export const noteValidation = [

    body("title")
        .trim()
        .notEmpty(),

    body("note")
        .trim()
        .notEmpty(),

];