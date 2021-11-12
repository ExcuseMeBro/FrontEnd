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
  // 4. fadeIn() va fadeOut()
  $("#fadein").click(function (){
    $("#image").fadeIn(2000);
  });
  $("#fadeout").click(function (){
    $("#image").fadeOut(2000);
  });
  // 5. fadeTo() function
  $("#clickme").click(function (){
    $("#ppp").fadeTo(2000, 0.4);
  });
});
