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
        node_slider_container.classList.remove('hide')
        list_slider_container.classList.remove('hide')
        document.getElementById('hub-icon').src = "./icons/list.svg"
    }else{
        viewList()
    }
    
}

function viewList(){
    console.log("list")
    
    if(!showList){
        showNetwork = false
        showList = true
        svg_body.classList.add('hide')
        listView.classList.add('show')
        node_slider_container.classList.add('hide')
        list_slider_container.classList.add('hide')
        document.getElementById('hub-icon').src = "./icons/star.svg"
    }
    
}

function toggleLvl1List(){
    showAllTerms = false;
    if(showLvl1Terms){
        showLvl1Terms = false
    }else{
        showLvl1Terms = true
    }
    contentList()
}

function toggleLvl2List(){
    showAllTerms = false;
    if(showLvl2Terms){
        showLvl2Terms = false
    }else{
        showLvl2Terms = true
    }
    contentList()
}

function toggleLvl3List(){
    showAllTerms = false;
    if(showLvl3Terms){
        showLvl3Terms = false
    }else{
        showLvl3Terms = true
    }
    contentList()
}

function toggleAllTerms(){
    if(showAllTerms){
        showAllTerms = false
    }else{
        showAllTerms = true
        showLvl1Terms = true
        showLvl2Terms = true
        showLvl3Terms = true
    }
    contentList()
}