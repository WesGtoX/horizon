                    // ====================================================
// ===================== SERVICES =====================
// ====================================================
//animate on scroll
$(function() {

    new WOW().init();
});

// ====================================================
// ======================= WORK =======================
// ====================================================

$(function() {
    //popup on click
    $('#work .img-wrapper').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{
            enabled:true
        }
    });
});

// ====================================================
// ======================= TEAM =======================
// ====================================================
$(function() {

    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 2
            },
            // breakpoint from 768 up
            768 : {
                items: 3
            },
        }
    });
});

// ====================================================
// =================== TESTIMONIALS ===================
// ====================================================
$(function() {

    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
    });
});

// ====================================================
// ======================= STATS ======================
// ====================================================
$(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

// ====================================================
// ===================== CLIENTS ======================
// ====================================================
$(function() {

    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 3
            },
            // breakpoint from 768 up
            768 : {
                items: 5
            },
            // breakpoint from 992 up
            992 : {
                items: 6
            }
        }
    });
});

// ====================================================
// ==================== NAVIGATION ====================
// ====================================================
// Show/Hide transparent black navigation
$(function() {

    $(window).scroll(function() {

        if($(this).scrollTop() < 50) {
            //hide nav
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();

        } else {
            //show nav
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
        }
    })
});

// Smooth scrolling
$(function() {

    $("a.smooth-scroll").click(function(event) {

        event.preventDefault();

        // get/return id like #about, #work, #team, etc...
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});

// Close mobile menu on click
$(function() {

    $(".navbar-collapse ul li a").on("click touch", function() {

        $(".navbar-toggler").click();
    });
});

// ====================================================
// ==================== jVectorMap ====================
// ====================================================

// $(function(){
//     $('#world-map').vectorMap({
//         map: 'world_mill'
//     });
// });
// 

$(function(){
    $('#world-map').vectorMap({
      map: 'world_mill',
      regionStyle: {
        initial: {
            fill: '#151515',
            "fill-opacity": 1,
            stroke: 'none',
            "stroke-width": 0,
            "stroke-opacity": 1
        },
        hover: {
            "fill-opacity": 0.8,
            cursor: 'pointer'
        },
      },
      scaleColors: ['#C8EEFF', '#0071A4'],
      normalizeFunction: 'polynomial',
      hoverOpacity: 0.7,
      hoverColor: false,
      markerStyle: {
        initial: {
          fill: '#F8E23B',
          stroke: '#383f47',
        }
      },
      backgroundColor: '#383f47',
      markers: [
        {latLng: [-31.06, -24.96], name: 'Vatican City'},
        {latLng: [43.73, 7.41], name: 'Monaco'},
        {latLng: [-0.52, 166.93], name: 'Nauru'},
        {latLng: [-8.51, 179.21], name: 'Tuvalu'},
        {latLng: [43.93, 12.46], name: 'San Marino'},
        {latLng: [47.14, 9.52], name: 'Liechtenstein'},
        {latLng: [7.11, 171.06], name: 'Marshall Islands'},
        {latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
        {latLng: [3.2, 73.22], name: 'Maldives'},
        {latLng: [35.88, 14.5], name: 'Malta'},
        {latLng: [12.05, -61.75], name: 'Grenada'},
        {latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
        {latLng: [13.16, -59.55], name: 'Barbados'},
        {latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
        {latLng: [-4.61, 55.45], name: 'Seychelles'},
        {latLng: [7.35, 134.46], name: 'Palau'},
        {latLng: [42.5, 1.51], name: 'Andorra'},
        {latLng: [14.01, -60.98], name: 'Saint Lucia'},
        {latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
        {latLng: [1.3, 103.8], name: 'Singapore'},
        {latLng: [1.46, 173.03], name: 'Kiribati'},
        {latLng: [-21.13, -175.2], name: 'Tonga'},
        {latLng: [15.3, -61.38], name: 'Dominica'},
        {latLng: [-20.2, 57.5], name: 'Mauritius'},
        {latLng: [26.02, 50.55], name: 'Bahrain'},
        {latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'}
      ]
    });
  });