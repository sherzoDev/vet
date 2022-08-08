var elOpenModalBtn = document.querySelector(".js-modal-open");
var elOverlay = document.querySelector(".overly");
var elOverlayModal = document.querySelector(".modal");
var elCloseModalBtn = document.querySelector(".js-modal-close");

elOpenModalBtn.addEventListener("click", function () {
    elOverlay.classList.add("modal--open");
})

elCloseModalBtn.addEventListener("click", function () {
    elOverlay.classList.remove("modal--open");
})