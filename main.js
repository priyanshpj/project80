function getthefirstpara(){
    var htmldata;
    var in1=document.getElementById("11").value;
    var in2=document.getElementById("12").value;
    var in3=document.getElementById("13").value;
    var in4=document.getElementById("14").value;
    var in5=document.getElementById("15").value;
    var in6=document.getElementById("16").value;
    var completep=[in1, in2, in3, in4, in5, in6];
    htmldata='<p>';
    for(var i=0; i<completep.length; i++){
        htmldata = htmldata + completep[i] + ". ";
    }
    htmldata=htmldata+'</p>';
    document.getElementById("p1").innerHTML=document.getElementById("p1").innerHTML+htmldata;       
}
function getthesecondpara(){
    var htmldata;
    var in1=document.getElementById("21").value;
    var in2=document.getElementById("22").value;
    var in3=document.getElementById("23").value;
    var in4=document.getElementById("24").value;
    var in5=document.getElementById("25").value;
    var in6=document.getElementById("26").value;
    var completep=[in1, in2, in3, in4, in5, in6];
    htmldata='<p>';
    for(var i=0; i<completep.length; i++){
        htmldata = htmldata + completep[i] + ". ";
    }
    htmldata=htmldata+'</p>';
    document.getElementById("p1").innerHTML=document.getElementById("p1").innerHTML+htmldata;       
}