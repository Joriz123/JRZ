const btn = document.getElementById("btnLogin");
const username = document.getElementById("username");
const password = document.getElementById("password");

btn.addEventListener("click", (e) =>{
    e.preventDefault();
    if (username.value =="Gwapo" && password.value == "Ako"){
        alert("Successful Login");
        window.location.href =  "index.html";
    }else {
        alert("HAHAHAHA  Tanga MAli pass  mo");
    }
})
