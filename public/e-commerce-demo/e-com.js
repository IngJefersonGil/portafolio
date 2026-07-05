const inputQuantity = document.querySelector('.input-quantity')
const btnIncrement = document.querySelector('#increment')
const btnDecrement = document.querySelector('#decrement')

let valueByDefault = parseInt(inputQuantity.value)

// Clicks funtions

btnIncrement.addEventListener('click', () =>{
    valueByDefault += 1
    inputQuantity.value = valueByDefault
})

btnDecrement.addEventListener('click', () =>{
    if(valueByDefault == 1){
        return
    }
    valueByDefault -= 1
    inputQuantity.value = valueByDefault
})

// Toggle
// Constants Toggle Titles

const toggleDescription = document.querySelector('.title-description')
const toggleAdditionalInformation = document.querySelector('.title-additional-information')
const toggleReviews = document.querySelector('.title-reviews')

//Constants Text Content
const contentDescription = document.querySelector('.text-description')
const contentdditionalInformation = document.querySelector('.text-additional-information')
const contentReviews = document.querySelector('.text-reviews')


// Toggle funtions

toggleDescription.addEventListener('click', () =>{
    contentDescription.classList.toggle('hidden');
});
toggleAdditionalInformation.addEventListener('click', () =>{
    contentdditionalInformation.classList.toggle('hidden');
});
toggleReviews.addEventListener('click', () =>{
    contentReviews.classList.toggle('hidden');
});