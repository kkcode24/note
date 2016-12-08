function changeFontSize(obj){
    var fs=document.getElementById('zoom');
    var num=fs.style.fontSize.substr(0,fs.style.fontSize.length-2);
    if(obj.value=="+"){
        ++num;
        fs.style.fontSize=num+'px';
        //alert(fs.style.fontSize);
    }else if(obj.value=="-"){
        --num;
        fs.style.fontSize=num+'px';
    }
}