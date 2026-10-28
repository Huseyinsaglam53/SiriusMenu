'use strict';

/*
  Sirius Cafe & Bistro - dijital menü
  Sayfa geçişleri + tarayıcı geri tuşu + sağa kaydırarak geri gitme
*/

const BASLANGIC_SAYFA = 'sayfa-kapak';
const KENAR_PAYI = 30;          // ekran kenarından başlayan kaydırmaları sisteme bırak (çift geri olmasın)
const MIN_KAYDIRMA = 60;
const MAX_DIKEY_SAPMA = 50;

let yigin = [BASLANGIC_SAYFA];  // açılan sayfaların sırası, sonuncusu şu an açık olan
let aktifId = BASLANGIC_SAYFA;
let historyDestekli = false;

/* ---------- Sayfayı ekranda göster ---------- */
function sayfayiGoster(id) {
    const hedef = document.getElementById(id);
    if (!hedef) return;

    const sayfalar = document.querySelectorAll('.menu-page');
    for (let i = 0; i < sayfalar.length; i++) {
        const s = sayfalar[i];
        if (s !== hedef) {
            s.classList.remove('active');
            s.style.display = 'none';
            s.style.opacity = '0';
        }
    }

    hedef.style.display = 'block';
    hedef.style.opacity = '0';

    try { window.scrollTo(0, 0); } catch (e) { /* eski tarayıcı */ }

    // iki kare bekle: tarayıcı önce görünür hale getirsin, sonra yumuşak açılsın
    requestAnimationFrame(function () {
        requestAnimationFrame(function () {
            if (aktifId !== id) return;   // arada başka sayfaya geçildiyse dokunma
            hedef.classList.add('active');
            hedef.style.opacity = '1';
        });
    });
}

/* ---------- Başlangıç: geçmişe ilk kaydı yaz ---------- */
(function baslat() {
    const mevcut = document.querySelector('.menu-page.active');
    if (mevcut && mevcut.id) {
        yigin = [mevcut.id];
        aktifId = mevcut.id;
    }

    try {
        history.replaceState({ yol: yigin.slice() }, '');
        historyDestekli = true;
    } catch (e) {
        historyDestekli = false;
    }
})();

/* ---------- Tarayıcının geri / ileri tuşu ---------- */
window.addEventListener('popstate', function (event) {
    const durum = event.state;
    if (!durum || !durum.yol || !durum.yol.length) return;

    yigin = durum.yol.slice();
    aktifId = yigin[yigin.length - 1];
    sayfayiGoster(aktifId);
});

/* ---------- Sayfa değiştir (HTML'deki onclick bunu çağırıyor) ---------- */
function sayfaDegistir(hedefId) {
    if (!document.getElementById(hedefId) || hedefId === aktifId) return;

    // Önceki sayfaya dönülüyorsa (ör. "geri" butonu) yeni kayıt açma, gerçekten geri git
    if (yigin.length > 1 && yigin[yigin.length - 2] === hedefId) {
        geriGit();
        return;
    }

    yigin.push(hedefId);
    aktifId = hedefId;

    if (historyDestekli) {
        try {
            history.pushState({ yol: yigin.slice() }, '');
        } catch (e) {
            historyDestekli = false;
        }
    }

    sayfayiGoster(hedefId);
}

/* ---------- Geri git ---------- */
function geriGit() {
    if (yigin.length <= 1) return;   // kapaktayız, siteden çıkma

    if (historyDestekli) {
        history.back();              // popstate sayfayı değiştirecek
    } else {
        yigin.pop();
        aktifId = yigin[yigin.length - 1];
        sayfayiGoster(aktifId);
    }
}

/* ---------- Sağa kaydırarak geri ---------- */
let baslangicX = 0;
let baslangicY = 0;
let kaydirmaTakip = false;

document.addEventListener('touchstart', function (e) {
    if (e.touches.length !== 1) {      // iki parmak (yakınlaştırma) ise takip etme
        kaydirmaTakip = false;
        return;
    }
    const t = e.touches[0];
    baslangicX = t.clientX;
    baslangicY = t.clientY;
    kaydirmaTakip = baslangicX > KENAR_PAYI;
}, { passive: true });

document.addEventListener('touchend', function (e) {
    if (!kaydirmaTakip) return;
    kaydirmaTakip = false;

    // yakınlaştırılmışsa kaydırma sayfayı gezmek içindir, geri gitme
    if (window.visualViewport && window.visualViewport.scale > 1.05) return;

    const t = e.changedTouches[0];
    const farkX = t.clientX - baslangicX;
    const farkY = Math.abs(t.clientY - baslangicY);

    if (farkX > MIN_KAYDIRMA && farkY < MAX_DIKEY_SAPMA) {
        geriGit();
    }
}, { passive: true });