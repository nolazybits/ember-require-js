/**
 * User: xmartin
 * Date: 10/01/13
 * Time: 2:03 PM
 */

// Define libraries
require.config
({
    baseUrl: 'js/',
    paths  :
    {
        'jquery'    : 'lib/jquery-1.8.3',
        'bootstrap' : 'lib/bootstrap.min',
        'ember'     : 'lib/ember',
        'ember-data': 'lib/ember-data',
        'handlebars': 'lib/handlebars-1.0.rc.1',
        'text'      : 'lib/require/text'
    },

    // Used for non module library (ie not using requireJS define) to specify the dependencies this library has
    shim:
    {
        'ember':
        {
            deps:['handlebars', 'jquery'],
            exports:'Ember'
        },
        'ember-data': ['ember']
    }
});

requirejs.onError = function (err)
{
    console.log(err.requireType);
    if (err.requireType === 'timeout') {
        console.log('modules: ' + err.requireModules);
    }

    throw err;
};

//  Load application, router and routes
require
(
    [
    //  main app
        'app/app',

    //  controllers

    // views

    //  models
        'app/store',

    //  models
        'app/library/models/course',

    //  routes and router
        'app/index_route',
        'app/admin/route',
        'app/learning/route',
        'app/library/route',
        'app/team/route',
        'app/router',

    //  Application View
        'app/common/views/application'
    ],

    function ()
    {
    }
);