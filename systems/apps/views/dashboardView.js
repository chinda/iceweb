/**
 * Created by 891126 on 7/5/2014.
 */
define(['jquery',
        'underscore',
        'backbone'
    ],
    function($, _, Backbone) {

        var DashboardView = Backbone.View.extend({

            el: $("#content"),
            render: function(){
                // Using Underscore we can compile our template with data

                //var compiledTemplate = _.template( LoginTemplate );
                // Append our compiled template to this Views "el"
                //this.$el.html( compiledTemplate );

                this.$el.html("<div style='width: 100px; height: 100px; background-color: #0063DC;'></div>");
            }
        });

//        LocalForage.getItem('user_key_store', function(value) {
//
//            alert(value);
//        });

        return DashboardView;
    });