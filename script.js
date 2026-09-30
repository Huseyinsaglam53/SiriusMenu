let sayfaGecmisi = [];
let pushStateDestekli = false;

// Tarayıcının geri tuşu geçmiş sistemini kontrol et ve ilk durumu kaydet
try {
    const aktifSayfa = document.querySelector('.menu-page.active');

    if (aktifSayfa) {
        history.replaceState(
            { sayfaId: aktifSayfa.id },
            '',
            ''
        );

        pushStateDestekli = true;
    }
} catch (e) {
    console.warn(
        "Yerel mod (History API devre dışı, yedek geçmiş sistemi devrede)."
    );

    pushStateDestekli = false;
}


// Telefonda fiziksel veya sanal GERİ tuşuna basıldığında burası tetiklenir
if (pushStateDestekli) {
    window.addEventListener('popstate', (event) => {

        if (event.state && event.state.sayfaId) {
            sayfaDegistir(event.state.sayfaId, true);
        }

    });
}


function sayfaDegistir(hedefSayfaId, geriGidiliyorMu = false) {

    const aktifSayfa =
        document.querySelector('.menu-page.active');

    const hedefSayfa =
        document.getElementById(hedefSayfaId);


    if (!hedefSayfa || aktifSayfa === hedefSayfa) {
        return;
    }


    // Yeni bir sayfaya gidiyorsak geçmişe kaydet
    if (!geriGidiliyorMu && aktifSayfa) {

        if (pushStateDestekli) {

            try {

                history.pushState(
                    { sayfaId: hedefSayfaId },
                    '',
                    ''
                );

            } catch (e) {

                sayfaGecmisi.push(aktifSayfa.id);

            }

        } else {

            sayfaGecmisi.push(aktifSayfa.id);

        }
    }


    if (aktifSayfa) {

        aktifSayfa.style.opacity = '0';

        setTimeout(() => {

            aktifSayfa.classList.remove('active');
            aktifSayfa.style.display = 'none';


            hedefSayfa.style.display = 'block';
            hedefSayfa.style.opacity = '0';


            setTimeout(() => {

                hedefSayfa.classList.add('active');
                hedefSayfa.style.opacity = '1';


                // Sayfa değiştiğinde otomatik olarak en tepeye kaydır
                window.scrollTo({
                    top: 0,
                    behavior: 'instant'
                });

            }, 30);

        }, 300);

    } else {

        hedefSayfa.style.display = 'block';
        hedefSayfa.classList.add('active');
        hedefSayfa.style.opacity = '1';

    }
}


// GERİ GİTME
// Ekrandaki geri butonu + telefon geri tuşu + swipe
function geriGit() {

    if (pushStateDestekli) {

        history.back();

    } else {

        if (sayfaGecmisi.length > 0) {

            const oncekiSayfaId =
                sayfaGecmisi.pop();

            sayfaDegistir(
                oncekiSayfaId,
                true
            );
        }
    }
}



// ==========================================
// PARMAK KAYDIRMA (SWIPE BACK) SİSTEMİ
// ==========================================

let touchstartX = 0;
let touchendX = 0;

let touchstartY = 0;
let touchendY = 0;


const minSwipeDistance = 60;
const maxVerticalDeviation = 50;


document.addEventListener('touchstart', e => {

    touchstartX =
        e.changedTouches[0].screenX;

    touchstartY =
        e.changedTouches[0].screenY;

}, { passive: true });


document.addEventListener('touchend', e => {

    touchendX =
        e.changedTouches[0].screenX;

    touchendY =
        e.changedTouches[0].screenY;


    const xDifference =
        touchendX - touchstartX;

    const yDifference =
        Math.abs(
            touchendY - touchstartY
        );


    // Soldan sağa kaydırınca geri git
    if (
        xDifference > minSwipeDistance &&
        yDifference < maxVerticalDeviation
    ) {

        geriGit();

    }

}, { passive: true });



// ==========================================
// KAPAK SAYFASI TIKLAMA
// ==========================================

const kapak =
    document.getElementById('sayfa-kapak');

if (kapak) {

    kapak.addEventListener('click', function () {

        sayfaDegistir('sayfa-ana-menu');

    });

}