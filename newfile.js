var fs = require("fs");
var data = fs.readFileSync('newdata.csv');
var stringData=data.toString();
var arrayOne= stringData.split('\r\n');
var header=arrayOne[0].split(',');
var obj = new Array();
for(var i=0;i<header.length;i++)
{
 if(header[i]=='Country Name')
 {
   obj.push(new Object(cnt=i));
 }
 if(header[i]=='Area (Sq. Km.) 2010')
 {
   obj.push(new Object(cnt1=i));
 }
}
