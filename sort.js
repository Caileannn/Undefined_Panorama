async function generate_links(){
termDB.forEach(node => {
var cnt = node.relations;
var nodeName = node.term;
//console.log(cnt);


for(var i = 0; i < cnt.length; i++){
  found = false;
  for(var j = 0; j < links.length && !found; j++){
    if(((links[j].source == nodeName) && (links[j].target == cnt[i])) || ((links[j].source == cnt[i]) && (links[j].target == nodeName))){
      found = true;
    }
  }
  if(!found){
    links.push({
      source: nodeName,
      target: cnt[i],
      distance: 100
    })
  }
}

 //console.log(links);
});
}

