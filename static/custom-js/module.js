$(document).ready(function() {
    load_landing_table();
});


function add_schedule_modal(){
    $('#add_schedule').modal('show');
}

$('#save_bill_schedule_btn').click(function(){

   bill_month = $('#bill_month').val();
   sub_division = $('#sub_division').val();
   cycle = $('#cycle').val();
   reading_start_date = $('#startdate').val();
   reading_end_date = $('#enddate').val();
   validation_start_date = $('#vstartdate').val();
   validation_end_date = $('#venddate').val();
   punching_start_date = $('#punchingstartdate').val();
   punching_end_date = $('#punchingenddate').val();
   pre_audit_date = $('#auditdate').val();
   bill_generation_date = $('#billdate').val();
   bill_printing_start_date = $('#printstartdate').val();
   bill_printing_end_date = $('#printcompdate').val();
   bill_distribution_start_date = $('#diststartdate').val();
   bill_distribution_end_date = $('#distenddate').val();
   incentive_date = $('#incentivedate').val();
   due_date = $('#duedate').val();

   if(bill_month != ''){
        if(sub_division != ''){
            if(cycle != ''){
                if(reading_start_date != ''){
                    if(reading_end_date != ''){
                        if(validation_start_date != ''){
                            if(validation_end_date != ''){
                                if(punching_start_date != ''){
                                    if(punching_end_date != ''){
                                        if(pre_audit_date != ''){
                                            if(bill_generation_date != ''){
                                                if(bill_printing_start_date != ''){
                                                    if(bill_printing_end_date != ''){
                                                        if(bill_distribution_start_date != ''){
                                                            if(bill_distribution_end_date != ''){
                                                                if(incentive_date != ''){
                                                                    if(due_date != ''){
                                                                        $.ajax({
                                                                            type: 'POST',
                                                                            url: '/save-data/',
                                                                            data: $('#add_schedule_form').serialize(),
                                                                            success: function(response){
                                                                                bootbox.alert('Data saved successfully');
                                                                            },
                                                                            error: function(response){
                                                                                bootbox.alert('Error');
                                                                            }
                                                                        });
                                                                    }else
                                                                        $('#error_duedate').addClass('has-error');
                                                                }else
                                                                   $('#error_incentivedate').addClass('has-error');
                                                            }else
                                                                $('#error_distenddate').addClass('has-error');
                                                        }else
                                                            $('#error_diststartdate').addClass('has-error');
                                                    }else
                                                        $('#error_printcompdate').addClass('has-error');
                                                }else
                                                    $('#error_printstartdate').addClass('has-error');
                                            }else
                                                $('#error_billdate').addClass('has-error');
                                        }else
                                            $('#error_auditdate').addClass('has-error');
                                    }else
                                        $('#error_punchingenddate').addClass('has-error');
                                }else
                                    $('#error_punchingstartdate').addClass('has-error');
                            }else
                                $('#error_venddate').addClass('has-error');
                        }else
                            $('#error_vstartdate').addClass('has-error');
                    }else
                        $('#error_enddate').addClass('has-error');
                }else
                    $('#error_startdate').addClass('has-error');
            }else
               $('#error_billCycleCode').addClass('has-error');
        }else
           $('#error_zone_add').addClass('has-error');
   }else
        $('#error_billMonth').addClass('has-error');

});

function load_landing_table() {
    var table = $('#schedule_table');
    var oTable = table.dataTable({
        "destroy": true,
        "ajax": "/load-datatable/",
        "columns": [
            { "data": "cycle" },
            { "data": "start_date" },
            { "data": "end_date" },
            { "data": "bill_distribution_start_date" },
            { "data": "bill_distribution_end_date" },
            { "data": "action" },
        ],

        "columnDefs": [
                {"targets": 2, "orderable": false},
                {"targets": 3, "orderable": false},
                {"targets": 4, "orderable": false}
        ],

        buttons: [{ extend: 'print',
             className: 'btn dark btn-outline' },
            { extend: 'copy',
              className: 'btn red btn-outline' },
            { extend: 'pdf',
              className: 'btn green btn-outline' },
            { extend: 'excel',
              className: 'btn yellow btn-outline' },
            { extend: 'csv',
              className: 'btn purple btn-outline' },
            { extend: 'colvis',
              className: 'btn dark btn-outline',
              text: 'Columns' }
        ],
        // setup responsive extension: http://datatables.net/extensions/responsive/
        responsive: false,

        //"ordering": false, disable column ordering
        //"paging": false, disable pagination

        "order": [
            [1, 'asc']
        ],

        "lengthMenu": [
            // change per page values here
            [50, 100,200,500],
            [50, 100,200,500]
        ],
        // set the initial value
        "pageLength": 50,
    });
    // handle datatable custom tools
    $('#schedule_table_tools > li > a.tool-action').on('click', function() {
        var action = $(this).attr('data-action');
        oTable.DataTable().button(action).trigger();
    });
}

function open_modal(id){
    $.ajax({
        type: 'GET',
        url: '/edit-data/',
        data: {'id' : id},
        success: function(response){
            $('#bill_month').val(response.bill_month);
            $('#sub_division').val(response.sub_division);
            $('#cycle').val(response.cycle);
            $('#startdate').val(response.reading_start_date);
            $('#enddate').val(response.reading_end_date);
            $('#vstartdate').val(response.validation_start_date);
            $('#venddate').val(response.validation_end_date);
            $('#punchingstartdate').val(response.punching_start_date);
            $('#punchingenddate').val(response.punching_end_date);
            $('#auditdate').val(response.pre_audit_date);
            $('#billdate').val(response.bill_generation_date);
            $('#printstartdate').val(response.bill_printing_start_date);
            $('#printenddate').val(response.bill_printing_end_date);
            $('#diststartdate').val(response.bill_distribution_start_date);
            $('#distenddate').val(response.bill_distribution_end_date);
            $('#incentivedate').val(response.incentive_date);
            $('#duedate').val(response.due_date);
        },
        error: function(response){
            bootbox.alert('Error');
        },
        complete: function(){
            $('#add_schedule').modal('show');
        }
    });
}