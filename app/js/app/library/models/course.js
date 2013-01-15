/**
 * User: xmartin
 * Date: 7/01/13
 * Time: 11:57 AM
 */

define
(
    'app/library/models/course',
    [
        'ember'
    ],

    /**
     * Course object using Ember Data Model
     *
     */
    function ()
    {
        return DS.Model.extend
        ({
            id: DS.attr('number'),
            title: DS.attr('string'),
            description: DS.attr('string')
        })
    }
)
