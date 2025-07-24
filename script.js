// Menunggu sampai seluruh DOM (struktur HTML) selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    // Mendapatkan elemen loading screen dan konten utama dari HTML
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    // Mengatur simulasi waktu loading
    // Dalam aplikasi nyata, ini bisa diganti dengan logika pemuatan data atau aset
    setTimeout(() => {
        // Menambahkan kelas 'hidden' untuk memulai animasi transisi memudar
        loadingScreen.classList.add('hidden');

        // Setelah transisi CSS selesai (0.5 detik sesuai style.css),
        // sembunyikan loading screen sepenuhnya dan tampilkan konten utama
        setTimeout(() => {
            loadingScreen.style.display = 'none'; // Menghapus elemen dari layout
            mainContent.style.display = 'block'; // Menampilkan konten utama
        }, 500); // Durasi ini harus sesuai dengan 'transition' di CSS
    }, 3000); // Simulasikan loading selama 3 detik (3000 milidetik)
});
