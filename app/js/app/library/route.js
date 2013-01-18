require
(
    [
        'app/app',
        'app/library/controllers/library',
        'app/library/views/library',
        'ember'
    ],
    function (App)
    {
/*        App.Course.FIXTURES  =
        [
            {'id': 1, 'title':'title 1'},
            {'id': 2, 'title':'title 2'},
            {'id': 3, 'title':'title 3'}
        ];*/

        App.LibraryRoute = Ember.Route.extend
        ({
            setupController: function (controller, model)
            {
//               controller.set('content', App.Course );
//                this.set('controller', this.controllerFor('library'));
//                controller.set('content', App.Course.findAll());
            },

            renderTemplate : function(controller, model)
            {
            //  select the proper menu item
                this.controllerFor('application').set('selected', 'library');

            //  render the view in the outlet
                 this.render('library', {controller: [
                     {'id': 1, 'title':'title 1'},
                     {'id': 2, 'title':'title 2'},
                     {'id': 3, 'title':'title 3'}
                 ]});
            }
        })
    }
);