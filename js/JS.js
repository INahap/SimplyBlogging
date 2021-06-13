function loginvalidate() {
    var vaild = true;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "" || username == null) {
        vaild = false;
        document.getElementById("errUsername").innerHTML = "enter your username please";
        document.getElementById("errUsername").style.display = "inline";

    } else {
        document.getElementById("errUsername").innerHTML = "";
        document.getElementById("errUsername").style.display = "none";
    }
    if (password == "" || password == null) {
        vaild = false;
        document.getElementById("errPassword").innerHTML = "enter your password please";
        document.getElementById("errPassword").style.display = "inline";
        return false;
    } else {
        document.getElementById("errPassword").innerHTML = "";
        document.getElementById("errPassword").style.display = "none";
    }
    //--------------------

    if (username != "admin" && username != null) {
        vaild = false;
        document.getElementById("errUsername").innerHTML = "Your username is wronge please try agen";
        document.getElementById("errUsername").style.display = "inline";
    } else {
        document.getElementById("errUsername").innerHTML = "";
        document.getElementById("errUsername").style.display = "none";
    }

    if (password != "1221" && password != null) {
        vaild = false;
        document.getElementById("errPassword").innerHTML = "Your password is wronge please try agen";
        document.getElementById("errPassword").style.display = "inline";
        return false;
    } else {
        document.getElementById("errPassword").innerHTML = "";
        document.getElementById("errPassword").style.display = "none";
    }



    if (vaild == false) {
        return false;
    }
    else if (username == "admin" && password == "1221") {
        window.location.href = "admin.html";
        return true;

    }
}