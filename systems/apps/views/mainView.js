/**
 * Created by 891126 on 7/3/2014.
 */
define(['jquery',
        'underscore',
        'backbone',
        'const',
        'text!apps/templates/main.html'
    ],
    function($, _, Backbone, Const, MainTemplate) {

        var a = webController.USER.CONTROLLER;
        var MainView = Backbone.View.extend({

            el: $("#web_container"),
            render: function(){
                // Using Underscore we can compile our template with data

                var compiledTemplate = _.template( MainTemplate );
                // Append our compiled template to this Views "el"
                this.$el.html( compiledTemplate );
            }
        });

        return MainView;
    });