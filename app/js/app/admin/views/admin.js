/**
 * User: xmartin
 * Date: 18/12/12
 * Time: 11:11 AM
 */
define
(
    [
        'app/app',
        'text!app/admin/templates/admin.hbs',
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
        Ember.TEMPLATES['admin'] = Ember.Handlebars.compile( template )
        App.AdminView = Ember.View.extend
        ({
            templateName: 'admin'
        })
    }
);