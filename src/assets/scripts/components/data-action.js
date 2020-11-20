const form = document.querySelector('#signup')
const creditCardInput = document.querySelector('#credit-card')
const termsCheck = document.querySelector('#terms')
const veggieSelect = document.querySelector('#veggie')

// holds form data on input/change eventListener
const formData = {};
for (let input of [creditCardInput, termsCheck, veggieSelect]) {
  input.addEventListener('change', ({ target }) => {
    const { name, type, value, checked } = target;
    formData[name] = type === 'checkbox' ? checked : value;
  })
}

// creditCardInput.addEventListener('input', (e) => {
//   //console.log('CC Changed ', e.data)
//   formData['cc'] = e.target.value
// })
// veggieSelect.addEventListener('input', (e) => {
//   //console.log('Veggie Changed ', e.data)
//   formData['veggie'] = e.target.value
// })
// termsCheck.addEventListener('input', (e) => {
//   //console.log('Checkbox', e.data)
//   formData['terms'] = e.target.checked;
// })


form.addEventListener('submit', function (e) {
  //console.log(e);
  e.preventDefault();
  console.log('cc: ' + creditCardInput.value);
  console.log('terms: ' + termsCheck.checked);
  console.log('veggie: ' + veggieSelect.value);

})

