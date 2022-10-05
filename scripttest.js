var termDB = [
    {term:"Trade War", level: 1, relations: ["Oil","Aviation","Covid-19"], image: "./icons/WME8.gif", image_size: 3, title: 'Trade War', term_text: 'hello world'},
    {term:"Oil", level: 2, relations: ["EU","Aviation","Ireland"], image: "./icons/oil.svg", image_size: 3},
    {term:"Aviation", level: 2, relations: [], image: "./icons/plane.svg", image_size: 6},
    {term:"Covid-19", level: 2, relations: ["EU","Ireland"], image: "./icons/1F3B1.svg", image_size: 3},
    {term:"EU", level: 3, relations: ["Covid-19"], image: "./icons/EUflag.svg", image_size: 3},
    {term:"Ireland", level: 3, relations: [], image: "", image_size: 3},
    {term:"AI", level: 3, relations: ["Apple"], image: "./icons/CNN.svg", image_size: 3},
    {term:"Apple", level: 3, relations: ["AI"], image: "./icons/iphone.svg", image_size: 3},
    
]

var links = [
    {source: "Trade War", target: "Oil"}
]

testFetch()


async function testFetch(){
    generate_links()
}


var x = document.querySelector('.overlaytest')

async function addModalTest(d){
    x = document.querySelector('.overlaytest')
    console.log("clicked")
    var text = termDB[0].term_text
    var header = termDB[0].title

    //Split Text
    var shortText = text.substr(0, 100)
    var longText = text.substr(101, text.length)

    //Title Text
    const header_text = document.getElementById('cont-header')
    header_text.innerHTML = header

    //Init Paragraph
    var paraContainer = document.getElementById('content-paragraph')
    paraContainer.innerHTML = shortText


    //Read More Paragraph
    text = "hello world"
    const readMoreText = document.createElement('span')
    readMoreText.className = "read-more-text"
    readMoreText.innerHTML = longText
    paraContainer.appendChild(readMoreText)


    //Read More Button
    var br = document.createElement('br')
    paraContainer.appendChild(br)
    text = ">> Read More"
    const readMoreButton = document.createElement('span')
    readMoreButton.className = "read-more-btn"
    readMoreButton.innerHTML = text
    paraContainer.appendChild(readMoreButton)

    x.style.display = "inline"
    modal = true;
    
}



const parentContainer = document.querySelector('.read-more-cont')

parentContainer.addEventListener('click', event=>{
    const current = event.target
    const isReadMoreBtn = current.className.includes('read-more-btn')

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text')
    const currentDots = event.target.parentNode.querySelector('.dots-cont')
    currentText.classList.toggle('read-more-text--show')

    current.textContent = current.textContent.includes('>> Read More') ? "<< Read Less" : ">> Read More"
})


const exitButton = document.getElementById('cont-header-close')

exitButton.addEventListener('click', event=>{
    hideModal()
})


async function hideModal(){
    var ot = document.getElementById("overlaytest")
    ot.className = "otclose"
    await delay(250)
    x.style.display = "none"
    ot.className = "overlaytest"
}
function delay(ms){
    return new Promise((resolve)=>setTimeout(resolve,ms))
  }
