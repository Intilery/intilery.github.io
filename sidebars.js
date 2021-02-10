module.exports = {
    guides: {
        'Getting Started': 
        [
        	"guides/contents", 
        	"guides/simple",  
        	"guides/full", 
        	"guides/fullimp", 
        	"guides/faq"
        ],
        'Tracking Events': [
        	"guides/protocols",
        	"guides/trackingplan",
        	"guides/data-collection",
        	"guides/validate",
        	"guides/validate-schema",
        ]
    },
    apis: {
        'Getting Started': [
        'apis/api1',
        'apis/actions',
        'apis/events',
        'apis/profile'
        ],
    },
    tag: {
        'Getting Started': [
        	'tag/tag1', 
        	'tag/reference',
        	'tag/gtm',
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
            'Default Schemas': [
                "schema/intilery",
                "schema/common",
                "schema/email",
                "schema/identify",
                "schema/track",
                "schema/screen",
                "schema/page",
                "schema/mobile",
                "schema/b2b",
                "schema/video",
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
