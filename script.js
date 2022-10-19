var termDB = [
    {term:"Climate", level: 1, relations: ["Demography","Economy","Food"], image: "./gifs/climate.gif", image_size: 3, title: 'Climate', term_text: 'hello world', main_text: "<a href=https://www.google.com/>hello</a>"},
    {term:"Culture", level: 1, relations: ["Health","Labor","Energy"], image: "./gifs/culture.gif", image_size: 3},
    {term:"Demography", level: 2, relations: [], image: "./gifs/demography.gif", image_size: 6},
    {term:"Economy", level: 2, relations: ["Technology","Globalization"], image: "./gifs/economy.gif", image_size: 3},
    {term:"Food", level: 2, relations: ["Inequality"], image: "./gifs/food.gif", image_size: 3},
    {term:"Health", level: 2, relations: [], image: "./gifs/health.gif", image_size: 3},
    {term:"Labor", level: 2, relations: ["Solidarity"], image: "./gifs/labor.gif", image_size: 3},
    {term:"Energy", level: 2, relations: ["Geopolitics", "Technology"], image: "./gifs/energy.gif", image_size: 3},
    {term:"Urbanization", level: 2, relations: ["Solidarity"], image: "./gifs/urbanization.gif", image_size: 3},
    {term:"Technology", level: 3, relations: ["Urbanization"], image: "./gifs/technology.gif", image_size: 3},
    {term:"Solidarity", level: 3, relations: ["Energy"], image: "./gifs/solidarity.gif", image_size: 3},
    {term:"Inequality", level: 3, relations: [], image: "./gifs/inequality.gif", title: 'Inequality', 
        term_text: 'Inequality refers to the phenomenon of unequal and/or unjust distribution of resources and opportunities among countries or members of a given society. The term inequality may mean different things todifferent people and in different contexts', 
        main_text: "Moreover, inequality encompasses distinct yet overlappingeconomic, social, and spatial dimensions. Debates about inequality are further complicated by the disjuncture between the moral ethics of equity and social justice, on the one hand, and the normative idea of “<span class=sub-term-content onclick=testFunction('deservingness')>deservingness</span>,” on the other hand. <a href=https://www.sciencedirect.com/topics/social-sciences/inequality>[Source]</a>"},
    {term:"Globalization", level: 3, relations: ["Food"], image: "./gifs/globalization.gif", image_size: 3},
    {term:"Geopolitics", level: 3, relations: ["Globalization", "Health"], image: "./gifs/geopolitics.gif", image_size: 3},
    {term:"Climate1", level: 1, relations: ["Demography1","Economy1","Food1"], image: "./gifs/climate.gif", image_size: 3, title: 'Trade War', term_text: 'hello world', main_text: "<a href=https://www.google.com/>hello</a>"},
    {term:"Culture1", level: 1, relations: ["Health1","Labor1","Energy1"], image: "./gifs/culture.gif", image_size: 3},
    {term:"Demography1", level: 2, relations: [], image: "./gifs/demography.gif", image_size: 6},
    {term:"Economy1", level: 2, relations: ["Technology1","Globalization1"], image: "./gifs/economy.gif", image_size: 3},
    {term:"Food1", level: 2, relations: ["Inequality1"], image: "./gifs/food.gif", image_size: 3},
    {term:"Health1", level: 2, relations: [], image: "./gifs/health.gif", image_size: 3},
    {term:"Labor1", level: 2, relations: ["Solidarity1"], image: "./gifs/labor.gif", image_size: 3},
    {term:"Energy1", level: 2, relations: ["Geopolitics1", "Technology1"], image: "./gifs/energy.gif", image_size: 3},
    {term:"Urbanization1", level: 2, relations: ["Solidarity1"], image: "./gifs/urbanization.gif", image_size: 3},
    {term:"Technology1", level: 3, relations: ["Urbanization1"], image: "./gifs/technology.gif", image_size: 3},
    {term:"Solidarity1", level: 3, relations: ["Energy1"], image: "./gifs/solidarity.gif", image_size: 3},
    {term:"Inequality1", level: 3, relations: [], image: "./gifs/inequality.gif", title: 'Inequality', 
        term_text: 'Inequality refers to the phenomenon of unequal and/or unjust distribution of resources and opportunities among countries or members of a given society. The term inequality may mean different things todifferent people and in different contexts', 
        main_text: "Moreover, inequality encompasses distinct yet overlappingeconomic, social, and spatial dimensions. Debates about inequality are further complicated by the disjuncture between the moral ethics of equity and social justice, on the one hand, and the normative idea of “<span class=sub-term-content onclick=testFunction('deservingness')>deservingness</span>,” on the other hand. <a href=https://www.sciencedirect.com/topics/social-sciences/inequality>[Source]</a>"},
    {term:"Globalization1", level: 3, relations: ["Food1"], image: "./gifs/globalization.gif", image_size: 3},
    {term:"Geopolitics1", level: 3, relations: ["Globalization1", "Health1"], image: "./gifs/geopolitics.gif", image_size: 3},
    {term:"Climate2", level: 1, relations: ["Demography2","Economy2","Food2"], image: "./gifs/climate.gif", image_size: 3, title: 'Trade War', term_text: 'hello world', main_text: "<a href=https://www.google.com/>hello</a>"},
    {term:"Culture2", level: 1, relations: ["Health2","Labor2","Energy2"], image: "./gifs/culture.gif", image_size: 3},
    {term:"Demography2", level: 2, relations: [], image: "./gifs/demography.gif", image_size: 6},
    {term:"Economy2", level: 2, relations: ["Technology2","Globalization2"], image: "./gifs/economy.gif", image_size: 3},
    {term:"Food2", level: 2, relations: ["Inequality2"], image: "./gifs/food.gif", image_size: 3},
    {term:"Health2", level: 2, relations: [], image: "./gifs/health.gif", image_size: 3},
    {term:"Labor2", level: 2, relations: ["Solidarity2"], image: "./gifs/labor.gif", image_size: 3},
    {term:"Energy2", level: 2, relations: ["Geopolitics2", "Technology2"], image: "./gifs/energy.gif", image_size: 3},
    {term:"Urbanization2", level: 2, relations: ["Solidarity2"], image: "./gifs/urbanization.gif", image_size: 3},
    {term:"Technology2", level: 3, relations: ["Urbanization2"], image: "./gifs/technology.gif", image_size: 3},
    {term:"Solidarity2", level: 3, relations: ["Energy2"], image: "./gifs/solidarity.gif", image_size: 3},
    {term:"Inequality2", level: 3, relations: [], image: "./gifs/inequality.gif", title: 'Inequality', 
        term_text: 'Inequality refers to the phenomenon of unequal and/or unjust distribution of resources and opportunities among countries or members of a given society. The term inequality may mean different things todifferent people and in different contexts', 
        main_text: "Moreover, inequality encompasses distinct yet overlappingeconomic, social, and spatial dimensions. Debates about inequality are further complicated by the disjuncture between the moral ethics of equity and social justice, on the one hand, and the normative idea of “<span class=sub-term-content onclick=testFunction('deservingness')>deservingness</span>,” on the other hand. <a href=https://www.sciencedirect.com/topics/social-sciences/inequality>[Source]</a>"},
    {term:"Globalization2", level: 3, relations: ["Food2"], image: "./gifs/globalization.gif", image_size: 3},
    {term:"Geopolitics2", level: 3, relations: ["Globalization2", "Health2"], image: "./gifs/geopolitics.gif", image_size: 3}
    
]

