function bukaHalaman(namaHalaman) {
    // 1. Ambil semua elemen dengan class 'halaman'
    let semuaHalaman = document.getElementsByClassName("halaman");
    
    // 2. Sembunyikan semua halaman
    for (let i = 0; i < semuaHalaman.length; i++) {
        semuaHalaman[i].style.display = "none";
    }

    // 3. Tampilkan halaman yang dipilih
    document.getElementById(namaHalaman).style.display = "block";
}