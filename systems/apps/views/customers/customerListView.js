/**
 * Created by 891126 on 7/9/2014.
 */
define(['jquery',
        'underscore',
        'backbone',
        'datatables',
        'tabletools',
        'editables',
        'text!apps/templates/customerList.html'
    ],
    function($, _, Backbone, DataTables, Tabletools, Editables, CustomerListTemplate) {

        var editor;
        var customerListView = Backbone.View.extend({

            el: $("#content"),
            render: function(){
                // Using Underscore we can compile our template with data

                var compiledTemplate = _.template( CustomerListTemplate );
                // Append our compiled template to this Views "el"


                this.$el.html( compiledTemplate );

                editor = new $.fn.dataTable.Editor( {
                   // ajax: "../php/staff.php",
                    table: "#example"

                } );

                // Activate an inline edit on click of a table cell
                $('#example').on( 'click', 'tbody td:not(:first-child)', function (e) {
                    editor.inline( this );
                } );

                $('#example').dataTable(
                    {
                        "scrollY":        "600px",
                        "scrollCollapse": true,
                        tableTools: {
                            sRowSelect: "os",
                            sRowSelector: 'td:first-child',
                            aButtons: [
                                { sExtends: "editor_create", editor: editor },
                                { sExtends: "editor_edit",   editor: editor },
                                { sExtends: "editor_remove", editor: editor }
                            ]
                        }

                    }
                );
            }
        });

        return customerListView;
    });