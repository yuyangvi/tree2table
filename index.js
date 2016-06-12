function traversalRowSpan(tree) {
   //[widths,depth]
  if (typeof tree == 'string'){
    return {
      rowspan:1,
      depth:1
    };
  } else {
    var res = {
      rowspan: 0,
      depth:   0,
      child:   {}
    };
    for(var index in tree){
      var node = tree[index];
      var nSpan = traversalRowSpan(node);
      res.child[index] = nSpan;
      res.rowspan += nSpan.rowspan
      res.depth = Math.max(res.depth, nSpan.depth+1);//parentNode - current
    }
    return res
  }
}

function traversalColSpan(tree, pDepth) {
  if (!pDepth){
    tree.colspan = 1;
  } else {
    tree.colspan = pDepth - tree.depth;
  }
  if (tree.child) {
    for (var index in tree.child) {
      tree.child[index] = traversalColSpan(tree.child[index], tree.depth)
    }
  }
  return tree
}
function traversalToTable(tree){
  var res = [];
  var toArray = (tree,i, p) => {
    if (p){
      for(var j= 0; j<tree.rowspan; j++){
        res[i+j] = res[i+j] || []
      }
      res[i].push({
        trace: p,
        colspan: tree.colspan,
        rowspan: tree.rowspan
      })
    }
    for(var q in tree.child) {
      toArray(tree.child[q], i, q)
      i += tree.child[q].rowspan
    }
  }
  toArray(tree, 0);
  return res
}

module.exports = function tree2table (tree){
  return traversalToTable(traversalColSpan(traversalRowSpan(tree)));
}


