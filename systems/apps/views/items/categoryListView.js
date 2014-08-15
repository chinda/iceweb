/**
 * Created by 891126 on 7/17/2014.
 */
define(['jquery',
        'underscore',
        'backbone',
        'datatables',
        'editables',
        'tabletools',
        'text!apps/templates/items/categoryList.html'
    ],
    function($, _, Backbone, DataTables, Tabletools, Editables,
             CategoryListTemplate) {

        var editor;

        var customerListView = Backbone.View.extend({

            el: $("#content"),
            render: function(){
                // Using Underscore we can compile our template with data

                var compiledTemplate = _.template( CategoryListTemplate );
                // Append our compiled template to this Views "el"


                this.$el.html( compiledTemplate );


                // ---------------------------------

                editor = new $.fn.dataTable.Editor( {

                    sAjaxSource: "http://185.155.10.26/api/Categories?meta=true",
                    sAjaxDataProp: "Data",
                    processing: true,
                    serverSid: true,

                    table: "#example",
                    fields: [ {
                        label: "ID:",
                        name: "ID"
                    }, {
                        label: "UID:",
                        name: "UID"
                    }, {
                        label: "DepartmentID:",
                        name: "DepartmentID"
                    }, {
                        label: "DepartmentUID:",
                        name: "DepartmentUID"
                    }, {
                        label: "DepartmentName:",
                        name: "DepartmentName"
                    }, {
                        label: "CategoryName:",
                        name: "CategoryName"
                    }, {
                        label: "WebActive:",
                        name: "WebActive"
                    }, {
                        label: "IsPriority:",
                        name: "IsPriority"
                    }
                    ]
                } );


                var $window = $(window);

                var calcDataTableHeight = function() {
                    return Math.round($window.height() * 0.58);
                };

                var table = $('#example').dataTable({

                    aLengthMenu: [[20, 50, 100, 200, -1], [20, 50, 100, 200, "All"]],
                    iDisplayLength: 20,

                    sScrollY: calcDataTableHeight() + 50,
                    bPaginate: true,
                    bScrollCollapse: true,

                    processing: true,
                    serverSid: true,
                    sAjaxSource: "http://185.155.10.26/api/Categories?meta=true",
                    sAjaxDataProp: "Data",
                    order: [[ 5, "asc" ]],
                    columns: [

                        {"data": "ID"},
                        {"data": "UID"},
                        {"data": "DepartmentID"},
                        {"data": "DepartmentUID"},
                        {"data": "DepartmentName"},
                        {"data": "CategoryName"},
                        {"data": "WebActive"},
                        {"data": "IsPriority"}
                    ],

                    tableTools: {
                        sRowSelect: "os"

                    },

                    "aoColumnDefs": [
                        { "bVisible": false, "aTargets": [ 0, 1, 2, 3 ] },
                        { "sTitle": "Department", "sClass": "left", "aTargets": [ 4 ] },
                        { "sTitle": "Category", "sClass": "left", "aTargets": [ 5 ] },
                        { "sTitle": "Show in Website", "sClass": "center", "aTargets": [ 6 ], "sWidth": "100px",

                            "mRender" : function(obj, val)
                            {
                                if(obj === 1 )
                                    return 'Allowed';
                                else
                                    return 'Denied';
                            }
                        },
                        { "sTitle": "Show in Menu", "sClass": "center", "aTargets": [ 7 ], "sWidth": "100px",

                            "mRender" : function(obj, val)
                            {
                                if(obj === "1" )
                                    return 'Allowed';
                                else
                                    return 'Denied';
                            }
                        }
                    ]

//                    "fnDrawCallback": function() {
//
//                        $("#example tbody tr").dblclick(function() {
//                            var position = table.fnGetPosition(this); // getting the clicked row position
//                            var contactId = table.fnGetData(position)["UID"]; // getting the value of the first (invisible) column
//
//                            alert(contactId);
//                        });
//
//                    }

                });

                $window.resize(function() {
                    var oSettings = table.fnSettings();
                    oSettings.oScroll.sY = calcDataTableHeight(); // <- updated!

                    // maybe you need to redraw the table (not sure about this)
                    table.fnDraw(false);
                });

                // ---------------------------------
            }
        });

        return customerListView;
    });