/**
 * User: xmartin
 * Date: 8/01/13
 * Time: 9:48 AM
 */

define
(
    [
        'app/app',
        'ember',
        'ember-data'
    ],

    /**
     * The store the application is using.
     * The default adapter is the DS.RESTAdapter
     *
     * @see http://emberjs.com/guides/models/defining-a-store/
     * @see http://emberjs.com/guides/models/the-rest-adapter/
     *
     * @returns Class
     */
    function(App)
    {
        App.Store = DS.Store.extend
        ({
            revision: 11,
            adapter: 'DS.fixtureAdapter'
        })
    }
)
