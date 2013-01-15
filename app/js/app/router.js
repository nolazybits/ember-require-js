// Check this gist for new Router API
// https://gist.github.com/3981133

// Check this post http://stackoverflow.com/questions/11637202/does-ember-js-encourage-too-many-controllers/11637906#11637906
// http://stackoverflow.com/questions/11552417/emberjs-how-to-transition-to-a-router-from-a-controllers-action
// if we need to split the router

//  async loading
//  check http://www.lukemelia.com/blog/archives/2012/09/18/async-routing-in-ember-js/


require
(
    [
        'app/app'
    ],
    function (App)
    {
        App.Router.map
        (
            function (match)
            {
                match('/').to('library');
                match('/library').to('library');

                match('/admin').to('admin');
                match('/learning').to('learning');
                match('/team').to('team');
            }
        );
});