const mongoose = require('mongoose');

const colorSchema = {
    primary: {
        type: String,
        required: true
    },
    secondary: {
        type: String,
        required: true
    },
    primaryBackground: {
        type: String,
        required: true
    },
    secondaryBackground: {
        type: String,
        required: true
    },
    primaryForeground: {
        type: String,
        required: true
    },
    secondaryForeground: {
        type: String,
        required: true
    }
}

const navbarSchema = {
    logo: {
        type: String,
        required: true
    },
    navDropdown: [
        {
            text: {
                type: String,
                required: true
            },
            links: [{
                text: {
                    type: String,
                    required: true
                },
                url: {
                    type: String,
                    required: true
                }
            }]
        }
    ],
    navbarLinks: [{
        text: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }]
}

const heroSectionSchema = {
    heading: {
        type: String,
        required: true
    },
    subheading: {
        type: String,
        required: true
    },
    leftButton: {
        text: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    rightButton: {
        text: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    rightImage: {
        type: String,
        required: true
    },
}

const heroBelowSectionSchema = {
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    }
}

const blueprintSchema = {
    header: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true

    },
    points: [{
        type: String,
        required: true
    }],
    image: {
        type: String,
        required: true
    }
}

const noteSchema = {
    note: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    }
}

const footerSchema = {
    logo: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    logoBelowText: {
        type: String,
        required: true
    },
    facebookLink: {
        type: String,
        required: true
    },
    twitterLink: {
        type: String,
        required: true
    },
    youtubeLink: {
        type: String,
        required: true
    },
    instagramLink: {
        type: String,
        required: true
    }
}


const homepageSchema = new mongoose.Schema({
    favicon: {
        type: String,
        required: true
    },
    colors: colorSchema,
    navbar: navbarSchema,
    heroSection: heroSectionSchema,
    heroBelowSection: heroBelowSectionSchema,
    blueprint: blueprintSchema,
    note: noteSchema,
    footer: footerSchema
}, { timestamps: true })

const homepageModel = mongoose.model('Homepage', homepageSchema);

module.exports = homepageModel;