(() => {

    if(screen.width > 768) {
        const caixa = document.querySelector(".first")

        const caixa2 = document.querySelector(".second")
    
        caixa.addEventListener("mouseover",(event) => {
            const obj = event.target;
            const text = document.querySelector(".text-jaya")
            const p = document.querySelector(".text-jaya-p");

        })
    
        caixa.addEventListener("mouseout",(event) => {
            const obj = event.target;
            const text = document.querySelector(".text-jaya")
            const p = document.querySelector(".text-jaya-p");

    
    
        })
    
        caixa2.addEventListener("mouseover",(event) => {
            const obj = event.target;
            const text = document.querySelector(".text-ravi")
    
    
    
        })
    
        caixa2.addEventListener("mouseout",(event) => {
            const obj = event.target;
            const text = document.querySelector(".text-ravi")
    
        
    
        })
    }
})();