/**
 * User: xmartin
 * Date: 18/12/12
 * Time: 11:11 AM
 */
require
(
    [
        'app/app',
        'text!app/library/templates/main.hbs',
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
        App.LibraryView = Ember.View.extend
        ({
            template: Ember.Handlebars.compile( template ),
            what :'library view'
        });

        /*if( !App.LibraryView )
        {
            var view = Ember.View.extend
            ({
                template: Ember.Handlebars.compile( template ),
                what :'library view'
            });

        //  Register the view in the app (will be accessible via App.LibraryView)
            App.container.register('view', 'library', view);

            return view;
        }

        return App.LibraryView; */
    }
);