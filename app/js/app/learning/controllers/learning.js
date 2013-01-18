/**
 * User: xmartin
 * Date: 7/01/13
 * Time: 2:21 PM
 */

define
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
        App.LearningController = Ember.ArrayController.extend
        ({
            content: [],
            what: "learning controller"
        });
    }
)
