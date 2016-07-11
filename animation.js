var fs = require("fs");
var data = fs.readFileSync('newdata.csv');
var stringData=data.toString();
var arrayOne= stringData.split('\r\n');
var header=arrayOne[0].split(',');
var cnt,cnt1;
var final_obj={};
for(var i=0;i<header.length;i++)
{
 if(header[i]=='Country Name')
 {
   cnt=i;
 }
 if(header[i]=='Area (Sq. Km.) 2010')
 {
   cnt1=i;
 }
}
var n = 100;
console.log(header[cnt]);
console.log(header[cnt1]);
var noOfRow=arrayOne.length;
var noOfCol=header.length;
var jArray=[];
var i=0,j=0;
for (i = 1; i < noOfRow-1; i++) {
   for (j = 0; j< noOfCol; j++) {
       var myNewLine=arrayOne[i].split(',');
   };
   final_obj[]=
   jArray.push("["+myNewLine[cnt]+","+myNewLine[cnt1]+"]");

    };
console.log( jArray);
