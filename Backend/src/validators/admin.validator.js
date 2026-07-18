const { body } = require('express-validator')

// --- POST /api/admin/login ---
const adminLoginValidator = [
    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please enter a valid email address')
        .normalizeEmail(),

    body('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
]

// --- PATCH /api/admin/homepage ---
const homepageUpdateValidator = [
    body('favicon').optional().isString().notEmpty().withMessage('favicon cannot be empty'),

    body('colors.primary').optional().isString().notEmpty().withMessage('colors.primary cannot be empty').matches(/^#[0-9A-Fa-f]{6}$/).withMessage('colors.primary must be a valid hex color code'),
    body('colors.secondary').optional().isString().notEmpty().withMessage('colors.secondary cannot be empty').matches(/^#[0-9A-Fa-f]{6}$/).withMessage('colors.secondary must be a valid hex color code'),
    body('colors.primaryBackground').optional().isString().notEmpty().withMessage('colors.primaryBackground cannot be empty').matches(/^#[0-9A-Fa-f]{6}$/).withMessage('colors.primaryBackground must be a valid hex color code'),
    body('colors.secondaryBackground').optional().isString().notEmpty().withMessage('colors.secondaryBackground cannot be empty').matches(/^#[0-9A-Fa-f]{6}$/).withMessage('colors.secondaryBackground must be a valid hex color code'),
    body('colors.primaryForeground').optional().isString().notEmpty().withMessage('colors.primaryForeground cannot be empty').matches(/^#[0-9A-Fa-f]{6}$/).withMessage('colors.primaryForeground must be a valid hex color code'),
    body('colors.secondaryForeground').optional().isString().notEmpty().withMessage('colors.secondaryForeground cannot be empty').matches(/^#[0-9A-Fa-f]{6}$/).withMessage('colors.secondaryForeground must be a valid hex color code'),

    body('navbar.logo').optional().isString().notEmpty().withMessage('navbar.logo cannot be empty'),
    body('navbar.navbarLinks').optional().isArray().withMessage('navbar.navbarLinks must be an array'),
    body('navbar.navbarLinks.*.text').optional().isString().notEmpty().withMessage('Each navbar link needs text'),
    body('navbar.navbarLinks.*.url').optional().isString().notEmpty().withMessage('Each navbar link needs a url'),

    body('heroSection.heading').optional().isString().notEmpty(),
    body('heroSection.subheading').optional().isString().notEmpty(),
    body('heroSection.leftButton.text').optional().isString().notEmpty(),
    body('heroSection.leftButton.url').optional().isString().notEmpty(),
    body('heroSection.rightButton.text').optional().isString().notEmpty(),
    body('heroSection.rightButton.url').optional().isString().notEmpty(),
    body('heroSection.rightImage').optional().isString().notEmpty(),

    body('heroBelowSection.title').optional().isString().notEmpty(),
    body('heroBelowSection.subtitle').optional().isString().notEmpty(),

    body('blueprint.header').optional().isString().notEmpty(),
    body('blueprint.title').optional().isString().notEmpty(),
    body('blueprint.description').optional().isString().notEmpty(),
    body('blueprint.points').optional().isArray().withMessage('blueprint.points must be an array'),
    body('blueprint.points.*').optional().isString().notEmpty().withMessage('Each blueprint point must be non-empty text'),
    body('blueprint.image').optional().isString().notEmpty(),

    body('note.note').optional().isString().notEmpty(),
    body('note.contact').optional().isString().notEmpty(),

    body('footer.logo').optional().isString().notEmpty(),
    body('footer.address').optional().isString().notEmpty(),
    body('footer.logoBelowText').optional().isString().notEmpty(),
    body('footer.facebookLink').optional().isString().notEmpty(),
    body('footer.twitterLink').optional().isString().notEmpty(),
    body('footer.youtubeLink').optional().isString().notEmpty(),
    body('footer.instagramLink').optional().isString().notEmpty()
]

module.exports = { adminLoginValidator, homepageUpdateValidator }