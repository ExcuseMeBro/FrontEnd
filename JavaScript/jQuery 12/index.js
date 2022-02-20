$(document).ready(() => {
  //1. blur() event
 /*  $("input").blur((kkk) => { 
        // alert("Hello world!");
        //TODO: Inputdagi ma`lumotni olib alertga chiqaring
        // alert($(this).val());
        console.log($('input').val());   
  }); */
  //2. change() event
 /*  $("input").change(function () { 
        // alert("Hello world!");
        console.log($(this).val());
        //TODO: Inputdagi ma`lumotni olib Yuqori registerda yozib beruvchi dastur tuzing
    }); */
  //3. click() event
  /* $(".btn").click(function () { 
        alert($("input").val());
        // console.log($("input").val());
        //TODO: Inputdagi ma`lumotni olib Yuqori registerda yozib beruvchi dastur tuzing
    }); */
  //4. dblclick() event
  /* $(".btn").dblclick(function () { 
        // alert($("input").val().toUpperCase());
        $(".table").text($("input").val().toUpperCase());
        // console.log($("input").val());
    }); */
  //5. focus() event
  /* $("input").focus(function () {
      $("span").css("display", "inline").fadeOut(2000);
  }); */
  //6. focusin() and focusout() events
  /* $("input").focusin(function () { 
        $(".table").css("background-color", "green");
    }); 
    $("input").focusout(function () { 
        $(".table").css("background-color", "red");
    }); */
  //7. hover() event
  /* $(".table").hover(function () {
        $(this).css("background", "red");
    }, function () {
        $(this).css("background", "green");
    }); */
  //8. keydown() event
  /* $("input").keydown(function () { 
        $(".table").text($(this).val());
    }); */
  //9. keypress() event
    /* $("input").keypress(function () { 
          $(".table").text($(this).val());
      }); */
  //10. keyup() event
  /* $("input").keyup(function () { 
        $(".table").text($(this).val());
    }); */
  //11. load() event
  /* $(".btn").click(function (){
        $(".loadFile").load("index.html");
    });
  $(".btn2").click(function (){
        $(".loadFile").css("display", "none");
    }); */
  //12. after() event
  // $(".btn").click(function (){
  //       $(".table").after('<h1 style="color: red">Hello World!</h1>');
  //   });
  //13. mouseup() and mousedown() events
  /* $('.table').mouseup(function (){
        $(this).after('<h1 style="color: red">hello World!</h1>');
    });
    $('.table').mousedown(function (){
        $(this).after('<h1 style="color: green">hello World!</h1>');
    }); */
  //14. mouseenter() event
  /* $('.table').mouseenter(function (){
    $(this).after('<h1 style="color: green">hello World!</h1>');
  }); */
  //15. mouseleave() event
  /* $('.table').mouseleave(function (){
        $(this).after('<h1 style="color: red">hello World!</h1>');
    }); */
  //16. mousemove() event
  /* $(document).mousemove(function (event){
        // console.log(event);
        // $('.table').text("X = " + event.pageX + " - Y = " + event.pageY);
        $('.table').css("width", event.pageX);
        $('.table').css("height", event.pageY);
    }); */
   /*  $(document).mousedown(function (gg){
      $('.windowsSelector').css("left", gg.pageX);
      $('.windowsSelector').css("top", gg.pageY);
      $(document).mousemove(function (event){
        $('.windowsSelector').css("width", event.pageX-gg.pageX);
        $('.windowsSelector').css("height", event.pageY-gg.pageY);
    });
  }); */
  //17. mouseover() event {CSSdagi hover effectini jQuery ko`rinishi}
  /* $(".table").mouseover(function () {
    $(this).css("width", "250px");
    $(this).css("height", "250px");
  });
  $(".table").mouseleave(function () {
    $(this).css("width", "150px");
    $(this).css("height", "150px");
  }); */
  
  //18. on() event
 /*  $(".table").on("mouseleave click", function () {
    $(this).css("background", "red");
  }); */
});