const button = document.querySelectorAll('.button')
const body = document.querySelector('body')

button.forEach(function (button) {
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'grey') {
            body.style.background = 'grey'
        }
        if (e.target.id === 'blue') {
            body.style.background = 'blue'
        }
        if (e.target.id === 'white') {
            body.style.background = 'white'
        }
        if (e.target.id === 'yellow') {
            body.style.background = 'yellow'
        }
        
    })
})
