var b1_title
var b1_intro_text
var b1_main_text
var b1_lvl
var related_terms
//var related_term_lvl
var b2_title
var b2_text
var b2_source
var b3_v_name
var b3_v_link
var current_term
var blurActive = false
var related_button
var related_container
var related_term_lvl
var lv_button

// The main content container

async function contentWindow(term_index){
    parseData(term_index)
    checkReadMoreText()
    termFocus()
    appendContent()
    appendContent2()
    appendContentVideo()
    openWindow()
    blurBody()
}

function parseData(term_in){
    b1_title = termDB[term_in].term
    b1_intro_text = termDB[term_in].term_text
    b1_main_text = termDB[term_in].main_text
    b1_lvl = termDB[term_in].level
    related_terms = termDB[term_in].relations
    
    b2_title = termDB[term_in].box_2_title
    b2_source = termDB[term_in].box_2_source
    b2_text = termDB[term_in].box_2_text

    b3_v_link = termDB[term_in].video_link
    b3_v_name = termDB[term_in].video_name

}

async function appendContent(){

    await removeAllRelations()
    var listOfOrderedLinks = []
    //Add title
    const content_header = document.getElementById('cont-header')
    content_header.innerHTML = b1_title

    //Add level
    const content_header_level = document.querySelector('.cont-header-lvl')
    content_header_level.innerHTML = "Level " + b1_lvl

    //Add Introduction Text
    const content_it = document.getElementById('content-paragraph')
    content_it.innerHTML = b1_intro_text

    //Add Main Text
    const test = document.querySelector(".read-more-text")
    const content_main = document.createElement('p')
    test.innerHTML = b1_main_text

    //Create related buttons + bubbleSort 
    for(var y = 0; y < links.length; y++){
        //Sets term to null, every time one is found
        current_term = null
        
        //Checks if Source Matches, -> pushes target term and colour
        if(b1_title == links[y].source.term){
            related_term_lvl = links[y].target.level
            current_term = links[y].target.term
            listOfOrderedLinks.push(current_term)
            
        }
        //Checks if Target Matches, -> pushes source term and colour
        if(b1_title == links[y].target.term){
            related_term_lvl = links[y].source.level
            current_term = links[y].source.term
            listOfOrderedLinks.push(current_term)
        }
    }

    //Orders list BubbleSort Algo
    listOfOrderedLinks = await relatedTermsBubbleSort(listOfOrderedLinks)
    //Creates and Appends DOM elements for related bubbles
    await listOfOrderedLinks.forEach(t => {
         pushTermButton(t)
    })

}

async function appendContent2(){

    const second_container = document.getElementById('suboverlay-second')
    
    //Add title
    const content_header = document.getElementById('cont-header-2')
    content_header.innerHTML = b2_title

    //Add Introduction Text
    const content_source = document.querySelector('.content-paragraph-2-s')
    content_source.innerHTML = b2_source

    //Add Introduction Text
    const content_it = document.querySelector('.content-paragraph-2-b')
    content_it.innerHTML = b2_text

    toggleOffOn(second_container, b2_text)

}

async function appendContentVideo(){
    const video_container = document.getElementById("video-cont")
    const video_overlay = document.getElementById("suboverlay-video")
    //console.log(b3_v_link)
    video_container.src = b3_v_link
    toggleOffOn(video_overlay, b3_v_link)
}

async function removeAllRelations(){
    const rel_buttons_cont = document.querySelector('.related-container')
    rel_buttons_cont.innerHTML = ''
}

async function pushTermButton(ex){
    //Add button for relation

    //Finds the level of a term
    nodeInDB = termDB.filter(c => c.term == ex)
    nodeLevel = nodeInDB[0].level

    related_container = document.querySelector('.related-container')
    related_button = document.createElement('button')
    related_button.className = "related-button"
    related_button.id = ex
    related_button.innerHTML = ex

    related_button.addEventListener('click', event=>{
        console.log(event.target.id)
        //closeWindow()
        rb_filter = (termDB.filter(term => term.term == event.target.id))
        contentWindow(rb_filter[0].index)
        
    })

    //console.log(nodeLevel)
    related_container.appendChild(related_button)
    
    //Change color based on level
    switch(nodeLevel){
        case 1: 
            return related_button.style.color = "blue"
        case 2:
            return related_button.style.color = "#15E115"
        case 3:
            return related_button.style.color = "red"
    }

}

