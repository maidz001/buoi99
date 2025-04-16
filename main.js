function validateForm() {
var ho=document.getElementById("ho").value;
var ten=document.getElementById("ten").value;
var sdt =document.getElementById("sdt").value;
if(ho===""){
    alert("Vui lòng nhập họ!")
    return false;
}
if(ten===""){
    alert("Vui lòng nhập tên!")
    return false;
}
if(sdt===""){
    alert("Vui lòng nhập số điện thoại!")
    return false;
}
if (!/^\d{10}$/.test(sdt)) {
    alert("Số điện thoại phải gồm đúng 10 chữ số!");
    return false;
  }

  return true; 
}
function Doimau(){
    document.body.style.backgroundColor ="blue";
}
function m1(){
    document.getElementById("c").value=Number(document.getElementById("a").value)+Number(document.getElementById("b").value);
    document.getElementById("f").value=Number(document.getElementById("d").value)-Number(document.getElementById("e").value);
    document.getElementById("j").value=Number(document.getElementById("g").value)*Number(document.getElementById("h").value);
    let x = Number(document.getElementById("x").value);
    document.getElementById("v").value =
      x !== 0 ? (Number(document.getElementById("z").value) /x) : "Error!"
      document.getElementById("c").style.color="red";
     
     
      document.getElementById("f").style.color="red";
      document.getElementById("j").style.color="red";
     
    
      document.getElementById("v").style.color="red";
    


}