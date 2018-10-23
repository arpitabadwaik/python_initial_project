
// call method for showing values in page(table)
$(document).ready(function() {
    load_landing_table();
});


// To allow to enter only numers in model and not string
function isNumberKey(evt, element){
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if ((charCode == 46 && charCode > 31 && (charCode < 48 || charCode > 57)) ||  charCode == 46 )
     return false;

  return true;
}

// when open model old values should be clear and error class should also be clear
function add_schedule_modal(){
    $('#add_schedule_form').trigger('reset');
    $('.show_error').removeClass('has-error').addClass('has-success');
    $('#add_schedule').modal('show');
}


// when click on submit button of model (validations)
$('#save_bill_schedule_btn').click(function(){

   flag = true;

// store id in variables
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


// validations
   if(bill_month == ''){
        $('#error_billMonth').addClass('has-error');
        flag = false;
   }else{
        $('#error_billMonth').removeClass('has-error').addClass('has-success');
   }

   if(sub_division == ''){
        $('#error_zone_add').addClass('has-error');
        flag = false;
   }else{
        $('#error_zone_add').removeClass('has-error').addClass('has-success');
   }

   if(cycle == ''){
        $('#error_billCycleCode').addClass('has-error');
        flag = false;
   }else{
        $('#error_billCycleCode').removeClass('has-error').addClass('has-success');
   }

   if(reading_start_date == ''){
        $('#error_startdate').addClass('has-error');
        flag = false;
   }else{
        $('#error_startdate').removeClass('has-error').addClass('has-success');
   }

   if(reading_end_date == ''){
        $('#error_enddate').addClass('has-error');
        flag = false;
   }else{
        $('#error_enddate').removeClass('has-error').addClass('has-success');
   }

   if(validation_start_date == ''){
        $('#error_vstartdate').addClass('has-error');
        flag = false;
   }else{
        $('#error_vstartdate').removeClass('has-error').addClass('has-success');
   }

   if(validation_end_date == ''){
        $('#error_venddate').addClass('has-error');
        flag = false;
   }else{
        $('#error_venddate').removeClass('has-error').addClass('has-success');
   }

   if(punching_start_date == ''){
        $('#error_punchingstartdate').addClass('has-error');
        flag = false;
   }else{
        $('#error_punchingstartdate').removeClass('has-error').addClass('has-success');
   }

   if(punching_end_date == ''){
        $('#error_punchingenddate').addClass('has-error');
        flag = false;
   }else{
        $('#error_punchingenddate').removeClass('has-error').addClass('has-success');
   }

   if(pre_audit_date == ''){
        $('#error_auditdate').addClass('has-error');
        flag = false;
   }else{
        $('#error_auditdate').removeClass('has-error').addClass('has-success');
   }

   if(bill_generation_date == ''){
        $('#error_billdate').addClass('has-error');
        flag = false;
   }else{
        $('#error_billdate').removeClass('has-error').addClass('has-success');
   }

   if(bill_printing_start_date == ''){
        $('#error_printstartdate').addClass('has-error');
        flag = false;
   }else{
        $('#error_printstartdate').removeClass('has-error').addClass('has-success');
   }

   if(bill_printing_end_date == ''){
        $('#error_printcompdate').addClass('has-error');
        flag = false;
   }else{
        $('#error_printcompdate').removeClass('has-error').addClass('has-success');
   }

   if(bill_distribution_start_date == ''){
        $('#error_diststartdate').addClass('has-error');
        flag = false;
   }else{
        $('#error_diststartdate').removeClass('has-error').addClass('has-success');
   }

   if(bill_distribution_end_date == ''){
        $('#error_distenddate').addClass('has-error');
        flag = false;
   }else{
        $('#error_distenddate').removeClass('has-error').addClass('has-success');
   }

   if(incentive_date == ''){
        $('#error_incentivedate').addClass('has-error');
        flag = false;
   }else{
        $('#error_incentivedate').removeClass('has-error').addClass('has-success');
   }

   if(due_date == ''){
        $('#error_duedate').addClass('has-error');
        flag = false;
   }else{
        $('#error_duedate').removeClass('has-error').addClass('has-success');
   }


// save data in database when all values are entered (when all validations are done successfully)
   if (flag == false){
        return false
   }else{
        $.ajax({
            type: 'POST',
            url: '/save-data/',
            data: $('#add_schedule_form').serialize(),
            success: function(response){
                $('#add_schedule').modal('hide');
                bootbox.alert('Data saved successfully',function(){
                    load_landing_table()
                });
            },
            error: function(response){
                bootbox.alert('Error');
            }
        });
   }

});


//showing data in page(table)
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

         // "ordering": false, disable column ordering
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

     //handle datatable custom tools
    $('#schedule_table_tools > li > a.tool-action').on('click', function() {
        var action = $(this).attr('data-action');
        oTable.DataTable().button(action).trigger();
    });
}


// Open particular model when click on edit button (using ID)
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
            $('#data_id').val(id);
        },
        error: function(response){
            bootbox.alert('Error');
        },
        beforeSend: function() {
            $('#add_schedule_form').trigger('reset');
            $('.show_error').removeClass('has-error').addClass('has-success');
        },
        complete: function(){
            $('#add_schedule').modal('show');
        }
    });
}