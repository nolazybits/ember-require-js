/**
 * User: xmartin
 * Date: 18/12/12
 * Time: 11:11 AM
 */
define
(
    'app/team/views/main',
    [
        'text!app/team/templates/main.hbs',
        'ember'
    ],
    /**
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