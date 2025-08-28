const email = "admin@email.com"
const senha = "admin"

function verificarLogin() {
    const emailInformado = document.getElementById("email").value;
    const senhaInformada = document.getElementById("senha").value;

    if (emailInformado === email) {
        alert("E-mail confirmado!");

        if (senhaInformada === senha) {
            alert("Senha confirmada!");
        
           window.location = "home.html"; 
           //ou window.location.href = "home.html";
        }
        else
            alert("Senha informada incorretamente!")
    }
    else
        alert("E-mail informado incorretamente!")

}

