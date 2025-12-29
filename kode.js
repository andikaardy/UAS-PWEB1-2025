

// --- LOGIKA ACCORDION (INFORMASI) ---
// 1. Ambil semua elemen tombol pertanyaan
const faqButtons = document.querySelectorAll('.faq-question');

// 2. Pasang "Alat Pendengar" (Event Listener) ke setiap tombol
faqButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        // Toggle (Hidup/Mati) class 'active' pada tombol yang diklik
        button.classList.toggle('active');

        // Ambil elemen jawaban (div di bawah tombol)
        const answer = button.nextElementSibling;

        // Cek: Apakah sedang terbuka?
        if (button.classList.contains('active')) {
            // Kalau aktif, atur tingginya sesuai isi konten (biar muncul)
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            // Kalau tidak aktif, tingginya dinolkan lagi (biar sembunyi)
            answer.style.maxHeight = 0;
        }
    });
});