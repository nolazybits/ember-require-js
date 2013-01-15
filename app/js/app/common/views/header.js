/**
 * User: xmartin
 * Date: 14/12/12
 * Time: 9:16 AM
 */

require
(
    [
        'app/app',
        'text!app/common/templates/header.hbs',
        'ember'
    ],
    /**
     * View to clear completed tasks
     *
     * @param App
     * @param template
     */
        function( App, template )
    {
        App.HeaderView = Ember.View.extend
        ({
            template: Ember.Handlebars.compile( template )
        })
    }
);
