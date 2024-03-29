$(document).ready(function(){
    $("#button").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        var hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (1300) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({scrollTop: $(hash).offset().top}, 1300, function(){window.location.hash = hash;});
      }
    });
    $("#scrollToTop").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        var hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (1300) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({scrollTop: $(hash).offset().top - 20}, 3500, function(){window.location.hash = hash - 20;});
      }
    });
    $("#scroll1").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        var hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (1300) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({scrollTop: $(hash).offset().top - 40}, 1500, function(){window.location.hash = hash - 40;});
      }
    });
    $("#scroll2").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        var hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (1300) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({scrollTop: $(hash).offset().top - 40}, 2000, function(){window.location.hash = hash - 40;});
      }
    });
    $("#scroll3").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        var hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (1300) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({scrollTop: $(hash).offset().top - 40}, 2500, function(){window.location.hash = hash - 40;});
      }
    });
    $(window).load(function() {
      $("body").removeClass("preload");
      });

});

