export const validationMessages = {
    required: (field) => `${field} is required`,

    invalidEmail: "Please enter a valid email",

    invalidUrl: "Please enter a valid URL",

    invalidColor: "Please enter a valid HEX color",

    invalidImage: "Only PNG, JPG, JPEG and WEBP images are allowed",

    imageTooLarge: "Image size must be less than 5 MB",

    maxLength: (field, max) =>
        `${field} must not exceed ${max} characters`,

    minLength: (field, min) =>
        `${field} must be at least ${min} characters`,
};