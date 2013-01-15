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
            needs: 'menu',
            content: []
        });

//        App.container.register('controller', 'library', controller);
    }
)
