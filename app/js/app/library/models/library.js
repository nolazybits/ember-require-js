/**
 * User: xmartin
 * Date: 7/01/13
 * Time: 12:02 PM
 */

define
(
    'app/library/models/library',
    [
        'app/library/models/course',
        'ember'
    ],

    /**
     * Holds Library
     */
    function (Course)
    {
        return Ember.Object.create
        ({
            courses: [],
            url: 'http://url/courses',
            findAll: function()
            {
                var self = this;
                $.getJSON(
                    self.url,
                    function(response)
                    {
                        response.forEach
                        (
                            function (data)
                            {
                                var course = Course.create({title: data['title'], description: data['description']});
                                self.courses.pushObject(course);
                            }
                        )
                    },
                    this
                );
                return self.courses;
            }/*,
            findAll: function()
            {
                var first = Course.create({title: 'course 1', description:'this is the first course'});
                var last = Course.create({title: 'course 2', description:'this is the last course'});
                return [first, last];
            }*/
        })
    }
);
