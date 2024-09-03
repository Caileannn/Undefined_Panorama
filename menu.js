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
    if(!showNetwork){
        const ddbutton = document.querySelector('.dropdown')
        ddbutton.style.display = "inline"
        showNetwork = true
        showList = false
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
    if(!showList){
        //turn off list
        const ddbutton = document.querySelector('.dropdown')
        ddbutton.style.display = "none"
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
    const arrow_img = document.querySelector('.dropdown-arrow')
    arrow_img.style.webkitFilter = "invert(0)"
    if(menuOpen){
        //close
        arrow_img.src = "./icons/arrow-up.svg"
        menuOpen = false
    }else{
        arrow_img.src = "./icons/arrow-down-up.svg"
        menuOpen = true
    }
    


    //dropdown_arrow.textContent = dropdown_arrow.textContent.includes('˅') ? "˄" : "˅"
}

function restartSim(){
    window.location.reload();
}