
function sayfaDegistir(hedefSayfaId) {
    const sayfalar = document.querySelectorAll(".menu-page");
    const hedef = document.getElementById(hedefSayfaId);

    if (!hedef) {
        alert("Menü sayfası bulunamadı: " + hedefSayfaId);
        return;
    }

    sayfalar.forEach(function(sayfa) {
        sayfa.classList.remove("active");
        sayfa.style.display = "none";
    });

    hedef.style.display = "block";
    hedef.classList.add("active");

    window.scrollTo(0, 0);
}
