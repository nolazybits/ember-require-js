/**
 * User: xmartin
 * Date: 20/12/12
 * Time: 2:06 PM
 */

//  Common Router

require
(
    [
        'app/app',
        'ember'
    ],

    function(App)
    {
        App.AdminRoute = Ember.Route.extend
        ({
            setupController: function(controller, model)
            {
                this.controllerFor('menu').set('selected', 'admin');
            }
        })
    }
);
