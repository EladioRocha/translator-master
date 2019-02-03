// ==================== CONSTANTS ==================== //
const spanishText = document.querySelector('#spanish-text');
const englishText = document.querySelector('#english-text');
const btnTranslate = document.querySelector('#translate');
const progressBar = document.querySelector('#progress-bar');

// ==================== FUNCTIONS ==================== //
function sendText() {
    showPreloaderEffect();
    changePlaceholderText();
    const text = verifyIfExistsText();
    fetch(`/translate/${text}`)
      .then(res => res.json())
      .then(resp => {
          console.log(resp);
          englishText.innerText = resp.text;
          hidePreloaderEffect();
      });
}

function showPreloaderEffect() {
    progressBar.classList.remove('hide');
}

function hidePreloaderEffect() {
    progressBar.className += ' hide'; 
}

function changePlaceholderText() {
    englishText.setAttribute('placeholder', 'Tu texto se esta traduciendo');
}

function verifyIfExistsText() {
    return spanishText.value === '' ? spanishText.value = 'Hola mundo' : spanishText.value; 
}

// ==================== LISTENERS ==================== //
btnTranslate.addEventListener('click', sendText)