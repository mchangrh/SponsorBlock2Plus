function waitForVideo() {
    disableAutoplay();
    const videoElem = document.querySelector('video');
    if (videoElem && Number.isFinite(videoElem?.duration)) {
        if (videoElem.currentTime > 1) return;
        const segment = videoElem.duration;
        videoElem.currentTime = segment;
        videoElem.pause();
        alert("Skipped filler!");
    }
    else setTimeout(waitForVideo, 1000);
}
waitForVideo();
function disableAutoplay() { // disable autoplay to prevent infinite autoplay
    const autonav = document.querySelector(".ytp-autonav-toggle-button")
    if (autonav) {
        if (autonav?.ariaChecked === "true") autonav.click()
    } else setTimeout(disableAutoplay, 1000)
}
document.addEventListener("yt-navigate-finish", waitForVideo)

