const datetimeFormats = {
	'en-US': {
		time: {
			timeStyle: 'short',
		},
		date: {
			dateStyle: 'medium',
		},
		dateTime: {
			dateStyle: 'medium',
			timeStyle: 'short',
		},
	},
	'en-GB': {
		time: {
			timeStyle: 'short',
		},
		date: {
			dateStyle: 'medium',
		},
		dateTime: {
			dateStyle: 'medium',
			timeStyle: 'short',
		},
	},
	'ar-AE': {
		time: {
			timeStyle: 'short',
			numberingSystem: 'arab',
		},
		date: {
			dateStyle: 'short',
			numberingSystem: 'arab',
		},
		dateTime: {
			dateStyle: 'short',
			timeStyle: 'short',
			numberingSystem: 'arab',
		},
	},
	'ar-SA': {
		time: {
			timeStyle: 'short',
			calendar: 'gregory',
			numberingSystem: 'latn',
		},
		date: {
			dateStyle: 'short',
			calendar: 'gregory',
			numberingSystem: 'latn',
		},
		dateTime: {
			calendar: 'gregory',
			dateStyle: 'short',
			timeStyle: 'short',
			numberingSystem: 'latn',
		},
	},
	'ru-RU': {
		time: {
			timeStyle: 'short',
		},
		date: {
			dateStyle: 'medium',
		},
		dateTime: {
			dateStyle: 'medium',
			timeStyle: 'short',
		},
	},
};

export default datetimeFormats;
