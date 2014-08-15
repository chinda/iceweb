/**
 * Created by 891126 on 7/2/2014.
 */
define(['jquery',
        'underscore',
        'backbone',
        'const',
        'apps/views/loginView',
        'apps/views/mainView',
        'apps/views/dashboardView',
        'apps/views/customers/customerListView',
        'apps/views/items/categoryListView'
    ],

    function($, _, Backbone, Const,
             LoginView, MainView, DashboardView,
             CustomerListView, CategoryListView){

        var AppRouter = Backbone.Router.extend({

            routes: {
                // Define some URL routes
                "": "showHome",

                "login": "showLogin",
                "main": "showMain",
                "dashboard": "showDashboard",
                "customerList": "showCustomerList",
                "categoryList": "showCategoryList",

                // Default
                "*actions": "defaultRoute"
            }

        });

        var $body = $('body');
        $('title').html(systemEnum.NAME + " v." + systemEnum.VERSION);

        var main = new MainView({el: $body});

        var initialize = function() {

            var app_router = new AppRouter;

            // ------------------ Home Router
            app_router.on('route:showHome', function(){

                app_router.navigate('login', { trigger:true });
            });

            // ------------------ Login Router
            app_router.on('route:showLogin', function(){

                var login = new LoginView();
                login.render();
            });

            // ------------------ Main Router
            app_router.on('route:showMain', function(){

                //var main = new MainView({el: $body});
                main.render();

                var $content = $("#content", main.el);

                var login = new LoginView({el: $content});
                login.render();

            });


            // ------------------ Dashboard Router
            app_router.on('route:showDashboard', function(){
                main.render();

                var $content = $("#content", main.el);

                var dashboard = new DashboardView({el: $content});
                dashboard.render();

            });

            // ------------------ Category List Router
            app_router.on('route:showCategoryList', function(){
                main.render();

                var $content = $("#content", main.el);

                var categoryList = new CategoryListView({el: $content});
                categoryList.render();

            });

            // ------------------ Customer List Router
            app_router.on('route:showCustomerList', function(){
                main.render();

                var $content = $("#content", main.el);

                var customerList = new CustomerListView({el: $content});
                customerList.render();

            });


            app_router.on('route:defaultRoute', function(actions) {

                console.log("login", actions);
            });

            Backbone.history.start();
        };

        return {
            initialize: initialize
        };
});