var fs = require("fs");
var cnt,a,b,cnt1,i=0,j=0,c,c1,c2,c3,c4,c5,c6,c7,c11,c12,c10,c9,c8;
var jArray=[];
var kArray=[];
var final_obj={};
var data = fs.readFileSync('file2.csv');
var stringData=data.toString();
var arrayOne= stringData.split('\r\n');
var noOfRow=arrayOne.length;
var header=arrayOne[0].split(',');
var noOfCol=header.length;
for(var i=0;i<header.length;i++)
{
 if(header[i]=='Country Name'){c=i;}
 if(header[i]=='Population (Millions) 2010') {c1=i;}
 if(header[i]=='Population (Millions) 2011') {c2=i;}
 if(header[i]=='Population (Millions) 2012') {c3=i;}
 if(header[i]=='Population (Millions) 2013') {c4=i;}
 if(header[i]=='Population (Millions) 2014') {c5=i;}
 if(header[i]=='Population (Millions) 2015') {c6=i;}
 if(header[i]=='GDP Billions (USD) 2010') {c7=i;}
 if(header[i]=='GDP Billions (USD) 2011') {c8=i;}
 if(header[i]=='GDP Billions (USD) 2012') {c9=i;}
 if(header[i]=='GDP Billions (USD) 2013') {c10=i;}
 if(header[i]=='GDP Billions (USD) 2014') {c11=i;}
 if(header[i]=='GDP Billions (USD) 2015') {c12=i;}
}
for (i = 1; i < noOfRow-1; i++)
{
   for (j = 0; j< noOfCol; j++)
   {
       var myNewLine=arrayOne[i].split(',');
   }
   final_obj[header[c]]=myNewLine[c];
   final_obj[header[c1]]=myNewLine[c1];
   final_obj[header[c2]]=myNewLine[c2];
   final_obj[header[c3]]=myNewLine[c3];
   final_obj[header[c4]]=myNewLine[c4];
   final_obj[header[c5]]=myNewLine[c5];
   final_obj[header[c6]]=myNewLine[c6];
   final_obj[header[c7]]=myNewLine[c7];
   final_obj[header[c8]]=myNewLine[c8];
   final_obj[header[c9]]=myNewLine[c9];
   final_obj[header[c10]]=myNewLine[c10];
   final_obj[header[c11]]=myNewLine[c11];
   final_obj[header[c12]]=myNewLine[c12];
   jArray.push(final_obj);
   jArray.sort(function(a,b,g,d,e,f){
        return ((a['Population (Millions) 2010']+b['Population (Millions) 2012']+g['Population (Millions) 2013']+d['Population (Millions) 2014']+e['Population (Millions) 2015']+f['Population (Millions) 2011'])/5);
   })
    kArray.push(final_obj);
   kArray.sort(function(a,b,g,d,e,f){
        return ((a['GDP Billions (USD) 2010']+b['GDP Billions (USD) 2011']+g['GDP Billions (USD) 2012']+d['GDP Billions (USD) 2013']+e['Population (Millions) - 2014']+f['GDP Billions (USD) 2015'])/5);
   })
 final_obj={};
}
console.log( jArray);
console.log( kArray);
var file = 'data.json';
var obj = JSON.stringify(jArray);
fs.writeFileSync(file, obj);
