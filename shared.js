const backdrop = document.querySelector('.backdrop')
const modal = document.querySelector('.modal')
const modalNoButton = document.querySelector('.modal__action--negative')
const toggleButton = document.querySelector('.toggle-button')
const mobileNav = document.querySelector('.mobile-nav')
const selectPlanButtons = document.querySelectorAll('.plan button')

// console.dir(backdrop)
// console.dir(selectPlanButtons)

//Loop over the array
for(let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        // modal.style.display = 'block'
        // backdrop.style.display = 'block'
        // modal.className = 'open' // this will overwrite the class list
        modal.classList.add('open')
        backdrop.classList.add('open')

    })
}

//Excercise

//Select the button and let the modal screen closable
// Add event listener to the No button

backdrop.addEventListener('click', function(){
    // mobileNav.style.display = 'none'
    mobileNav.classList.remove('open')
    closeModal()
})

modal.addEventListener('click', closeModal)

function closeModal() {
    // backdrop.style.display = 'none'
    // modal.style.display = 'none'
    modal.classList.remove('open')
    backdrop.classList.remove('open')

}



toggleButton.addEventListener('click', function () {
    // mobileNav.style.display = 'block'
    // backdrop.style.display = 'block'
    mobileNav.classList.add('open')
    backdrop.classList.add('open')
})