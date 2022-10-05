function getNodeSize(){

    let nsArray = new Array(3)

    nsArray[0] = document.getElementById('ns1').value
    nsArray[1] = document.getElementById('ns2').value
    nsArray[2] = document.getElementById('ns3').value

    return nsArray;
}

function getTextSize(){

    let tsArray = new Array(3)

    tsArray[0] = document.getElementById('ts1').value
    tsArray[1] = document.getElementById('ts2').value
    tsArray[2] = document.getElementById('ts3').value

    return tsArray;
}

function getLabelSize(){

    let lsArray = new Array(3)

    lsArray[0] = document.getElementById('ls1').value
    lsArray[1] = document.getElementById('ls2').value
    lsArray[2] = document.getElementById('ls3').value

    return lsArray;
}

function setImageSize(){
    let ns = getNodeSize()
    imgSize1 = ns[0]
    imgSize2 = ns[1]
    imgSize3 = ns[2]
    simulation = d3
        .forceSimulation(termDB)
        .force("link", d3.forceLink().distance(link_distance_alter).id(function(d) {
            return d.term;
        })
        .links(links))
        .force("charge", d3.forceManyBody().strength(function(d){
            switch(d.level){
                case 1:
                    return 10000
                case 2:
                    return 300
                case 3:
                    return 0
            }
        }))
        .force("center", d3.forceCenter(width/2, height/2).strength(0.5))
        .force("collision", d3.forceCollide().radius(function(d){
            switch(d.level){
                case 1:
                    return imgSize1 * 2
                case 2:
                    return imgSize2 * 2
                case 3:
                    return imgSize3 * 2
            }
        }).strength(0.1))
        .alpha(0.05)
        .alphaDecay(0.001)
        .on("tick", ticked);
}


function setLabelSize(){
    let ns = getLabelSize()
    box_size_1= ns[0]
    box_size_2 = ns[1]
    box_size_3 = ns[2]
    simulation = d3
        .forceSimulation(termDB)
        .force("link", d3.forceLink().distance(link_distance_alter).id(function(d) {
            return d.term;
        })
        .links(links))
        .force("charge", d3.forceManyBody().strength(function(d){
            switch(d.level){
                case 1:
                    return 10000
                case 2:
                    return 300
                case 3:
                    return 0
            }
        }))
        .force("center", d3.forceCenter(width/2, height/2).strength(0.5))
        .force("collision", d3.forceCollide().radius(function(d){
            switch(d.level){
                case 1:
                    return imgSize1 * 2
                case 2:
                    return imgSize2 * 2
                case 3:
                    return imgSize3 * 2
            }
        }).strength(0.1))
        .alpha(0.05)
        .alphaDecay(0.001)
        .on("tick", ticked);
}

function setImageSize(){
    let ns = getNodeSize()
    imgSize1 = ns[0]
    imgSize2 = ns[1]
    imgSize3 = ns[2]
    simulation = d3
        .forceSimulation(termDB)
        .force("link", d3.forceLink().distance(2000).id(function(d) {
            return d.term;
        })
        .links(links))
        .force("charge", d3.forceManyBody().strength(function(d){
            switch(d.level){
                case 1:
                    return 10000
                case 2:
                    return 300
                case 3:
                    return 0
            }
        }))
        .force("center", d3.forceCenter(width/2, height/2).strength(0.5))
        .force("collision", d3.forceCollide().radius(imgSize1).strength(0.1))
        .alpha(0.05)
        .alphaDecay(0.001)
        .on("tick", ticked);
}


function setTextSize(){
    let ts = getTextSize()
    font_size_1= ts[0]
    font_size_2= ts[1]
    font_size_3= ts[2]
    simulation = d3
        .forceSimulation(termDB)
        .force("link", d3.forceLink().distance(link_distance_alter).id(function(d) {
            return d.term;
        })
        .links(links))
        .force("charge", d3.forceManyBody().strength(function(d){
            switch(d.level){
                case 1:
                    return imgSize1 * 2
                case 2:
                    return imgSize2 * 2
                case 3:
                    return imgSize3 * 2
            }
        }))
        .force("center", d3.forceCenter(width/2, height/2).strength(0.5))
        .force("collision", d3.forceCollide().radius(function(d){
            switch(d.level){
                case 1:
                    return imgSize1 * coll_radius_x
                case 2:
                    return imgSize2 * coll_radius_x
                case 3:
                    return imgSize3 * coll_radius_x
            }
        }).strength(0.1))
        .alpha(0.05)
        .alphaDecay(0.001)
        .on("tick", ticked);
}

function initVariables(){
    document.getElementById('ns1').value = imgSize1
    document.getElementById('ns2').value = imgSize2
    document.getElementById('ns3').value = imgSize3

    document.getElementById('ts1').value = font_size_1
    document.getElementById('ts2').value = font_size_2
    document.getElementById('ts3').value = font_size_3

    document.getElementById('ls1').value = box_size_1
    document.getElementById('ls2').value = box_size_2
    document.getElementById('ls3').value = box_size_3

    document.getElementById('linkd').value = link_distance_alter
}

function setLinkDistance(){
    link_distance_alter = document.getElementById('linkd').value
    simulation = d3
        .forceSimulation(termDB)
        .force("link", d3.forceLink().distance(link_distance_alter).id(function(d) {
            return d.term;
        })
        .links(links))
        .force("charge", d3.forceManyBody().strength(function(d){
            switch(d.level){
                case 1:
                    return 10000
                case 2:
                    return 300
                case 3:
                    return 0
            }
        }))
        .force("center", d3.forceCenter(width/2, height/2).strength(0.5))
        .force("collision", d3.forceCollide().radius(function(d){
            switch(d.level){
                case 1:
                    return imgSize1 * 2
                case 2:
                    return imgSize2 * 2
                case 3:
                    return imgSize3 * 2
            }
        }).strength(0.1))
        .alpha(0.05)
        .alphaDecay(0.001)
        .on("tick", ticked);
}

function showDebugMenu(){
    var x = document.querySelector(".dMenu");

    if(x.style.display === "none"){
        x.style.display = "inline";
    }else{
        x.style.display = "none";
    }
}