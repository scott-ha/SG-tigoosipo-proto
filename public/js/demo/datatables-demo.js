// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable-ex').DataTable(
    {
    dom: 'Bfrtip',
    buttons: ['excel', 'print']
  }
);
});
