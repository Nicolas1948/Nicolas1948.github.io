var Create = document.getElementById("button-submit")
Create.addEventListener("click", function(e){
    alert("Contul a fost creat cu suuces")
    console.log("Button has been clicked")
    
})

function myFunction(){
    var x =document.getElementById("myInput");
    if(x.type === "password"){
        x.type = "text";
    } else{
        x.type = "password";
    }
    console.log("ShowPassword has benn clicked")
}