var links = []





// Get height and width
var width = $(window).width();
    height = $(window).height();

// Zoom function call
const zoom = d3.zoom()
      .scaleExtent([-1, 40])
      .on("zoom", zoomed);

//Booleans for switching links on or off
var linksSwitch = false;
var linksNames = true;

//Simulation variables
var simulation
var images
var link
var nodes
var texts

// Body element for Blur
var svg_body

//Content Window Variables + Modal
var content_window = document.querySelector('.overlaytest')
var content_X = document.querySelector('#cont-header-close')
var parentContainer = document.querySelector('.read-more-cont')
var parentContainerArrow = document.querySelector('.read-more-cont-arrow')
var langContainer = document.querySelector('.lang-buttons')
var exitButton = document.getElementById('cont-header-close')
var relatedButton = document.querySelector('.related-button')
var listView = document.querySelector('.termList')

var imgSize1 = 3000;
var imgSize2 = 1000;
var imgSize3 = 500;   

var box_size_1 = 200;
var box_size_2 = 100;
var box_size_3 = 50;

var font_size_1 = 11
var font_size_2 = 8
var font_size_3 = 4

var link_distance_alter = 1000

//Language
var setLang
var showNetwork = true
var showList = false

const view = d3.select('body').append('svg')
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("pointer-events", "all");

