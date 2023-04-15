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


  // *** Gestion des données du formulaire de la page index.html et location.html
  // Récupération des éléments HTML de la page index.html
const form = document.querySelector('form');
const lieuPriseEnCharge = form.querySelector('select[name="lieu-prise-en-charge"]');
const memeZone = form.querySelector('input[name="memezone"]');
const madestination = form.querySelector('select[name="destination"]');
const dateDepart = form.querySelector('input[name="datedepart"]');
const dateFin = form.querySelector('input[name="datefin"]');
const chauffeur = form.querySelector('input[name="a-un-chauffeur"]');

// Récupération des éléments HTML de la page location.html
const formItineraire = document.querySelector('#form-itineraire');
const lieuPriseEnChargeLocation = formItineraire.querySelector('select[name="lieu-prise-en-charge"]');
const memeZoneLocation = formItineraire.querySelector('input[name="memezone"]');
const destinationLocation = formItineraire.querySelector('select[name="destination"]');
const dateDepartLocation = formItineraire.querySelector('input[name="datedepart"]');
const dateFinLocation = formItineraire.querySelector('input[name="datefin"]');
const chauffeurLocation = formItineraire.querySelector('input[name="a-un-chauffeur"]');
const modifierBtn = document.querySelector('#modifier-btn');

// Remplissage des champs avec les valeurs par défaut de la page index.html
lieuPriseEnChargeLocation.value = lieuPriseEnCharge.value;
memeZoneLocation.checked = memeZone.checked;
destinationLocation.value = madestination.value;
dateDepartLocation.value = dateDepart.value;
dateFinLocation.value = dateFin.value;
chauffeurLocation.checked = chauffeur.checked;

// Désactivation des champs
lieuPriseEnChargeLocation.disabled = true;
memeZoneLocation.disabled = true;
destinationLocation.disabled = true;
dateDepartLocation.disabled = true;
dateFinLocation.disabled = true;
chauffeurLocation.disabled = true;

// Ajout d'un gestionnaire d'événement pour le bouton "Modifier"
modifierBtn.addEventListener('click', () => {
  if (modifierBtn.textContent === 'Modifier') {
    modifierBtn.textContent = 'Valider';
    lieuPriseEnChargeLocation.disabled = false;
    memeZoneLocation.disabled = false;
    destinationLocation.disabled = false;
    dateDepartLocation.disabled = false;
    dateFinLocation.disabled = false;
    chauffeurLocation.disabled = false;
  } else {
    modifierBtn.textContent = 'Modifier';
    lieuPriseEnChargeLocation.disabled = true;
    memeZoneLocation.disabled = true;
    destinationLocation.disabled = true;
    dateDepartLocation.disabled = true;
    dateFinLocation.disabled = true;
    chauffeurLocation.disabled = true;

    // Mise à jour des valeurs des champs avec les nouvelles valeurs modifiées
    lieuPriseEnChargeLocation.value = lieuPriseEnCharge.value;
    memeZoneLocation.checked = memeZone.checked;
    destinationLocation.value = destination.value;
    dateDepartLocation.value = dateDepart.value;
    dateFinLocation.value = dateFin.value;
    chauffeurLocation.checked = chauffeur.value;
  }
})