$(document).ready(function () {

jQuery.datetimepicker.setLocale('en');
jQuery('#datedepart').datetimepicker({
    timepicker:true,
    format:'d.m.Y H:i',
    minDate:'-1970/01/01',//yesterday is minimum date(for today use 0 or -1970/01/01)

});
jQuery('#datedefin').datetimepicker({
    timepicker:true,
    format:'d.m.Y H:i',
    minDate:'-1970/01/01',//yesterday is minimum date(for today use 0 or -1970/01/01)

});


 $('.tri-wrapper .btn-group button').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    
    var filterValue = $(this).attr('data-filter');
    var filteredChildren = $('.grid').children(filterValue);
    var numFilteredChildren = filteredChildren.length;
    $('.grid').children().hide();
    filteredChildren.show();
    $('.num-filtered-children').text(numFilteredChildren);
  });

});

  