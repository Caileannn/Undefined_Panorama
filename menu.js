function toggleRelations(){
    var targetButton = document.getElementById('relationship-slider-button')
    if(linksSwitch){
        linksSwitch = false
        targetButton.classList.add('off')
        link.attr("display", "none");
    }else{
        linksSwitch = true
        targetButton.classList.remove('off')
        link.attr("display", "block");
    }
}

function toggleTerms(){
    var targetButton = document.getElementById('term-slider-button')
    if(linksNames){
        linksNames = false
        targetButton.classList.add('off')
        texts.attr("display", "none");
        nodes.attr("display", "none");
    }else{
        linksNames = true
        targetButton.classList.remove('off')
        texts.attr("display", "block");
        nodes.attr("display", "block");
    }
}

function viewGraph(){
    console.log("show")
    
    if(!showNetwork){
        showNetwork = true
        showList = false
        svg_body.classList.remove('hide')
        listView.classList.remove('show')
    }
    
}

function viewList(){
    console.log("list")
    
    if(!showList){
        showNetwork = false
        showList = true
        svg_body.classList.add('hide')
        listView.classList.add('show')
    }
    
}