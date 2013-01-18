define
(
    [
        'app/app',
        'app/learning/controllers/learning',
        'app/learning/views/learning',
        'ember'
    ],
    function (App)
    {
        App.LearningRoute = Ember.Route.extend
        ({
            renderTemplate : function(controller, model)
            {
                //  select the proper menu item
                this.controllerFor('application').set('selected', 'learning');

                //  render the view in the outlet
                this.render('learning');
            }
        })
    }
);