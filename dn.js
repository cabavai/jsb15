function b() {
    
    var dn = document.getElementById("dn").value;
    var mk = document.getElementById("mk").value;
    var n = document.getElementById("n").value;
    if (n=="Dung"||dn=="Dung@gmail.com"||mk=="123") {
        alert("Đăng nhập thành công")
    }
    else if (n==""||dn==""||mk==""){
        alert("Điền đầy đủ thông tin")
    }
    else {
        alert("Sai thông tin")
    }
}