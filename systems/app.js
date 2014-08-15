/**
 * Created by 891126 on 7/2/2014.
 */
define(['jquery',
        'underscore',
        'backbone',
        'router'],

    function($, _, Backbone, Router) {

        var initialize = function(){

            // Pass in our Router module and call it's initialize function
            Router.initialize();
        };

        return {
            initialize: initialize
        };

});