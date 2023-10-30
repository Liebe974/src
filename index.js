let preScrollbar = window.scrollY;
window.addEventListener("scroll", () => {
   const scrollbar = window.scrollY;
    if(scrollbar > preScrollbar) {
        document.querySelector("#navbar").style.display = "none";
    } else {
        document.querySelector("#navbar").style.display = "grid";
    }
    ;});