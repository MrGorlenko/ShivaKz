$(document).ready(function(){

        $("#menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });

        $("#menu-box").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });



        (function() {

            var hamburger = {
                navToggle: document.querySelector('.nav-toggle'),
                nav: document.querySelector('nav'),
        
                doToggle: function(e) {
                    e.preventDefault();
                    this.navToggle.classList.toggle('expanded');
                    this.nav.classList.toggle('expanded');
                }
            };
        
            hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
        
        }());
        

    });
    