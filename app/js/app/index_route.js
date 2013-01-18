/**
 * User: xmartin
 * Date: 18/01/13
 * Time: 2:21 PM
 */
require
(
    [
        'app/app',
        'ember'
    ],
    /**
     * This is the main default route ('/').
     * We define simply a redirection to the library route for now.
     *
     * @param App
     */
    function (App)
    {
        App.IndexRoute = Ember.Route.extend
        ({
            redirect: function()
            {
                this.transitionTo('library');
            }
        })
    }
);