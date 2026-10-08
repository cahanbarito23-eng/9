/* TOGGLE SHARE */
const shareBtn = document.getElementById("shareBtn");
const shareLinks = document.getElementById("shareLinks");

shareBtn.onclick = () => {
    window.open("https://asiaso.org/4/b6024d1a5f6e9c5bde228001f8958af9", "_blank")
};
/* UNDANGAN */
function joinWhatsAppGroup() {
    window.open("https://facebook.com/groups/2086697448580065/");
}

function openFacebookPage() {
    window.open("https://facebook.com/groups/2086697448580065/");
}
const video = document.getElementById("video");
const overlay = document.getElementById("videoOverlay");

let overlayClicked = false; 

// Overlay muncul di detik tertentu
video.addEventListener("timeupdate", () => {
    if (video.currentTime >= 1 && !overlayClicked) {
        overlay.classList.add("show");
    }
});

// Klik overlay
overlay.addEventListener("click", () => {
    overlayClicked = true;              
    overlay.style.display = "none";   
    overlay.classList.remove("show");

    // Aksi setelah klik
    window.open("https://s.shopee.co.id/6VOTfAWeht", "_blank");
});




