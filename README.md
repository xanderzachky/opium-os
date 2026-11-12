# Opium OS

Opium OS adalah sistem operasi kustom yang dirancang khusus untuk para gamer yang menginginkan performa maksimal dengan latensi rendah. Berbasis pada XOS, sistem ini telah dimodifikasi secara mendalam untuk membuang bloatware dan mengoptimalkan resource untuk kebutuhan gaming berat.

## Fitur Utama
- **Gaming Mode Ultra**: Penyesuaian kernel untuk prioritas thread game.
- **Root Access Ready**: Integrasi bawaan dengan Magisk untuk kustomisasi sistem tingkat lanjut.
- **Module Engine**: Dukungan untuk memuat modul performa melalui dashboard JavaScript.
- **Bloatware Free**: Menghapus semua layanan latar belakang yang tidak perlu.
- **Thermal Control**: Optimalisasi manajemen suhu yang lebih agresif.

## Struktur Folder
- `/src`: Kode utama untuk manajemen sistem dan modul.
- `/docs`: Dokumentasi teknis mendalam.
- `/scripts`: Skrip bash untuk flashing dan konfigurasi.
- `/.github`: Alur kerja integrasi berkelanjutan.

## Instalasi
1. Pastikan bootloader sudah terbuka.
2. Hubungkan perangkat ke PC.
3. Jalankan `npm install` untuk setup environment.
4. Gunakan `npm run build:system` untuk menghasilkan image kustom.
5. Flash ke perangkat menggunakan fastboot.

## Lisensi
Proyek ini dilisensikan di bawah MIT License.