const sign_in = document.getElementById("container-sign_In");
const dashboard_portfolio = document.getElementById("container-info-portfolio");

function sign_In(){
        sign_in.setAttribute("hidden", "");
        dashboard_portfolio.removeAttribute("hidden");
}