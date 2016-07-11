var fs = require("fs");
var cnt,cnt1;
var jArray=[];
var kArray=[];
var lArray=[];
var final_obj={};
var final_obj1={};
var final_obj2={};
var i=0,j=0,c,c1,c2,c3;

var data = fs.readFileSync('file1.csv');
var stringData=data.toString();
var arrayOne= stringData.split('\r\n');
var noOfRow=arrayOne.length;
var header=arrayOne[0].split(',');
var noOfCol=header.length;
for(var i=0;i<header.length;i++)
{
 if(header[i]=='Country Name')
 {
   cnt=i;
 }
 if(header[i]=='Population (Millions) - 2013')
 {
   cnt1=i;
 }
}
for (i = 1; i < noOfRow-1; i++)
{
   for (j = 0; j< noOfCol; j++)
   {
       var myNewLine=arrayOne[i].split(',');
   };
   final_obj[header[cnt]]=myNewLine[cnt];
   final_obj[header[cnt1]]=myNewLine[cnt1];
   jArray.push(final_obj);
   final_obj={};
};
console.log( jArray);
var file = 'data.json';
var obj = JSON.stringify(jArray);
fs.writeFileSync(file, obj);



var data1 = fs.readFileSync('file1.csv');
var stringData1=data1.toString();
var arrayOne1= stringData1.split('\r\n');
var noOfRow1=arrayOne1.length;
var header1=arrayOne1[0].split(',');
var noOfCol1=header1.length;
for(var i=0;i<header1.length;i++)
{
 if(header1[i]=='Country Name')
 {
   c=i;
 }
 if(header1[i]=='GDP Billions (US$) - 2013')
 {
   c1=i;
 }
}
for (i = 1; i < noOfRow1-1; i++)
{
   for (j = 0; j< noOfCol1; j++)
   {
       var myNewLine1=arrayOne1[i].split(',');
   };
   final_obj1[header1[c]]=myNewLine1[c];
   final_obj1[header1[c1]]=myNewLine1[c1];
   kArray.push(final_obj1);
   final_obj1={};
};
console.log( kArray);
var file1='data1.json';
var obj1 = JSON.stringify(kArray);
fs.writeFileSync(file1, obj1);

//for file3
var data2 = fs.readFileSync('file1.csv');
var stringData2=data2.toString();
var arrayOne2= stringData2.split('\r\n');
var noOfRow2=arrayOne2.length;
var header2=arrayOne2[0].split(',');
var noOfCol2=header2.length;
for(var i=0;i<header2.length;i++)
{
 if(header2[i]=='Country Name')
 {
   c2=i;
 }
 if(header2[i]=='Purchasing Power in Billions ( Current International Dollar) - 2013')
 {
   c3=i;
 }
}
for (i = 1; i < noOfRow2-1; i++)
{
   for (j = 0; j< noOfCol2; j++)
   {
       var myNewLine2=arrayOne2[i].split(',');
   };
   final_obj2[header2[c2]]=myNewLine2[c2];
   final_obj2[header2[c3]]=myNewLine2[c3];
   lArray.push(final_obj2);
   final_obj2={};
};
console.log( lArray);
var file2='data2.json';
var obj2 = JSON.stringify(lArray);
fs.writeFileSync(file2, obj2);
