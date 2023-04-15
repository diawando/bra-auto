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


// Recuperer la valeur du range button dans location details et l'afficher
const rangeInput = document.getElementById('rangeInput');
  const rangeValue = document.getElementById('rangeValue');
  
  // Afficher la valeur par défaut au chargement de la page
  rangeValue.textContent = `${rangeInput.value} GNF`;

  rangeInput.addEventListener('mouseup', () => {
    const value = rangeInput.value;
    rangeValue.textContent = `${value} GNF`;
  });