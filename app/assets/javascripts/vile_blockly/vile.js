$(function(){
  $(".private-checkbox").bootstrapSwitch({
    onText: '<i class="fa fa-icon fa-eye-slash"></i>',
    offText: '<i class="fa fa-icon fa-eye"></i>',
    onSwitchChange: function(){
      checkbox = this;
      $.ajax({
        url: '/vile_program/update_hidden',
        type: 'POST',
        data: { hidden: $(checkbox).is(':checked'),
                id: $(checkbox).data('vileProgramId')},
        success: function(){

        },
        error: function(){
          swal('Error', 'Something went wrong', 'error');
        }
      });
    }
  });
})