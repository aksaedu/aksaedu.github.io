import type { Lang } from '../i18n/content'
import { REPO_URL } from '../i18n/content'

export interface KBEntry {
  id: string
  /** lowercase keywords/phrases in both languages; longer phrases weigh more */
  keywords: string[]
  answer: Record<Lang, string>
  /** ids of suggested follow-up topics */
  next?: string[]
}

export const topicLabels: Record<string, Record<Lang, string>> = {
  features: { id: 'Fitur utama', en: 'Key features' },
  offline: { id: 'Mode offline', en: 'Offline mode' },
  download: { id: 'Cara unduh', en: 'How to download' },
  privacy: { id: 'Privasi data', en: 'Data privacy' },
  stack: { id: 'Tech stack', en: 'Tech stack' },
  license: { id: 'Lisensi', en: 'License' },
  levels: { id: 'Jenjang', en: 'School levels' },
  iot: { id: 'IoT', en: 'IoT' },
  ai: { id: 'AI', en: 'AI' },
  hardware: { id: 'Kebutuhan perangkat', en: 'Hardware needs' },
  pickup: { id: 'Smart Pick-up', en: 'Smart Pick-up' },
  sync: { id: 'Sinkronisasi', en: 'Sync' },
  roadmap: { id: 'Roadmap', en: 'Roadmap' },
}