const g = view.append('g'); 

const krLang = document.querySelector('.KR')
const engLang = document.querySelector('.ENG')

const promise1 = new Promise((resolve, reject) => {
    krLang.addEventListener('click', resolve)
    engLang.addEventListener('click', reject)
  })

//Start Simulation 
initSim()

//Reset Viewport View
resetViewport()

//Assign SVG Element
setSVG()

// Simulation init
async function initSim(){
    document.getElementById("loader").style.display = "none";
    await waitClick() .then(() => {
        langContainer.style.display = "none"
        document.getElementById("loader").style.display = "inline";
      })
    await parseNodeDB()
    addContentListner()
    
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
    
    view.call(d3.zoom()
        .extent([[0.01, 1], [width, height]])
        .scaleExtent([0.01, 0.3])
        .on("zoom", zoomed));

     link = g.selectAll("line")
        .attr("class", "links")
        .data(links)
        .enter()
        .append("line")
        .attr("stroke", "black")
        .attr("display", "none")
        .attr("opacity", 0.5)
        .attr("stroke-width", function(d) {
            return 20;
        })
        .attr("display", function(d){
            if(linksSwitch){
                //console.log("true");
                return "block";
            }else{
                return "none";
            }
        });

    
     images = g
        .selectAll('image')
        .data(termDB)
        .enter()
        .append('image')
        .attr("xlink:href", function(d) { return d.image; })
        .attr("x", "-12px")
        .attr("y", "-12px")
        .attr("outline", "6px soild blue")
        .attr("width", function(d){ 
            switch(d.level){
                case 1:
                    return imgSize1 + "px"
                case 2:
                    return imgSize2 + "px"
                case 3:
                    return imgSize3 + "px"
            }
    
        })
        .attr("height", function(d){ 
            switch(d.level){
                case 1:
                    return imgSize1 + "px"
                case 2:
                    return imgSize2 + "px"
                case 3:
                    return imgSize3 + "px"
            }
    
        })
        .on("mouseenter", (evt, d) => {
            link
            .attr("display", "none")
            .filter(l => l.source === d || l.target === d)
            .attr("display", "block")
            .attr("stroke", "black");
        })
        .on("mouseleave", evt => {
            
        })
        .on("click", (evt, d) => {
            contentWindow(termDB.indexOf(d))
        })
        .call(drag(simulation))
        

     nodes = g
        .selectAll('rect')
        .data(termDB)
        .enter()
        .append('rect')
        .attr("width", function(d){
            switch(d.level){
                case 1:
                    if(d.term.length > 10){return box_size_1 * d.term.length}
                    else return box_size_1 * 10
                case 2:
                    if(d.term.length > 10){return box_size_2 * d.term.length}
                    else return box_size_2 * 10
                case 3:
                    if(d.term.length > 10){return box_size_3 * d.term.length}
                    else return box_size_3 * 10
            }
        })
        .attr("height", function(d){
            switch(d.level){
                case 1:
                    if(d.term.length > 10){return box_size_1 * d.term.length / 5}
                    else return box_size_1 * 10 / 5
                case 2:
                    if(d.term.length > 10){return box_size_2 * d.term.length / 5}
                    else return box_size_2 * 10 / 5
                case 3:
                    if(d.term.length > 10){return box_size_3 * d.term.length / 5}
                    else return box_size_3 * 10 / 5
            }
        })
        .attr("rx", function(d){
            switch(d.level){
                case 1:
                    if(d.term.length > 10){return box_size_1 * d.term.length / 10}
                    else return box_size_1 / 1
                case 2:
                    if(d.term.length > 10){return box_size_2 * d.term.length / 10}
                    else return box_size_2 / 1
                case 3:
                    if(d.term.length > 10){return box_size_3 * d.term.length / 10}
                    else return box_size_3 / 1
            }
        })
        .attr("fill", "#A9A9A9")
        .attr("display", function(d){
            if(linksNames){
                //console.log("true");
                return "block";
            }else{
                return "none";
            }
        })
        .on("mouseenter", (evt, d) => {
            link
            .attr("display", "none")
            .filter(l => l.source === d || l.target === d)
            .attr("display", "block")
            .attr("stroke", "black");
        })
        .on("mouseleave", evt => {
            
        })
        .call(drag(simulation));

     texts = g.append('g')
        .selectAll('text')
        .data(termDB)
        .enter()
        .append('text').text(d => d.term)
        .style('fill', function(d){
            switch(d.level){
                case 1:
                    return "blue"
                case 2:
                    return "#3CE03C"
                case 3:
                    return "red"
            }
        })
        .attr('text-anchor', 'middle')
        .style('font-size', function(d){
            switch(d.level){
                case 1:
                    return font_size_1 + "em"
                case 2:
                    return font_size_2 + "em"
                case 3:
                    return font_size_3 + "em"
            }
        })
        .attr("id", function(d){return "xy" + d.term.replace(/ /g,'').replace(/\./g, "")+ "-focus"})
        .attr("display", function(d){
            if(linksNames){
                return "block";
            }else{
                return "none";
            }
        })
        .style('cursor', 'pointer')
        .on("mouseenter", (evt, d) => {
            link
            .attr("display", "none")
            .filter(l => l.source === d || l.target === d)
            .attr("display", "block")
            .attr("stroke", "black");
        })
        .on("mouseleave", evt => {
            
        })
        .on("click", (evt, d) => {
            contentWindow(termDB.indexOf(d))
        })
        .call(drag(simulation))


}
//Zoom function defined
function zoomed({transform}){
    g.attr("transform", transform);
}

