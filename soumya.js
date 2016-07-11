var fs = require("fs");
var data = fs.readFileSync('file1.csv');
var data1 = fs.readFileSync('file3.csv');
function calc(data)
{
var stringData=data.toString();
var rows= stringData.split('\r\n');
var header=rows[0].split(',');
var cnt_age,cnt_pop;
var jArray=[];//cnt_code,cnt_lit,cnt_total;
cnt_name = header.indexOf('Country Name');
cnt_pop = header.indexOf('Population (Millions) - 2013');
//cnt_lit = header.indexOf('GDP Billions (US$) - 2013');
//cnt_total = header.indexOf('Purchasing Power in Billions US Dollar - 2012');

var final_obj={};
for (var i = 1; i < rows.length - 1; i++)
{

var line=rows[i].split(',');
if(final_obj[line[cnt_name]]==undefined)
{
  final_obj[line[cnt_name]]=0;
}
if(line[cnt_name] =='Country Name' && line[cnt_pop]=='Population (Millions) - 2013')
{
  //console.log(parseInt(line[cnt_lit]));
  jArray.sort(function(a,b)
  {
       return b['Population (Millions) - 2013']-a['Population (Millions) - 2013'];
       jArray.push(final_obj);
  }
)

 }
}

return console.log(final_obj);
}//function
calc(data);
calc(data1);
