/**
 * User: xmartin
 * Date: 18/12/12
 * Time: 11:11 AM
 */
define
(
    [
        'app/app',
        'text!app/team/templates/team.hbs',
        'ember'
    ],
    /**
     *
     * @param App
     * @param template
     * @returns Class
     */
    function( App, template )
    {
        Ember.TEMPLATES['team'] = Ember.Handlebars.compile( template );
        App.TeamView = Ember.View.extend
        ({
            //            testBinding: 'controller.namespace.testController',
            templateName: 'team'
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