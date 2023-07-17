/* ChatGPT - Efeito de digitação estilo Chatgpt */
const text = "Lynn Margulis (1938-2011) nasceu em Chicago, Illinois, e foi uma renomada bióloga e cientista evolucionista dos Estados Unidos. Ela é conhecida por suas contribuições para a teoria endossimbiótica, que propõe que as células eucarióticas se originaram de uma simbiose entre diferentes organismos procariontes.";
const typewriter = document.getElementById('typewriter');
let index = 0;
function type() {
  if (index < text.length) {
    typewriter.innerHTML = text.slice(0, index) + '<span class="blinking-cursor">|</span>';
    index++;
    setTimeout(type, Math.random() * 150 + 50);
  } else {
    typewriter.innerHTML = text.slice(0, index) + '<span class="blinking-cursor">|</span>';
  }
}

/* Inicia digitação estilo ChatGPT quando o elemento estiver visível */
const options = {
  rootMargin: '0px',
  threshold: 1.0
};
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      type()
    }
  });
}, options);
const element = document.querySelector('#typewriter')
observer.observe(element);

  
  
