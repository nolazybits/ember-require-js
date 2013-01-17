/**
 * User: xmartin
 * Date: 14/12/12
 * Time: 9:16 AM
 */

require
(
    [
        'app/app',
        'text!app/common/templates/menu.hbs',
        'ember'
    ],
    /**
     * View to clear completed tasks
     *
     * @param App
     * @param template
     */
    function( App, template )
    {
        App.MenuView = Ember.View.extend
        ({
        //  bind the controller to this view
            controller          : App.__container__.lookup('controller:menu'),
        //  bind the view.selected property to the controller.selected property
            selectedBinding     : 'controller.selected',
        //  compile the handlebar template the view will use
            template            : Ember.Handlebars.compile( template ),

        //  sub view/items for navigation
            NavItemView         : Ember.View.extend
            ({
                tagName             : 'li',
                classNameBindings   : 'isActive:active'.w(),
                isActive            : function()
                {
                    var controller = this.get('parentView.controller');
                    return this.get('item') === this.get('parentView.selected');
                }.property('item', 'parentView.selected').cacheable()
            })
        })
    }
);
