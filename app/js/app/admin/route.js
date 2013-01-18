/**
 * User: xmartin
 * Date: 20/12/12
 * Time: 2:06 PM
 */

//  Common Router

require
(
    [
        'app/app',
        'ember'
    ],

    function(App)
    {
        App.AdminRoute = Ember.Route.extend
        ({
            setupController: function(controller, model)
            {
                var self = this;
                require
                (
                    [
                        'app/admin/controllers/admin'
                    ],
                    function()
                    {
                        self.set('controller', self.container.lookup('controller:admin') );
                    }
                )
            },

            renderTemplate : function(controller, model)
            {
                var self = this;
                //  select the proper menu item
                this.controllerFor('application').set('selected', 'admin');

                //                This is what I am aiming for in the future, meaning loading resources only if the user is navigating to those
                require
                (
                    [
                        'app/admin/views/admin'
                    ],
                    function()
                    {
                        //  render the view in the outlet
                        self.render('admin');
                        /*                this.render
                         (   'library',
                         {
                         into: 'application',
                         outlet: 'main',
                         controller: this.controller
                         }
                         )*/
                    }
                )
            }
        })
    }
);
