var fs = require("fs");
var cnt,cnt1;
var jArray=[];
var kArray=[];
var final_obj={};
var i=0,j=0,c,c1,c2,c3;
var data = fs.readFileSync('file1.csv');
function calc(data)
{
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
   if(header[i]=='GDP Billions (US$) - 2013')
   {
    var cnt2=i;
   }
  }
  for (i = 1; i < noOfRow-1; i++)
  {
     for (j = 0; j< noOfCol; j++)
     {
         var myNewLine=arrayOne[i].split(',');
     }
     final_obj[header[cnt]]=myNewLine[cnt];
     final_obj[header[cnt1]]=myNewLine[cnt1];
     final_obj1[header[cnt2]]=myNewLine[cnt2];

     jArray.push(final_obj);
     jArray.sort(function(a,b){
          return b['Population (Millions) - 2013']-a['Population (Millions) - 2013'];
          return b['GDP Billions (US$) - 2013']-a['GDP Billions (US$) - 2013'];
     })

   final_obj={};
  }
  console.log( jArray);
  var file = 'data.json';
  var obj = JSON.stringify(jArray);
  fs.writeFileSync(file, obj);
}
calc(data);
