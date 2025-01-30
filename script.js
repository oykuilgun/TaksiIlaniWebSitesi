const ilanFormu = document.getElementById('ilanFormu');
const ilanlar = document.getElementById('ilanlar');

// LocalStorage'dan ilanları yükleme fonksiyonu
function ilanlariYukle() {
    return JSON.parse(localStorage.getItem('ilanlar')) || [];
}

// LocalStorage'a ilanları kaydetme fonksiyonu
function ilanlariKaydet(ilanlarListesi) {
    localStorage.setItem('ilanlar', JSON.stringify(ilanlarListesi));
}

// Yeni ilan ekleme
ilanFormu.addEventListener('submit', function (e) {
    e.preventDefault();

    const ad = document.getElementById('ad').value;
    const telefon = document.getElementById('telefon').value;
    const plaka = document.getElementById('plaka').value;

    const ilanlarListesi = ilanlariYukle();
    ilanlarListesi.push({ ad, telefon, plaka });
    ilanlariKaydet(ilanlarListesi);

    ilanEkle(ad, telefon, plaka);
    ilanFormu.reset();
});

// İlan ekleme fonksiyonu
function ilanEkle(ad, telefon, plaka) {
    const ilan = document.createElement('div');
    ilan.classList.add('ilan');

    ilan.innerHTML = `
        <h3>${ad}</h3>
        <p><strong>Telefon:</strong> ${telefon}</p>
        <p><strong>Plaka:</strong> ${plaka}</p>
        <button class="duzenle">Düzenle</button>
        <button class="sil">Sil</button>
    `;

    ilan.querySelector('.duzenle').addEventListener('click', function () {
        ilanDuzenle(ilan, ad, telefon, plaka);
    });

    ilan.querySelector('.sil').addEventListener('click', function () {
        ilanlar.removeChild(ilan);
        const ilanlarListesi = ilanlariYukle().filter(i => i.plaka !== plaka);
        ilanlariKaydet(ilanlarListesi);
    });

    ilanlar.appendChild(ilan);
}

// Sayfa yüklendiğinde ilanları göster
document.addEventListener('DOMContentLoaded', function () {
    ilanlariYukle().forEach(({ ad, telefon, plaka }) => ilanEkle(ad, telefon, plaka));
});
