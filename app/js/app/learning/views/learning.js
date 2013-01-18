/**
 * User: xmartin
 * Date: 18/12/12
 * Time: 11:11 AM
 */
define
(
    [
        'app/app',
        'text!app/learning/templates/learning.hbs',
        'ember'
    ],
    /**
     * TODO view description
     *
     * @param App
     * @param template
     */
    function( App, template )
    {
        Ember.TEMPLATES['learning'] = Ember.Handlebars.compile( template );
        App.LearningView = Ember.View.extend
        ({
            templateName: 'learning'
        })
    }
);