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
        dropdown_btn.classList.toggle('hide')
        svg_body.classList.remove('hide')
        listView.classList.remove('show')
        node_slider_container.classList.remove('hide')
        list_slider_container.classList.remove('hide')
        document.getElementById('hub-icon').src = "./icons/list.svg"
        pageState = true
    }else{
        viewList()
    }
    
}

function viewList(){
    console.log("list")
    
    if(!showList){
        //turn off list
        dropdown_btn.classList.toggle('hide')
        showNetwork = false
        showList = true
        svg_body.classList.add('hide')
        listView.classList.add('show')
        node_slider_container.classList.add('hide')
        list_slider_container.classList.add('hide')
        document.getElementById('hub-icon').src = "./icons/list.svg"
        pageState = false
    }
    
}

function toggleLvl1List(){


    if(showAllTerms){
        showLvl2Terms = false
        showLvl3Terms = false
        showLvl1Terms = false
        showAllTerms = false;
        term_slider_btn_all.classList.remove('off')
        term_slider_btn_2.classList.remove('off')
        term_slider_btn_3.classList.remove('off')
    }
    
    if(showLvl1Terms){
        showLvl1Terms = false
        term_slider_btn_1.classList.remove('off')
        
    }else{
        showLvl1Terms = true
        term_slider_btn_1.classList.add('off')
        
    }
    contentList()
}

function toggleLvl2List(){
    if(showAllTerms){
        showLvl2Terms = false
        showLvl3Terms = false
        showLvl1Terms = false
        showAllTerms = false;
        term_slider_btn_all.classList.remove('off')
        term_slider_btn_1.classList.remove('off')
        term_slider_btn_3.classList.remove('off')
    }
    if(showLvl2Terms){
        showLvl2Terms = false
        term_slider_btn_2.classList.remove('off')
    }else{
        showLvl2Terms = true
        term_slider_btn_2.classList.add('off')
        
    }
    contentList()
}

function toggleLvl3List(){
    if(showAllTerms){
        showLvl2Terms = false
        showLvl3Terms = false
        showLvl1Terms = false
        showAllTerms = false;
        term_slider_btn_all.classList.remove('off')
        term_slider_btn_1.classList.remove('off')
        term_slider_btn_2.classList.remove('off')
    }
    if(showLvl3Terms){
        showLvl3Terms = false
        term_slider_btn_3.classList.remove('off')
        
    }else{
        showLvl3Terms = true
        term_slider_btn_3.classList.add('off')

    }
    contentList()
}

function toggleAllTerms(){
    if(showAllTerms){
        showAllTerms = false
        //term_slider_btn_all.classList.add('off')
    }else{
        showAllTerms = true
        showLvl1Terms = true
        showLvl2Terms = true
        showLvl3Terms = true
        term_slider_btn_all.classList.add('off')
        term_slider_btn_1.classList.remove('off')
        term_slider_btn_2.classList.remove('off')
        term_slider_btn_3.classList.remove('off')
    }
    contentList()
}

function toggleDropDownMenu(){
    dropdown_menu_list.classList.toggle('show')
    

    dropdown_arrow.textContent = dropdown_arrow.textContent.includes('˅') ? "˄" : "˅"
}