function commentHover(name){
    document.getElementsByName(name)[0].style.fontSize = "25px";
    if(name=='com1'){
        document.getElementsByName(name)[0].style.color="red";
    }else if(name =='com2'){
        document.getElementsByName(name)[0].style.color="blue";
    }else if(name == 'com3'){
        document.getElementsByName(name)[0].style.color="orange";
    }else if(name=='com4'){
        document.getElementsByName(name)[0].style.color="yellow";
    }else if(name=='com5'){
        document.getElementsByName(name)[0].style.color="brown";
    }
}
function commentHoverOut(name){
    if(name=='com1' || name =='com2' || name =='com3' || name =='com4'
        || name =='com5'){
        document.getElementsByName(name)[0].style.color="black";
        document.getElementsByName(name)[0].style.fontSize = "17px";
    }
}