export const knowledge: KBEntry[] = [
  {
    id: 'overview',
    keywords: ['apa itu', 'what is', 'AKSA EDU', 'tentang', 'about', 'overview', 'ringkasan', 'edusmart', 'platform', 'jelaskan', 'explain'],
    answer: {
      id: 'AKSA EDU adalah platform smart school open source untuk yayasan dengan jenjang Playgroup, TK, SD, SMP, SMA, hingga SMK. Bedanya dari AKSA EDU biasa: terhubung ke IoT (RFID, gerbang, kantin, sensor) dan AI lokal, berjalan local-first sehingga tetap hidup saat internet mati, dan data anak tetap di server sekolah.',
      en: 'AKSA EDU is an open source smart school platform for foundations running Playgroup, Kindergarten, Elementary, Junior High, Senior High and Vocational schools. Unlike a traditional academic system it connects to IoT (RFID, gates, canteen, sensors) and local AI, runs local-first so it survives internet outages, and keeps children’s data on the school’s own server.',
    },
    next: ['features', 'offline', 'download'],
  },
  {
    id: 'features',
    keywords: ['fitur', 'feature', 'features', 'bisa apa', 'what can', 'kemampuan', 'capabilit', 'fungsi', 'modul', 'module'],
    answer: {
      id: 'Fitur utama: (1) portal orang tua terpadu, (2) presensi otomatis RFID/NFC atau wajah, (3) Smart Pick-up untuk PG–SD, (4) kantin nontunai dengan pelacak nutrisi, (5) smart classroom hemat energi, (6) Early Warning System akademik & perilaku, (7) tombol darurat, (8) Smart Workshop & PKL untuk SMK, dan (9) asisten virtual 24/7. Modul inti mencakup PPDB, data siswa, guru, kelas, jadwal, penilaian/rapor, keuangan, LMS, perpustakaan, dan aset.',
      en: 'Key features: (1) unified parent portal, (2) automatic RFID/NFC or face attendance, (3) Smart Pick-up for PG–SD, (4) cashless canteen with nutrition tracking, (5) energy-saving smart classrooms, (6) academic & behavioral Early Warning System, (7) panic buttons, (8) Smart Workshop & internships for SMK, and (9) a 24/7 virtual assistant. Core modules cover admissions, student data, teachers, classes, timetable, assessment/report cards, finance, LMS, library and assets.',
    },
    next: ['levels', 'iot', 'ai'],
  },
  {
    id: 'levels',
    keywords: ['jenjang', 'level', 'levels', 'tingkat', 'playgroup', 'tk ', 'sd ', 'smp', 'sma', 'smk', 'kindergarten', 'elementary', 'junior', 'senior', 'vocational', 'enam', 'six'],
    answer: {
      id: 'Satu yayasan bisa mengelola enam unit: Playgroup, TK, SD, SMP, SMA, dan SMK. Siswa memiliki satu identitas induk sepanjang jenjang; riwayat pendaftaran dan penempatan disimpan terpisah. Playgroup/TK menekankan observasi perkembangan dan keselamatan, SD–SMA menekankan akademik dan penilaian, SMK menambahkan kompetensi, praktik bengkel, dan PKL.',
      en: 'One foundation can manage six units: Playgroup, Kindergarten, Elementary, Junior High, Senior High and Vocational. A student keeps a single master identity across levels; enrollment and placement history are stored separately. Playgroup/TK emphasize developmental observation and safety, Elementary–Senior High focus on academics and assessment, and SMK adds competencies, workshop practice and internships.',
    },
    next: ['pickup', 'features'],
  },
  {
    id: 'pickup',
    keywords: ['pick-up', 'pickup', 'jemput', 'penjemput', 'penjemputan', 'kiosk', 'serah terima', 'handover', 'authorized'],
    answer: {
      id: 'Smart Pick-up (PG–SD): penjemput sah memindai wajah atau kartu di kiosk, sistem memvalidasi hak jemput, monitor kelas menampilkan foto penjemput dan memanggil nama anak, guru mengantar dan mengonfirmasi serah terima, lalu bukti penjemputan dikirim ke orang tua. Untuk Playgroup/TK, verifikasi wali harus lebih kuat daripada sekadar kartu RFID. Selalu sediakan prosedur manual sebagai cadangan.',
      en: 'Smart Pick-up (PG–SD): an authorized person scans their face or card at the kiosk, the system validates pick-up rights, the classroom monitor shows their photo and calls the child, the teacher escorts the child and confirms the handover, and proof is sent to the parents. For Playgroup/TK, guardian verification should be stronger than an RFID card alone. Always keep a manual fallback procedure.',
    },
    next: ['privacy', 'iot'],
  },
  {
    id: 'attendance',
    keywords: ['presensi', 'absen', 'absensi', 'kehadiran', 'attendance', 'rfid', 'nfc', 'kartu', 'card', 'tap', 'gerbang', 'gate', 'bolos'],
    answer: {
      id: 'Siswa tap kartu RFID/NFC atau dikenali kamera di gerbang. Event dikirim via MQTT ke FastAPI, divalidasi (perangkat, identitas, jadwal), disimpan, lalu orang tua dinotifikasi. Penting: event yang tidak tercatat tidak otomatis berarti bolos; sistem menyediakan rekonsiliasi untuk kartu tertinggal, gangguan jaringan, atau izin. Pembaca di gerbang (ESP32/Raspberry Pi) menyimpan whitelist dan log secara lokal sehingga tetap bisa memverifikasi saat server mati.',
      en: 'Students tap an RFID/NFC card or are recognized by camera at the gate. The event goes over MQTT to FastAPI, is validated (device, identity, schedule), stored, and parents are notified. Importantly, a missing tap does not automatically mean truancy; the system provides reconciliation for forgotten cards, network faults or approved leave. Gate readers (ESP32/Raspberry Pi) keep a whitelist and logs locally so they can still verify when the server is down.',
    },
    next: ['offline', 'iot'],
  },
  {
    id: 'canteen',
    keywords: ['kantin', 'canteen', 'nontunai', 'cashless', 'saldo', 'wallet', 'uang saku', 'nutrisi', 'nutrition', 'kalori', 'calorie', 'gula', 'sugar', 'gelang', 'wristband', 'pos'],
    answer: {
      id: 'Kantin nontunai: siswa membayar memakai saldo AKSA EDU lewat gelang/kartu RFID di mesin POS. Sistem menegakkan batas uang saku harian dan memperkirakan asupan kalori/gula, termasuk peringatan konsumsi gula berlebih. Saldo kantin dan SPP tetap harus diaudit bendahara secara berkala, tidak hanya mengandalkan kalkulasi otomatis. Pelacakan nutrisi siswa di bawah umur memerlukan persetujuan orang tua.',
      en: 'Cashless canteen: students pay with their AKSA EDU balance via an RFID wristband/card at a POS terminal. The system enforces daily spending limits and estimates calorie/sugar intake, including excess-sugar warnings. Canteen balances and tuition should still be audited by the school treasurer rather than relying only on automatic calculation. Nutrition tracking for minors requires parental consent.',
    },
    next: ['privacy', 'features'],
  },
  {
    id: 'ews',
    keywords: ['ews', 'early warning', 'peringatan dini', 'bullying', 'perundungan', 'risiko', 'risk', 'prestasi', 'stres', 'stress', 'konseling', 'counseling', ' bk'],
    answer: {
      id: 'Early Warning System (SMP–SMK) mendeteksi siswa yang berisiko mengalami penurunan prestasi, stres, atau indikasi perundungan dengan menganalisis anomali absensi, nilai, dan catatan BK. Hasilnya hanya sinyal untuk ditinjau guru/BK; AI tidak menjadi pengambil keputusan tunggal untuk sanksi, diagnosis, atau keputusan penting lain. Catatan konseling dibatasi aksesnya secara ketat.',
      en: 'The Early Warning System (SMP–SMK) detects students at risk of academic decline, stress or bullying by analyzing anomalies in attendance, grades and counseling notes. Its output is only a signal for teachers/counselors to review; AI never acts as the sole decision maker for sanctions, diagnoses or other important decisions. Access to counseling records is tightly restricted.',
    },
    next: ['ai', 'privacy'],
  },
  {
    id: 'panic',
    keywords: ['darurat', 'emergency', 'panic', 'tombol', 'button', 'lorong', 'toilet', 'sos'],
    answer: {
      id: 'IoT Panic Button dipasang di titik rawan seperti lorong sepi atau toilet dan terhubung langsung ke ruang Bimbingan Konseling dan keamanan. Karena menyangkut keselamatan, sistem ini tidak boleh menjadi satu-satunya mekanisme; sediakan prosedur manual dan fail-safe.',
      en: 'The IoT Panic Button is installed at blind spots such as quiet corridors or restrooms and connects directly to the counseling room and security. Because it concerns safety, it should never be the only mechanism; provide manual and fail-safe procedures too.',
    },
    next: ['ews', 'iot'],
  },
  {
    id: 'workshop',
    keywords: ['bengkel', 'workshop', 'pkl', 'magang', 'internship', 'industri', 'industry', 'k3', 'interlock', 'mesin', 'machine', 'teaching factory', 'tracer', 'kompetensi', 'competency'],
    answer: {
      id: 'Untuk SMK: (1) IoT Machine Interlock, mesin bengkel/lab hanya menyala jika siswa menempelkan kartu dan sudah lulus modul K3; (2) AI Industry Matching, mencocokkan profil kompetensi dan jam praktik dengan kebutuhan magang mitra industri; (3) manajemen program keahlian, asesmen kompetensi, portofolio, penilaian pembimbing industri, tracer study, dan bursa kerja.',
      en: 'For SMK: (1) IoT Machine Interlock, where workshop/lab machines only start when the student taps their card and has passed the K3 safety module; (2) AI Industry Matching, which matches competency profiles and practice hours to industry partners’ internship needs; (3) skill program management, competency assessment, portfolios, industry supervisor evaluation, tracer study and job board.',
    },
    next: ['levels', 'ai'],
  },
  {
    id: 'classroom',
    keywords: ['kelas pintar', 'smart classroom', 'ac', 'lampu', 'light', 'proyektor', 'projector', 'energi', 'energy', 'sensor', 'suhu', 'temperature', 'okupansi', 'occupancy'],
    answer: {
      id: 'Smart Classroom: AC, lampu, dan proyektor dinyalakan sesuai jadwal pelajaran di AKSA EDU dan sensor okupansi. Sensor suhu serta kualitas udara menjaga kenyamanan, dan optimasi energi prediktif membantu menekan listrik.',
      en: 'Smart Classroom: AC, lights and projectors switch on according to the AKSA EDU timetable and occupancy sensors. Temperature and air-quality sensors keep rooms comfortable, and predictive energy optimization helps cut electricity use.',
    },
    next: ['iot', 'features'],
  },
  {
    id: 'offline',
    keywords: ['offline', 'internet mati', 'internet down', 'tanpa internet', 'without internet', 'no internet', 'koneksi', 'connection', 'lan', 'mati listrik', 'outage', 'local-first', 'local first', 'failover', 'pwa'],
    answer: {
      id: 'AKSA EDU dirancang Local-First: operasional harian berjalan di server lokal sekolah. Internet mati tapi LAN hidup → aplikasi tetap penuh. Internet dan LAN mati → PWA memakai data tersimpan dan gerbang IoT memverifikasi kartu secara mandiri, lalu mengirim log saat jaringan pulih. Server lokal mati → perlu server cadangan/failover yang dirancang terpisah (dan UPS untuk listrik). Orang tua di luar sekolah hanya bisa melihat data terbaru jika sinkronisasi cloud aktif.',
      en: 'AKSA EDU is built Local-First: daily operations run on the school’s local server. Internet down but LAN up → the app keeps working fully. Internet and LAN down → the PWA uses stored data and IoT gates verify cards on their own, sending logs once the network returns. Local server down → a separately designed standby/failover server is needed (plus a UPS for power). Parents away from campus only see fresh data if cloud sync is enabled.',
    },
    next: ['sync', 'hardware'],
  },
  {
    id: 'architecture',
    keywords: ['arsitektur', 'architecture', 'deployment mode', 'mode deployment', 'hybrid', 'cloud only', 'local only', 'single codebase', 'modular monolith', 'monolith', 'microservice', 'docker', 'compose', 'app_mode'],
    answer: {
      id: 'Ada tiga mode deployment dari satu codebase: Local Only (semua di server sekolah), Hybrid (server sekolah + server pusat/gateway opsional untuk sinkronisasi dan akses jarak jauh), dan Cloud Only. Mode dipilih lewat konfigurasi lingkungan seperti APP_MODE=local atau cloud. Backend dibangun sebagai modular monolith, bukan microservices atau Kubernetes, dan dikemas dengan Docker Compose atau dijalankan via Linux + systemd.',
      en: 'There are three deployment modes from one codebase: Local Only (everything on the school server), Hybrid (school server plus an optional central server/gateway for sync and remote access), and Cloud Only. The mode is chosen through environment config such as APP_MODE=local or cloud. The backend is a modular monolith rather than microservices or Kubernetes, packaged with Docker Compose or run via Linux + systemd.',
    },
    next: ['stack', 'sync'],
  },
  {
    id: 'stack',
    keywords: ['tech stack', 'stack', 'teknologi', 'technology', 'next.js', 'nextjs', 'fastapi', 'python', 'react', 'postgres', 'database', 'redis', 'celery', 'mosquitto', 'mqtt', 'ollama', 'bahasa pemrograman', 'framework', 'tailwind'],
    answer: {
      id: 'Tech stack: Next.js + TypeScript + Tailwind (frontend, PWA), Python + FastAPI + Pydantic + SQLAlchemy + Alembic (backend), PostgreSQL (database, JSONB untuk rapor dinamis; TimescaleDB opsional untuk log IoT), Eclipse Mosquitto MQTT (IoT), Ollama/InsightFace/ONNX/Scikit-Learn (AI lokal), Redis + Celery/Taskiq (antrean kerja), MinIO opsional (file), Prometheus + Grafana (monitoring), dan Pytest + Playwright (pengujian).',
      en: 'Tech stack: Next.js + TypeScript + Tailwind (frontend, PWA), Python + FastAPI + Pydantic + SQLAlchemy + Alembic (backend), PostgreSQL (database, JSONB for flexible report cards; optional TimescaleDB for IoT logs), Eclipse Mosquitto MQTT (IoT), Ollama/InsightFace/ONNX/Scikit-Learn (local AI), Redis + Celery/Taskiq (job queue), optional MinIO (files), Prometheus + Grafana (monitoring), and Pytest + Playwright (testing).',
    },
    next: ['architecture', 'ai'],
  },
  {
    id: 'sync',
    keywords: ['sinkron', 'sync', 'synchroniz', 'outbox', 'konflik', 'conflict', 'multi-kampus', 'multi campus', 'multi-campus', 'server pusat', 'central server', 'idempot', 'vpn', 'wireguard', 'backup'],
    answer: {
      id: 'Sinkronisasi berbasis aplikasi (bukan replikasi database langsung): transaksi dicatat di database lokal, ditulis ke transactional outbox, lalu sync worker mengirimnya ke server pusat saat internet tersedia. Server pusat menerima secara idempotent dengan UUID/idempotency key dan retry exponential backoff. Konflik ditangani per jenis data: absensi event-based, pembayaran ledger append-only, nilai versioning plus persetujuan guru. Last-Write-Wins tidak dipakai untuk semua data. Antarlokasi gunakan WireGuard atau HTTPS; jangan buka port PostgreSQL ke internet. Backup harus terenkripsi dan diuji pemulihannya.',
      en: 'Sync is application-level (not direct database replication): transactions are saved to the local database, written to a transactional outbox, then a sync worker pushes them to the central server when internet is available. The central server accepts them idempotently using UUIDs/idempotency keys with exponential-backoff retries. Conflicts are handled per data type: attendance is event-based, payments use an append-only ledger, grades use versioning plus teacher approval. Last-Write-Wins is not used for everything. Between sites use WireGuard or HTTPS; never expose PostgreSQL to the internet. Backups should be encrypted and restore-tested.',
    },
    next: ['offline', 'privacy'],
  },
  {
    id: 'iot',
    keywords: ['iot', 'internet of things', 'perangkat', 'device', 'esp32', 'raspberry', 'turnstile', 'cctv', 'kamera', 'camera', 'sensor'],
    answer: {
      id: 'IoT menghubungkan sekolah fisik ke server: pembaca RFID/NFC, turnstile/gerbang, kiosk kamera, POS kantin, panic button, sensor ruang, smart relay mesin bengkel, serta RFID perpustakaan. Perangkat berbasis ESP32/Raspberry Pi berkomunikasi lewat MQTT (Mosquitto) di LAN, menyimpan event sementara saat koneksi putus, dan wajib punya identitas unik, autentikasi, dan segmentasi jaringan. Disarankan mulai dari satu use case IoT yang terukur.',
      en: 'IoT links the physical school to the server: RFID/NFC readers, turnstiles/gates, camera kiosks, canteen POS, panic buttons, room sensors, smart relays on workshop machines, and library RFID. ESP32/Raspberry Pi devices talk over MQTT (Mosquitto) on the LAN, buffer events when disconnected, and must have unique identity, authentication and network segmentation. Start with one measurable IoT use case.',
    },
    next: ['attendance', 'offline'],
  },
  {
    id: 'ai',
    keywords: ['ai', 'kean buatan', 'artificial intelligence', 'llm', 'chatbot', 'machine learning', 'rag', 'model', 'face recognition', 'pengenalan wajah', 'insightface', 'prediktif', 'predictive', 'asisten', 'assistant', 'penjurusan', 'major'],
    answer: {
      id: 'AI berjalan lokal di server sekolah: face recognition (InsightFace/ONNX), analitik prediktif EWS dan rekomendasi penjurusan (Scikit-Learn/XGBoost), serta asisten berbasis LLM lokal (Ollama, mis. Qwen) dengan RAG agar jawaban mengacu pada dokumen yang diizinkan. Ada asisten untuk orang tua, guru, siswa, dan pimpinan. Prinsipnya: AI membantu, bukan memutuskan; keluarannya bisa keliru sehingga perlu human review, jejak sumber, dan mekanisme koreksi. Data siswa tidak dikirim ke layanan AI eksternal.',
      en: 'AI runs locally on the school server: face recognition (InsightFace/ONNX), predictive analytics for EWS and major recommendations (Scikit-Learn/XGBoost), and a local-LLM assistant (Ollama, e.g. Qwen) with RAG so answers reference permitted documents. There are assistants for parents, teachers, students and leadership. The principle: AI assists, it does not decide; outputs can be wrong, so human review, source traces and correction mechanisms are required. Student data is not sent to external AI services.',
    },
    next: ['privacy', 'ews'],
  },
  {
    id: 'privacy',
    keywords: ['privasi', 'privacy', 'data wajah', 'face data', 'biometrik', 'biometric', 'vektor', 'vector', 'embedding', 'data pribadi', 'personal data', 'uu pdp', 'pdp', 'perlindungan data', 'data protection', 'aman', 'secure', 'keamanan', 'security', 'enkripsi', 'encrypt', 'rbac', 'audit', 'kedaulatan', 'sovereign', 'pengendali', 'controller', 'telemetry', 'consent', 'persetujuan'],
    answer: {
      id: 'Sekolah/yayasan adalah Pengendali Data; pengembang tidak mengumpulkan atau menyimpan data siswa dan tidak ada telemetry tersembunyi (kode dapat diaudit). Biometrik wajah disimpan sebagai vektor/embedding terenkripsi yang tidak dapat direkonstruksi menjadi foto. Biometrik dan pelacakan nutrisi anak wajib persetujuan orang tua sesuai UU PDP. Kontrol lain: RBAC, audit log, HTTPS/TLS 1.3 dan MQTTS, retensi data, serta hak penghapusan bagi siswa lulus/pindah. Sekolah tetap bertanggung jawab atas kepatuhan regulasi dan keamanan jaringannya.',
      en: 'The school/foundation is the Data Controller; the maintainers do not collect or store student data and there is no hidden telemetry (the code is auditable). Face biometrics are stored as encrypted vectors/embeddings that cannot be reconstructed into a photo. Biometrics and nutrition tracking for children require parental consent under Indonesia’s PDP Law. Other controls: RBAC, audit logs, HTTPS/TLS 1.3 and MQTTS, data retention, and the right to erasure for graduated/transferred students. The school remains responsible for regulatory compliance and network security.',
    },
    next: ['license', 'ai'],
  },
  {
    id: 'erasure',
    keywords: ['hapus data', 'delete data', 'penghapusan', 'erasure', 'right to be forgotten', 'lulus', 'graduat', 'pindah', 'transfer', 'retensi', 'retention'],
    answer: {
      id: 'Orang tua atau siswa yang telah lulus/pindah berhak meminta sekolah menghapus data biometrik wajah dan menonaktifkan akses IoT mereka secara permanen. Sekolah juga perlu menetapkan kebijakan retensi dan penghapusan data.',
      en: 'Parents or students who have graduated/transferred have the right to ask the school to delete their face biometric data and permanently deactivate their IoT access. Schools should also define data retention and deletion policies.',
    },
    next: ['privacy', 'license'],
  },
  {
    id: 'license',
    keywords: ['lisensi', 'license', 'licence', 'gpl', 'gnu', 'copyleft', 'open source', 'opensource', 'foss', 'modifikasi', 'modify', 'redistribusi', 'redistribut', 'jual', 'sell', 'proprietary', 'berpemilik', 'garansi', 'warranty', 'liability', 'tanggung jawab', 'as is', 'sebagaimana adanya', 'terms', 'syarat', 'ketentuan'],
    answer: {
      id: 'AKSA EDU dirilis di bawah GNU GPL v3 (atau yang lebih baru). Anda bebas menjalankan, mempelajari, dan memodifikasinya, termasuk untuk sekolah negeri, yayasan swasta, atau lembaga komersial, tanpa biaya lisensi per pengguna. Jika Anda mendistribusikan ulang (misalnya menjual sebagai paket solusi), kode sumber lengkap hasil modifikasi wajib disertakan di bawah GPL yang sama dan tidak boleh ditutup menjadi proprietary. Perangkat lunak disediakan "sebagaimana adanya" tanpa jaminan; pengembang tidak bertanggung jawab atas kehilangan data akibat kegagalan perangkat keras, tanpa backup, kelalaian operator, atau konfigurasi keamanan yang lemah.',
      en: 'AKSA EDU is released under the GNU GPL v3 (or later). You are free to run, study and modify it, including for public schools, private foundations or commercial institutions, with no per-user license fee. If you redistribute it (for example selling it as a solution package), you must include the full source of your modifications under the same GPL and may not close it as proprietary. The software is provided "as is" without warranty; the developers are not liable for data loss from hardware failure, missing backups, operator error or weak security configuration.',
    },
    next: ['download', 'privacy'],
  },
  {
    id: 'cost',
    keywords: ['gratis', 'free', 'biaya', 'cost', 'harga', 'price', 'pricing', 'bayar', 'pay', 'murah', 'cheap', 'hemat', 'budget', 'tco', 'langganan', 'subscription'],
    answer: {
      id: 'Perangkat lunaknya gratis (GPLv3, tanpa biaya lisensi per pengguna). Biaya nyata ada di infrastruktur: server lokal, SSD, UPS, jaringan, listrik, internet, perawatan, dan tenaga teknis. Arsitektur local-first menghindari sewa cloud bulanan besar; cloud/VPS kecil hanya dipakai jika perlu (VPN hub, backup off-site, akses jarak jauh). Bandingkan total biaya kepemilikan, bukan hanya harga VPS bulanan. Layanan pihak ketiga seperti WhatsApp API atau payment gateway punya biaya sendiri.',
      en: 'The software is free (GPLv3, no per-user license). Real costs are in infrastructure: a local server, SSDs, UPS, networking, electricity, internet, maintenance and technical staff. The local-first design avoids large monthly cloud rental; a small cloud/VPS is used only when needed (VPN hub, off-site backup, remote access). Compare total cost of ownership, not just monthly VPS price. Third-party services such as WhatsApp API or payment gateways carry their own fees.',
    },
    next: ['hardware', 'license'],
  },
  {
    id: 'download',
    keywords: ['unduh', 'download', 'github', 'repo', 'repositori', 'repository', 'install', 'instal', 'pasang', 'setup', 'cara pakai', 'how to use', 'get started', 'mulai', 'start', 'clone', 'source code', 'kode sumber', 'rilis', 'release'],
    answer: {
      id: `Unduh kode sumber dan rilis di ${REPO_URL}. Alur umum: clone repositori, salin file .env lalu atur APP_MODE=local, dan jalankan seluruh stack (FastAPI, Next.js, PostgreSQL, Mosquitto) dengan Docker Compose di satu Mini PC/server sekolah. Langkah terbaru ada di README resmi repositori. Disarankan memulai dengan pilot di satu unit sekolah.`,
      en: `Get the source code and releases at ${REPO_URL}. The typical flow: clone the repository, copy the .env file and set APP_MODE=local, then start the whole stack (FastAPI, Next.js, PostgreSQL, Mosquitto) with Docker Compose on a Mini PC/school server. Current steps are in the repository’s official README. We recommend piloting at a single school unit first.`,
    },
    next: ['hardware', 'license'],
  },
  {
    id: 'hardware',
    keywords: ['hardware', 'perangkat keras', 'spesifikasi', 'spec', 'server', 'mini pc', 'gpu', 'ups', 'ssd', 'kebutuhan', 'requirement', 'butuh apa', 'what do i need', 'infrastruktur', 'infrastructure', 'ram'],
    answer: {
      id: 'Kebutuhan awal: server lokal yang stabil (Mini PC cukup untuk skala kecil), SSD untuk sistem dan database, media backup terpisah, router/switch/access point sesuai jumlah pengguna, UPS untuk server dan jaringan penting, ventilasi serta lokasi server yang aman, DNS lokal dan sertifikat HTTPS. Tentukan spesifikasi dari jumlah siswa, guru, transaksi, file, perangkat IoT, dan kebutuhan AI. Jangan beli GPU besar sebelum beban AI terukur; jika kampus kurang kuat, AI bisa ditempatkan di server bersama yayasan.',
      en: 'Starting needs: a stable local server (a Mini PC suffices for small scale), SSD for system and database, separate backup media, router/switch/access points sized to the user count, UPS for the server and key network gear, good ventilation and a safe server location, plus local DNS and HTTPS certificates. Size the spec by students, teachers, transactions, files, IoT devices and AI workload. Don’t buy a big GPU before the AI load is measured; if a campus is underpowered, AI can run on a shared foundation server.',
    },
    next: ['download', 'cost'],
  },
  {
    id: 'parent',
    keywords: ['orang tua', 'parent', 'wali', 'guardian', 'portal', 'akun', 'account', 'multi anak', 'banyak anak', 'many children', 'notifikasi', 'notification', 'whatsapp', 'wa '],
    answer: {
      id: 'Satu akun orang tua dapat terhubung ke banyak anak di jenjang berbeda dan hanya melihat anak yang relasinya sudah diverifikasi. Portal menampilkan kehadiran, jadwal, rapor/nilai, tagihan SPP, pengumuman, dan persetujuan. Notifikasi dapat lewat aplikasi/web, Wi-Fi area penjemputan, atau gateway WhatsApp lokal (modem GSM/perangkat Android) agar tidak ada biaya per pesan dari penyedia cloud.',
      en: 'One parent account can link to many children across levels and only sees children whose relationship has been verified. The portal shows attendance, timetable, report cards/grades, tuition bills, announcements and consents. Notifications can go via the app/web, pick-up area Wi-Fi, or a local WhatsApp gateway (GSM modem/Android device) to avoid per-message cloud API fees.',
    },
    next: ['features', 'privacy'],
  },
  {
    id: 'database',
    keywords: ['multi-tenant', 'multi tenant', 'tenant', 'skema', 'schema', 'tabel', 'table', 'erd', 'identitas induk', 'master identity', 'longitudinal'],
    answer: {
      id: 'Database memakai pendekatan multi-tenant longitudinal di PostgreSQL: tabel tenants (unit sekolah), users + parent_student_relations, students (satu identitas induk), authorized_pickups, academic_records berbasis JSONB untuk format penilaian berbeda, dan iot_event_logs time-series. Riwayat pendaftaran/penempatan dipisah dari profil siswa, tabel operasional menyimpan konteks foundation/school/tahun ajaran, dan foreign key serta indeks diterapkan.',
      en: 'The database uses a multi-tenant longitudinal approach on PostgreSQL: a tenants table (school units), users + parent_student_relations, students (one master identity), authorized_pickups, JSONB-based academic_records for differing assessment formats, and time-series iot_event_logs. Enrollment/placement history is separated from the student profile, operational tables carry foundation/school/academic-year context, and foreign keys and indexes are applied.',
    },
    next: ['stack', 'levels'],
  },
  {
    id: 'roadmap',
    keywords: ['roadmap', 'fase', 'phase', 'mvp', 'prioritas', 'priority', 'jadwal pengembangan', 'timeline', 'berapa lama', 'how long', 'pilot'],
    answer: {
      id: 'Roadmap bertahap: Fase 1 fondasi (yayasan, auth, master data), Fase 2 MVP operasional (PPDB, siswa/wali, kelas, absensi, nilai, keuangan, portal orang tua), Fase 3 offline-first (PWA, sync queue), Fase 4 multi-kampus, Fase 5 IoT dan AI (mulai dari satu use case), Fase 6 produksi (monitoring, uji restore, uji beban/keamanan). Estimasi kasar untuk tim kecil berpengalaman 12–24 bulan atau lebih; lakukan pilot di satu unit sebelum rollout ke seluruh yayasan.',
      en: 'A phased roadmap: Phase 1 foundation (foundation, auth, master data), Phase 2 operational MVP (admissions, students/guardians, classes, attendance, grades, finance, parent portal), Phase 3 offline-first (PWA, sync queue), Phase 4 multi-campus, Phase 5 IoT and AI (starting with one use case), Phase 6 production (monitoring, restore tests, load/security tests). A rough estimate for a small experienced team is 12–24 months or more; pilot at one unit before rolling out to the whole foundation.',
    },
    next: ['download', 'features'],
  },
  {
    id: 'contribute',
    keywords: ['kontribusi', 'contribute', 'contribution', 'pull request', 'bug', 'celah', 'vulnerability', 'kerentanan', 'lapor', 'report', 'terjemah', 'translation', 'komunitas', 'community', 'patch'],
    answer: {
      id: 'Kontribusi kode (Pull Request), terjemahan bahasa, dan laporan bug sangat disambut dan dilisensikan di bawah GPL yang sama. Jika menemukan celah keamanan kritis, jangan dipublikasikan terbuka sebelum berkoordinasi dengan pengelola repositori supaya perbaikan bisa dirilis lebih dulu. Sekolah pengguna juga wajib rutin menerapkan security patch.',
      en: 'Code contributions (Pull Requests), translations and bug reports are very welcome and licensed under the same GPL. If you find a critical security vulnerability, don’t publish it openly before coordinating with the repository maintainers so a fix can ship first. Schools using the software should also apply security patches regularly.',
    },
    next: ['license', 'download'],
  },
  {
    id: 'language',
    keywords: ['bahasa', 'language', 'multibahasa', 'multilingual', 'english', 'inggris', 'indonesia', 'translate'],
    answer: {
      id: 'Landing page ini tersedia dalam Bahasa Indonesia dan English (US); gunakan tombol bahasa di pojok kanan atas. Chatbot ini otomatis menjawab sesuai bahasa yang sedang dipilih.',
      en: 'This landing page is available in Indonesian and English (US); use the language toggle in the top-right corner. This chatbot automatically answers in whichever language is currently selected.',
    },
    next: ['features'],
  },
]

export const smallTalk: { keywords: string[]; answer: Record<Lang, string> }[] = [
  {
    keywords: ['halo', 'hai', 'hi', 'hello', 'hey', 'selamat pagi', 'selamat siang', 'selamat sore', 'good morning', 'good afternoon'],
    answer: {
      id: 'Halo! Ada yang ingin Anda ketahui tentang AKSA EDU ? Saya bisa bantu soal fitur, offline mode, privasi, lisensi, atau cara unduh.',
      en: 'Hello! What would you like to know about AKSA EDU ? I can help with features, offline mode, privacy, licensing or how to download.',
    },
  },
  {
    keywords: ['terima kasih', 'makasih', 'thanks', 'thank you', 'thx'],
    answer: {
      id: 'Sama-sama! Kalau ada pertanyaan lain tentang AKSA EDU, silakan tanya kapan saja.',
      en: 'You’re welcome! If you have more questions about AKSA EDU, just ask anytime.',
    },
  },
]
