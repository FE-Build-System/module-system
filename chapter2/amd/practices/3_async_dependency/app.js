require.config({
  paths: {
    jquery: "https://code.jquery.com/jquery-3.6.0.min",
    "jquery-color": "https://code.jquery.com/color/jquery.color-2.1.2.min",
  },
});

require(["jquery", "jquery-color"], function ($) {
  console.log("jQuery 및 color 플러그인 로드 시도");

  $("body")
    .css("backgroundColor", "#fff")
    .animate({ backgroundColor: "#f00" }, 1000);
});
