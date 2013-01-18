/**
 * User: xmartin
 * Date: 7/01/13
 * Time: 2:21 PM
 */

require
(
    [
        'app/app',
        'ember'
    ],
    /**
     * Library controller
     */
    function(App)
    {
        App.LibraryController = Ember.ArrayController.extend
        ({
            content: [],
            what: "team controller"
        });

//        App.container.register('controller', 'library', controller);
    }
)
