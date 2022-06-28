(() => {
    window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        const floatingMSG = document.querySelector(".float");
        header.classList.toggle("sticky", window.scrollY > 0);

        if(window.scrollY >= 2101) {
            floatingMSG.style.display = "none";
        }
        
        if(window.scrollY <= 2101) {
            floatingMSG.style.display = "block";
        }
    })

    //button saiba-mais
    const button = document.querySelector(".saiba-mais-button-1");
    const contain = document.querySelector(".arrows");
    const left = document.querySelector(".left-arrow");
    const right = document.querySelector(".right-arrow");

    button.addEventListener("mouseover", () => {
        contain.style.transform = "translateY(-25px)";
        left.style.marginRight = "35px"
        right.style.marginLeft = "35px"
    })

    button.addEventListener("mouseout", () => {
        contain.style.transform = "translateY(0px)";
        left.style.marginRight = "15px";
        right.style.marginLeft = "15px";
    })
})();
