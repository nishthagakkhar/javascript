var fs = require("fs");
var cnt,a,b,cnt1;
var i=0,j=0;
var data = fs.readFileSync('file1.csv');
var stringData=data.toString();
var arrayOne= stringData.split('\r\n');
var noOfRow=arrayOne.length;
var header=arrayOne[0].split(',');
var noOfCol=header.length;
var param='Country Name';
var p0='data.json';
var p1='data1.json';
var p2='data2.json';
var param1='Population (Millions) - 2013';
var param2='GDP Billions (US$) - 2013';
var param3='Purchasing Power in Billions ( Current International Dollar) - 2013';
function calc(a1,a2,p)
{
  var jArray=[];
  var final_obj={};
  var cnt=header.indexOf(a1);
  var cnt1=header.indexOf(a2);
  for (i = 1; i < noOfRow-1; i++)
  {
    var myNewLine=arrayOne[i].split(',');
    if(myNewLine[cnt] != "European Union")
    {

    final_obj[header[cnt]]=myNewLine[cnt];
    final_obj[header[cnt1]]=myNewLine[cnt1];
    jArray.push(final_obj);
    jArray.sort(function(a,b)
    {
    return b[a2]-a[a2];
    })
   final_obj={};
}
  }
  console.log(jArray);
  var file = p;
  var obj = JSON.stringify(jArray);
  fs.writeFileSync(file, obj);
}
calc(param,param1,p0);
calc(param,param2,p1);
calc(param,param3,p2);
