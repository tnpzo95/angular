$("#btn_main").on("click",function(){
    $(".dope").text("this is replacement text")
      $("#btn_main").val("double click me !")
});
//$("#btn_main").on("click", function () {
//    alert($(".dope").text())
//});
$("#btn_main").on("dblclick", function () {
    $(".dope").text("You'll learn how to replace me")
    $("#btn_main").val("Replace")
});
$("#btn_new").on("click", function () {
    $(".dope").html('<b class="cool">HDFSDFSDSDFSFSDF<b>')
});