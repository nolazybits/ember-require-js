/**
 * User: xmartin
 * Date: 7/01/13
 * Time: 11:57 AM
 */

define
(
    [
        'ember',
        'ember-data'
    ],

    /**
     * Course object using Ember Data Model
     *
     */
    function ()
    {
        App.Course = DS.Model.extend
        ({
            title: DS.attr('string'),
            description: DS.attr('string')
        })
    }
)
