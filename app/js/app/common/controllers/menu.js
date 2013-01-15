/**
 * User: xmartin
 * Date: 18/12/12
 * Time: 4:43 PM
 */

require
(
    [
        'app/app',
        'ember'
    ],
    /**
    * Menu controller
    *
    * @returns Class
    */
    function(App)
    {
        App.MenuController = Ember.Controller.extend
        ({
            content     : [],
            selected    : 'none'
        });
    }
);

