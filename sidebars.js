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
            "guides/marketing-preferences-hosting"
        ]
    },
    apis: {
        'Getting Started': [
        'apis/api',
        'apis/commands',
        'apis/events',
        'apis/profile'
        ],
    },
    tag: {
        'Getting Started': [
        	'tag/tag1',
        	'tag/reference',
        	'tag/gtm',
        	'tag/gtm-datalayer',
        	'tag/gtm-ecommerce'
        ],
    },
    sdk: {
    	'iOS': [
    		'sdk/ios',
    		'sdk/ios-quickstart',
    		'sdk/ios14',
    		'sdk/ios-trouble',
    		'sdk/ios-faq',
    		'sdk/ios-push'
    	],
    	'Android': [
    		'sdk/android',
    		'sdk/android-quickstart',
    		'sdk/android-trouble',
    		'sdk/android-faq',
    		'sdk/android-push'
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
                "schema/screen",
                "schema/page",
                "schema/app",
                "schema/b2b",
                "schema/video",
                "schema/subscription"
            ]
        },
        "schema/retail",
        "schema/gaming"
    ],
    customers: {
    	'Customers Overview': [
    		'customers/overview',
    		'customers/computed-traits',
    		'customers/sql-traits',
    		'customers/audiences',
    	],
    },
};
