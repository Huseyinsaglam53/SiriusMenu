/* Sirius Cafe – Türkçe / English dil desteği
   Yeni bir yazı eklersen sadece aşağıdaki DICT listesine  "Türkçe metin": "English text"  satırı ekle. */
(function () {
  'use strict';
  var DICT = Object.assign(Object.create(null), {
    /* ---------- genel ---------- */
    "← Ana Sayfa": "← Home",
    "Ana Sayfa": "Home",
    "Menü": "Menu",
    "Ürünlerimiz": "Our Products",
    "Hakkımızda": "About",
    "İletişim": "Contact",
    "Yukarı": "Back to top",
    "Anın En Güzel Hali.": "Moments at Their Best.",
    "WhatsApp ile yaz →": "Message on WhatsApp →",
    "Sirius Cafe. Tüm hakları saklıdır.": "Sirius Cafe. All rights reserved.",

    /* ---------- index.html ---------- */
    "Sirius Cafe | Anın En Güzel Hali": "Sirius Cafe | Moments at Their Best",
    "Menüyü İncele": "View the Menu",
    "Bize Ulaşın": "Contact Us",
    "Aşağı kaydır": "Scroll down",
    "KAHVE": "COFFEE", "PİZZA": "PIZZA", "TATLI": "DESSERT", "ANIN EN GÜZEL HALİ": "MOMENTS AT THEIR BEST",
    "Sirius Cafe, kaliteli kahveyi samimi bir ortamla buluşturmak için yola çıktı. Her fincanda taze çekilmiş çekirdek, doğru demleme ve özen bulursunuz.":
      "Sirius Cafe set out to bring quality coffee together with a warm, friendly setting. In every cup you will find freshly ground beans, proper brewing and care.",
    "İster güne güçlü bir espressoyla başlayın, ister arkadaşlarınızla uzun bir sohbete oturun; burada herkese yer var.":
      "Whether you start your day with a strong espresso or settle in for a long chat with friends, there is room for everyone here.",
    "Öne Çıkanlar": "Featured",
    "Sıcak Kahve": "Hot Coffee", "Tatlı": "Dessert", "Hamburger": "Burger", "Pizza": "Pizza",
    "335 ₺'den": "From 335 ₺",
    "Tüm Menüyü Gör": "See the Full Menu",
    "Neden Sirius?": "Why Sirius?",
    "Taze Çekirdek": "Fresh Beans",
    "Kahveler siparişinizle birlikte taze çekilir.": "Coffee is freshly ground with every order.",
    "Usta Baristalar": "Expert Baristas",
    "Her içecek dengeli ve tutarlı bir lezzet için özenle hazırlanır.": "Every drink is carefully prepared for a balanced, consistent flavor.",
    "Sıcak Atmosfer": "Warm Atmosphere",
    "Çalışmak, sohbet etmek ya da dinlenmek için rahat bir mekan.": "A comfortable place to work, chat or relax.",
    "Kendi Üretimimiz": "Our Own Production",
    "Doğadan Sofranıza": "From Nature to Your Table",
    "Kendi ürettiğimiz doğal bal, zeytinyağı, zeytin, incir ve erik, sınırlı miktarda ve özenle hazırlanıyor.":
      "Our own natural honey, olive oil, olives, figs and plums, produced in limited quantities with great care.",
    "Doğal Bal": "Natural Honey", "Zeytinyağı": "Olive Oil", "Samanlı Zeytin": "Samanlı Olives", "İncir": "Figs", "Erik": "Plums",
    "Ürünlerimizi Gör": "View Our Products",
    "Adres": "Address", "Telefon": "Phone", "E-posta": "Email",
    "Çalışma Saatleri": "Opening Hours", "Her gün 08:00 – 24:00": "Every day 08:00 – 24:00",
    "Konum": "Location", "Haritayı Göster": "Show Map", "Yol Tarifi": "Get Directions",

    /* ---------- urunler.html ---------- */
    "Kendi Üretimimiz | Sirius Cafe": "Our Own Production | Sirius Cafe",
    "KENDİ ÜRETİMİMİZ": "OUR OWN PRODUCE",
    "DOĞAL BAL": "NATURAL HONEY", "ZEYTİNYAĞI": "OLIVE OIL", "SAMANLI ZEYTİN": "SAMANLI OLIVES", "İNCİR": "FIGS", "ERİK": "PLUMS",
    "Doğal, katkısız, emekle yetişen lezzetler.": "Natural, additive-free flavors grown with care.",
    "İlaçlık Doğal Bal": "Natural Honey (Medicinal Grade)",
    "Şeker katılmamış, doğal bal.": "Natural honey with no added sugar.",
    "Doğal Zeytinyağı": "Natural Olive Oil",
    "Ata eşek zeytininden elde edilen doğal zeytinyağı.": "Natural olive oil made from heirloom Eşek olives.",
    "Duble Doğal Samanlı Zeytin": "Natural Samanlı Olives (Double)",
    "Geleneksel yöntemle hazırlanan samanlı doğal zeytin.": "Natural samanlı olives prepared the traditional way.",
    "Eşek Zeytini": "Eşek Olives",
    "Kendi bahçemizden doğal zeytin.": "Natural olives from our own grove.",
    "Doğal Ata Ağacından İncir": "Natural Figs from Heirloom Trees",
    "Ata ağacından toplanan doğal incir.": "Natural figs harvested from ancestral trees.",
    "Premium Erik": "Premium Plums",
    "Özenle seçilmiş premium erik.": "Carefully selected premium plums.",
    "Bal": "Honey", "Zeytin": "Olives",
    "Sipariş / Bilgi": "Order / Info",
    "Fiyat için sorunuz": "Ask for price",
    "Fiyatlar kilogram veya litre başınadır. Stok durumu için bize ulaşın.": "Prices are per kilogram or litre. Contact us for stock availability.",
    "Üreticiden doğrudan sofranıza": "Straight from the producer to your table",
    "Doğal": "Natural", "Özenle seçilmiş, doğal ürünler": "Carefully selected natural products",
    "Taze": "Fresh", "Mevsiminde, sınırlı miktarda": "In season, in limited quantities",
    "Sipariş İçin Bize Yazın": "Write to Us to Order",
    "Ürünler hakkında bilgi almak ve sipariş vermek için.": "For product information and orders.",

    /* ---------- menu.html: arayüz ---------- */
    "Menü | Sirius Cafe": "Menu | Sirius Cafe",
    "MENÜ": "MENU",
    "Menüde ara…": "Search the menu…", "Menüde ara": "Search the menu",
    "Tümü": "All",
    "Aradığınız ürün bulunamadı.": "No items found.",
    "Tüm fiyatlara KDV dahildir ve Türk Lirası’dır.": "All prices include VAT and are in Turkish Lira.",
    "Lütfen alerjiniz ile ilgili servis personelimizi bilgilendiriniz.": "Please inform our staff about any allergies.",
    "Kampanya": "Special",
    "Alerjen Bilgisi": "Allergen Information",
    "Alerjen bilgileri ürünlerin içerik listesine göre verilmiştir; simgesi bulunmayan bir ürün alerjen içermediği anlamına gelmez. Mutfakta çapraz bulaşma olabilir. Alerjiniz varsa sipariş vermeden önce mutlaka servis personelimize danışın.":
      "Allergen information is based on each item’s ingredient list; the absence of a label does not mean an item is allergen-free. Cross-contact may occur in the kitchen. If you have an allergy, please always speak to our staff before ordering.",
    "Süt": "Milk", "Yumurta": "Egg", "Susam": "Sesame",

    /* ---------- menu.html: kategoriler ---------- */
    "Türk Kahveleri": "Turkish Coffees",
    "Sıcak Kahve & İçecekler": "Hot Coffee & Drinks",
    "Soğuk Kahve & İçecekler": "Cold Coffee & Drinks",
    "Çay Çeşitleri": "Teas",
    "Meşrubatlar": "Soft Drinks",
    "Mokteyller": "Mocktails",
    "Hamburger Çeşitleri": "Burgers",
    "Pizza Çeşitleri": "Pizzas",
    "Aperatifler": "Starters & Snacks",
    "Makarnalar & Çorba": "Pasta & Soup",
    "Tatlı Çeşitleri": "Desserts",
    "Small Burger Menüleri": "Small Burger Menus",
    "Pizza & İkili Menüler": "Pizza & Duo Menus",
    "Kahve & Tatlı Menüleri": "Coffee & Dessert Menus",

    /* ---------- menu.html: kahve ve içecekler ---------- */
    "Türk Kahvesi": "Turkish Coffee", "Menengiç Kahvesi": "Menengiç Coffee", "Dibek Kahvesi": "Dibek Coffee",
    "Sıcak Çikolata": "Hot Chocolate", "Salep": "Salep (Hot Orchid Drink)",
    "Vanilya, çikolata, çilek, mango, bisküvi": "Vanilla, chocolate, strawberry, mango, biscuit",
    "Yaban mersini, orman meyvesi, çilek, mango, kavun, ananas, coconut": "Blueberry, forest fruits, strawberry, mango, melon, pineapple, coconut",
    "Limonata": "Lemonade",
    "Çay": "Tea", "Duble Çay": "Double Tea", "Yeşil Çay": "Green Tea", "Ihlamur": "Linden Tea", "Ada Çayı": "Sage Tea",
    "Nane Limon": "Mint & Lemon", "Hibiskus": "Hibiscus Tea",
    "Su": "Water", "Ayran": "Ayran (Yogurt Drink)", "Maden Suyu Çeşitleri": "Mineral Water", "Gazoz": "Gazoz (Fizzy Soda)",
    "Ice Tea Çeşitleri": "Iced Tea (Assorted)", "Meyve Suyu Çeşitleri": "Fruit Juice (Assorted)", "Churchill": "Churchill (Salted Lemon Soda)",
    "Kuzukulağı Mokteyl": "Sorrel Mocktail",
    "Yaban mersini, mangostan, karanfil, liçi, çilek": "Blueberry, mangosteen, clove, lychee, strawberry",
    "Frambuaz, hibiskus, kakule": "Raspberry, hibiscus, cardamom",
    "Acı portakal, çilek, karanfil": "Bitter orange, strawberry, clove",
    "Redbull, yaban mersini, liçi, kırmızı meyveler": "Red Bull, blueberry, lychee, red berries",
    "Redbull, mango ve egzotik meyveler": "Red Bull, mango and exotic fruits",

    /* ---------- menu.html: yemekler ---------- */
    "U.S.A. Burger": "U.S.A. Burger", "Trüf Burger": "Truffle Burger", "Kibrit Burger": "Matchstick Fries Burger", "Tavuk Burger": "Chicken Burger",
    "240 gr burger köftesi, sirius sos, salatalık turşusu, cheddar peyniri · çift köfte & 8 dilim cheddar ile":
      "240 g burger patty, Sirius sauce, pickles, cheddar · double patty & 8 slices of cheddar",
    "120 gr burger köftesi, sirius sos, salatalık turşusu, cheddar, kültür mantarı, istiridye mantarı, trüf yağı":
      "120 g burger patty, Sirius sauce, pickles, cheddar, button mushrooms, oyster mushrooms, truffle oil",
    "120 gr burger köftesi, sirius sos, salatalık turşusu, domates, marul, kibrit patates":
      "120 g burger patty, Sirius sauce, pickles, tomato, lettuce, matchstick fries",
    "120 gr burger köftesi, sirius sos, jalapeño turşusu, sriracha sos, acı yağ":
      "120 g burger patty, Sirius sauce, jalapeño pickles, sriracha sauce, chili oil",
    "120 gr burger köftesi, sirius sos, salatalık turşusu, domates, cheddar peyniri":
      "120 g burger patty, Sirius sauce, pickles, tomato, cheddar",
    "120 gr burger köftesi, sirius sos, salatalık turşusu, domates, marul":
      "120 g burger patty, Sirius sauce, pickles, tomato, lettuce",
    "Özel panelenmiş tavuk sarma, sirius sos, salatalık turşusu, domates, marul":
      "Specially breaded chicken, Sirius sauce, pickles, tomato, lettuce",
    "Orta boy 25 cm · Büyük boy 32 cm": "Medium 25 cm · Large 32 cm",
    "Orta": "Medium", "Büyük": "Large",
    "Dört Peynirli Pizza": "Four Cheese Pizza", "Mantarlı Pizza": "Mushroom Pizza", "Karışık Pizza": "Mixed Pizza", "Margarita Pizza": "Margherita Pizza",
    "Mozzarella, gravyer, rokfor, parmesan, roka/domates": "Mozzarella, gruyère, blue cheese, parmesan, arugula/tomato",
    "Pizza sos, mozzarella, sotelenmiş kültür ve istiridye mantarı": "Pizza sauce, mozzarella, sautéed button and oyster mushrooms",
    "Pizza sos, mozzarella, sucuk, mantar, yeşil biber, mısır, zeytin": "Pizza sauce, mozzarella, sucuk (spiced sausage), mushroom, green pepper, corn, olives",
    "Pizza sos, mozzarella, pepperoni": "Pizza sauce, mozzarella, pepperoni",
    "Pizza sos, mozzarella, sucuk, yeşil biber, jalapeño turşusu, cheddar": "Pizza sauce, mozzarella, sucuk (spiced sausage), green pepper, jalapeño pickles, cheddar",
    "Pizza sos, mozzarella, fesleğen yaprağı": "Pizza sauce, mozzarella, basil leaves",
    "Kaşarlı Gözleme": "Gözleme with Kashar Cheese", "Sucuk Kaşarlı Gözleme": "Gözleme with Sucuk & Kashar",
    "Patatesli Gözleme": "Potato Gözleme", "Peynirli Gözleme": "Cheese Gözleme",
    "Kaşarlı Tost": "Kashar Cheese Toast", "Karışık Tost": "Mixed Toast", "Çift Kaşarlı Tost": "Double Kashar Toast", "Sucuklu Tost": "Sucuk Toast",
    "Porsiyon Patates Çeşitleri": "Portion of Fries (Varieties)", "Parmesan, trüf yağlı": "Parmesan, truffle oil",
    "Soğan Halkası": "Onion Rings", "Patates Kroket": "Potato Croquettes",
    "Pesto Soslu Fettuccine": "Fettuccine with Pesto", "Mantarlı Kremalı Fettuccine": "Creamy Mushroom Fettuccine", "Peynirli Ravioli": "Cheese Ravioli",
    "200 gr fettuccine, sotelenmiş istiridye & kültür mantarı, tavuk sarma, krema, sebze çeşnisi, parmesan":
      "200 g fettuccine, sautéed oyster & button mushrooms, chicken, cream, vegetable garnish, parmesan",
    "200 gr fettuccine, pesto sos, krema, parmesan": "200 g fettuccine, pesto sauce, cream, parmesan",
    "200 gr fettuccine, sotelenmiş istiridye & kültür mantarı, krema, parmesan": "200 g fettuccine, sautéed oyster & button mushrooms, cream, parmesan",
    "200 gr ravioli, krema, parmesan": "200 g ravioli, cream, parmesan",
    "Günün Çorbası": "Soup of the Day",

    /* ---------- menu.html: tatlılar ve kampanyalar ---------- */
    "Tatlı deneyiminizi, dünya kahvelerinde %15 indirim ayrıcalığıyla taçlandırın.": "Crown your dessert experience with 15% off world coffees.",
    "Fırında Sütlaç": "Baked Rice Pudding", "Supangle": "Supangle (Chocolate Pudding)", "Magnolya": "Magnolia",
    "Dökme Profiterol": "Profiteroles", "Bardak Waffle": "Cup Waffle", "Tabak Waffle": "Plate Waffle",
    "Patates + içecek (Cola veya Ayran) · Gerçek Et, Gerçek Lezzet": "Fries + drink (Cola or Ayran) · Real Meat, Real Flavor",
    "Anne burger, sirius sos, salatalık turşusu, domates, marul": "Anne burger, Sirius sauce, pickles, tomato, lettuce",
    "Cheese burger, sirius sos, salatalık turşusu, domates, cheddar": "Cheese burger, Sirius sauce, pickles, tomato, cheddar",
    "Angry burger, sirius sos, jalapeño turşusu, sriracha sos, acı yağ": "Angry burger, Sirius sauce, jalapeño pickles, sriracha sauce, chili oil",
    "USA burger, sirius sos, salatalık turşusu, cheddar, kültür & istiridye mantarı, trüf yağı": "USA burger, Sirius sauce, pickles, cheddar, button & oyster mushrooms, truffle oil",
    "İkili menüler: 2 burger + patates + 1 içecek (Cola veya Ayran)": "Duo menus: 2 burgers + fries + 1 drink (Cola or Ayran)",
    "Pizza Menüsü": "Pizza Menu", "3 pizza + 1 L Cola · 4 peynirli hariç": "3 pizzas + 1 L Cola · excluding Four Cheese",
    "Tavuk + Small Cheese": "Chicken + Small Cheese", "Tavuk burger + Cheese burger": "Chicken burger + Cheese burger",
    "Trüf + Tavuk": "Truffle + Chicken", "Trüf burger + Tavuk burger": "Truffle burger + Chicken burger",
    "Kahve + San Sebastian": "Coffee + San Sebastian", "Seçilebilir kahve + San Sebastian": "Coffee of your choice + San Sebastian",
    "Kahve + Magnolia": "Coffee + Magnolia", "Seçilebilir kahve + Magnolia": "Coffee of your choice + Magnolia",
    "Kahve + Supangle": "Coffee + Supangle"
  });

  var ATTRS = ['placeholder', 'aria-label', 'title', 'data-b'];
  var has = function (k) { return k in DICT; };
  var lang = 'tr';
  var orig = new WeakMap();
  var mo = null;

  function pick() {
    var l = '';
    try { l = new URLSearchParams(location.search).get('lang') || ''; } catch (e) {}
    if (l !== 'tr' && l !== 'en') { try { l = localStorage.getItem('lang') || ''; } catch (e) {} }
    if (l !== 'tr' && l !== 'en') l = ((navigator.language || 'tr').toLowerCase().indexOf('tr') === 0) ? 'tr' : 'en';
    return l;
  }
  function T(s) { return (lang === 'en' && has(s)) ? DICT[s] : s; }
  function TT(s) { return has(s) ? DICT[s] : s; }   // her zaman İngilizce karşılığı (arama için)

  function doText(n) {
    var o = orig.get(n);
    if (o === undefined) {
      var v = n.nodeValue, k = v.trim();
      if (!k || !has(k)) return;
      o = v; orig.set(n, o);
    }
    var key = o.trim();
    if (!has(key)) return;
    var lead = o.match(/^\s*/)[0], trail = o.match(/\s*$/)[0];
    var out = lang === 'en' ? lead + DICT[key] + trail : o;
    if (n.nodeValue !== out) n.nodeValue = out;
  }
  function doAttrs(el) {
    for (var i = 0; i < ATTRS.length; i++) {
      var a = ATTRS[i];
      if (!el.hasAttribute(a)) continue;
      var st = 'data-o-' + a, o = el.getAttribute(st);
      if (o === null) {
        o = el.getAttribute(a);
        if (!has(o)) continue;
        el.setAttribute(st, o);
      }
      var out = lang === 'en' ? DICT[o] : o;
      if (el.getAttribute(a) !== out) el.setAttribute(a, out);
    }
  }
  function apply(root) {
    if (!root) return;
    if (root.nodeType === 3) { doText(root); return; }
    if (root.nodeType !== 1) return;
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var n, list = [];
    while ((n = w.nextNode())) {
      var p = n.parentNode && n.parentNode.nodeName;
      if (p === 'SCRIPT' || p === 'STYLE' || p === 'NOSCRIPT') continue;
      list.push(n);
    }
    list.forEach(doText);
    doAttrs(root);
    root.querySelectorAll('[placeholder],[aria-label],[title],[data-b]').forEach(doAttrs);
  }

  function paintToggle() {
    document.querySelectorAll('.lg button').forEach(function (b) { b.classList.toggle('on', b.dataset.l === lang); });
  }
  function setLang(l, save) {
    lang = l;
    window.DIL.lang = l;
    if (save) { try { localStorage.setItem('lang', l); } catch (e) {} }
    document.documentElement.lang = l;
    if (!document.documentElement.hasAttribute('data-o-title')) document.documentElement.setAttribute('data-o-title', document.title);
    var ot = document.documentElement.getAttribute('data-o-title');
    document.title = (l === 'en' && has(ot)) ? DICT[ot] : ot;
    apply(document.body);
    paintToggle();
    window.dispatchEvent(new CustomEvent('langchange', { detail: l }));
  }

  /* dil seçici stilleri */
  var css = document.createElement('style');
  css.textContent = '.lg{display:flex;border:1px solid var(--line,#2a2418);flex:none}' +
    '.lg button{background:none;border:0;border-radius:0;-webkit-appearance:none;appearance:none;color:var(--muted,#968e7b);font:inherit;font-size:.66rem;letter-spacing:.18em;padding:6px 10px;cursor:pointer;transition:.3s}' +
    '.lg button:hover{color:var(--gold,#d6b370)}' +
    '.lg button.on{background:var(--gold,#d6b370);color:#0a0a0a;font-weight:500}';
  document.head.appendChild(css);

  window.DIL = { lang: lang, t: T, tt: TT };
  window.T = T; window.TT = TT;
  lang = pick(); window.DIL.lang = lang;

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.lg').forEach(function (box) {
      box.innerHTML = '<button type="button" data-l="tr" aria-label="Türkçe">TR</button><button type="button" data-l="en" aria-label="English">EN</button>';
      box.addEventListener('click', function (e) {
        var b = e.target.closest && e.target.closest('button[data-l]');
        if (b) setLang(b.dataset.l, true);
      });
    });
    setLang(lang, false);
    /* sonradan oluşturulan içerik (menü sekmeleri, arama, ürün kartları) otomatik çevrilsin */
    mo = new MutationObserver(function (muts) {
      if (lang !== 'en') return;
      muts.forEach(function (m) { m.addedNodes.forEach(apply); });
    });
    mo.observe(document.body, { childList: true, subtree: true });
  });
})();