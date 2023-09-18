const all = document.querySelector('.range-block .all')
const tl = document.querySelector('.range-block .tl')
const tr = document.querySelector('.range-block .tr')
const br = document.querySelector('.range-block .br')
const bl = document.querySelector('.range-block .bl')
const bw = document.querySelector('.range-block .bw')
const bc = document.querySelector('.range-block .bc')
const bgc = document.querySelector('.range-block .bgc')
const block = document.querySelector('.block')
const textarea = document.querySelector('textarea')
const border = document.getElementById('border')
const width = document.querySelector('.wd')
const trX = document.querySelector('.trX')
const trY = document.querySelector('.trY')
const rt = document.querySelector('.rt')
const height = document.querySelector('.height')


// Universal Function
const radiusText = () => {
    textarea.innerText = `border-radius: ${tl.value}px ${tr.value}px ${br.value}px ${bl.value}px;`
    textarea.style.color = 'blue' 
    textarea.style.fontSize = '15px'
    textarea.style.textTransform = 'uppercase'
}

function setBorderRadius() {
    block.style.border = `${bw.value}px solid ${bc.value}`
    block.style.background = `${bgc.value}`
    block.style.borderRadius = `${tl.value}px ${tr.value}px ${br.value}px ${bl.value}px`
    block.style.width = `${width.value}px`
    block.style.height = `${height.value}px`

    radiusText()
}

function transform() {
    block.style.transform = `translateX(${trX.value}%)`+`translateY(${trY.value}%)`+ `rotate(${rt.value}deg)` 

    radiusText()
}

// All Borders
all.addEventListener('input', function () {
    block.style.borderRadius = `${all.value}px`

    tl.value = all.value
    tr.value = all.value
    bl.value = all.value
    br.value = all.value

    radiusText()
})

height.addEventListener('input', setBorderRadius)

rt.addEventListener('input', transform)

trX.addEventListener('input', transform)
trY.addEventListener('input', transform)

width.addEventListener('input', setBorderRadius)

tl.addEventListener('input', setBorderRadius, radiusText())

// Top Right
tr.addEventListener('input', setBorderRadius, radiusText)

// Bottom Right
br.addEventListener('input', setBorderRadius, radiusText())

// Bottom Left
bl.addEventListener('input', setBorderRadius, radiusText())

// Border Styles
bw.addEventListener('input', setBorderRadius)
bc.addEventListener('input', setBorderRadius)
bgc.addEventListener('input', setBorderRadius)

const borderStyle = () => {
    block.style.borderStyle = border.value
    radiusText()
}

border.addEventListener('input', borderStyle)