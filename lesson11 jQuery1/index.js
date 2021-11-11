$(document).ready(function (){
    // Barcha elementlarni target qilish
    $("*").css("background", "green");
    // Element yordamida target qilish
    $("h1").css("font-size", "15px");
    // Elementlarni class yordamida tutish
    $(".box").css("background-color", "red");
    $(".box").css("width", "250px");
    $(".box").css("height", "250px");
    // Elementlarni id yordamida tutish
    $("#test").css("color","yellow");
    $("#test").css("font-size","250%");
    // Elementni ichidagi matnga qarab style berish
    $( "div:contains('John')" ).css( "text-decoration", "underline" );
    // Juft emelentlarni tutish
    $("tr:even" ).css( "color", "#bbf" );
    // Toq emelentlarni tutish
    $("tr:odd" ).css( "color", "red" );
    // Inputlar bilan ishlash
    /* https://api.jquery.com/category/selectors/ */
    // Elementdan textni olish
    console.log($("h1").text());
    // Form elementlaridan qiymatini olish
    console.log($(":text").val());

});