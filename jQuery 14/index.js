$(document).ready(function () {
  // 1. addClass()
  $("#hide").click(function () {
    $(".box").addClass("hidden");
  });
  // 2. after()
  let i = 1;
  $("#add").click(function () {
    $(this).after("<h1>" + i++ + " - element!</h1>");
  });
  // 3. append()
  $("#new").click(function () {
    if ($("#data").val() !== "") {
      $(".report-table ul").append("<li>" + $("#data").val() + "</li>");
      $("#data").val("");
      // Success
      $(".success").show(function () {
        $(this).fadeOut(4000);
      });
    } else {
      // Error
      $(".error").show(function () {
        $(".progress").css("width", "158px");
        $(".progress").animate({ width: 0 }, 3000);
        $(this).fadeOut(4000);
      });
    }
  });
  // 4. appendTo()
  $("#plus").click(function () {
    $("p").appendTo(".box");
  });
  // 5. prop()
  $(":checkbox").change(function () {
    if ($("#red").prop("checked")) {
      $(".box").css("background", "red");
    } else if ($("#green").prop("checked")) {
      $(".box").css("background", "green");
    } else if ($("#blue").prop("checked")) {
      $(".box").css("background", "blue");
    } else {
      $(".box").css("background", "blueviolet");
    }
  });
  // 6. attr()
  $("#get").click(function () {
    $(".box").text($("p").attr("title"));
  });
  // 7. before()
  let j = 1;
  $("#addBefore").click(function () {
    $(this).before('<h1 style="color: red">' + j++ + " - element!</h1>");
  });
  // 8. clone()
  $("#clone").click(function () {
    $(".box").clone().appendTo("body");
  });
  // 9. empty()
  $("#empty").click(function () {
    $(".box").empty();
  });
  // 10. hasClass()
  $("#checkClass").click(function () {
    if ($(".box").hasClass("hidden")) {
      $("h3").text("BOR");
    } else {
      $("h3").text("YO'Q");
    }
  });
  // 11. remove() va closest()
  $(".delete").click(function () {
    $(this).closest("li").remove();
  });
  // 12. toggleClass()
  $(".toggle").click(function () {
    $(".box").toggleClass("hidden");
  });
  // 13. removeClass()
  $(".show").click(function () {
    $(".box").removeClass("hidden");
  });
  // TODO ochilib yopiluvchi siderbar menu yasang!
});
