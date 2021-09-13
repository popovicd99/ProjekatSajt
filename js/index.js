let kat = false;
let vel = false;
let brend = false;
document.getElementById("kat").addEventListener("click",function(){
    if(kat==true){
        document.getElementById("kat-drop").style.display="none";
        kat=false;
    }else{
        document.getElementById("kat-drop").style.display="block";
        kat=true;
    }  
});
document.getElementById("vel").addEventListener("click",function(){
    if(vel==true){
        document.getElementById("vel-drop").style.display="none";
        vel=false;
    }else{
        document.getElementById("vel-drop").style.display="block";
        vel=true;
    }  
});
document.getElementById("brend").addEventListener("click",function(){
    if(brend==true){
        document.getElementById("brend-drop").style.display="none";
        brend=false;
    }else{
        document.getElementById("brend-drop").style.display="block";
        brend=true;
    }  
});

//----------Stranice
document.getElementById("air720").addEventListener("click",function(){
    window.open("../html/proizvodi/product-airmax720.html","_self");
});
document.getElementById("air90").addEventListener("click",function(){
    window.open("../html/proizvodi/product-airmax90.html","_self");
});
document.getElementById("air95").addEventListener("click",function(){
    window.open("../html/proizvodi/product-airmax95.html","_self");
});
document.getElementById("obj").addEventListener("click",function(){
    window.open("../html/proizvodi/product-airmax720obj.html","_self");
});
document.getElementById("tn").addEventListener("click",function(){
    window.open("../html/proizvodi/product-airmaxplus.html","_self");
});
document.getElementById("z90").addEventListener("click",function(){
    window.open("../html/proizvodi/product-airmax90z.html","_self");
});
document.getElementById("court").addEventListener("click",function(){
    window.open("../html/proizvodi/product-nikecourt.html","_self");
});
document.getElementById("slide").addEventListener("click",function(){
    window.open("../html/proizvodi/product-airmaxslide.html","_self");
});
//-----------------FILTERI
document.getElementById("muskarci").addEventListener("click",function(){
    let x = document.getElementsByClassName("wrap-desno-product");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display="block";
    }
    for (let i = 0; i < x.length; i++) {
        if(x[i].innerHTML.includes("Muske")==false)x[i].style.display="none";   
    }
});
document.getElementById("zene").addEventListener("click",function(){
    let x = document.getElementsByClassName("wrap-desno-product");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display="block";
    }
    for (let i = 0; i < x.length; i++) {
        if(x[i].innerHTML.includes("Zenske")==false)x[i].style.display="none";   
    }
});
document.getElementById("patike").addEventListener("click",function(){
    let x = document.getElementsByClassName("wrap-desno-product");
    for (let i = 0; i < x.length; i++) {
        if(x[i].innerHTML.includes("patike")==false)x[i].style.display="none";   
    }
});
document.getElementById("papuce").addEventListener("click",function(){
    let x = document.getElementsByClassName("wrap-desno-product");
    for (let i = 0; i < x.length; i++) {
        if(x[i].innerHTML.includes("papuce")==false)x[i].style.display="none";   
    }
});
document.getElementById("nike").addEventListener("click",function(){
    let x = document.getElementsByClassName("wrap-desno-product");
    for (let i = 0; i < x.length; i++) {
        if(x[i].innerHTML.includes("Nike")==false)x[i].style.display="none";   
    }
});
document.getElementById("adidas").addEventListener("click",function(){
    let x = document.getElementsByClassName("wrap-desno-product");
    for (let i = 0; i < x.length; i++) {
        if(x[i].innerHTML.includes("Adidas")==false)x[i].style.display="none";   
    }
});
document.getElementById("puma").addEventListener("click",function(){
    let x = document.getElementsByClassName("wrap-desno-product");
    for (let i = 0; i < x.length; i++) {
        if(x[i].innerHTML.includes("Puma")==false)x[i].style.display="none";   
    }
});
document.getElementById("reset").addEventListener("click",function(){
    let x = document.getElementsByClassName("wrap-desno-product");
    for (let i = 0; i < x.length; i++) {
            x[i].style.display="block";
    }
});
