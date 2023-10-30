let preScrollbar = window.scrollY;
window.addEventListener("scroll", () => {
   const scrollbar = window.scrollY;
    if(scrollbar > preScrollbar) {
        document.querySelector("#navbar").style.top = "-60px";
    } else {
        document.querySelector("#navbar").style.top = "0";
    }
    ;});
    window.addEventListener("scroll", function (e) {
        console.log(window.scrollY);
      });
      
      // Event listener "scroll" sur window
      
      // Récupérer valeur du scroll en Y : window.scrollY
      
      // Savoir quand on monte ou descend 
      
      // Si on monte, Faire apparaitre la navbar : navbar.style.top = 0px;
      
      // Si on descend, Faire disparaitre la navbar : navbar.style.top = -60px;