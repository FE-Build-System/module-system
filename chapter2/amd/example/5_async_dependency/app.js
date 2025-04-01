require.config({
  paths: {
      "jquery": "https://code.jquery.com/jquery-3.6.0.min",
      "jquery-color": "https://code.jquery.com/color/jquery.color-2.1.2.min"
  }
});

// shim 설정 없이 로드
require(["jquery", "jquery-color"], function($) {
  console.log("jQuery 및 color 플러그인 로드 시도");

  // 테스트: 배경색을 빨간색으로 애니메이션
  $("body").css("backgroundColor", "#fff").animate({ backgroundColor: "#f00" }, 1000);
});