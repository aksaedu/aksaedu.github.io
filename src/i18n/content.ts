export type Lang = 'id' | 'en'

export const REPO_URL = 'https://github.com/aksaedu'

export interface Item {
  icon: string
  title: string
  desc: string
}

export interface Level {
  key: string
  name: string
  focus: string
  points: string[]
  accent: string
}

export interface Content {
  meta: { title: string; lang: string }
  nav: { features: string; levels: string; architecture: string; privacy: string; faq: string; download: string; menu: string }
  hero: {
    badge: string
    title1: string
    titleGradient: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    chips: string[]
  }
  stats: { value: string; label: string }[]
  features: { eyebrow: string; title: string; subtitle: string; items: Item[] }
  levels: { eyebrow: string; title: string; subtitle: string; items: Level[] }
  flow: { eyebrow: string; title: string; steps: { time: string; title: string; desc: string }[] }
  arch: {
    eyebrow: string
    title: string
    subtitle: string
    modes: { name: string; desc: string }[]
    stackTitle: string
    stack: { layer: string; tech: string }[]
    offline: { title: string; rows: { cond: string; result: string }[] }
  }
  privacy: { eyebrow: string; title: string; subtitle: string; items: Item[]; license: string }
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] }
  download: {
    eyebrow: string
    title: string
    subtitle: string
    cta: string
    secondary: string
    steps: string[]
    note: string
    license: string
    copy: string
    copied: string
  }
  footer: { tagline: string; rights: string; disclaimer: string }
  chat: {
    title: string
    subtitle: string
    placeholder: string
    send: string
    open: string
    close: string
    greeting: string
    suggestions: string[]
    fallback: string
    typing: string
    clear: string
    disclaimer: string
  }
  langLabel: string
}

