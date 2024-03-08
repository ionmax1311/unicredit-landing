$(document).ready(function () {
  "use strict";
  $(".test-step .next-btn").on("click", function (t) {
    t.preventDefault(),
      $(this).parents(".test-step").fadeOut(500),
      setTimeout(
        function () {
          addBackground();
          $(this).parents(".test-step").next().addClass("active");
        }.bind(this),
        800
      );
  }),
    $(".test-step label.radio").on("click", function (t) {
      setTimeout(
        function () {
          $(this).parents(".test-step").fadeOut(500),
            setTimeout(
              function () {
                addBackground();
                $(this).parents(".test-step").next().addClass("active");
              }.bind(this),
              800
            );
        }.bind(this),
        500
      );
    }),
    $(".next-btn").on("click", function (t) {
      
      t.preventDefault(),
        $(".header1").fadeOut(500),
        setTimeout(
          function () {
            addBackground();
            $(".header1").removeClass("active");
          }.bind(".header1"),
          800
        );
    }),
    $(".test-step .prev-btn").on("click", function (t) {
      t.preventDefault(),
        $(this).parents(".test-step").prev().addClass("active"),
        $(this).parents(".test-step").removeClass("active"),
        $(this).parents(".header1").removeClass("active");
    });

    function addBackground() {
      if (document.querySelector('.quiz-container_has_results').classList.contains('active')) {
        document.querySelector('#form-4401').style.background = "url('assets/images/final-page-bg.png') no-repeat";
        document.querySelector('#form-4401').style.boxShadow = "none";
      }
    }
});
