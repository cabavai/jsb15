function b() {
    
    var dn = document.getElementById("dn").value;
    var mk = document.getElementById("mk").value;
    var n = document.getElementById("n").value;
   
       
    if (n==""||mk==""||dn==""){
        alert("Điền đầy đủ thông tin")
    }
    
    else {
        alert("Đăng Ký Thành công")
        alert("Name is :"+n)
        alert("email is :"+dn)
        alert("pass is :"+mk)
    }
    
}