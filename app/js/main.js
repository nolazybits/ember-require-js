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
        'ember'     : 'lib/ember-c87ad9f',
        'ember-data': 'lib/ember-data-b5d7c47',
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

//  for now require all the JS files (non modular)
//  We should look into yeoman and grunt tools
require
(
    [
    //  templates
        'text!app/common/templates/menu.hbs',
        'text!app/common/templates/container.hbs',
        'text!app/common/templates/header.hbs',

    //  main app
        'app/app',

    //  controllers
        'app/common/controllers/menu',

    //  views
        'app/admin/views/admin',
        'app/common/views/menu',
        'app/common/views/header',
        'app/common/views/container',

    //  models
        'app/store',

    //  routes and router
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