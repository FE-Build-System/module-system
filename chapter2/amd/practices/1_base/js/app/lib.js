define(['jquery', 'jquery-color'], function ($) {
  return {
    getBody: function () {
      $("body").css("backgroundColor", "#fff").animate({ backgroundColor: "#f00" }, 1000);
      return $('body');
    }
  }
});