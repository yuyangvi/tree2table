# tree2table
=====
make an dyadic array with colspan and rowspan from a tree, so you can easily display a table view to describe a tree structure.
这个模块是用来将一个任意的树形结构体转换成表格的工具。
它会计算出每个节点所需要的跨行跨列数，并将其按表格的要求格式生成二维数组。
Usage
-----
```sh
npm install tree2table --save
```

example
-----
``` javascript
var schema = {
  name: 'Sue',
  personal:{
    birthsday: '1871-02-05',
    gender: 'female',
    contact: {
      address: 'xxx street',
      zipcode: '100',
      mobile: '0141145114'
    }
  },
  education: {
    degree: 'Bachelor of Law',
    CA: 'Yale'
  }
};

var tree2table = require(tree2table);
var result = tree2table(schema);
console.log(result);
```
result
-----
```
[ [ { trace: 'name', colspan: 3, rowspan: 1 } ],
  [ { trace: 'personal', colspan: 1, rowspan: 5 },
    { trace: 'birthsday', colspan: 2, rowspan: 1 } ],
  [ { trace: 'gender', colspan: 2, rowspan: 1 } ],
  [ { trace: 'contact', colspan: 1, rowspan: 3 },
    { trace: 'address', colspan: 1, rowspan: 1 } ],
  [ { trace: 'zipcode', colspan: 1, rowspan: 1 } ],
  [ { trace: 'mobile', colspan: 1, rowspan: 1 } ],
  [ { trace: 'education', colspan: 2, rowspan: 2 },
    { trace: 'degree', colspan: 1, rowspan: 1 } ],
  [ { trace: 'CA', colspan: 1, rowspan: 1 } ] ]
```  
####at last you get this:
<table>
<tbody>
<tr><td colspan="3">name</td></tr>
<tr><td rowspan="5">personal</td><td colspan="2">birthday</tr>
<tr><td colspan="2">gender</td></tr>
<tr><td rowspan="3">contact</td><td>address</td></tr>
<tr><td>zipcode</td></tr>
<tr><td>mobile</td></tr>
<tr><td colspan="2" rowspan="2">education</td><td>degree</td></tr>
<tr><td>CA</td></tr>
</tbody>
</table>
