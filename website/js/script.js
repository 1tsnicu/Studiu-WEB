
// Comentariu: Așteaptă ca întregul document HTML să fie complet încărcat înainte de a rula codul jQuery
$(document).ready(function () {
    // Comentariu: Selectează elementele cu clasa CSS ".fabtheme-owl-1" și aplică funcția OwlCarousel asupra lor
    $(".fabtheme-owl-1").owlCarousel({
        // Comentariu: Dezactivează lățimea automată pentru elemente
        autoWidth: false,
        // Comentariu: Numărul de elemente afișate într-un singur rând
        items: 1,
        // Comentariu: Activează bucla continuă a carouselului
        loop: true,
        // Comentariu: Marginile între elementele carouselului
        margin: 10,
        // Comentariu: Activează redarea automată a carouselului
        autoplay: true,
        // Comentariu: Timpul de așteptare între schimbările automate ale elementelor carouselului
        autoplayTimeout: 3000,
        // Comentariu: Pauzează redarea automată atunci când cursorul este deasupra elementelor carouselului
        autoplayHoverPause: true,
        // Comentariu: Activează clasa de răspunsivitate pentru a ajusta configurarea în funcție de dimensiunea ecranului
        responsiveClass: true,
        // Comentariu: Configurarea răspunsivă a elementelor carouselului
        responsive: {
            // Comentariu: Configurarea pentru ecrane mai mici de 576px
            0: {
                items: 1,
                nav: false
            },
            // Comentariu: Configurarea pentru ecrane între 576px și 991px
            576: {
                items: 1,
                nav: false
            },
            // Comentariu: Configurarea pentru ecrane între 992px și 1199px
            992: {
                items: 1,
                nav: false
            },
            // Comentariu: Configurarea pentru ecrane mai mari de 1200px
            1200: {
                items: 1,
                nav: false
            }
        }
    });
});

$(document).ready(function(){
    // Comentariu: Așteaptă ca documentul să fie complet încărcat și pregătit pentru manipulare
    $(".fabtheme-owl-2").owlCarousel({
        // Comentariu: Inițializează plugin-ul Owl Carousel pentru elementele cu clasa fabtheme-owl-2
        items: 3, // Comentariu: Numărul de elemente care vor fi afișate pe ecran
        loop: true, // Comentariu: Activează bucla infinită pentru a derula în mod continuu
        margin: 10, // Comentariu: Spațiul între elementele caruselului
        responsiveClass: true, // Comentariu: Activează clasa de răspunsivitate a caruselului
        responsive: {
            // Comentariu: Definirea răspunsivității caruselului în funcție de dimensiunea ecranului
            0: {
                items: 1, // Comentariu: Pentru ecranele mai mici de 576px, se afișează un singur element
                nav: true // Comentariu: Activează butoanele de navigare (anterior/următor)
            },
            576: {
                items: 1,
                nav: true
            },
            992: {
                items: 3, // Comentariu: Pentru ecranele mai mari sau egale cu 992px, se afișează 3 elemente
                nav: true
            },
            1200: {
                items: 3,
                nav: true
            }
        }
    });
    // Comentariu: Găsește elementul cu clasa owl-carousel și atribuie-l variabilei owl
    var owl = $('.owl-carousel');
    // Comentariu: Atașează un eveniment de mousewheel pe etapa owl-stage a caruselului
    owl.on('mousewheel', '.owl-stage', function (e) {
        // Comentariu: Verifică direcția în care a fost rotită roata mouse-ului
        if (e.deltaY>0) {
            owl.trigger('next.owl'); // Comentariu: Derulează la următorul element în carusel
        } else {
            owl.trigger('prev.owl'); // Comentariu: Derulează la elementul anterior în carusel
        }
        e.preventDefault(); // Comentariu: Previne acțiunea implicită a mouse-ului
    });
});
/* END OF OWL CAROUSEL */

/* COUNTER UP */
// Comentariu: Inițializarea funcției counterUp când documentul este complet încărcat
$(document).ready(function () {
    // Comentariu: Selectarea tuturor elementelor cu clasa "fabtheme-counter-up" și aplicarea funcției counterUp
    $('.fabtheme-counter-up').counterUp({
        // Comentariu: Setarea unei întârzieri de 10 milisecunde între creșterea fiecărui număr
        delay: 10,
        // Comentariu: Setarea timpului total pentru animația de creștere a numerelor la 5000 milisecunde (5 secunde)
        time: 5000,
        // Comentariu: Setarea unei compensații de 100 pixeli pentru a porni animația când elementul este la o anumită distanță de vizualizarea utilizatorului
        offset: 100,
        // Comentariu: Setarea valorii de la care să înceapă animația (în acest caz, de la 0)
        beginAt: 0,
        // Comentariu: Funcția de formatare a numerelor - înlocuiește virgulele cu puncte
        formatter: function (n) {
            return n.replace(/,/g, '.');
        }
    });
});
/* END OF COUNTER UP */

