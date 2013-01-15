define(
    'app/app',
    [
        'bootstrap',
        'handlebars',
        'ember'
    ],
    function ()
    {
        var App = window.App = Ember.Application.create
        ({
            VERSION     : '1.0',
            rootElement : '#ember',
            ready: function()
            {
                this.set('Router.enableLogging', true);
            }
        });
        return App;
    }
);