let scrollbar = window.scrollY;
window.addEventListener("scroll", e => {
    scrollbar = window.scrollY;
    if(scrollbar > 100) {
        document.getElementById("navbar").style.display = "none";
    } else {
        document.getElementById("navbar").style.display = "grid";
    }
    ;});