const id: Content = {
  meta: { title: 'AKSAEDU  — Platform Smart School Open Source', lang: 'id' },
  nav: {
    features: 'Fitur',
    levels: 'Jenjang',
    architecture: 'Arsitektur',
    privacy: 'Privasi',
    faq: 'FAQ',
    download: 'Unduh',
    menu: 'Buka menu',
  },
  hero: {
    badge: 'Open source · GPL v3 · Local-first',
    title1: 'AKSAEDU yang berpikir,',
    titleGradient: 'bukan sekadar mencatat.',
    subtitle:
      'Satu platform untuk yayasan dari Playgroup, TK, SD, SMP, SMA hingga SMK. Terhubung dengan IoT dan AI lokal, tetap berjalan saat internet mati, dan data anak tetap berada di server sekolah Anda.',
    ctaPrimary: 'Unduh di GitHub',
    ctaSecondary: 'Lihat fitur',
    chips: ['Bisa offline', 'IoT & RFID', 'AI di server sekolah', 'Tanpa biaya lisensi'],
  },
  stats: [
    { value: '6', label: 'Jenjang dalam satu platform' },
    { value: '100%', label: 'Operasional lokal tanpa internet' },
    { value: '0', label: 'Biaya lisensi per pengguna' },
    { value: 'GPLv3', label: 'Kode sumber terbuka & bisa diaudit' },
  ],
  features: {
    eyebrow: 'Fitur utama',
    title: 'Dari gerbang sekolah sampai rapor, semua tersambung.',
    subtitle:
      'AKSAEDU  menghubungkan dunia fisik sekolah ke sistem akademik secara real-time, lalu memakai AI sebagai asisten, bukan pengambil keputusan.',
    items: [
      { icon: '👨‍👩‍👧', title: 'Portal orang tua terpadu', desc: 'Satu akun memantau semua anak di jenjang berbeda: kehadiran, nilai, tagihan SPP, dan pengumuman.' },
      { icon: '📡', title: 'Presensi otomatis IoT', desc: 'Kartu RFID/NFC atau pemindai wajah mencatat jam masuk dan pulang, lalu orang tua langsung diberi tahu.' },
      { icon: '🛡️', title: 'Smart Pick-up PG–SD', desc: 'Verifikasi penjemput sah di gerbang, foto tampil di monitor kelas, dan guru mengonfirmasi serah terima.' },
      { icon: '🍽️', title: 'Kantin nontunai sehat', desc: 'Saldo via gelang/kartu RFID, batas uang saku harian, dan pelacakan estimasi kalori serta gula.' },
      { icon: '🧠', title: 'Early Warning System', desc: 'Deteksi dini penurunan prestasi atau indikasi perundungan dari pola absensi, nilai, dan catatan BK untuk ditinjau manusia.' },
      { icon: '🚨', title: 'Tombol darurat', desc: 'Panic button di titik rawan terhubung langsung ke ruang BK dan keamanan sekolah.' },
      { icon: '🏭', title: 'Smart Workshop SMK', desc: 'Mesin bengkel hanya menyala bagi siswa yang sudah lulus modul K3, plus pencocokan PKL dengan mitra industri.' },
      { icon: '🌡️', title: 'Smart classroom', desc: 'AC, lampu, dan proyektor mengikuti jadwal pelajaran dan sensor okupansi untuk menghemat energi.' },
      { icon: '💬', title: 'Asisten virtual 24/7', desc: 'Jawab pertanyaan jadwal, administrasi, dan regulasi sekolah untuk orang tua dan siswa.' },
    ],
  },
  levels: {
    eyebrow: 'Enam jenjang, satu identitas',
    title: 'Proses bisnis menyesuaikan karakter tiap jenjang.',
    subtitle:
      'Siswa punya satu identitas induk dari Playgroup sampai lulus. Yang berbeda adalah konfigurasi kurikulum, penilaian, dan alur kerjanya.',
    items: [
      { key: 'PG', name: 'Playgroup', focus: 'Pengasuhan, stimulasi, dan keselamatan', points: ['Check-in/out & verifikasi penjemput', 'Observasi motorik, bahasa, sosial-emosional', 'Ringkasan observasi dibantu AI'], accent: 'from-pink-500 to-rose-500' },
      { key: 'TK', name: 'TK', focus: 'Kesiapan belajar dan kreativitas', points: ['Aktivitas tematik & portofolio karya', 'Laporan perkembangan deskriptif', 'Rekomendasi aktivitas edukatif'], accent: 'from-orange-500 to-amber-500' },
      { key: 'SD', name: 'SD', focus: 'Literasi, numerasi, dan karakter', points: ['Kelas, jadwal, presensi harian', 'Tugas, kuis, remedial & pengayaan', 'Rapor dan komunikasi orang tua'], accent: 'from-lime-500 to-emerald-500' },
      { key: 'SMP', name: 'SMP', focus: 'Berpikir kritis dan eksplorasi minat', points: ['Praktikum & proyek lintas mapel', 'Bimbingan konseling', 'Smart library & laboratorium'], accent: 'from-teal-500 to-cyan-500' },
      { key: 'SMA', name: 'SMA', focus: 'Pendalaman akademik dan karier', points: ['Mapel pilihan & penelitian', 'AI penjurusan dan pemetaan karier', 'Portofolio prestasi'], accent: 'from-sky-500 to-blue-500' },
      { key: 'SMK', name: 'SMK', focus: 'Kompetensi kejuruan dan kesiapan kerja', points: ['Asesmen kompetensi & portofolio', 'Interlock mesin bengkel (K3)', 'PKL, mitra industri, tracer study'], accent: 'from-violet-500 to-fuchsia-500' },
    ],
  },
  flow: {
    eyebrow: 'Sehari bersama AKSAEDU',
    title: 'Dari gerbang pagi hingga penjemputan sore.',
    steps: [
      { time: 'Pagi', title: 'Kedatangan', desc: 'Siswa tap kartu atau dikenali kamera. Orang tua menerima notifikasi, wali kelas diperingatkan bila belum tercatat.' },
      { time: 'Siang', title: 'Belajar & istirahat', desc: 'Sensor menjaga kenyamanan kelas, guru mengisi jurnal di tablet, siswa membayar di kantin dengan RFID.' },
      { time: 'Sore', title: 'Kepulangan', desc: 'PG–SD: penjemput diverifikasi dan guru mengantar anak. SMP–SMK: tap-out sebagai bukti meninggalkan sekolah.' },
    ],
  },
  arch: {
    eyebrow: 'Arsitektur',
    title: 'Local-first, cloud-optional, offline-capable.',
    subtitle:
      'Operasional harian berjalan di server lokal sekolah. Internet dipakai untuk akses jarak jauh, sinkronisasi, dan backup off-site, bukan syarat operasional. Satu codebase untuk semua mode.',
    modes: [
      { name: 'Local Only', desc: 'Aplikasi dan database di server sekolah. Operasional LAN tanpa cloud.' },
      { name: 'Hybrid', desc: 'Server sekolah plus server pusat/gateway opsional untuk sinkronisasi dan akses jarak jauh.' },
      { name: 'Cloud Only', desc: 'Aplikasi dan database di cloud untuk sekolah tanpa infrastruktur lokal.' },
    ],
    stackTitle: 'Tech stack',
    stack: [
      { layer: 'Frontend', tech: 'Next.js + TypeScript + Tailwind, PWA' },
      { layer: 'Backend', tech: 'Python + FastAPI, Pydantic, SQLAlchemy' },
      { layer: 'Database', tech: 'PostgreSQL' },
      { layer: 'IoT', tech: 'MQTT + Eclipse Mosquitto' },
      { layer: 'AI lokal', tech: 'Ollama, InsightFace/ONNX, Scikit-Learn' },
      { layer: 'Deploy', tech: 'Docker Compose / Linux + systemd' },
    ],
    offline: {
      title: 'Apa yang terjadi saat jaringan bermasalah?',
      rows: [
        { cond: 'Internet mati, LAN hidup', result: 'Aplikasi lokal tetap beroperasi penuh.' },
        { cond: 'Internet & LAN mati', result: 'PWA memakai data tersimpan; gerbang IoT memverifikasi kartu secara mandiri.' },
        { cond: 'Server lokal mati', result: 'Perlu server cadangan/failover yang dirancang terpisah.' },
        { cond: 'Koneksi pulih', result: 'Antrean outbox disinkronkan otomatis tanpa duplikasi.' },
      ],
    },
  },
  privacy: {
    eyebrow: 'Privasi & keamanan',
    title: 'Data anak tetap milik sekolah.',
    subtitle: 'Sekolah adalah Pengendali Data. Pengembang tidak mengumpulkan atau menyimpan data siswa Anda.',
    items: [
      { icon: '🏫', title: 'Kedaulatan data', desc: 'Semua data tersimpan di server sekolah. Tidak ada telemetry tersembunyi, kode dapat diaudit.' },
      { icon: '🧬', title: 'Vektor wajah, bukan foto', desc: 'Biometrik disimpan sebagai embedding terenkripsi yang tidak bisa dikembalikan menjadi gambar wajah.' },
      { icon: '🖥️', title: 'AI berjalan lokal', desc: 'Face recognition, EWS, dan rekomendasi dijalankan di server sekolah, tanpa API AI komersial luar negeri.' },
      { icon: '✍️', title: 'Persetujuan eksplisit', desc: 'Biometrik dan pelacakan nutrisi siswa di bawah umur wajib persetujuan orang tua sesuai UU PDP.' },
      { icon: '🔐', title: 'Akses berbasis peran', desc: 'RBAC, audit log perubahan nilai/presensi/pembayaran, enkripsi HTTPS/TLS 1.3 dan MQTTS.' },
      { icon: '🗑️', title: 'Hak penghapusan', desc: 'Siswa lulus/pindah dapat meminta data biometrik dihapus dan akses IoT dinonaktifkan permanen.' },
    ],
    license: 'Perangkat lunak disediakan "sebagaimana adanya" sesuai GPLv3. Sekolah bertanggung jawab atas backup, keamanan jaringan, dan kepatuhan regulasi setempat.',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Pertanyaan yang sering diajukan',
    items: [
      { q: 'Apakah AKSAEDU  gratis?', a: 'Ya. Dilisensikan GPLv3, bebas dipakai, dipelajari, dan dimodifikasi tanpa biaya lisensi per pengguna. Jika Anda mendistribusikan ulang versi modifikasi, kode sumbernya wajib tetap terbuka di bawah GPL.' },
      { q: 'Apakah butuh internet?', a: 'Tidak untuk operasional harian. Server lokal sekolah melayani semua kegiatan lewat LAN. Internet hanya untuk akses orang tua dari rumah, sinkronisasi, dan backup off-site.' },
      { q: 'Satu sekolah atau satu yayasan?', a: 'Keduanya. Model multi-tenant mendukung yayasan dengan enam jenjang, dan satu akun orang tua dapat terhubung ke banyak anak lintas jenjang.' },
      { q: 'Apakah AI mengambil keputusan tentang siswa?', a: 'Tidak. AI hanya membantu. Keputusan penting seperti penerimaan, sanksi, atau kelulusan tetap membutuhkan penilaian manusia.' },
      { q: 'Perangkat keras apa yang dibutuhkan?', a: 'Minimal satu server lokal yang stabil (bisa Mini PC) dengan SSD, UPS, dan jaringan LAN/Wi-Fi. GPU besar tidak perlu dibeli sebelum kebutuhan AI terukur.' },
    ],
  },
  download: {
    eyebrow: 'Mulai sekarang',
    title: 'Unduh AKSAEDU  dan jalankan di sekolah Anda.',
    subtitle: 'Kode sumber, rilis, dan dokumentasi tersedia di GitHub.',
    cta: 'Buka repositori GitHub',
    secondary: 'Lapor bug / kontribusi',
    steps: ['Clone repositori', 'Salin .env dan atur APP_MODE=local', 'Jalankan dengan Docker Compose'],
    note: 'Perintah di atas adalah ilustrasi alur umum. Ikuti README resmi di repositori untuk langkah terbaru.',
    license: 'Lisensi: GNU GPL v3',
    copy: 'Salin',
    copied: 'Tersalin',
  },
  footer: {
    tagline: 'Platform smart school open source untuk Playgroup hingga SMK.',
    rights: 'Dirilis di bawah GNU GPL v3.',
    disclaimer: 'Tanpa jaminan apa pun. Sekolah bertanggung jawab atas kepatuhan UU PDP dan perlindungan anak.',
  },
  chat: {
    title: 'Asisten AKSAEDU',
    subtitle: 'Tanya apa saja tentang aplikasi ini',
    placeholder: 'Tulis pertanyaan Anda…',
    send: 'Kirim',
    open: 'Buka asisten',
    close: 'Tutup asisten',
    greeting: 'Halo! Saya asisten AKSAEDU . Saya bisa menjawab soal fitur, jenjang, arsitektur offline, privasi, lisensi, dan cara mengunduh. Mau mulai dari mana?',
    suggestions: ['Apa saja fiturnya?', 'Bagaimana saat internet mati?', 'Cara mengunduh?', 'Bagaimana data wajah anak dilindungi?'],
    fallback: 'Maaf, saya belum menemukan jawaban untuk itu di dokumentasi AKSAEDU. Coba tanyakan tentang fitur, jenjang, tech stack, offline, IoT, AI, privasi, lisensi, atau cara unduh.',
    typing: 'Mengetik…',
    clear: 'Mulai ulang',
    disclaimer: 'Jawaban bersumber dari dokumentasi proyek dan berjalan di browser Anda.',
  },
  langLabel: 'Bahasa',
}

