/**
 * User: xmartin
 * Date: 18/12/12
 * Time: 11:11 AM
 */
define
(
    [
        'app/app',
        'text!app/library/templates/library.hbs',
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
        Ember.TEMPLATES['library'] = Ember.Handlebars.compile( template );
        App.LibraryView = Ember.View.extend
        ({
            templateName: 'library',
            what: 'library view'
        });
    }
);