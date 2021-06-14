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
        document.getElementById("errUsername").innerHTML = "Your username is wrong please try again";
        document.getElementById("errUsername").style.display = "inline";
    } else {
        document.getElementById("errUsername").innerHTML = "";
        document.getElementById("errUsername").style.display = "none";
    }

    if (password != "admin" && password != null) {
        vaild = false;
        document.getElementById("errPassword").innerHTML = "Your password is wrong please try again";
        document.getElementById("errPassword").style.display = "inline";
        return false;
    } else {
        document.getElementById("errPassword").innerHTML = "";
        document.getElementById("errPassword").style.display = "none";
    }



    if (vaild == false) {
        return false;
    }
    else if (username == "admin" && password == "admin") {
        window.location.href = "addinfo.html";
        return true;

    }

}

var title = ["JavaScript", "React", "Node.js"];
var desc  = ["Learn Everything you need about Javascript through our website for free! join us and don't the oppurinunity to learn!",
 "React is one of the most important Framework that is needed for your carrier as MERN developer! it's free and simple to learn!",
 "Node.js is an open source server environment and  it's free and simple to learn!"];

 document.getElementById("TitlePost").innerHTML = title[0];
 document.getElementById("title-post2").innerHTML = title[1];
 document.getElementById("title-post3").innerHTML = title[2];

 document.getElementById("desc-post").innerHTML = desc[0];
 document.getElementById("desc-post2").innerHTML = desc[1];
 document.getElementById("desc-post3").innerHTML = desc[2];

 //not working/bad code... was trying some things
function adminpost() {

x = document.getElementById("title-id").value ;
title.unshift(x);
console.log(title);
y = document.getElementById("desc-id").value ;
desc.unshift(y);
console.log(desc);

}

document.getElementById("TitlePost").innerHTML = title[0];
document.getElementById("title-post2").innerHTML = title[1];
document.getElementById("title-post3").innerHTML = title[2];