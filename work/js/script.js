$( document ).ready(function() {
    $("#modal-11").on("hidden.bs.modal", function (e) {
        var video = document.getElementById("myVideoPlayer");
        video.pause();
        video.currentTime = 0;
    });
});