function nodeFocus(x, y){
    view.transition().duration(750).call(
        zoom.transform,
        d3.zoomIdentity.translate(width / 2, height / 2).scale(0.2).translate(-x, -y)
    )
}

function resetViewport() {
    view.transition().duration(750).call(
      zoom.transform,
      d3.zoomIdentity.translate(width / 2, height / 2).scale(0.05).translate(0, 0),
    );
}





async function waitClick () {
  return await promise1
    .then((ev) => {
      setLang = ev.target.value
    })
    .catch((ev) => setLang = ev.target.value)
}




// Tick & Drag
function ticked() {
    texts.style("font-size", function(d){
        switch(d.level){
            case 1:
                return font_size_1 + "em"
            case 2:
                return font_size_2 + "em"
            case 3:
                return font_size_3 + "em"
        }
    });
    texts.attr("x", d => d.x);
    texts.attr("y", function(d) {
        let lol = d.y
        if(d.level === 3){
            return lol+25
        }
        else if(d.level === 2){
            return lol+55
        }
        else if(d.level === 1){
            return lol+50
        }
        else{
            return lol
        }
    });

    images
        .attr("x", function(d) {
            switch(d.level){
                case 1:
                    return d.x - imgSize1/2
                case 2:
                    return d.x - imgSize2/2
                case 3:
                    return d.x - imgSize3/2
            }
        })
        .attr("y", function(d) {
            switch(d.level){
                case 1:
                    return d.y - imgSize1/2
                case 2:
                    return d.y - imgSize2/2
                case 3:
                    return d.y - imgSize3/2
            }
        })
        .attr("width", function(d){
            switch(d.level){
                case 1:
                    return imgSize1
                case 2:
                    return imgSize2
                case 3:
                    return imgSize3
            }
        })
        .attr("height", function(d){
            switch(d.level){
                case 1:
                    return imgSize1
                case 2:
                    return imgSize2
                case 3:
                    return imgSize3
            }
        })

    nodes
        .attr("x", function(d) {
            switch(d.level){
                case 1:
                    if(d.term.length > 10){return d.x - (box_size_1 * d.term.length)/2}
                    else return d.x - (box_size_1 * 10) / 2
                case 2:
                    if(d.term.length > 10){return d.x - (box_size_2 * d.term.length)/2}
                    else return d.x - (box_size_2 * 10) / 2
                case 3:
                    if(d.term.length > 10){return d.x - (box_size_3 * d.term.length)/2}
                    else return d.x - (box_size_3 * 10 )/ 2
            }
        })
        .attr("y", function(d) {
            switch(d.level){
                case 1:
                    if(d.term.length > 10){return d.y - ((box_size_1 * d.term.length/5) / 2)}
                    else return d.y - (((box_size_1 * 10)/5) / 2)
                case 2:
                    if(d.term.length > 10){return d.y - ((box_size_2 * d.term.length/5) / 2)}
                    else return d.y - (((box_size_2 * 10)/5) / 2)
                case 3:
                    if(d.term.length > 10){return d.y - ((box_size_3 * d.term.length/5) / 2)}
                    else return d.y - (((box_size_3 * 10)/5) / 2)
            }
        })
        .attr("width", function(d) {
            switch(d.level){
                case 1:
                    if(d.term.length > 10){return box_size_1 * d.term.length}
                    else return box_size_1 * 10
                case 2:
                    if(d.term.length > 10){return box_size_2 * d.term.length}
                    else return box_size_2 * 10
                case 3:
                    if(d.term.length > 10){return box_size_3 * d.term.length}
                    else return box_size_3 * 10
            }
        })
        .attr("height", function(d) {
            switch(d.level){
                case 1:
                    if(d.term.length > 10){return box_size_1 * d.term.length / 5}
                    else return box_size_1 * 10 / 5
                case 2:
                    if(d.term.length > 10){return box_size_2 * d.term.length / 5}
                    else return box_size_2 * 10 / 4
                case 3:
                    if(d.term.length > 10){return box_size_3 * d.term.length / 5}
                    else return box_size_3 * 10 / 5
            }
        })
        .attr("rx", function(d){
            switch(d.level){
                case 1:
                    if(d.term.length > 10){return box_size_1 * d.term.length / 10}
                    else return box_size_1 / 1
                case 2:
                    if(d.term.length > 10){return box_size_2 * d.term.length / 10}
                    else return box_size_2 / 1
                case 3:
                    if(d.term.length > 10){return box_size_3 * d.term.length / 10}
                    else return box_size_3 / 1
            }
        });
    link
        .attr("x1", function(d) {
            return d.source.x;
        })
        .attr("y1", function(d) {
            return d.source.y;
        })
        .attr("x2", function(d) {
            return d.target.x;
        })
        .attr("y2", function(d) {
            return d.target.y;
        });
}

function drag(simulation) {    
    function dragstarted(event) {
        if (!event.active) simulation.alphaTarget(0.1).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
    }

    function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
    }

function dragended(event) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
    }

    return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
}

async function initNodes(){
    await parseNodeDB();
}

function setSVG(){
    svg_body = document.querySelector('svg')
    svg_body.classList = "main-app"
}

function testFunction(hl_term){
    console.log(hl_term)
}

function linkDistance(d) {
    console.log('distance: ', d.distance)
    return d.distance;
}


