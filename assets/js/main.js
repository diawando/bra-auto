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

// filtre les voitures 
 $('.tri-wrapper .btn-group button').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    
    var filterValue = $(this).attr('data-filter');
    var filteredChildren = $('.grid').children(filterValue);
    var numFilteredChildren = filteredChildren.length;
    $('.grid').children().hide();
    filteredChildren.show();
    $('.num-filtered-children').text(numFilteredChildren);
  });

   // tab activation code

  // Initialize active tab index variable
  let activeTabIndex = 1;

  // Add click event listeners to the next and previous links
  const nextLinks = document.querySelectorAll('.next-tab');
  const prevLinks = document.querySelectorAll('.prev-tab');

  nextLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
          const activeTab = document.querySelector('.tab-pane.active');
          const nextTab = document.querySelector(event.target.hash);
          const nextTabLink = document.querySelector(`a[href="${event.target.hash}"]`);
          const prevTabIndex = activeTabIndex;

          activeTab.classList.remove('show', 'active');
          nextTab.classList.add('show', 'active');
          nextTabLink.classList.add('active');
          if (prevTabIndex !== 0) {
              const prevTabLink = document.querySelectorAll('.nav-tabs .nav-link')[prevTabIndex - 1];
              prevTabLink.classList.add('completed');
          }
          activeTabIndex++;
      });
  });

  prevLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
          const activeTab = document.querySelector('.tab-pane.active');
          const prevTab = document.querySelector(event.target.hash);
          const prevTabLink = document.querySelector(`a[href="${event.target.hash}"]`);

          activeTab.classList.remove('show', 'active');
          prevTab.classList.add('show', 'active');
          prevTabLink.classList.add('active');
          if (activeTabIndex !== 0) {
              const prevTabLink = document.querySelectorAll('.nav-link')[activeTabIndex - 1];
              prevTabLink.classList.remove('completed');
          }
          activeTabIndex--;
      });
  });

});

  