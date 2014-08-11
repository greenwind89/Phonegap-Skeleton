require.config({
	baseUrl : './',
	packages : [ 
        {
            name : 'core',
            location : './app/module/core'
        },
        {
            name : 'util',
            location : './app/module/util'
        },
    ],
	paths : {
		// jade : './app/vendor/require-jade/jade',
	},
});


var packages = [
    'core'
];


require(['util'], function() { // moment and utils will be global
    require(packages, function() {
        Backbone.history.start();
    });
			
});

