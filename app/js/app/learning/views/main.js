/**
 * User: xmartin
 * Date: 18/12/12
 * Time: 11:11 AM
 */
define
(
    'app/learning/views/main',
    [
        'text!app/learning/templates/main.hbs',
        'ember'
    ],
    /**
     * TODO view description
     *
     * @returns Class
     * @param template
     */
    function( template )
    {
        return Ember.View.extend
        ({
            //            testBinding: 'controller.namespace.testController',
            template: Ember.Handlebars.compile( template )
            /*
             classNameBindings: 'buttonClass',
             buttonClass: function () {
             if ( !this.getPath( 'entries.completed' ) )
             return 'hidden';
             }.property( 'entries.completed' )
             */
        })
    }
);