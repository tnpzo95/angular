
$(function(){
    $("#books_div > .book").on("click", "button", function (e) {
        var price = $(this).closest(".book").data("price");
        var author = $(this).closest(".book").data("author");
        var details = $("<p> Price : "+ price + "<br> Author : <b>"+ author +"</b>, </p>");
        $(this).closest(".book").append(details);
        $(this).closest(".book").css({ "background-color": "yellow" });
        $(this).remove();
        e.stopPropagation();
    });
    $("div.book").on("click", function(){
        alert("Click on see details");  
    });


    $("#books_completed > .book").on("click", "button", function (event) {
        var purchased = $(this).closest(".book").data("purchased");
        var author = $(this).closest(".book").data("author");
        var myRating = $(this).closest(".book").data("myRating");
        var details = $("<p> Purchased : " + purchased + "<br> Author : <b>" + author + "</b> <br> MyRating :" + myRating + " </p>");
        $(this).closest(".book").append(details);
        $(this).closest(".book").css({ "background-color": "yellow" });
        $(this).remove();
        event.stopPropagation();
    });

});
