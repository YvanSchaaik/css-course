const backdrop = document.querySelector('.backdrop')
const modal = document.querySelector('.modal')

//Create an array
const selectPlanButtons = document.querySelectorAll('.plan button')

// console.dir(backdrop)
// console.dir(selectPlanButtons)

//Loop over the array
for(let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        modal.style.display = 'block'
        backdrop.style.display = 'block'
    })
}

//Exsercise

//Select the button and let the modal screen closable
// Add event listener to the No button


//Select the right button and create an array
const modalButton = document.querySelectorAll('.modal button')
console.dir(modalButton)

//Loop over the array
for (let i = 0; i < modalButton.length; i++) {
    modalButton[i].addEventListener('click', function() {
        modal.style.display = 'none'
        backdrop.style.display = 'none'
    })    
}


