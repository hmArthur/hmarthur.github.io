window.onload = function(){

   const prevBtn = document.querySelector('.prev');
   const nxtBtn = document.querySelector(".next");
   const sbutton = document.querySelector(".saiba-mais-button-1");
   const image = document.querySelector(".principal-div");

    prevBtn.addEventListener("click",function(){
      prevSlide();
    });


   nxtBtn.addEventListener("click",function(){
    prevSlide();
   });

   sbutton.addEventListener("click", () => {
    if(image.classList.contains("real-jaya")) {
       window.location.href = "http://jayastudioresidence.com.br/";
    }

    if(image.classList.contains("real-ravi")) {
       return;
    }
   })

  setInterval(prevSlide, 9000)

   function prevSlide() {
       const image = document.querySelector(".principal-div");
       const imagemP = document.querySelector(".s-logo-jaya");
       const texto = document.querySelector(".principal-text");
       const father = document.querySelector(".father-div");
       const Fcirle = document.querySelector(".circle-1");
       const Scirle = document.querySelector(".circle-2");
    //    const Dcircle = document.querySelector(".circle-3")
       const left = document.querySelector(".left-arrow");
       const right = document.querySelector(".right-arrow");
       const sbutton = document.querySelector(".saiba-mais-button-1");


       if(image.classList.contains("real-ravi")) {

            image.classList.add("transition");
            image.classList.add("jaya");
            image.classList.remove("real-ravi");
            father.classList.remove("real-ravi")
            father.classList.add("real-jaya")
            texto.classList.add("invisible");
            texto.classList.remove("principal-text");
            Fcirle.style.background = "var(--branco)";
            Scirle.style.background = "none";
            // Dcircle.style.background = "var(--branco)"
            left.style.margin = "35% 15px auto 0"
            right.style.margin = "35% 0  auto 15px"

            setTimeout(()=> {    
                imagemP.src = `./../style/images/LogoJaya_2 3.png`;
                imagemP.style.width = "250px";
                imagemP.style.height = "200px";
                imagemP.style.filter = "invert(1)";
                texto.classList.remove("invisible");
                texto.classList.add("principal-text");
                sbutton.value = "veja mais";

            },500)
    
            setTimeout(()=> { 
                image.classList.remove("transition");
                image.classList.remove("jaya");
                image.classList.add("real-jaya");
            }, 1500)

          return;
       }


//        if(image.classList.contains("real-santi")) {

//         image.classList.add("transition");
//         image.classList.add("jaya");
//         image.classList.remove("real-santi");
//         father.classList.remove("real-santi")
//         father.classList.add("real-jaya")
//         texto.classList.add("invisible");
//         texto.classList.remove("principal-text");
//         Fcirle.style.background = "var(--branco)";
//         Scirle.style.background = "none";
//         Dcircle.style.background = "none"
//         left.style.margin = "35% 15px auto 0"
//         right.style.margin = "35% 0  auto 15px"

//         setTimeout(()=> {    
//             imagemP.src = `./../style/images/LogoJaya_2 3.png`;
//             imagemP.style.width = "250px";
//             imagemP.style.height = "200px";
//             imagemP.style.filter = "invert(1)";
//             texto.classList.remove("invisible");
//             texto.classList.add("principal-text");
//             sbutton.value = "saiba mais";

//         },500)

//         setTimeout(()=> { 
//             image.classList.remove("transition");
//             image.classList.remove("jaya");
//             image.classList.add("real-jaya");
//         }, 1500)

//       return;
//    }

       if(image.classList.contains("real-jaya")) {
        
        image.classList.add("transition");
        image.classList.add("ravi");
        image.classList.remove("real-jaya");
        father.classList.add("real-ravi")
        father.classList.remove("real-jaya")
        texto.classList.add("invisible");
        texto.classList.remove("principal-text");
        Fcirle.style.background = "none";
        Scirle.style.background = "var(--branco)";
        // Dcircle.style.background = "none"
        left.style.margin = "75% 15px auto 0"
        right.style.margin = "75% 0  auto 15px"

        setTimeout(()=> {
            texto.classList.remove("invisible");
            texto.classList.add("principal-text");
            imagemP.src = `./../style/images/Component 19 (2).png`;
            imagemP.style.width = "200px";
            imagemP.style.height = "280px";
            sbutton.href = "";
            sbutton.value = "esgotado";
        }, 500)

        setTimeout(()=> { 
            image.classList.remove("transition");
            image.classList.add("real-ravi");
            image.classList.remove("ravi");
        }, 1500)


        return;
       }
   }
    
}