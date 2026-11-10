/* Sirius Cafe - TR/EN dil desteği. Yeni çeviri eklemek için D (cümleler) veya I (içerik/malzeme) listesine "Türkçe":"English" satırı ekleyin. */
(function(){
var L='tr';
try{L=localStorage.getItem('lang')||(/^tr/i.test(navigator.language||'tr')?'tr':'en')}catch(e){}
window.LANG=L;
var D={
/* ortak */
"Menü":"Menu","Ürünlerimiz":"Our Products","← Ana Sayfa":"← Home","Hakkımızda":"About","İletişim":"Contact",
"Menü | Sirius Cafe":"Menu | Sirius Cafe","Kendi Üretimimiz | Sirius Cafe":"Our Own Products | Sirius Cafe","Sirius Cafe | Anın En Güzel Hali":"Sirius Cafe | The Best Version of the Moment",
"Anın En Güzel Hali.":"The Best Version of the Moment.","ANIN EN GÜZEL HALİ":"THE BEST VERSION OF THE MOMENT","Yukarı":"Back to top",
/* ana sayfa */
"Menüyü İncele":"View Menu","Bize Ulaşın":"Contact Us","Aşağı kaydır":"Scroll down","KAHVE":"COFFEE","PİZZA":"PIZZA","TATLI":"DESSERT",
"Sirius Cafe, kaliteli kahveyi samimi bir ortamla buluşturmak için yola çıktı. Her fincanda taze çekilmiş çekirdek, doğru demleme ve özen bulursunuz.":"Sirius Cafe set out to bring quality coffee together with a friendly atmosphere. In every cup you will find freshly ground beans, proper brewing and care.",
"İster güne güçlü bir espressoyla başlayın, ister arkadaşlarınızla uzun bir sohbete oturun; burada herkese yer var.":"Whether you start the day with a strong espresso or settle in for a long chat with friends, there is room for everyone here.",
"Öne Çıkanlar":"Featured","Sıcak Kahve":"Hot Coffee","Tatlı":"Dessert","Hamburger":"Burger","335 ₺'den":"From 335 ₺","Tüm Menüyü Gör":"See Full Menu",
"Neden Sirius?":"Why Sirius?","Taze Çekirdek":"Fresh Beans","Kahveler siparişinizle birlikte taze çekilir.":"Coffee is ground fresh with your order.",
"Usta Baristalar":"Skilled Baristas","Her içecek dengeli ve tutarlı bir lezzet için özenle hazırlanır.":"Every drink is prepared with care for a balanced, consistent taste.",
"Sıcak Atmosfer":"Warm Atmosphere","Çalışmak, sohbet etmek ya da dinlenmek için rahat bir mekan.":"A comfortable place to work, chat or relax.",
"Kendi Üretimimiz":"Our Own Production","Doğadan Sofranıza":"From Nature to Your Table",
"Kendi ürettiğimiz doğal bal, zeytinyağı, zeytin, incir ve erik, sınırlı miktarda ve özenle hazırlanıyor.":"Our own natural honey, olive oil, olives, figs and plums are prepared with care in limited quantities.",
"Doğal Bal":"Natural Honey","Zeytinyağı":"Olive Oil","Samanlı Zeytin":"Straw-Cured Olives","İncir":"Figs","Erik":"Plums","Ürünlerimizi Gör":"See Our Products",
"Adres":"Address","Telefon":"Phone","E-posta":"Email","Çalışma Saatleri":"Opening Hours","Her gün 08:00 – 24:00":"Every day 08:00 – 24:00",
"WhatsApp ile yaz →":"Message on WhatsApp →","Konum":"Location","Haritayı Göster":"Show Map","Yol Tarifi":"Directions","Sirius Cafe. Tüm hakları saklıdır.":"Sirius Cafe. All rights reserved.",
/* ürünler sayfası */
"KENDİ ÜRETİMİMİZ":"OUR OWN PRODUCTION","Doğal, katkısız, emekle yetişen lezzetler.":"Natural, additive-free flavors grown with care.",
"DOĞAL BAL":"NATURAL HONEY","ZEYTİNYAĞI":"OLIVE OIL","SAMANLI ZEYTİN":"STRAW-CURED OLIVES","İNCİR":"FIGS","ERİK":"PLUMS",
"Fiyatlar kilogram veya litre başınadır. Stok durumu için bize ulaşın.":"Prices are per kilogram or liter. Contact us for stock availability.",
"Üreticiden doğrudan sofranıza":"Straight from the producer to your table","Doğal":"Natural","Özenle seçilmiş, doğal ürünler":"Carefully selected natural products",
"Taze":"Fresh","Mevsiminde, sınırlı miktarda":"In season, in limited quantities","Sipariş İçin Bize Yazın":"Write Us to Order",
"Ürünler hakkında bilgi almak ve sipariş vermek için.":"For product information and orders.","Sipariş / Bilgi":"Order / Info",
"Bal":"Honey","Zeytin":"Olives","litre":"liter",
"İlaçlık Doğal Bal":"Medicinal-Grade Natural Honey","Şeker katılmamış, doğal bal.":"Natural honey with no added sugar.",
"Doğal Zeytinyağı":"Natural Olive Oil","Ata eşek zeytininden elde edilen doğal zeytinyağı.":"Natural olive oil pressed from heirloom Eşek olives.",
"Duble Doğal Samanlı Zeytin":"Double Natural Straw-Cured Olives","Geleneksel yöntemle hazırlanan samanlı doğal zeytin.":"Natural straw-cured olives prepared the traditional way.",
"Eşek Zeytini":"Eşek Olives","Kendi bahçemizden doğal zeytin.":"Natural olives from our own grove.",
"Doğal Ata Ağacından İncir":"Natural Figs from Heirloom Trees","Ata ağacından toplanan doğal incir.":"Natural figs picked from heirloom trees.",
"Premium Erik":"Premium Plums","Özenle seçilmiş premium erik.":"Carefully selected premium plums.",
/* menü sayfası */
"Menüde ara…":"Search the menu…","Tümü":"All","Aradığınız ürün bulunamadı.":"No items found.","Alerjen:":"Allergens:","Günlük değişir, sorunuz":"Varies daily, please ask",
"Gluten":"Gluten","Süt":"Milk","Yumurta":"Egg","Hardal":"Mustard","Susam":"Sesame","Kabuklu yemiş":"Tree nuts","Soya":"Soy",
"Tüm fiyatlara KDV dahildir ve Türk Lirası'dır · Alerjiniz varsa lütfen servis personelimizi bilgilendiriniz":"All prices include VAT and are in Turkish Lira · Allergen info is indicative and cross-contact may occur in our kitchen; if you have an allergy, please tell our staff",
"Türk Kahveleri":"Turkish Coffees","Sıcak Kahve & İçecekler":"Hot Coffee & Drinks","Soğuk Kahve & İçecekler":"Cold Coffee & Drinks","Çay Çeşitleri":"Teas","Meşrubatlar":"Soft Drinks","Mokteyller":"Mocktails",
"Hamburger Çeşitleri":"Burgers","Pizza Çeşitleri":"Pizzas","Aperatifler":"Appetizers & Snacks","Makarnalar & Çorba":"Pasta & Soup","Tatlı Çeşitleri":"Desserts",
"Small Burger Menüleri":"Small Burger Menus","Pizza & İkili Menüler":"Pizza & Combo Menus","Kahve & Tatlı Menüleri":"Coffee & Dessert Menus",
"Orta boy 25 cm · Büyük boy 32 cm":"Medium 25 cm · Large 32 cm","Tatlı deneyiminizi, dünya kahvelerinde %15 indirim ayrıcalığıyla taçlandırın.":"Crown your dessert experience with 15% off world coffees.",
"Patates + içecek (Cola veya Ayran) · Gerçek Et, Gerçek Lezzet":"Fries + drink (Cola or Ayran) · Real Meat, Real Flavor","İkili menüler: 2 burger + patates + 1 içecek (Cola veya Ayran)":"Combo menus: 2 burgers + fries + 1 drink (Cola or Ayran)",
"Orta":"Medium","Büyük":"Large",
"Türk Kahvesi":"Turkish Coffee","Menengiç Kahvesi":"Menengiç Coffee (Terebinth)","Dibek Kahvesi":"Dibek Coffee","Salep":"Salep (Hot Orchid Drink)","Sıcak Çikolata":"Hot Chocolate","Limonata":"Lemonade",
"Çay":"Tea","Duble Çay":"Double Tea","Yeşil Çay":"Green Tea","Ihlamur":"Linden Tea","Ada Çayı":"Sage Tea","Nane Limon":"Mint & Lemon","Hibiskus":"Hibiscus Tea",
"Su":"Water","Ayran":"Ayran (Yogurt Drink)","Maden Suyu Çeşitleri":"Mineral Water (varieties)","Gazoz":"Gazoz (Soda)","Ice Tea Çeşitleri":"Iced Tea (varieties)","Meyve Suyu Çeşitleri":"Fruit Juice (varieties)","Kuzukulağı Mokteyl":"Sorrel Mocktail",
"Tavuk Burger":"Chicken Burger","Kaşarlı Gözleme":"Gözleme with Kaşar Cheese","Sucuk Kaşarlı Gözleme":"Gözleme with Sucuk & Cheese","Patatesli Gözleme":"Gözleme with Potato","Peynirli Gözleme":"Gözleme with Cheese",
"Kaşarlı Tost":"Cheese Toastie","Karışık Tost":"Mixed Toastie","Çift Kaşarlı Tost":"Double Cheese Toastie","Sucuklu Tost":"Sucuk Toastie",
"Porsiyon Patates Çeşitleri":"Fries Portions","Soğan Halkası":"Onion Rings","Patates Kroket":"Potato Croquettes","Günün Çorbası":"Soup of the Day",
"Pesto Soslu Fettuccine":"Fettuccine with Pesto","Mantarlı Kremalı Fettuccine":"Creamy Mushroom Fettuccine","Peynirli Ravioli":"Cheese Ravioli",
"Dört Peynirli Pizza":"Four Cheese Pizza","Mantarlı Pizza":"Mushroom Pizza","Karışık Pizza":"Mixed Pizza","Margarita Pizza":"Margherita Pizza","Pizza Menüsü":"Pizza Menu",
"Dökme Profiterol":"Profiteroles","Magnolya":"Magnolia","Fırında Sütlaç":"Baked Rice Pudding","Supangle":"Supangle (Chocolate Pudding)","Bardak Waffle":"Waffle Cup","Tabak Waffle":"Waffle Plate",
"Tavuk + Small Cheese":"Chicken + Small Cheese","Trüf + Tavuk":"Truffle + Chicken","Kahve + San Sebastian":"Coffee + San Sebastian","Kahve + Magnolia":"Coffee + Magnolia","Kahve + Supangle":"Coffee + Supangle",
"Seçilebilir kahve + San Sebastian":"Coffee of your choice + San Sebastian","Seçilebilir kahve + Magnolia":"Coffee of your choice + Magnolia","Kahve + Supangle ":"Coffee + Supangle",
"3 pizza + 1 L Cola · 4 peynirli hariç":"3 pizzas + 1 L Cola · except Four Cheese","Trüf burger + Tavuk burger":"Truffle burger + Chicken burger","Tavuk burger + Cheese burger":"Chicken burger + Cheese burger","Anne burger + Cheese burger":"Anne burger + Cheese burger","Cheese burger + Anne burger":"Cheese burger + Anne burger"
};
var I={
"vanilya":"vanilla","çikolata":"chocolate","çilek":"strawberry","bisküvi":"biscuit","yaban mersini":"blueberry","orman meyvesi":"forest fruits","kavun":"melon","ananas":"pineapple",
"mangostan":"mangosteen","karanfil":"clove","liçi":"lychee","frambuaz":"raspberry","hibiskus":"hibiscus","kakule":"cardamom","acı portakal":"bitter orange","redbull":"Red Bull",
"kırmızı meyveler":"red berries","mango ve egzotik meyveler":"mango and exotic fruits",
"240 gr burger köftesi":"240 g beef patty","120 gr burger köftesi":"120 g beef patty","sirius sos":"Sirius sauce","salatalık turşusu":"pickles","cheddar peyniri":"cheddar cheese",
"çift köfte & 8 dilim cheddar ile":"with double patty & 8 slices of cheddar","kültür mantarı":"button mushroom","istiridye mantarı":"oyster mushroom","trüf yağı":"truffle oil","trüf yağlı":"truffle oil",
"domates":"tomato","marul":"lettuce","kibrit patates":"shoestring fries","jalapeño turşusu":"pickled jalapeño","sriracha sos":"sriracha sauce","acı yağ":"chili oil",
"özel panelenmiş tavuk sarma":"specially breaded chicken wrap","gravyer":"gruyère","rokfor":"roquefort","roka/domates":"arugula/tomato","pizza sos":"pizza sauce",
"sotelenmiş kültür ve istiridye mantarı":"sautéed button and oyster mushrooms","mantar":"mushroom","yeşil biber":"green pepper","mısır":"corn","zeytin":"olives","fesleğen yaprağı":"basil leaf",
"200 gr fettuccine":"200 g fettuccine","200 gr ravioli":"200 g ravioli","sotelenmiş istiridye & kültür mantarı":"sautéed oyster & button mushrooms","tavuk sarma":"chicken","krema":"cream","sebze çeşnisi":"vegetable garnish","pesto sos":"pesto sauce",
"anne burger":"Anne burger","cheese burger":"Cheese burger","angry burger":"Angry burger","usa burger":"USA burger"
};
window.t=function(s){return L==='en'&&s&&D[s]?D[s]:s};
window.td=function(s){
  if(L!=='en'||!s)return s;if(D[s])return D[s];
  return s.split(/(, | · )/).map(function(p){
    if(p===', '||p===' · ')return p;
    var v=I[p.toLocaleLowerCase('tr')];if(!v)return p;
    return /^[A-ZÇĞİÖŞÜ]/.test(p)&&v.charAt(0)!==v.charAt(0).toUpperCase()?v.charAt(0).toUpperCase()+v.slice(1):v}).join('')};

document.documentElement.lang=L;
if(L==='en')document.title=D[document.title]||document.title;

var st=document.createElement('style');
st.textContent='.lg{position:fixed;left:50%;bottom:18px;transform:translateX(-50%);z-index:70;display:flex;border:1px solid #d6b370;background:rgba(10,10,10,.9);font:400 .7rem Jost,Arial,sans-serif;letter-spacing:.2em;padding:0;-webkit-appearance:none;appearance:none;border-radius:0;cursor:pointer}.lg span{padding:9px 14px;color:#d6b370;transition:.3s}.lg span.on{background:#d6b370;color:#0a0a0a}';
document.head.appendChild(st);

function walk(){
  var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),x,list=[];
  while(x=w.nextNode()){var n=x.parentNode.nodeName;if(n!=='SCRIPT'&&n!=='STYLE')list.push(x)}
  list.forEach(function(x){var s=x.nodeValue.trim();if(s&&D[s])x.nodeValue=x.nodeValue.replace(s,D[s])});
  document.querySelectorAll('[aria-label],[placeholder]').forEach(function(e){
    ['aria-label','placeholder'].forEach(function(a){var v=e.getAttribute(a);if(v&&D[v])e.setAttribute(a,D[v])})})}

document.addEventListener('DOMContentLoaded',function(){
  if(L==='en')walk();
  var b=document.createElement('button');b.type='button';b.className='lg';b.setAttribute('aria-label','Language / Dil');
  b.innerHTML='<span'+(L==='tr'?' class="on"':'')+'>TR</span><span'+(L==='en'?' class="on"':'')+'>EN</span>';
  b.onclick=function(){try{localStorage.setItem('lang',L==='en'?'tr':'en')}catch(e){}location.reload()};
  document.body.appendChild(b)});
})();