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



// Récupérer la case à cocher et l'élément à masquer
const checkbox = document.getElementById('memezone');
const destination = document.getElementById('destination');

// Ajouter un écouteur d'événement pour la case à cocher
checkbox.addEventListener('change', function() {
  // Si la case est cochée, masquer l'élément de destination
  if (checkbox.checked) {
    destination.style.display = 'none';
  } else{
    destination.style.display = 'flex';
  }
});