const en: Content = {
  meta: { title: 'AKSAEDU  — Open Source Smart School Platform', lang: 'en' },
  nav: {
    features: 'Features',
    levels: 'Levels',
    architecture: 'Architecture',
    privacy: 'Privacy',
    faq: 'FAQ',
    download: 'Download',
    menu: 'Open menu',
  },
  hero: {
    badge: 'Open source · GPL v3 · Local-first',
    title1: 'A school system that thinks,',
    titleGradient: 'not just records.',
    subtitle:
      'One platform for foundations running Playgroup, Kindergarten, Elementary, Junior High, Senior High and Vocational schools. Connected to IoT and on-premise AI, it keeps working when the internet is down, and children’s data stays on your school’s server.',
    ctaPrimary: 'Download on GitHub',
    ctaSecondary: 'Explore features',
    chips: ['Works offline', 'IoT & RFID', 'AI on school servers', 'No license fees'],
  },
  stats: [
    { value: '6', label: 'School levels in one platform' },
    { value: '100%', label: 'Local operation without internet' },
    { value: '0', label: 'Per-user license cost' },
    { value: 'GPLv3', label: 'Open, auditable source code' },
  ],
  features: {
    eyebrow: 'Key features',
    title: 'From the school gate to the report card, everything connects.',
    subtitle:
      'AKSAEDU  links the physical school to the academic system in real time, and uses AI as an assistant, never as the decision maker.',
    items: [
      { icon: '👨‍👩‍👧', title: 'Unified parent portal', desc: 'One account follows every child across levels: attendance, grades, tuition bills, and announcements.' },
      { icon: '📡', title: 'IoT auto-attendance', desc: 'RFID/NFC cards or face scanners log arrival and departure, and parents are notified instantly.' },
      { icon: '🛡️', title: 'Smart Pick-up (PG–SD)', desc: 'Authorized pick-up is verified at the gate, the photo appears on the classroom monitor, and the teacher confirms the handover.' },
      { icon: '🍽️', title: 'Healthy cashless canteen', desc: 'RFID wristband balance, daily spending limits, and estimated calorie and sugar tracking.' },
      { icon: '🧠', title: 'Early Warning System', desc: 'Flags possible academic decline or bullying from attendance, grades and counseling notes, for human review.' },
      { icon: '🚨', title: 'Emergency panic button', desc: 'Panic buttons in blind spots connect directly to the counseling room and school security.' },
      { icon: '🏭', title: 'Smart Workshop (SMK)', desc: 'Workshop machines only start for students who passed the safety (K3) module, plus internship matching with industry partners.' },
      { icon: '🌡️', title: 'Smart classroom', desc: 'AC, lights and projectors follow the timetable and occupancy sensors to save energy.' },
      { icon: '💬', title: '24/7 virtual assistant', desc: 'Answers schedule, administration and policy questions for parents and students.' },
    ],
  },
  levels: {
    eyebrow: 'Six levels, one identity',
    title: 'Workflows adapt to each level’s character.',
    subtitle:
      'Every student keeps a single master identity from Playgroup to graduation. What changes is curriculum configuration, assessment and workflow.',
    items: [
      { key: 'PG', name: 'Playgroup', focus: 'Care, stimulation and safety', points: ['Check-in/out and pick-up verification', 'Motor, language, social-emotional observation', 'AI-assisted observation summaries'], accent: 'from-pink-500 to-rose-500' },
      { key: 'TK', name: 'Kindergarten', focus: 'Learning readiness and creativity', points: ['Thematic activities and work portfolio', 'Descriptive development reports', 'Educational activity suggestions'], accent: 'from-orange-500 to-amber-500' },
      { key: 'SD', name: 'Elementary', focus: 'Literacy, numeracy and character', points: ['Classes, timetable, daily attendance', 'Assignments, quizzes, remedial & enrichment', 'Report cards and parent communication'], accent: 'from-lime-500 to-emerald-500' },
      { key: 'SMP', name: 'Junior High', focus: 'Critical thinking and interest exploration', points: ['Labs and cross-subject projects', 'Counseling and guidance', 'Smart library & laboratory'], accent: 'from-teal-500 to-cyan-500' },
      { key: 'SMA', name: 'Senior High', focus: 'Academic depth and career planning', points: ['Elective subjects and research', 'AI major selection and career mapping', 'Achievement portfolio'], accent: 'from-sky-500 to-blue-500' },
      { key: 'SMK', name: 'Vocational', focus: 'Vocational skills and job readiness', points: ['Competency assessment & portfolio', 'Workshop machine interlock (K3)', 'Internships, industry partners, tracer study'], accent: 'from-violet-500 to-fuchsia-500' },
    ],
  },
  flow: {
    eyebrow: 'A day with AKSAEDU',
    title: 'From the morning gate to afternoon pick-up.',
    steps: [
      { time: 'Morning', title: 'Arrival', desc: 'Students tap a card or are recognized by camera. Parents get a notification; homeroom teachers are alerted if no entry is recorded.' },
      { time: 'Midday', title: 'Learning & break', desc: 'Sensors keep classrooms comfortable, teachers log journals on tablets, and students pay at the canteen with RFID.' },
      { time: 'Afternoon', title: 'Dismissal', desc: 'PG–SD: the pick-up person is verified and a teacher escorts the child. SMP–SMK: tap-out confirms leaving campus.' },
    ],
  },
  arch: {
    eyebrow: 'Architecture',
    title: 'Local-first, cloud-optional, offline-capable.',
    subtitle:
      'Daily operations run on the school’s local server. The internet is used for remote access, sync and off-site backup, never as a requirement to operate. One codebase powers every mode.',
    modes: [
      { name: 'Local Only', desc: 'App and database on the school server. LAN operation without cloud.' },
      { name: 'Hybrid', desc: 'School server plus an optional central server/gateway for sync and remote access.' },
      { name: 'Cloud Only', desc: 'App and database in the cloud for schools without local infrastructure.' },
    ],
    stackTitle: 'Tech stack',
    stack: [
      { layer: 'Frontend', tech: 'Next.js + TypeScript + Tailwind, PWA' },
      { layer: 'Backend', tech: 'Python + FastAPI, Pydantic, SQLAlchemy' },
      { layer: 'Database', tech: 'PostgreSQL' },
      { layer: 'IoT', tech: 'MQTT + Eclipse Mosquitto' },
      { layer: 'Local AI', tech: 'Ollama, InsightFace/ONNX, Scikit-Learn' },
      { layer: 'Deploy', tech: 'Docker Compose / Linux + systemd' },
    ],
    offline: {
      title: 'What happens when the network fails?',
      rows: [
        { cond: 'Internet down, LAN up', result: 'The local app keeps running fully.' },
        { cond: 'Internet & LAN down', result: 'The PWA uses stored data; IoT gates verify cards on their own.' },
        { cond: 'Local server down', result: 'A separately designed standby/failover server is required.' },
        { cond: 'Connection restored', result: 'The outbox queue syncs automatically without duplicates.' },
      ],
    },
  },
  privacy: {
    eyebrow: 'Privacy & security',
    title: 'Children’s data stays with the school.',
    subtitle: 'The school is the Data Controller. The maintainers do not collect or store your students’ data.',
    items: [
      { icon: '🏫', title: 'Data sovereignty', desc: 'All data lives on school servers. No hidden telemetry, and the code can be audited.' },
      { icon: '🧬', title: 'Face vectors, not photos', desc: 'Biometrics are stored as encrypted embeddings that cannot be turned back into a face image.' },
      { icon: '🖥️', title: 'AI runs locally', desc: 'Face recognition, EWS and recommendations run on the school server, with no overseas commercial AI APIs.' },
      { icon: '✍️', title: 'Explicit consent', desc: 'Biometrics and nutrition tracking for minors require parental consent under Indonesia’s PDP Law.' },
      { icon: '🔐', title: 'Role-based access', desc: 'RBAC, audit logs for grade/attendance/payment changes, HTTPS/TLS 1.3 and MQTTS encryption.' },
      { icon: '🗑️', title: 'Right to erasure', desc: 'Graduated or transferred students can request biometric deletion and permanent IoT deactivation.' },
    ],
    license: 'The software is provided "as is" under GPLv3. Schools are responsible for backups, network security and local regulatory compliance.',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Frequently asked questions',
    items: [
      { q: 'Is AKSAEDU  free?', a: 'Yes. It is licensed under GPLv3, free to use, study and modify with no per-user license fee. If you redistribute a modified version, its source must stay open under the GPL.' },
      { q: 'Does it need the internet?', a: 'Not for daily operations. The school’s local server handles everything over the LAN. The internet is only for parent access from home, sync and off-site backup.' },
      { q: 'One school or a whole foundation?', a: 'Both. The multi-tenant model supports a foundation with six levels, and one parent account can link to many children across levels.' },
      { q: 'Does AI make decisions about students?', a: 'No. AI only assists. Important decisions such as admissions, sanctions or graduation still require human judgment.' },
      { q: 'What hardware is required?', a: 'At minimum one stable local server (a Mini PC works) with SSD, UPS and LAN/Wi-Fi. Don’t buy a large GPU until your AI workload is measured.' },
    ],
  },
  download: {
    eyebrow: 'Get started',
    title: 'Download AKSAEDU  and run it at your school.',
    subtitle: 'Source code, releases and documentation are available on GitHub.',
    cta: 'Open GitHub repository',
    secondary: 'Report a bug / contribute',
    steps: ['Clone the repository', 'Copy .env and set APP_MODE=local', 'Start with Docker Compose'],
    note: 'The commands above illustrate the typical flow. Follow the official README in the repository for current steps.',
    license: 'License: GNU GPL v3',
    copy: 'Copy',
    copied: 'Copied',
  },
  footer: {
    tagline: 'Open source smart school platform for Playgroup through SMK.',
    rights: 'Released under the GNU GPL v3.',
    disclaimer: 'No warranty of any kind. Schools are responsible for PDP Law compliance and child protection.',
  },
  chat: {
    title: 'AKSAEDU Assistant',
    subtitle: 'Ask anything about this app',
    placeholder: 'Type your question…',
    send: 'Send',
    open: 'Open assistant',
    close: 'Close assistant',
    greeting: 'Hi! I’m the AKSAEDU  assistant. I can answer questions about features, school levels, offline architecture, privacy, licensing and how to download. Where would you like to start?',
    suggestions: ['What features does it have?', 'What happens when the internet is down?', 'How do I download it?', 'How is children’s face data protected?'],
    fallback: 'Sorry, I couldn’t find an answer to that in the AKSAEDU documentation. Try asking about features, school levels, tech stack, offline mode, IoT, AI, privacy, licensing or downloading.',
    typing: 'Typing…',
    clear: 'Restart',
    disclaimer: 'Answers come from the project documentation and run in your browser.',
  },
  langLabel: 'Language',
}

export const content: Record<Lang, Content> = { id, en }
