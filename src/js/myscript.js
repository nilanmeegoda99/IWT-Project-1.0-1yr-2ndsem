document.write(Date());

function loadData(data){

    

    if (data == "p1")
    {
        document.getElementById("btntext").innerText ="Name :- Iphone XS Max";
        document.getElementById("myImg").src = "imges/xsmax.png";
    }
    else if(data == "p2")
    {
        document.getElementById("btntext").innerText = "Name :- Samsung  Galaxy s10";
        document.getElementById("myImg").src = "imges/s10.jpg";
    }
    else if(data == "p3")
    {
        document.getElementById("btntext").innerText = "Name :- Iphone SE"  ;
        document.getElementById("myImg").src = "imges/se.jpg";
    }
    else if(data == "p4")
    {
        document.getElementById("btntext").innerText = "Name :- Galaxy J5 2016";
        document.getElementById("myImg").src = "imges/j5.jpg";
    }
    
}