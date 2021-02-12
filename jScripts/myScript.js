$(document).ready(function () {
    $(".about").click(function () {
     
        $('#exampleModal').modal('show')
    });

   // $(".howToPlay").click(function () {
     //   $("#howToPlayDiv").toggle();
   // });

    $(".closeAbout").click(function () {
        $("#aboutDiv").hide();
        $("#gameIframe")[0].contentWindow.focus();
    });

    $(".closeHowToPlay").click(function () {
        $("#howToPlayDiv").hide();
        $("#gameIframe")[0].contentWindow.focus();
    });
});
