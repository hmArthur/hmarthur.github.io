let burger = document.getElementById('burger'),
    button = document.querySelector(".button-for-phone"),
	 nav    = document.getElementById('main-nav'),
     voltar = document.querySelector(".voltar"),
     voltar1 = document.querySelector(".voltar1"),
     voltar2 = document.querySelector(".voltar2");

voltar.addEventListener("click", function(e) {
    burger.classList.remove('is-open');
	nav.classList.remove('is-open');
})

voltar1.addEventListener("click", function(e) {
    burger.classList.remove('is-open');
	nav.classList.remove('is-open');
})

voltar2.addEventListener("click", function(e) {
    burger.classList.remove('is-open');
	nav.classList.remove('is-open');
})

button.addEventListener('click', function(e){
	burger.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});

burger.addEventListener('click', function(e){
	burger.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});
