require
(
    [
        'app/app',
        'text!app/common/templates/application.hbs',
        'ember'
    ],
    /**
     * Main application view
     *
     * @param App
     * @param template the handlebar template to compite
     */
    function( App, template )
    {
        Ember.TEMPLATES['application'] = Ember.Handlebars.compile( template );
        App.ApplicationView = Ember.View.extend
        ({
            templateName: 'application',
            what: 'application view',

        //  bind the view.selected property to the controller.selected property
            selectedBinding     : 'controller.selected',

        //  sub view/items for navigation
            NavItemView         : Ember.View.extend
            ({
                tagName             : 'li',
                classNameBindings   : 'isActive:active'.w(),
                isActive            : function()
                {
                    var controller = this.get('parentView.controller');
                    return this.get('item') === this.get('parentView.selected');
                }.property('item', 'parentView.selected').cacheable()
            })
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
