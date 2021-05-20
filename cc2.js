document.getElementById('button').addEventlistener("click", button)
 function button() {
    var input = document.getElementById("input").value;
     let color = document.getElementById('input').value; document.body.style.backgroundColor = color
     if (input== ""){
         alert("điền màu vào ô !!")
     }
 }
 