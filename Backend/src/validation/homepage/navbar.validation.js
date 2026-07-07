import { body } from "express-validator";
import { validationMessages } from "../../utils/validationMessages.js";

export const navbarValidation = [

    body("logo")
        .optional()
        .isString(),

    body("navbarLinks")
        .isArray({ min: 1 })
        .withMessage("Navbar must contain at least one link"),

    body("navbarLinks.*.name")
        .trim()
        .notEmpty()
        .withMessage("Link name is required"),

    body("navbarLinks.*.href")
        .trim()
        .notEmpty()
        .withMessage("Link URL is required"),

];