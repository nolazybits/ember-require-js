require
(
    [
        'app/app',
        'text!app/common/templates/application.hbs',
//  comment the line above and uncomment the line below to pass the menu view to the ApplicationView being a ContainerView
//        'app/common/views/menu',
        'ember'
    ],
    /**
     * Main application view
     *
     * @param App
     */
    function( App, template )
    {
        Ember.TEMPLATES['application'] = Ember.Handlebars.compile( template );
        App.ApplicationView = Ember.View.extend
        ({
            template: 'application',
            what: 'application view'
        })
    }
//  Comment above and uncomment here to get the ApplicationView with children
/*    function (App)
    {
        App.ApplicationView = Ember.ContainerView.extend
        ({
            childViews   : ['headerView', 'menuView', 'containerView'],
            headerView   : App.HeaderView,
            menuView     : App.MenuView,
            containerView: App.ContainerView,
            init: function()
            {
                App.__container__.lookup('router:main')._connectActiveView('container', App.__container__.lookup('view:container'));

                this._super();
            }
        });
        return App.ApplicationView;
    }*/
);
