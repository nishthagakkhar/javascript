var fs = require("fs");

var data = fs.readFileSync('Data.csv');
var stringData=data.toString();
var arrayOne= stringData.split('\r\n');
var header=arrayOne[0].split(',');
console.log(header);
var noOfRow=arrayOne.length;
var noOfCol=header.length;
var cnt;
var jArray=[];
var final_obj={};
var i=0,j=0;
for (i = 1; i < noOfRow-1; i++) {
  for (j = 0; j< noOfCol; j++) {

    var myNewLine=arrayOne[i].split(',');

  };
  final_obj[header[cnt]]=myNewLine[cnt];
jArray.push(final_obj);
final_obj={};
};

console.log( jArray);
