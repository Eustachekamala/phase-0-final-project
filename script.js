const sign_in = document.getElementById("container-sign_In");
const dashboard_portfolio = document.getElementById("container-info-portfolio");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact-section");

function sign_In(){
        sign_in.setAttribute("hidden", "");
        dashboard_portfolio.removeAttribute("hidden");
}

menu.addEventListener("click", () =>{
        contact.style.visibility = "visible";
});