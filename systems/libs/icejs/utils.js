/**
 * Created by 891126 on 7/7/2014.
 */
function serializeObjToJSON(obj) {
    if(obj == null) return obj;
    var json = JSON.stringify(obj);
    return json;
}

function deserializeJSONToObj(jsonStr) {
    if(jsonStr == "" || jsonStr == null) return "";
    var obj = JSON.parse(jsonStr);
    return obj;
}


function convertDateTime(dateTime){
    var date=dateTime;
    //var substringedDate = date.substring(6); //substringedDate= 1291548407008)/
    var parsedIntDate = parseInt(date.substring(6)); //parsedIntDate= 1291548407008
    return (new Date(parsedIntDate));  // parsedIntDate passed to date constructor
}


function ajaxRequest(url, type, datatype, contenttype, data){
    var result = null;
    $.ajax({
        url:url,
        type:type,
        dataType:datatype,
        contentType: contenttype,
        data : JSON.stringify(data),
        success:function(res){
            result = res;
        },
        error:function(res){
            result="";
        },
        async : false
    });
    return result;
}


String.prototype.format = function (args) {
    var str = this;
    return str.replace(String.prototype.format.regex, function(item) {
        var intVal = parseInt(item.substring(1, item.length - 1));
        var replace;
        if (intVal >= 0) {
            replace = args[intVal];
        } else if (intVal === -1) {
            replace = "{";
        } else if (intVal === -2) {
            replace = "}";
        } else {
            replace = "";
        }
        return replace;
    });
};
String.prototype.format.regex = new RegExp("{-?[0-9]+}", "g");