let preScrollbar = window.scrollY;
window.addEventListener("scroll", () => {
   const scrollbar = window.scrollY;
    if(scrollbar > preScrollbar) {
        document.getElementById("navbar").style.display = "none";
    } else {
        document.getElementById("navbar").style.display = "grid";
    }
    ;});