let body = document.querySelector('body')
let color1 = document.querySelector('#color1')
let color2 = document.querySelector('#color2')
let css = document.querySelector('#css')
let random = document.querySelector('#random')

function setGradient() {
    body.style.backgroundImage = `linear-gradient(to right, ${color1.value}, ${color2.value})`
    css.textContent = `${body.style.backgroundImage};`
}

function generateRandomColor() {
    let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
    let color = '#'
    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * hex.length)]
    }
    return color
}

color1.addEventListener('input', setGradient)
color2.addEventListener('input', setGradient)
random.addEventListener('click', function() {
    color1.value = generateRandomColor()
    color2.value = generateRandomColor()
    setGradient()
})

setGradient()