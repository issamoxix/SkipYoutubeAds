if (window.location.hostname == "www.youtube.com") {


    // var skipButton = document.createElement("button")
    // skipButton.id = "skip"
    // skipButton.innerHTML = "Skip"
    // skipButton.style.position = 'fixed';
    // skipButton.style.top = '10%';
    // skipButton.style.right = '10px';
    // skipButton.style.width = '100px';
    // skipButton.style.height = '100px';
    // skipButton.style.zIndex = '100000';
    // skipButton.style.border = 'none';

    // document.body.append(skipButton)

    // document.getElementById("skip").addEventListener("click", skipVideo)
    // function skipVideo() {
    //     var adTime = document.getElementsByClassName("ytp-time-duration")[0].textContent
    //     var adTimeSeconds = timeToCustomSeconds(adTime)
    //     document.querySelector('video.video-stream').currentTime = adTimeSeconds
    //     sendResponse({ message: 'done' })
    //     return true
    // }

    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        // var adTime = document.getElementsByClassName("ytp-time-duration")[0].textContent
        // var adTimeSeconds = timeToCustomSeconds(adTime)
        document.querySelector('video.video-stream').currentTime += 80
        sendResponse({ message: 'done' })
        return true
    });


    function timeToCustomSeconds(time) {
        const [minutes, seconds] = time.split(':').map(Number);
        const customSeconds = minutes * 60 + seconds + seconds / 1000;
        return customSeconds;
    }


}