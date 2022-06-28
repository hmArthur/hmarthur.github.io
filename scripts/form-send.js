 (() => {
     let form = document.querySelector(".send-emails"),
           nome = document.querySelector(".nome"),
           email = document.querySelector(".email"),
           whatsapp = document.querySelector(".telefone"),
           mensagem = document.querySelector(".mensagem");
    
     let canSend = true;


     form.addEventListener("submit", (event) => {
         event.preventDefault();

         emailjs.send("service_lczt775","template_q4avvqs",{
             from_name: `${nome.value}`,
             to_name: `${whatsapp.value}`,
             message: ` mensagem: ${mensagem.value}`,
             reply_to: `${email.value}`,
         }).then(() => {
                 window.location.reload();
         })
     })
 })();