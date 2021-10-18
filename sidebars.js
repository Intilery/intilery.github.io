module.exports = {
    guides: {
        'Getting Started':
        [
        	"guides/contents",
        	"guides/simple",
        	"guides/full",
        	"guides/fullimp",
        	"guides/faq",
            "guides/glossary",
            "guides/identifying-customers",
        	"guides/mtcs",
        ],
        'Tracking Events': [
        	"guides/protocols",
        	"guides/tracking-plan",
        	"guides/data-collection",
        	"guides/validate",
        	"guides/validate-schema",
        ],
        'Marketing Preferences': [
            "guides/marketing-preferences",
            "guides/marketing-preferences-hosting"
        ]
    },
    schema: ["schema/contents",
        {
            'Core Schemas': [
                "schema/intilery",
                "schema/common",
                "schema/email",
                "schema/sms",
                "schema/identify",
                "schema/track",
                "schema/page",
                "schema/screen",
                "schema/app",
                "schema/b2b",
                "schema/video",
                "schema/subscription"
            ]
        },
        "schema/retail",
        "schema/gaming"
    ],
    tag: {
        'Getting Started': [
        	'tag/tag1',
        	'tag/reference',
        ],
        'Integrating with GTM': [
        	'tag/gtm',
        	'tag/gtm-datalayer',
        	'tag/gtm-ecommerce'
        ],
    },
    app: {
        'App Integration': [
            'app/main',
            'app/api',
            'app/push',
        ],
    	'iOS Native SDK': [
    		'app/ios',
    		'app/ios-quickstart',
    		'app/ios14',
    		'app/ios-trouble',
    		'app/ios-faq',
    	],
    	'Android Native SDK': [
    		'app/android',
    		'app/android-quickstart',
    		'app/android-trouble',
    		'app/android-faq',
    	]
    },
    apis: {
        'Getting Started': [
            'apis/api',
            'apis/commands',
            'apis/events',
            'apis/profiles'
        ],
    },
    customers: {
    	'Customers Overview': [
    		'customers/overview',
    		'customers/computed-traits',
    		'customers/sql-traits',
    		'customers/audiences',
    	],
    },
};
