const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 100)
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () =>{
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
}

window.onscroll = () =>{
    menu.classList.remove("bx-x");
    navbar.classList.remove("open");
}

/* https://smtpjs.com/ CA591BAF44820377DBB51891DCF9318ED5FF*/
function sendEmail(){
        Email.send({
            SecureToken : "9a8b254f-ef5d-4441-bd12-a786857bcc6a",
            To : 'simomarian99@gmail.com',
            From : 'simomarian99@gmail.com',
            Subject : document.getElementById("email").value,
            Body : '<h1>' + document.getElementById("subject").value + '</h1>' + ' :' +  document.getElementById("message").value,
        }).then(
          message => alert(message)
        );
        console.log('EMAIL SENT');
}