/* WOW */
// Comentariu: Acest cod folosește biblioteca WOW.js pentru a adăuga efecte de animație la elementele când sunt rulate în vizualizarea utilizatorului.
$(document).ready(function(){
    // Comentariu: Așteaptă ca întregul document să fie complet încărcat înainte de a executa codul.
    new WOW().init();
    // Comentariu: Inițializează biblioteca WOW.js, ceea ce determină ca toate elementele cu clasa specificată să primească efecte de animație atunci când devin vizibile în fereastra vizualizatorului.
});
/* END OF WOW */

/* NAVIGATION BAR */
// Comentariu: Așteaptă ca întregul document să fie încărcat înainte de a rula codul JavaScript
$(document).ready(function(){
    // Comentariu: Atașează un eveniment de derulare (scroll) la fereastra browserului
    $(window).scroll(function() {
        // Comentariu: Verifică dacă utilizatorul a derulat fereastra peste 10 pixeli
        if ($(this).scrollTop() > 10 ) {
            // Comentariu: Adaugă clasa 'solid' la elementul cu id-ul 'chaseatlantic-navbar'
            $('#chaseatlantic-navbar').addClass('solid');
        } else {
            // Comentariu: Elimină clasa 'solid' de la elementul cu id-ul 'chaseatlantic-navbar'
            $('#chaseatlantic-navbar').removeClass('solid');
        }
        // Comentariu: Verifică dacă utilizatorul a derulat la începutul paginii
        if ($(this).scrollTop() <= 0 ) {
            // Comentariu: Ascunde elementul cu id-ul 'chaseatlantic-navbar'
            $('#chaseatlantic-navbar').hide();
        }
        // Comentariu: Altfel, dacă utilizatorul nu se află la începutul paginii
        else{
            // Comentariu: Afișează elementul cu id-ul 'chaseatlantic-navbar'
            $('#chaseatlantic-navbar').show();
        }
    });
});

/* SMOOTH SCROLL */

// Așteaptă ca întregul document să fie încărcat înainte de a începe execuția codului jQuery
$(document).ready(function(){
    // Adaugă derulare lină (smooth scrolling) pentru toate link-urile (<a>)
    $("a").on('click', function(event) {
        // Verifică dacă link-ul are un hash valid
        if (this.hash !== "") {
            // Oprește comportamentul implicit al link-ului
            event.preventDefault();
            // Obține hash-ul asociat link-ului
            var hash = this.hash;
            // Animație de derulare lină până la poziția specificată de hash
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                // Actualizează hash-ul în bara de adrese după derulare
                window.location.hash = hash;
            });
        }
    });
});

/* END OF SMOOTH SCROLL */
/* END OF NAVIGATION BAR */

/* SCROLL TOP */
// Funcție care se activează când se derulează pagina
$(window).scroll(function() {
    // Verifică dacă s-a depășit o anumită distanță de la partea de sus a paginii
    if ($(this).scrollTop() > 50 ) {
        // Dacă s-a depășit distanța specificată, afișează butonul pentru revenirea la început
        $('.fabtheme-scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        // Dacă nu s-a depășit distanța specificată, ascunde butonul pentru revenirea la început
        $('.fabtheme-scrolltop').stop(true, true).fadeOut();
    }
});

// Funcție care se activează când se face clic pe un element cu clasa "fabtheme-scroll"
$(function(){
	$(".fabtheme-scroll").click(function(){
		// Realizează o animație pentru a reveni la partea de sus a paginii
		$("html,body").animate({
			// Scrolează până la poziția specificată, cu o anumită durată și un efect specific
			scrollTop:$(".fabtheme-thetop").offset().top - 0
		},3000, 'easeInOutExpo'); // Durata animației și efectul de easing
		return false; // Evită comportamentul implicit al link-ului
	})
});
/* END OF SCROLL TOP */
/* END OF CUSTOM JS */
