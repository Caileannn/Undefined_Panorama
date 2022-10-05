const loadingButton = document.querySelector('#loader')


async function parseNodeDB(){

    //Fetch Data from API for Terms and Hashtags
 
    await axios.get('https://sheetdb.io/api/v1/2gjut6v25rdiy').then( response => {
        termDB = response.data;
        console.log("Success, data logged (terms)")
    });
    
    
    await axios.get('https://sheetdb.io/api/v1/2gjut6v25rdiy')
        .then( response => {
            hashDB = response.data
            console.log("Success, data logged (#)")
        });
    
    

    //Organise each Dataset accordingly, so it can be understood by the sort function
    document.getElementById("loader").style.display = "none";
    termDB = await fixTerms(termDB);
    termDB = await appendImageLink(termDB);
    console.log(termDB)
    await generate_links();
}

function fixTerms(initTerms){
     initTerms.forEach(node => {
        relationString = node.relations
        //relationString = relationString.replace(/\s+/g, '')
        node.relations = !relationString ? [] : relationString.split(",")
        for(var i = 0; i < node.relations.length; i++){
            node.relations[i] = node.relations[i].trim()
        }
        
    })
    console.log("Fixed Relations")
    return initTerms
}


function appendImageLink(imgArray){
    var urlToConcat = "./gifs/"
    imgArray.forEach(node => {
        imageStringInit = node.image
        node.image = urlToConcat.concat(imageStringInit)
        //node.image = "./gifs/culture.gif"
        node.level = parseInt(node.level)
    })
    console.log("Appeneded IMG URL")
    return imgArray
}
