//var flare_data = {
// "name": "flare",
// "children": [
//  {
//   "name": "analytics",
//   "children": [
//    {
//     "name": "cluster",
//     "children": [
//      {"name": "AgglomerativeCluster"},
//      {"name": "CommunityStructure"},
//      {"name": "HierarchicalCluster"},
//      {"name": "MergeEdge"}
//     ]
//    }]
//    }
//   ]
//}

var flare_data=function(){
 var xml = $.loadXML("data/KeyWordsTemplate.xml");
 var obj = $(xml).toObject().get(0);
 var data={};

 var node={};
 node.content=obj.value;
 getData(obj,node);
 console.info(node);
 //var children=[];
 //if(node['SubCategory']!=undefined){
 //    var subcategory=node['SubCategory'];
 //    var children=[];
 //    for(var i=0;i<subcategory.length;i++){
 //        var child={
 //            "name":subcategory[i].value,
 //            "collapsed":true
 //        };
 //        children.push(child);
 //        if(child['SubCategory']!=undefined){
 //            ///////////////////////
 //        }
 //    }
 //}
 return node;
};

function getData(child,root){
 if(child['SubCategory']==undefined){
  return;
 }
 var subcategory=child['SubCategory'];
 var childs=[];
 for(var i=0;i<subcategory.length;i++){
  var child={
   "name":subcategory[i].value,
   "collapsed":true
  };
  getData(child,child);
  childs.push(child);
 }
 root.children=childs;
}
