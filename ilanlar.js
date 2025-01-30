const tumIlanlar = document.getElementById('tumIlanlar');

// LocalStorage'dan ilanları çek
function ilanlariYukle() {
    return JSON.parse(localStorage.getItem('ilanlar')) || [];
}

// Sayfa yüklendiğinde ilanları göster
document.addEventListener('DOMContentLoaded', function () {
    const ilanlarListesi = ilanlariYukle();

    if (ilanlarListesi.length === 0) {
        tumIlanlar.innerHTML = "<p>Henüz ilan eklenmedi.</p>";
        return;
    }

    ilanlarListesi.forEach(({ ad, telefon, plaka }) => {
        const ilan = document.createElement('div');
        ilan.classList.add('ilan');

        ilan.innerHTML = `
            <h3>${ad}</h3>
            <p><strong>Telefon:</strong> ${telefon}</p>
            <p><strong>Plaka:</strong> ${plaka}</p>
        `;

        tumIlanlar.appendChild(ilan);
    });
});
