

  // Vérification email contient @

document.getElementById("email").addEventListener("blur", function (e) {
    var email=document.getElementById("email").value

    var validiteCourriel = "";
    var re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (!re.test(email)) {
        validiteCourriel = "Adresse invalide";

    }
    document.getElementById("aideCourriel").textContent = validiteCourriel;

});
