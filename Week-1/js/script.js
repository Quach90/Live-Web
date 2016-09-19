$(document).ready(function() {

    $("#myVideo").on("loadedmetadata", function() {
        var myVideo = document.getElementById("myVideo");

        var duration = myVideo.duration;

        var sizeConstant = duration / myVideo.videoWidth;

        var clicking = false;

        var startClick = 0;
        var startVid = 0;

        $('#myVideo').mousedown(function() {
            console.log("ja");
            startClick = event.pageX;
            startVid = myVideo.currentTime;
            clicking = true;
        });

        $(document).mouseup(function() {
            clicking = false;
        })

        $(document).mousemove(function() {
            if (clicking == false) return;

            // Mouse click + moving logic here
            console.log((event.pageX - startClick) * sizeConstant);
            myVideo.currentTime = startVid + ((event.pageX - startClick) * (sizeConstant/2));
        })

        $(document).keydown(function(e) {
            var code = (e.keyCode ? e.keyCode : e.which);
            if (code == 37) {
                myVideo.currentTime -= 0.1;
            } else if (code == 39) {
                myVideo.currentTime += 0.1;
            } else if (code == 32) {
                if (myVideo.paused) {
                    // If the video is paused, call play
                    myVideo.play();
                } else {
                    // Otherwise, pause it
                    myVideo.pause();
                }
            }
        });

        $("#playBtn").click(function() {
            myVideo.play();
        })

        $("#pauseBtn").click(function() {
            myVideo.pause();
        })

        $("#playback").on("input", function() {
            console.log($("#playback").val());
            myVideo.playbackRate = $("#playback").val();
        })


    })
});
