# 🏫 AKSA EDU — Smart School Ecosystem (SIAKAD IoT & AI)

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Python](https://img.shields.io/badge/Python-3.11+-3776AB?logo=python&logoColor=white)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.110+-009688?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![Next.js](https://img.shields.io/badge/Next.js-14+-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16+-4169E1?logo=postgresql&logoColor=white)](https://www.postgresql.org/)

**AKSA EDU** adalah Sistem Informasi Akademik (SIAKAD) *Free and Open Source Software* (FOSS) generasi baru yang dirancang khusus untuk ekosistem sekolah terpadu mulai dari jenjang **Playgroup (PG), TK, SD, SMP, SMA, hingga SMK** (*Multi-Tenant*).

Mengusung arsitektur **Hybrid Local-First**, **AKSA EDU** menggabungkan kekuatan **Internet of Things (IoT)** dan **Artificial Intelligence (AI)** yang mampu berjalan **100% secara *offline*** di server lokal sekolah tanpa ketergantungan internet, sekaligus mendukung sinkronisasi *cloud* yang hemat biaya kapan pun dibutuhkan.

---

## ✨ Fitur Unggulan AKSA EDU

### 🔄 Lintas Jenjang (Playgroup – SMA/SMK)
* **Single Parent Account:** Satu akun orang tua untuk memantau seluruh anak di jenjang pendidikan berbeda dalam satu yayasan.
* **Presensi Otomatis IoT:** Pencatatan kehadiran *real-time* di gerbang sekolah via kartu pelajar RFID/NFC atau *Edge Face Recognition* dengan notifikasi langsung ke orang tua.
* **Kantin Sehat Nontunai (*Cashless Canteen*):** Pembayaran menggunakan gelang/kartu RFID yang dilengkapi pelacakan batas uang saku dan analitik kandungan nutrisi/gula harian oleh AI.
* **Smart Classroom:** Otomatisasi AC, lampu, dan proyektor berdasarkan jadwal pelajaran di AKSA EDU dan sensor okupansi ruangan.

### 🧸 Spesifik Playgroup, TK, & SD
* **Smart Pick-up System:** Validasi biometrik wajah atau kartu penjemput sah di gerbang untuk mencegah salah jemput, terintegrasi dengan pemanggilan otomatis di layar monitor kelas.
* **Jurnal Tumbuh Kembang AI:** Pencatatan aktivitas harian anak (makan, tidur, motorik) yang dirangkum menjadi narasi laporan perkembangan secara otomatis.

### 🎓 Spesifik SMP, SMA, & SMK
* **Early Warning System (EWS):** Deteksi dini risiko penurunan akademik, stres, atau indikasi perundungan (*bullying*) melalui analisis anomali nilai, absensi, dan catatan BK.
* **AI Penjurusan & Karier (SMA):** Rekomendasi mata pelajaran pilihan Kurikulum Merdeka dan prediksi peluang kelulusan SNBP/SNBT.
* **Smart Workshop & PKL (SMK):** *IoT Machine Interlock* (mesin praktik bengkel hanya menyala jika siswa lulus modul K3) dan pencocokan magang industri berbasis AI.

---

## 🏗️ Arsitektur & Ekosistem Repositori

Ekosistem **AKSA EDU** dibangun dengan pendekatan **Polyrepo** agar setiap lapisan memiliki siklus pengembangan dan *deployment* yang independen:

1. **`aksa-edu-backend`** *(Repositori Ini / Core API)*
   Layanan backend berbasis **Python (FastAPI)**, manajemen database **PostgreSQL**, broker komunikasi **MQTT**, mesin pemrosesan **Local AI**, serta *worker* sinkronisasi *hybrid* (offline-to-cloud).
2. **`aksa-edu-frontend`** *(Web Interface)*
   Antarmuka web responsif berbasis **Next.js (TypeScript)** dan Tailwind CSS untuk dasbor Admin, Guru, Siswa, dan Portal Orang Tua.
3. **`aksa-edu-iot-firmware`** *(Embedded & Edge)*
   Kode *firmware* (C++ / MicroPython) untuk mikrokontroler ESP32/Raspberry Pi pada gerbang RFID, kios penjemputan, dan POS kantin dengan penyimpanan *cache* lokal (*offline fault-tolerant*).

```text
[Perangkat IoT Sekolah (RFID, Kamera, POS Kantin)]
       │  (Protokol MQTT via LAN/Wi-Fi Lokal)
       ▼
┌──────────────────────────────────────────────────────────┐
│  SERVER LOKAL AKSA EDU (On-Premise / Mini PC)            │
│                                                          │
│  ┌───────────────┐   ┌───────────────┐   ┌────────────┐  │
│  │ Mosquitto MQTT│──▶│ FastAPI + AI  │──▶│ PostgreSQL │  │
│  └───────────────┘   └───────┬───────┘   └─────┬──────┘  │
│                              │                 │         │
│                      ┌───────▼───────┐         │         │
│                      │ Next.js Web UI│         │         │
│                      └───────────────┘         │         │
└────────────────────────────────────────────────┼─────────┘
                                                 │
                   (Delta Sync / Opsional saat terkoneksi internet)
                                                 ▼
                                     [VPS Cloud Ringan / Backup]
```

---

## 🚀 Panduan Instalasi Cepat (Local / Offline Mode)

Pastikan perangkat server lokal sekolah sudah terinstal **Docker** dan **Docker Compose**.

1. **Kloning Repositori**
   ```bash
   git clone https://github.com/aksa-edu/aksa-edu-backend.git
   cd aksa-edu-backend
   ```

2. **Konfigurasi Environment**
   Salin file contoh konfigurasi dan sesuaikan mode operasi (`local` untuk *offline-first* atau `hybrid` untuk mengaktifkan sinkronisasi cloud):
   ```bash
   cp .env.example .env
   nano .env
   ```

   *Contoh pengaturan utama di `.env`:*
   ```env
   APP_NAME="AKSA EDU"
   APP_MODE=local
   DATABASE_URL=postgresql+asyncpg://aksa_user:secret@db:5432/aksa_edu_db
   MQTT_BROKER_HOST=mqtt
   ENABLE_LOCAL_AI=true
   ```

3. **Jalankan Layanan dengan Docker Compose**
   ```bash
   docker-compose up -d --build
   ```

4. **Migrasi Database & Seeding Data Awal**
   ```bash
   docker-compose exec backend alembic upgrade head
   docker-compose exec backend python scripts/seed_initial_data.py
   ```

5. **Akses Layanan & Dokumentasi API**
   Buka browser di jaringan lokal sekolah dan akses:
   * **Aplikasi Web AKSA EDU:** `http://localhost:3000`
   * **Swagger UI (API Docs):** `http://localhost:8000/docs`
   * **ReDoc:** `http://localhost:8000/redoc`

---

## 🛡️ Privasi & Kedaulatan Data

* **100% Kedaulatan Data Sekolah:** Seluruh basis data siswa, nilai, transaksi kantin, dan vektor biometrik disimpan di server fisik milik sekolah.
* **Edge AI Processing:** Pengenalan wajah diproses secara lokal menjadi vektor terenkripsi tanpa mengirimkan foto mentah ke server pihak ketiga.
* **Kepatuhan UU PDP:** Mendukung pencatatan *Digital Informed Consent* dari orang tua untuk aktivasi sensor biometrik siswa di bawah umur.

---

## 🤝 Berkontribusi

Kontribusi dari komunitas pengembang, praktisi pendidikan, maupun pegiat IoT sangat terbuka!
1. *Fork* repositori ini.
2. Buat *branch* fitur baru (`git checkout -b fitur/nama-fitur`).
3. *Commit* perubahan Anda (`git commit -m 'Menambahkan fitur X'`).
4. *Push* ke *branch* tersebut (`git push origin fitur/nama-fitur`).
5. Ajukan **Pull Request**.

---

## 📄 Lisensi

**AKSA EDU** didistribusikan secara bebas di bawah lisensi **GNU General Public License v3.0 (GPLv3)**. Anda bebas menggunakan, mempelajari, memodifikasi, dan mendistribusikan ulang perangkat lunak ini selama kode sumber turunan tetap bersifat terbuka di bawah lisensi yang sama. Lihat file [LICENSE](LICENSE) untuk informasi selengkapnya.