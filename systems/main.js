require.config({
   paths: {
       "jquery": "libs/jquery/jquery.min",
       "underscore": "libs/underscore-amd/underscore-min",
       "backbone": "libs/backbone-amd/backbone-min",

       // Plug in
       "canvasloader": "libs/canvasloader/js/heartcode-canvasloader",
       "apprise": "libs/apprise/apprise.min",
       "localforage": "libs/localForage/dist/localforage",

       // Plug in Datatable
       "datatables": "libs/datatable/js/jquery.dataTables",
       "editables": "libs/datatable/js/dataTables.editor",
       "tabletools": "libs/datatable/js/dataTables.tableTools",



       // Customized function
       "ice": "libs/icejs/ice",
       "editable": "libs/icejs/editable",
       "const": "libs/icejs/const",
       "utils": "libs/icejs/utils"
   }
});

require(['app'], function(App){

    App.initialize();

});