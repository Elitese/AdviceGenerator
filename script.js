const theUrl = 'https://api.adviceslip.com/advice';
const dice = document.querySelector('.card-dice')
const adviceIdBox = document.querySelector('.card-id span')
const adviceTextBox = document.querySelector('.card-advice span')



dice.addEventListener('click', () => {
  fetch(theUrl).then((response => {
    return response.json();
  })).then(function(data) {
    const adviceId = data.slip.id;
    const adviceText = data.slip.advice;

    adviceIdBox.innerHTML = adviceId;
    adviceTextBox.innerHTML = adviceText;

  })

})

