const ilanFormu = document.getElementById('ilanFormu');
const ilanlar = document.getElementById('ilanlar');

// Form gönderildiğinde çalışır
ilanFormu.addEventListener('submit', function (e) {
    e.preventDefault();

    const ad = document.getElementById('ad').value;
    const telefon = document.getElementById('telefon').value;
    const plaka = document.getElementById('plaka').value;

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

    // Düzenle butonuna tıklanınca
    ilan.querySelector('.duzenle').addEventListener('click', function () {
        ilanDuzenle(ilan, ad, telefon, plaka);
    });

    // Sil butonuna tıklanınca
    ilan.querySelector('.sil').addEventListener('click', function () {
        ilanlar.removeChild(ilan);
    });

    ilanlar.appendChild(ilan);
}

// İlan düzenleme fonksiyonu
function ilanDuzenle(ilan, eskiAd, eskiTelefon, eskiPlaka) {
    const yeniAd = prompt("Yeni Ad:", eskiAd);
    const yeniTelefon = prompt("Yeni Telefon:", eskiTelefon);
    const yeniPlaka = prompt("Yeni Plaka:", eskiPlaka);

    if (yeniAd && yeniTelefon && yeniPlaka) {
        ilan.innerHTML = `
            <h3>${yeniAd}</h3>
            <p><strong>Telefon:</strong> ${yeniTelefon}</p>
            <p><strong>Plaka:</strong> ${yeniPlaka}</p>
            <button class="duzenle">Düzenle</button>
            <button class="sil">Sil</button>
        `;

        // Yeni düğme işlevleri ekleniyor
        ilan.querySelector('.duzenle').addEventListener('click', function () {
            ilanDuzenle(ilan, yeniAd, yeniTelefon, yeniPlaka);
        });

        ilan.querySelector('.sil').addEventListener('click', function () {
            ilanlar.removeChild(ilan);
        });
    }
}


