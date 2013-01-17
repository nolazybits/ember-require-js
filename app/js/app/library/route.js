define
(
    [
        'app/app',
        'app/library/controllers/library',
        'app/library/views/library',
        //        'app/library/models/library',
        'ember'
    ],
    function (App)
    {
        App.LibraryRoute = Ember.Route.extend
        ({
            setupController: function(controller, model)
            {
                this.set('controller', this.container.lookup('controller:library') );
            },

            renderTemplate : function(controller, model)
            {
                this.controllerFor('menu').set('selected', 'library');

//                var parentView = this.router._lookupActiveView('application');
//                parentView.connectOutlet('container',this.container.lookup('view:library'));

//                this.container.lookup('view:application').connectOutlet('container', this.container.lookup('view:library'));

                this.render
                (   'library',
                    {
//                        into: 'container',
                        outlet: 'container',
                        controller: this.controller
                    }
                );

//                This is what I am aiming for in the future, meaning loading resources only if the user is navigating to those
/*                require
                 (
                 [
                     'app/library/controllers/library',
                     'app/library/views/main',
                     'app/library/models/library'
                 ],
                 function()
                 {
                    // do some stuff here, I guess
                    this.render
                    (   'library',
                        {
                            into: 'container',
                            controller: this.controller
                        }
                    );
                 )*/
            }
        })
    }
);