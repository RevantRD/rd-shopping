// Dynamic Header and Footer
$(function () {
  $("#header").load("header.html");
  $("#footer").load("footer.html");
});
// Login page validation
function login() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;

  if (email == "admin@admin.com" && pass == "123456") {
    swal({ text: "Login successfull!", icon: "success" });
  } else if (email == "admin@admin.com" && pass != "123456") {
    swal({ text: "Incorrect Password!", icon: "warning" });
  } else if (email != "admin@admin.com" && pass == "123456") {
    swal({ text: "Incorrect E-mail!", icon: "warning" });
  } else {
    swal({ text: "Incorrect E-mail or Password!", icon: "warning" });
  }
}

// Contact page
function contact() {
  swal({ text: "Thanks for contacting us!", icon: "success" });
}
// Cart page
function checkout() {
  swal({ text: "Purchase Successfull!", icon: "success" });
}
