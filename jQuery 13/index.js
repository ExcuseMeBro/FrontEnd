$(document).ready(function () {
  // 1. animate() function
  $("#btn1").click(function () {
    $(".box").animate({ height: "400px" });
    $(".box").animate({ width: "400px" });
  });
  $("#btn2").click(function () {
    $(".box").animate({ height: "200px" });
    $(".box").animate({ width: "200px" });
  });
  // 2. clearQueue() function
  $("#play").click(function () {
    $(".box2").animate({ height: "500px" }, 2000);
    $(".box2").animate({ width: "500px" }, 2000);
    // $(".box2").queue(function (){
    //   $(this).css("background-color", "red");
    //   $(this).dequeue();
    // });
    $(".box2").animate({ height: "200px" }, 2000);
    $(".box2").animate({ width: "200px" }, 2000);
  });
  $("#pause").click(function () {
    $(".box2").clearQueue();
  });
  // 3. delay() function
  $("#playDelay").click(function () {
    $(".box3").delay("fast").fadeIn();
    $(".box4").delay("slow").fadeIn();
    $(".box5").delay(2000).fadeIn();
    $(".box6").delay(3000).fadeIn();
  });
  $("#stop").click(function () {
    $(".box3").stop();
    $(".box4").stop();
    $(".box5").stop();
    $(".box6").stop();
  });
  // 4. fadeIn() va fadeOut()
  $("#fadein").click(function () {
    $("#image").fadeIn(2000);
  });
  $("#fadeout").click(function () {
    $("#image").fadeOut(2000);
  });
  // 5. fadeToggle() function
  $("#fadetoggle").click(function () {
    $("#image").fadeToggle(2000);
  });
  // 6. fadeTo() function
  $("#clickme").click(function () {
    $("#ppp").fadeTo(2000, 0.4);
  });
  // 7. finish() function
  $("#finish").click(function () {
    $(".box2").finish();
  });
  // 8. hide() function
  $("#hide").click(function () {
    $("#kkk").hide();
  });
  // 9. show() function
  $("#show").click(function () {
    $("#kkk").show();
  });
  // 10. slideUp() va slideDown() function
  $("#read-more1").click(function () {
    $("#info").slideDown();
  });
  $("#read-more2").click(function () {
    $("#info").slideUp();
  });
  // TODO: Saytlardagi read more knopkasini yasang
  // slideToggle() function
  $("#read-more3").click(function () {
    $("#info").slideToggle();
  });
  // toggle() function
  $("#read-more4").click(function () {
    $("#info").toggle();
  });
});
