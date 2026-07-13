const mongoose = require('mongoose')

const pageCardSchema = {
	number: {
		type: String
	},
	title: {
		type: String
	},
	description: {
		type: String
	},
	active: {
		type: Boolean,
		default: false
	}
}

const pageFeatureSchema = {
	title: {
		type: String
	},
	description: {
		type: String
	}
}

const pageSectionSchema = {
	title: {
		type: String
	},
	subtitle: {
		type: String
	},
	description: {
		type: String
	},
	image: {
		type: String
	},
	imageAlt: {
		type: String
	},
	items: [pageFeatureSchema],
	cards: [pageCardSchema]
}

const pageSchema = new mongoose.Schema({
	pageKey: {
		type: String,
		required: true,
		unique: true,
		trim: true
	},
	title: {
		type: String,
		required: true
	},
	hero: {
		heading: {
			type: String,
			required: true
		},
		subheading: {
			type: String
		},
        description: {
            type: String
        },
		image: {
			type: String
		},
		backgroundImage: {
			type: String
		}
	},
	sections: [pageSectionSchema],
	leftFeatures: [pageFeatureSchema],
	rightFeatures: [pageFeatureSchema],
	cards: [pageCardSchema],
	cta: {
		heading: {
			type: String
		},
		description: {
			type: String
		},
		buttonText: {
			type: String
		},
		buttonUrl: {
			type: String
		}
	}
}, { timestamps: true })

const pageModel = mongoose.model('Page', pageSchema)

module.exports = pageModel