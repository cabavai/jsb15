function b() {
    var cc = document.getElementById("cc").value;
    var st = document.getElementById("st").value;
    var cn = document.getElementById("cn").value;
    var radio = document.getElementById("radio").value;
    if(radio=='nu'){
      var bmr=(10*cn)+(6.25*cc)-(4.92*st)-161

    }
    else if (radio=='nam'){
        var  bmr=(10*cn)+(6.25*cc)-(4.92*st)+5
        
    }
    document.getElementById('o').innerHTML='bmr của bạn là'+bmr
}


