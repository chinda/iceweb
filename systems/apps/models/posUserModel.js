/**
 * Created by 891126 on 7/9/2014.
 */
define(['underscore',
        'backbone'
    ],
    function(_, Backbone) {

        var posUserModel = Backbone.Model.extend({

//            url: "http://185.155.10.26/api/POSUsers?UserName=891126&Password=12346",

            defaults: {
                ID: 0,
                UserName: "",
                Password: "",
                EmployeeID: 0,
                PasswordReset: 0,
                Code: "",
                LastUpdated: "",
                Active: 0,
                UID: "",
                EmployeeUID: ""
            }
        });
        // Return the model for the module
        return posUserModel;

});