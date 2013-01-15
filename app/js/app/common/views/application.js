require
(
    [
        'app/app',
        'app/common/views/menu',
        'ember'
    ],
    /**
     * Main application view
     *
     * @param App
     */
    function (App)
    {
        App.ApplicationView = Ember.ContainerView.extend
        ({
            childViews   : ['headerView', 'menuView', 'containerView'],
            headerView   : App.HeaderView,
            menuView     : App.MenuView,
            containerView: App.ContainerView/*,
            init: function()
            {
                var view;
                view = App.container.lookup('view:container');
                App.container.register('view', 'container', view);

                view = App.container.lookup('view:menu');
                App.container.register('view', 'menu', view);

                view = App.container.lookup('view:header');
                App.container.register('view', 'header',view);

                this._super();
            }*/
        });
        return App.ApplicationView;
    }
);
