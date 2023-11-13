// MenuLink Active 

const navLinkEls = document.querySelectorAll('.menulink');

navLinkEls.forEach(navLinkEl => {
    navLinkEl.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        navLinkEl.classList.add('active');
    });
});

// Botones mostrar contenido
/*
var btnMkt = document.getElementById("btnMkt");
var btnImpresos = document.getElementById("btnImpresos");
var btnWeb = document.getElementById("btnWeb");

var divMtk = document.getElementById("mkt");
var divImpresos = document.getElementById("impresos");
var divWeb = document.getElementById("web");

btnMkt.addEventListener("click", () => {
    divMtk.style.display='block';
    divImpresos.style.display='none';
    divWeb.style.display='none';
});
btnImpresos.addEventListener("click", () => {
    divImpresos.style.display='block';
    divMtk.style.display='none';
    divWeb.style.display='none';
});
btnWeb.addEventListener("click", () => {
    divWeb.style.display='block';
    divImpresos.style.display='none';
    divMtk.style.display='none';
});*/