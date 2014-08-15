/**
 * Created by 891126 on 7/8/2014.
 */

var systemEnum = {

    NAME : "ICE :: Core Business",
    VERSION : "2.0.0",
    USER_KEY : "user_key_store"
};

var urlEnum = {

    HOST : "185.155.10.26",
    PORT : 80,
    API : "api"
};


var webController = {

    USER : {

        CONTROLLER : "POSUsers",
        ACTION : {

            GET : "",
            GETS : "",
            POST : "",
            PUT : "",
            DELETE : "",

            LOGIN : "?UserName={0}&Password={1}"
        }
    }
};


var webPath = {

    URL : "http://" + urlEnum.HOST + ":" + urlEnum.PORT + "/" + urlEnum.API,
    SPLASHURL : "http://" + urlEnum.HOST + ":" + urlEnum.PORT + "/" + urlEnum.API + "/"

};


//var webPath = {
//
//    //URL:  "Hello"//"http://" + urlEnum.HOST + ":" + urlEnum.PORT + "/" + urlEnum.API
//};

//webController.USER.CONTROLLER, webController.USER.ACTION.GET