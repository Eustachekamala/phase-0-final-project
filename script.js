const sign_in = document.getElementById("container-sign_In");
const btn_connect = document.getElementById("link");
const dashboard_portfolio = document.getElementById("container-info-portfolio");
btn_connect.addEventListener("click", () => {
    sign_in.setAttribute("hidden", "");
    dashboard_portfolio.removeAttribute("hidden");
})