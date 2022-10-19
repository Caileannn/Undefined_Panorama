async function generate_links(){
  setFirstLink(termDB[0])
  termDB.forEach(node => {

    //List of Relations
    var cnt = node.relations;

    //Term name
    var nodeName = node.term;


    for(var i = 0; i < cnt.length; i++){
      found = false;
      for(var j = 0; j < links.length && !found; j++){
        if(((links[j].source === nodeName) && (links[j].target === cnt[i])) || ((links[j].source === cnt[i]) && (links[j].target === nodeName))){
          found = true;
        }
      }
      if(!found){
        links.push({
          source: nodeName,
          target: cnt[i],
        })
      }
    }

  console.log(links);
  });
}

function setFirstLink(firstNode){
  links.push({
    source: firstNode.term,
    target: firstNode.relations[0]
  })
}



function relatedTermsBubbleSort(listR){
  //populate array
  var numberMirrorList = populateNumberArray(listR)

  var i, j
  for(i = 0; i < numberMirrorList.length-1; i++){
    for(j = 0; j < numberMirrorList.length-i-1; j++){
      if(numberMirrorList[j] > numberMirrorList[j+1]){
        bubbleSortSwap(numberMirrorList, j, j+1)
        listR = bubbleSortSwap(listR, j, j+1)
    }
  }
}
return listR

}

function bubbleSortSwap(arr, xp, yp){
  var temp = arr[xp]
  arr[xp] = arr[yp]
  arr[yp] = temp
  return arr
}

function populateNumberArray(relList){
    var arr = relList
    var numArray = []
    arr.forEach(rn => {
      var temp = (termDB.filter(rt => rt.term == rn))
      temp.forEach(node => {
        numArray.push(node.level)
      })
    })
    return numArray
}