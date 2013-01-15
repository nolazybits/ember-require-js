/**
 * User: xmartin
 * Date: 18/12/12
 * Time: 11:11 AM
 */
require
(
    [
        'app/app',
        'text!app/admin/templates/main.hbs',
        'ember'
    ],
    /**
     * TODO view description
     *
     * @param App
     * @param template
     */
    function( App, template )
    {
        App.AdminView = Ember.View.extend
        ({
            template: Ember.Handlebars.compile( template )
        })
    }
);