$(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 50) {
          $(`header`).addClass(`changeColorNav`)
       }
       if ($(this).scrollTop() < 50) {
          $(`header`).removeClass(`changeColorNav`)
       }
    });
 });