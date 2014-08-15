/**
 * Created by 891126 on 7/2/2014.
 */
define(['jquery',
        'underscore',
        'backbone',

        // Plug in
        'canvasloader',
        'apprise',
        'const',
        'utils',
//        'localforage',

        // Apps
        'apps/models/posUserModel',
        'text!apps/templates/login.html'
    ],
    function($, _, Backbone,
             Canvas, Apprise, Const, Utils,
             POSUserModel, LoginTemplate) {

        var loading;

        var LoginView = Backbone.View.extend({

            el: $('body'), //$("#web_container"),
            template: _.template( LoginTemplate ),

            events: {
                "click #submit": "login",
                "keyup #t_user_ice, #t_passwd_ice" : "keyPressEventHandler"
            },

            render: function(){
                // Using Underscore we can compile our template with data

                var compiledTemplate = this.template();

                // Append our compiled template to this Views "el"
                this.$el.html( compiledTemplate );

                loading = new CanvasLoader('canvasloader-container');
                loading.setShape('spiral'); // default is 'oval'
                loading.setDiameter(26); // default is 40
                loading.setDensity(29); // default is 40
                loading.setRange(1.8); // default is 1.3
                loading.setSpeed(1); // default is 2
                loading.setFPS(40); // default is 24

                $('#t_user_ice').focus();
                $("#error").css('visibility', 'hidden');
                $("#error").css('opacity', '0');
            },

            keyPressEventHandler: function(event)
            {
                if(event.keyCode == 13 && $('#t_passwd_ice').val() === ""){

                    $('#t_passwd_ice').focus();
                }
                else if(event.keyCode == 13 && $('#t_user_ice').val() === ""){

                    $('#t_user_ice').focus();
                }
                else if(event.keyCode == 13 && $('#t_passwd_ice').val() !== ""){
                    $("#submit").click();
                }
            },

            login: function (e) {

                $("#error").css('visibility', 'hidden');
                $("#error").css('opacity', '0');


                var username = $('#t_user_ice');
                var password = $('#t_passwd_ice');

                if(username.val() === "" || password.val() === "")
                {
                    $("#error").css('visibility', 'visible');
                    $("#error").css('opacity', '1');

                    $("#error").html('Please input username and password');

                    if(username.val() === "")
                        $('#t_user_ice').focus();
                    else
                        $('#t_passwd_ice').focus();

                    //apprise('Please input username and password', {'animate':true});
                    //alert('Please input username and password');
                    return;
                }

                loading.show(); // Hidden by default


                var url = webPath.SPLASHURL + webController.USER.CONTROLLER + webController.USER.ACTION.LOGIN;

                var posUser = new POSUserModel();
                posUser.fetch({ url:  url.format([username.val(), password.val()]) }).complete(function() {

                    loading.hide();

                    if(posUser.get("UserName") !== "") {

//                        var empl = posUser.get("Employee");
//                        alert(empl.FirstName);

//                        LocalForage.setItem(urlEnum.USER_KEY, 'Hello', function() {
//                            console.log('Save');
//                        });

                        // Navigate to dashboard
                        Backbone.history.navigate("dashboard", {trigger: true});
                    }
                    else{

                        $("#error").css('visibility', 'visible');
                        $("#error").css('opacity', '1');

                        $("#error").html('Invalid Username and Password');

                        //apprise('Invalid Username and Password', {'animate':true});
                        //alert("Invalid Password");
                        password.val("");
                        password.focus();
                    }

                });
            }
        });

        return LoginView;
});