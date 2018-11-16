(function($) {
  'use strict'; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top - 54
          },
          500,
          'easeInOutExpo'
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  $('.lab-button').click(function() {
    console.log('lab');
    ga('send', 'event', 'clicks', 'lab');
  });

  $('.js-location-collab').click(function() {
    // Pfingstweidstrasse 10, 8005 Zürich
    console.log('collab');
    $('#mapCollab').show('fast');
    $('#mapSchweizer').hide();
    $('#mapMulter').hide();
    $('#mapVaadian').hide();
    fbq('track', 'ViewContent', {
      value: 'collab'
    });
    ga('send', 'event', 'clicks', 'collab');
  });

  $('.js-location-schweizergasse').click(function() {
    // Schweizergasse 11, 8001 Zürich
    console.log('schweizergasse');
    $('#mapCollab').hide();
    $('#mapSchweizer').show('fast');
    $('#mapMulter').hide();
    $('#mapVaadian').hide();
    fbq('track', 'ViewContent', {
      value: 'schweizergasse'
    });
    ga('send', 'event', 'clicks', 'schweizergasse');
  });

  $('.js-location-multergasse').click(function() {
    // Multergasse 74, 9000 St. Gallen
    $('#mapCollab').hide();
    $('#mapSchweizer').hide();
    $('#mapMulter').show('fast');
    $('#mapVaadian').hide();
    fbq('track', 'ViewContent', {
      value: 'multergasse'
    });
    ga('send', 'event', 'clicks', 'multergasse');
  });

  $('.js-location-vaadianstrasse').click(function() {
    // Vaadianstrasse 11, 9000 St. Gallen
    $('#mapCollab').hide();
    $('#mapSchweizer').hide();
    $('#mapMulter').hide();
    $('#mapVaadian').show('fast');
    fbq('track', 'ViewContent', {
      value: 'vaadianstrasse'
    });
    ga('send', 'event', 'clicks', 'vaadianstrasse');
  });

  $('#mapCollab').hide();
  $('#mapSchweizer').hide();
  $('#mapMulter').hide();
  $('#mapVaadian').hide();

  $('.select-color > li').click(function() {
    $(this)
      .parent()
      .parent()
      .parent()
      .hide();
    $('#' + $(this).attr('data-id')).show();
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($('#mainNav').offset().top > 100) {
      $('#mainNav').addClass('navbar-shrink');
    } else {
      $('#mainNav').removeClass('navbar-shrink');
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $('.navbar').addClass('d-none');
  });
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $('.navbar').removeClass('d-none');
  });
})(jQuery); // End of use strict