async function closeWindow(){
    content_window.className = "otclose"
    content_X.id = "cont-header-close-close"
    await delay(250)
    content_window.style.display = "none"
    content_window.className = "overlaytest"
    content_X.style.display = "none"
    content_X.id = "cont-header-close"
    svg_body.classList.toggle('blur') 
    blurActive = false
}

function openWindow(){
    
    content_window.style.display = "block"
    content_X.style.display = "block"
}

function delay(ms){
    return new Promise((resolve)=>setTimeout(resolve,ms))
}

function addContentListner(){
    //Read More Event Listener 


parentContainer.addEventListener('click', event=>{
    const current = event.target
    const isReadMoreBtn = current.className.includes('read-more-btn')

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text')
    currentText.classList.toggle('read-more-text--show')

    current.textContent = current.textContent.includes('>> Read More') ? "<< Read Less" : ">> Read More"
})




//Exit Content Window Event Listener

exitButton.addEventListener('click', event=>{
    closeWindow()
})



//Read More Event Listener 


parentContainerArrow.addEventListener('click', event=>{
    const current = event.target
    const isReadMoreBtn = current.className.includes('content-exp')

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.content-paragraph-2-b')
    currentText.classList.toggle('content-paragraph-2-b--show')

    current.textContent = current.textContent.includes('˅') ? "^" : "˅"
})


}

function blurBody(){
    if(!blurActive){
        svg_body.classList.toggle('blur') 
        blurActive = true
    }
    
}

function termFocus(){
    // get the x and y coordinates of term name/image
    // term.name => look for term in SVG 
    var findTerm = b1_title.replace(/ /g,'')
    findTerm = '#xy' + findTerm.replace(/\./g, "") + "-focus"
    var foundTerm = document.querySelector(findTerm)
    var termX = parseInt(foundTerm.getAttribute('x'))
    var termY = parseInt(foundTerm.getAttribute('y'))
    nodeFocus(termX, termY)
}



function toggleOffOn(elem, checkElem){
    checkElem = checkElem.replace(/ /g,'')
    if(checkElem == ""){
        
        elem.classList.add('off')
    }else{
        elem.classList.remove('off')
    }
}

function checkReadMoreText(){
    let readMoreButton = document.querySelector('.read-more-btn')
    if(b1_main_text == ""){
        //hide button
        readMoreButton.classList.add('hide')
    }else{
        readMoreButton.classList.remove('hide')
    }
}

async function fetchComments(term_target){
    term_target = 'test'
    await axios.get('https://sheetdb.io/api/v1/2ybgndb2ws51t/search?term=' + term_target + '&casesensitive=false&sort_by=desc').then( response => {
        console.log(response.data)
    });
}

function newComment(){
    var nameValue = document.getElementById("fname").value;
    var commentValue = document.getElementById("comment").value;
    var termValue = b1_title
    var date = getDateComments()
    axios.post('https://sheetdb.io/api/v1/2ybgndb2ws51t',{
        "data": {"name": nameValue, "comment": commentValue, 'date': date, "term": termValue}
    }).then( response => {
        console.log(response.data);
    });

    return false;
}

function getDateComments(){
    var currentdate = new Date(); 
    var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1) 
    
    return datetime
}

function contentList(){
    //Create new list, sort by A-Z.
    //create a button for every term
    var listArray = termDB
    listArray.sort((a, b) => a.term.localeCompare(b.term))
    listArray.forEach(x => {
        //create a button
        //term name + level
        tempTerm = x.term
        tempLvl = x.level
        
        lv_button = document.createElement('button')
        lv_button.className = "listView-button"
        lv_button.id = tempTerm
        lv_button.innerHTML = tempTerm

        lv_button.addEventListener('click', event=>{
            console.log(event.target.id)
            //closeWindow()
            rb_filter = (termDB.filter(term => term.term == event.target.id))
            contentWindow(rb_filter[0].index)
        })

        //console.log(nodeLevel)
        lv_button_container.appendChild(lv_button)
        
        //Change color based on level
        switch(tempLvl){
            case 1: 
                return lv_button.style.color = "blue"
            case 2:
                return lv_button.style.color = "#15E115"
            case 3:
                return lv_button.style.color = "red"
        }
    })
}
