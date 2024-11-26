const btn = document.getElementById("btnLogin");
const username = document.getElementById("username");
const password = document.getElementById("password");

btn.addEventListener("click", (e) =>{
    e.preventDefault();
    if (username.value =="server" && password.value == "server"){
        alert("Successful Login");
        window.location.href =  "index.html";
    }else {
        alert("HAHAHAHA  Tanga MAli pass  mo");
    }
})