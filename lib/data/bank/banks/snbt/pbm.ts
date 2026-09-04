"use client";

import type { BankSoal } from "@/lib/data/soal";

const S = (t: string) => [{ t }] as { t: string; b?: boolean }[];
const B = (t: string) => ({ t, b: true }) as { t: string; b?: boolean };
const P = (t: string) => ({ t }) as { t: string; b?: boolean };

/**
 * Bank Soal SNBT — Pemahaman Bacaan & Menulis (150 soal orisinal elite).
 * Topik: ide pokok, makna kata/kalimat, inferensi & simpulan, EYD (penulisan
 * kata/serapan/tanda baca), dan kalimat efektif. Stimulus kontekstual, opsi
 * distraktor logis, pembahasan runtut. Distribusi jawaban A/B/C/D merata.
 */
export const BANK_SNBT_PBM: BankSoal[] = [

  {
    no: 1,
    stimulus: ['Hutan bakau sering disebut sebagai benteng alami pesisir. Akar-akarnya yang rapat mampu meredam gelombang laut dan mencegah abrasi. Selain itu, kawasan ini menjadi tempat asuhan berbagai biota laut yang masih muda.'],
    prompt: S('Ide pokok paragraf tersebut adalah ….'),
    options: [
      { key: "A", text: 'Hutan bakau berfungsi sebagai pelindung kawasan pesisir' },
      { key: "B", text: 'Akar bakau menjadi tempat asuhan biota laut' },
      { key: "C", text: 'Gelombang laut dapat diredam oleh tumbuhan bakau' },
      { key: "D", text: 'Abrasi pesisir disebabkan oleh gelombang laut yang besar' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Kalimat utama paragraf terletak pada kalimat pertama, yaitu hutan bakau sebagai benteng alami pesisir.')],
    [P('Kalimat selanjutnya hanya memerinci fungsi perlindungan tersebut: meredam gelombang, mencegah abrasi, dan menjadi tempat asuhan biota.')],
    [P('Jadi, ide pokoknya: '), B('hutan bakau berfungsi sebagai pelindung kawasan pesisir.')],
    ],
  },

  {
    no: 2,
    stimulus: ['Kebiasaan menunda pekerjaan atau prokrastinasi ternyata tidak hanya dipicu oleh rasa malas. Penelitian menunjukkan bahwa perfeksionisme yang berlebihan justru membuat seseorang takut memulai karena khawatir hasilnya tidak sempurna. Lingkungan yang penuh gangguan juga ikut memperbesar peluang seseorang menunda tugasnya.'],
    prompt: S('Ide pokok paragraf tersebut adalah ….'),
    options: [
      { key: "A", text: 'Perfeksionisme berlebihan membuat orang takut memulai pekerjaan' },
      { key: "B", text: 'Lingkungan yang penuh gangguan menyebabkan tugas terbengkalai' },
      { key: "C", text: 'Prokrastinasi dipicu oleh berbagai faktor, bukan hanya kemalasan' },
      { key: "D", text: 'Rasa malas merupakan pemicu utama kebiasaan menunda pekerjaan' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Kalimat pertama memuat pernyataan umum bahwa prokrastinasi '), B('tidak hanya'), P(' dipicu rasa malas; kalimat berikutnya memberi contoh faktor lain.')],
    [P('Jadi, ide pokoknya: '), B('prokrastinasi dipicu berbagai faktor, bukan hanya kemalasan.')],
    ],
  },

  {
    no: 3,
    stimulus: ['Gerakan literasi digital mengajak masyarakat memilah informasi sebelum membagikannya. Setiap unggahan yang diterima perlu dicek sumber dan kebenarannya. Dengan demikian, penyebaran berita palsu dapat ditekan sejak dari pengguna media sosial itu sendiri.'],
    prompt: S('Ide pokok paragraf tersebut adalah ….'),
    options: [
      { key: "A", text: 'Literasi digital menekankan pemilahan informasi sebelum menyebarkannya' },
      { key: "B", text: 'Sumber berita perlu dicek kebenarannya oleh masyarakat' },
      { key: "C", text: 'Berita palsu banyak beredar di media sosial' },
      { key: "D", text: 'Pengguna media sosial berperan menyebarkan informasi' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Paragraf diawali pernyataan umum tentang gerakan literasi digital, kemudian dirinci dengan langkah mengecek sumber dan kebenaran informasi.')],
    [P('Ide pokoknya: '), B('literasi digital menekankan pemilahan informasi sebelum menyebarkannya.')],
    ],
  },

  {
    no: 4,
    stimulus: ['Sampah plastik membutuhkan waktu ratusan tahun untuk terurai secara alami. Di lautan, plastik pecah menjadi partikel kecil yang tertelan biota laut. Partikel itu akhirnya masuk ke rantai makanan dan dapat kembali ke tubuh manusia.'],
    prompt: S('Gagasan utama paragraf tersebut adalah ….'),
    options: [
      { key: "A", text: 'Partikel plastik kecil banyak tertelan oleh biota laut' },
      { key: "B", text: 'Plastik membutuhkan waktu sangat lama untuk terurai' },
      { key: "C", text: 'Rantai makanan laut tercemar oleh sampah plastik' },
      { key: "D", text: 'Sampah plastik mengancam lingkungan hingga kesehatan manusia' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Seluruh kalimat membangun satu gagasan: perjalanan bahaya sampah plastik dari alam hingga ke tubuh manusia.')],
    [P('Gagasan utamanya: '), B('sampah plastik mengancam lingkungan hingga kesehatan manusia.')],
    ],
  },

  {
    no: 5,
    stimulus: ['Bahasa daerah mengalami penurunan jumlah penutur yang cukup tajam. Generasi muda di perkotaan lebih banyak menggunakan bahasa Indonesia atau bahasa asing dalam percakapan sehari-hari. Padahal, di dalam bahasa daerah tersimpan kearifan lokal dan nilai budaya yang tidak ternilai.'],
    prompt: S('Ide pokok paragraf tersebut adalah ….'),
    options: [
      { key: "A", text: 'Generasi muda perkotaan jarang memakai bahasa daerah' },
      { key: "B", text: 'Bahasa daerah semakin ditinggalkan oleh penuturnya' },
      { key: "C", text: 'Bahasa daerah menyimpan kearifan lokal yang berharga' },
      { key: "D", text: 'Bahasa asing menggeser kedudukan bahasa daerah' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Kalimat pertama merupakan kalimat utama: bahasa daerah '), B('mengalami penurunan penutur'), P('. Kalimat berikutnya menjelaskan kondisi generasi muda.')],
    [P('Ide pokoknya: '), B('bahasa daerah semakin ditinggalkan oleh penuturnya.')],
    ],
  },

  {
    no: 6,
    stimulus: ['Museum tidak lagi sekadar tempat menyimpan benda bersejarah. Kini banyak museum menghadirkan teknologi realitas maya agar pengunjung dapat merasakan suasana masa lampau secara langsung. Pendekatan ini membuat pembelajaran sejarah terasa lebih hidup bagi generasi digital.'],
    prompt: S('Ide pokok paragraf tersebut adalah ….'),
    options: [
      { key: "A", text: 'Teknologi realitas maya dikembangkan untuk museum' },
      { key: "B", text: 'Benda bersejarah kini disimpan di dalam museum' },
      { key: "C", text: 'Museum modern memanfaatkan teknologi untuk menghidupkan sejarah' },
      { key: "D", text: 'Generasi digital menyukai pembelajaran sejarah' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Kalimat pertama menyatakan perubahan fungsi museum; kalimat kedua dan ketiga menjelaskan bentuk serta tujuan perubahannya.')],
    [P('Ide pokoknya: '), B('museum modern memanfaatkan teknologi untuk menghidupkan sejarah.')],
    ],
  },

  {
    no: 7,
    stimulus: ['Kopi tidak hanya dikenal sebagai minuman penghilang kantuk. Kandungan antioksidannya bermanfaat untuk menangkal radikal bebas. Namun, konsumsi kopi berlebihan justru dapat memicu gangguan tidur dan jantung berdebar.'],
    prompt: S('Gagasan utama paragraf tersebut adalah ….'),
    options: [
      { key: "A", text: 'Kopi memiliki manfaat sekaligus risiko bagi tubuh' },
      { key: "B", text: 'Kopi mengandung antioksidan penangkal radikal bebas' },
      { key: "C", text: 'Kopi berlebihan memicu gangguan tidur dan jantung' },
      { key: "D", text: 'Kopi merupakan minuman penghilang kantuk' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Paragraf menyajikan dua sisi kopi: '), B('manfaat'), P(' (antioksidan) dan '), B('risiko'), P(' (gangguan tidur, jantung berdebar).')],
    [P('Gagasan utamanya: '), B('kopi memiliki manfaat sekaligus risiko bagi tubuh.')],
    ],
  },

  {
    no: 8,
    stimulus: ['Ketersediaan air bersih di kota-kota besar semakin terancam. Pembangunan gedung dan jalan mengurangi daerah resapan air. Ketika hujan deras turun, air tidak dapat terserap tanah sehingga memicu banjir dan kekeringan di musim kemarau.'],
    prompt: S('Ide pokok paragraf tersebut adalah ….'),
    options: [
      { key: "A", text: 'Pengurangan daerah resapan mengancam ketersediaan air bersih' },
      { key: "B", text: 'Pembangunan gedung mengurangi daerah resapan air' },
      { key: "C", text: 'Hujan deras menyebabkan banjir di kota besar' },
      { key: "D", text: 'Air bersih sulit didapat pada musim kemarau' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Kalimat pertama menjadi kalimat utama; kalimat berikutnya menjelaskan sebabnya, yaitu berkurangnya daerah resapan air.')],
    [P('Ide pokoknya: '), B('pengurangan daerah resapan mengancam ketersediaan air bersih.')],
    ],
  },

  {
    no: 9,
    stimulus: ['Kebun binatang modern tidak lagi menampilkan satwa dalam kandang sempit. Hewan ditempatkan di area luas yang menyerupai habitat aslinya. Pengunjung dapat menyaksikan perilaku alami satwa dari jarak yang tetap aman.'],
    prompt: S('Gagasan utama paragraf tersebut adalah ….'),
    options: [
      { key: "A", text: 'Hewan di kebun binatang hidup di kandang yang luas' },
      { key: "B", text: 'Kebun binatang modern menyajikan habitat alami bagi satwanya' },
      { key: "C", text: 'Pengunjung dapat mengamati satwa dari jarak aman' },
      { key: "D", text: 'Kandang sempit tidak layak bagi satwa liar' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Gagasan yang didukung seluruh kalimat adalah perubahan desain kebun binatang modern yang meniru habitat asli satwa.')],
    [P('Gagasan utamanya: '), B('kebun binatang modern menyajikan habitat alami bagi satwanya.')],
    ],
  },

  {
    no: 10,
    stimulus: ['Menabung sejak dini melatih anak mengendalikan keinginan. Anak belajar membedakan kebutuhan dan keinginan melalui uang saku yang dikelola sendiri. Kebiasaan ini akan membentuk pribadi yang bijak mengatur keuangan saat dewasa.'],
    prompt: S('Ide pokok paragraf tersebut adalah ….'),
    options: [
      { key: "A", text: 'Anak perlu belajar membedakan kebutuhan dan keinginan' },
      { key: "B", text: 'Uang saku sebaiknya dikelola sendiri oleh anak' },
      { key: "C", text: 'Menabung sejak dini melatih anak mengelola keuangan secara bijak' },
      { key: "D", text: 'Kebiasaan menabung dilakukan sejak masa kecil' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Kalimat pertama memuat inti: menabung sejak dini melatih anak mengendalikan keinginan, lalu diperluas menjadi kecakapan mengelola keuangan.')],
    [P('Ide pokoknya: '), B('menabung sejak dini melatih anak mengelola keuangan secara bijak.')],
    ],
  },

  {
    no: 11,
    stimulus: ['Penerangan jalan umum menggunakan lampu tenaga surya semakin diminati. Lampu jenis ini tidak membutuhkan kabel listrik sehingga biaya pemasangannya lebih hemat. Perawatannya pun tergolong mudah karena tidak bergantung pada pasokan listrik konvensional.'],
    prompt: S('Gagasan utama paragraf tersebut adalah ….'),
    options: [
      { key: "A", text: 'Lampu tenaga surya tidak membutuhkan kabel listrik' },
      { key: "B", text: 'Biaya pemasangan lampu jalan surya lebih murah' },
      { key: "C", text: 'Lampu tenaga surya menjadi pilihan penerangan jalan yang praktis dan hemat' },
      { key: "D", text: 'Lampu jalan surya mudah perawatannya' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Kalimat pertama menyatakan '), B('diminatinya'), P(' lampu tenaga surya; kalimat berikutnya memberi alasan kehematan dan kemudahan perawatan.')],
    [P('Gagasan utamanya: '), B('lampu tenaga surya menjadi pilihan penerangan jalan yang praktis dan hemat.')],
    ],
  },

  {
    no: 12,
    stimulus: ['Kegiatan gotong royong mulai jarang terlihat di permukiman kota. Kesibukan bekerja membuat warga tidak sempat bertegur sapa, apalagi bekerja sama membersihkan lingkungan. Padahal, gotong royong mempererat rasa kebersamaan antartetangga.'],
    prompt: S('Ide pokok paragraf tersebut adalah ….'),
    options: [
      { key: "A", text: 'Warga kota tidak sempat membersihkan lingkungan' },
      { key: "B", text: 'Kesibukan bekerja mengurangi waktu bersosialisasi' },
      { key: "C", text: 'Gotong royong mempererat kebersamaan antartetangga' },
      { key: "D", text: 'Gotong royong semakin luntur di tengah kesibukan warga kota' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Kalimat pertama adalah kalimat utama; kalimat kedua menerangkan sebab, kalimat ketiga menegaskan nilai gotong royong.')],
    [P('Ide pokoknya: '), B('gotong royong semakin luntur di tengah kesibukan warga kota.')],
    ],
  },

  {
    no: 13,
    stimulus: ['Serangga penyerbuk seperti lebah berperan penting dalam produksi pangan. Sebagian besar tanaman buah dan sayur bergantung pada penyerbukan untuk menghasilkan buah. Tanpa serangga ini, hasil panen petani dapat turun drastis.'],
    prompt: S('Gagasan utama paragraf tersebut adalah ….'),
    options: [
      { key: "A", text: 'Serangga penyerbuk sangat menentukan keberhasilan produksi pangan' },
      { key: "B", text: 'Lebah merupakan serangga penyerbuk yang paling utama' },
      { key: "C", text: 'Tanaman buah dan sayur membutuhkan proses penyerbukan' },
      { key: "D", text: 'Hasil panen petani menurun tanpa kehadiran lebah' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Seluruh kalimat menegaskan ketergantungan produksi pangan terhadap serangga penyerbuk.')],
    [P('Gagasan utamanya: '), B('serangga penyerbuk sangat menentukan keberhasilan produksi pangan.')],
    ],
  },

  {
    no: 14,
    stimulus: ['Kebiasaan membaca nyaring kepada anak ternyata berpengaruh besar terhadap perkembangan bahasanya. Anak yang sering dibacakan buku memiliki kosakata yang lebih kaya. Ia juga lebih mudah memahami alur cerita dan mengekspresikan perasaannya.'],
    prompt: S('Ide pokok paragraf tersebut adalah ….'),
    options: [
      { key: "A", text: 'Membaca nyaring memberikan dampak positif pada perkembangan bahasa anak' },
      { key: "B", text: 'Anak yang sering dibacakan buku memiliki kosakata kaya' },
      { key: "C", text: 'Membaca nyaring membantu anak memahami alur cerita' },
      { key: "D", text: 'Kebiasaan membaca perlu ditanamkan sejak dini' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Kalimat pertama memuat inti paragraf, yakni '), B('pengaruh besar membaca nyaring'), P('; kalimat lain memerinci manfaatnya.')],
    [P('Ide pokoknya: '), B('membaca nyaring memberikan dampak positif pada perkembangan bahasa anak.')],
    ],
  },

  {
    no: 15,
    stimulus: ['Transportasi umum massal dapat mengurangi kemacetan secara signifikan. Satu gerbong kereta mampu membawa ratusan penumpang yang seharusnya menggunakan kendaraan pribadi. Karena itu, kota-kota besar gencar membangun sistem angkutan massal.'],
    prompt: S('Gagasan utama paragraf tersebut adalah ….'),
    options: [
      { key: "A", text: 'Satu gerbong kereta memuat ratusan penumpang' },
      { key: "B", text: 'Transportasi massal menjadi solusi mengurangi kemacetan kota' },
      { key: "C", text: 'Kendaraan pribadi menyebabkan kemacetan' },
      { key: "D", text: 'Kota besar membangun sistem angkutan massal' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Kalimat pertama merupakan kalimat utama, sedangkan kalimat berikutnya berupa alasan dan akibat dari pernyataan tersebut.')],
    [P('Gagasan utamanya: '), B('transportasi massal menjadi solusi mengurangi kemacetan kota.')],
    ],
  },

  {
    no: 16,
    stimulus: ['Permainan tradisional mengandung nilai pendidikan yang tidak kalah dengan permainan modern. Melalui permainan congklak, anak belajar berhitung dan bersabar. Permainan benteng-bentengan mengajarkan kerja sama serta strategi.'],
    prompt: S('Ide pokok paragraf tersebut adalah ….'),
    options: [
      { key: "A", text: 'Permainan congklak mengajarkan anak berhitung' },
      { key: "B", text: 'Permainan benteng-bentengan melatih kerja sama' },
      { key: "C", text: 'Permainan tradisional sarat dengan nilai pendidikan bagi anak' },
      { key: "D", text: 'Permainan modern tidak memiliki nilai pendidikan' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Kalimat pertama menjadi gagasan umum; dua kalimat berikutnya adalah contoh pendukungnya.')],
    [P('Ide pokoknya: '), B('permainan tradisional sarat dengan nilai pendidikan bagi anak.')],
    ],
  },

  {
    no: 17,
    stimulus: ['Kualitas udara dalam ruangan sering kali lebih buruk daripada udara luar. Asap rokok, debu, dan senyawa dari bahan pembersih dapat menumpuk di ruang tertutup. Ventilasi yang baik menjadi kunci agar udara di dalam rumah tetap sehat.'],
    prompt: S('Gagasan utama paragraf tersebut adalah ….'),
    options: [
      { key: "A", text: 'Udara ruangan lebih buruk daripada udara luar' },
      { key: "B", text: 'Asap rokok dan debu menumpuk di ruang tertutup' },
      { key: "C", text: 'Udara dalam ruangan perlu dijaga kualitasnya melalui ventilasi yang baik' },
      { key: "D", text: 'Ventilasi rumah berfungsi membuang udara kotor' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Paragraf diawali masalah (udara ruangan buruk), diperjelas penyebabnya, lalu ditutup dengan solusi berupa ventilasi.')],
    [P('Gagasan utama mencakup masalah sekaligus solusinya: '), B('udara dalam ruangan perlu dijaga melalui ventilasi yang baik.')],
    ],
  },

  {
    no: 18,
    stimulus: ['Membaca peta tidak lagi harus menggunakan peta kertas. Aplikasi navigasi di ponsel mampu menunjukkan rute secara langsung dan memperbaruinya saat pengguna tersesat. Kemudahan ini mengubah cara orang bepergian ke tempat baru.'],
    prompt: S('Ide pokok paragraf tersebut adalah ….'),
    options: [
      { key: "A", text: 'Peta kertas kini jarang digunakan masyarakat' },
      { key: "B", text: 'Aplikasi navigasi memudahkan orang membaca arah dan bepergian' },
      { key: "C", text: 'Aplikasi ponsel memperbarui rute saat pengguna tersesat' },
      { key: "D", text: 'Cara orang bepergian berubah karena teknologi' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Inti paragraf adalah kemudahan yang dihadirkan aplikasi navigasi dan dampaknya pada cara orang bepergian.')],
    [P('Ide pokoknya: '), B('aplikasi navigasi memudahkan orang membaca arah dan bepergian.')],
    ],
  },

  {
    no: 19,
    stimulus: ['Daur ulang kertas mengurangi penebangan pohon secara tidak langsung. Setiap ton kertas daur ulang menyelamatkan puluhan pohon dari penebangan. Selain itu, prosesnya memakai energi lebih sedikit dibandingkan pembuatan kertas baru.'],
    prompt: S('Gagasan utama paragraf tersebut adalah ….'),
    options: [
      { key: "A", text: 'Daur ulang kertas menyelamatkan puluhan pohon' },
      { key: "B", text: 'Pembuatan kertas baru membutuhkan banyak energi' },
      { key: "C", text: 'Kertas bekas dapat diolah menjadi kertas baru' },
      { key: "D", text: 'Daur ulang kertas memberikan manfaat bagi kelestarian alam' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Kalimat pertama memuat gagasan utama; kalimat berikutnya berupa data pendukung manfaat tersebut.')],
    [P('Gagasan utamanya: '), B('daur ulang kertas memberikan manfaat bagi kelestarian alam.')],
    ],
  },

  {
    no: 20,
    stimulus: ['Tidur yang cukup tidak hanya memulihkan tenaga. Saat tidur, otak merapikan ingatan dan membuang zat sisa metabolisme. Karena itu, orang yang kurang tidur sering sulit berkonsentrasi keesokan harinya.'],
    prompt: S('Ide pokok paragraf tersebut adalah ….'),
    options: [
      { key: "A", text: 'Tidur yang cukup berperan penting bagi kesehatan otak' },
      { key: "B", text: 'Tidur berfungsi memulihkan tenaga tubuh' },
      { key: "C", text: 'Otak membuang zat sisa metabolisme saat tidur' },
      { key: "D", text: 'Kurang tidur menyebabkan sulit berkonsentrasi' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Kalimat pertama membuka dengan peran tidur, lalu kalimat kedua menerangkan manfaatnya bagi otak, dan kalimat ketiga menunjukkan akibat bila kurang tidur.')],
    [P('Ide pokoknya: '), B('tidur yang cukup berperan penting bagi kesehatan otak.')],
    ],
  },

  {
    no: 21,
    stimulus: ['Batik tidak hanya milik satu daerah. Hampir setiap provinsi di Indonesia memiliki motif batik khas dengan filosofi masing-masing. Keberagaman ini menjadi bukti kekayaan budaya bangsa yang diwariskan turun-temurun.'],
    prompt: S('Gagasan utama paragraf tersebut adalah ….'),
    options: [
      { key: "A", text: 'Keberagaman batik mencerminkan kekayaan budaya Indonesia' },
      { key: "B", text: 'Setiap provinsi memiliki motif batik khas' },
      { key: "C", text: 'Batik diwariskan secara turun-temurun' },
      { key: "D", text: 'Batik merupakan warisan budaya satu daerah' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Kalimat pertama dan kedua menunjukkan batik tersebar di banyak daerah, lalu disimpulkan sebagai '), B('kekayaan budaya bangsa'), P('.')],
    [P('Gagasan utamanya: '), B('keberagaman batik mencerminkan kekayaan budaya Indonesia.')],
    ],
  },

  {
    no: 22,
    stimulus: ['Sampah organik dapat diolah menjadi kompos yang menyuburkan tanah. Limbah dapur seperti sisa sayur dan kulit buah dicampur dengan tanah serta mikroorganisme pengurai. Setelah beberapa minggu, bahan itu berubah menjadi pupuk alami siap pakai.'],
    prompt: S('Ide pokok paragraf tersebut adalah ….'),
    options: [
      { key: "A", text: 'Limbah dapur terdiri atas sisa sayur dan kulit buah' },
      { key: "B", text: 'Mikroorganisme berperan menguraikan sampah organik' },
      { key: "C", text: 'Pupuk alami siap pakai setelah beberapa minggu' },
      { key: "D", text: 'Sampah organik dapat diolah menjadi kompos yang bermanfaat' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Kalimat pertama merupakan kalimat utama; dua kalimat berikutnya menjelaskan proses pengolahan tersebut.')],
    [P('Ide pokoknya: '), B('sampah organik dapat diolah menjadi kompos yang bermanfaat.')],
    ],
  },

  {
    no: 23,
    stimulus: ['Pohon di tepi jalan tidak hanya memberi keteduhan. Akar dan tajuknya membantu menyerap air hujan sehingga mengurangi genangan. Kehadirannya juga menyaring debu dan menurunkan suhu udara di sekitarnya.'],
    prompt: S('Gagasan utama paragraf tersebut adalah ….'),
    options: [
      { key: "A", text: 'Pohon tepi jalan memiliki banyak manfaat bagi lingkungan' },
      { key: "B", text: 'Pohon membantu menyerap air hujan' },
      { key: "C", text: 'Tajuk pohon menyaring debu dan meneduhkan' },
      { key: "D", text: 'Pohon ditanam di sepanjang tepi jalan kota' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Kalimat pertama memuat kata kunci '), B('tidak hanya memberi keteduhan'), P(' yang menandakan akan ada manfaat lain; kalimat berikutnya memerincinya.')],
    [P('Gagasan utamanya: '), B('pohon tepi jalan memiliki banyak manfaat bagi lingkungan.')],
    ],
  },

  {
    no: 24,
    stimulus: ['Krisis pangan global mendorong manusia mencari sumber makanan baru. Serangga yang kaya protein mulai dilirik sebagai alternatif lauk. Beberapa negara bahkan telah membudidayakan jangkrik untuk konsumsi manusia.'],
    prompt: S('Gagasan utama paragraf tersebut adalah ….'),
    options: [
      { key: "A", text: 'Krisis pangan global melanda berbagai negara' },
      { key: "B", text: 'Serangga mulai dilirik sebagai alternatif sumber pangan' },
      { key: "C", text: 'Jangkrik kaya protein dan mudah dibudidayakan' },
      { key: "D", text: 'Manusia mencari sumber makanan baru di alam' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Kalimat pertama menjelaskan latar, sedangkan inti yang dikembangkan adalah pemanfaatan serangga sebagai pangan alternatif.')],
    [P('Gagasan utamanya: '), B('serangga mulai dilirik sebagai alternatif sumber pangan.')],
    ],
  },

  {
    no: 25,
    stimulus: ['Kebakaran hutan sering dipicu oleh aktivitas manusia, bukan faktor alam. Pembukaan lahan dengan cara membakar menjadi penyebab paling umum. Kelalaian seperti membuang puntung rokok di area kering juga memicu api menjalar dengan cepat.'],
    prompt: S('Ide pokok paragraf tersebut adalah ….'),
    options: [
      { key: "A", text: 'Aktivitas manusia menjadi pemicu utama kebakaran hutan' },
      { key: "B", text: 'Pembukaan lahan dengan dibakar melanggar hukum' },
      { key: "C", text: 'Puntung rokok dapat menyebabkan api menjalar' },
      { key: "D", text: 'Kebakaran hutan disebabkan faktor alam' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Kalimat pertama menegaskan bahwa kebakaran hutan '), B('dipicu aktivitas manusia'), P('; dua kalimat berikutnya memberi contoh penyebabnya.')],
    [P('Ide pokoknya: '), B('aktivitas manusia menjadi pemicu utama kebakaran hutan.')],
    ],
  },

  {
    no: 26,
    stimulus: ['Olahraga teratur terbukti memperbaiki suasana hati. Aktivitas fisik memicu pelepasan endorfin yang membuat tubuh terasa rileks dan bahagia. Tidak heran jika banyak orang merasa lebih tenang setelah berolahraga.'],
    prompt: S('Gagasan utama paragraf tersebut adalah ….'),
    options: [
      { key: "A", text: 'Endorfin dilepaskan tubuh saat berolahraga' },
      { key: "B", text: 'Banyak orang merasa tenang setelah berolahraga' },
      { key: "C", text: 'Aktivitas fisik membuat tubuh terasa rileks' },
      { key: "D", text: 'Olahraga teratur dapat memperbaiki suasana hati' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Kalimat pertama adalah kalimat utama; kalimat kedua menerangkan mekanismenya, kalimat ketiga merupakan penegasan.')],
    [P('Gagasan utamanya: '), B('olahraga teratur dapat memperbaiki suasana hati.')],
    ],
  },

  {
    no: 27,
    stimulus: ['Gelombang pasang yang menerjang permukiman nelayan itu meremukkan puluhan perahu yang bersandar di dermaga.'],
    prompt: [P('Makna kata '), B('meremukkan'), P(' pada kalimat tersebut adalah ….')],
    options: [
      { key: "A", text: 'mendorong' },
      { key: "B", text: 'menghancurkan' },
      { key: "C", text: 'mengangkat' },
      { key: "D", text: 'menenggelamkan' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Kata '), B('meremukkan'), P(' terbentuk dari kata dasar remuk yang berarti hancur.')],
    [P('Dalam konteks gelombang pasang, perahu menjadi rusak berat, yaitu '), B('hancur.')],
    ],
  },

  {
    no: 28,
    stimulus: ['Dari telepon genggam sederhana hingga ponsel pintar, teknologi komunikasi terus berevolusi mengikuti kebutuhan manusia.'],
    prompt: [P('Makna kata '), B('berevolusi'), P(' dalam kalimat tersebut adalah ….')],
    options: [
      { key: "A", text: 'berubah secara tiba-tiba' },
      { key: "B", text: 'berkembang secara bertahap' },
      { key: "C", text: 'menghilang digantikan yang baru' },
      { key: "D", text: 'berputar mengikuti zaman' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Kata '), B('evolusi'), P(' bermakna perubahan secara berangsur-angsur.')],
    [P('Jadi, '), B('berevolusi'), P(' berarti '), B('berkembang secara bertahap.')],
    ],
  },

  {
    no: 29,
    stimulus: ['Inflasi yang tinggi menggerus daya beli masyarakat kelas menengah setiap bulannya.'],
    prompt: [P('Makna kata '), B('menggerus'), P(' pada kalimat tersebut adalah ….')],
    options: [
      { key: "A", text: 'mengurangi sedikit demi sedikit' },
      { key: "B", text: 'menghapus secara menyeluruh' },
      { key: "C", text: 'menaikkan secara drastis' },
      { key: "D", text: 'menahan agar tetap stabil' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Kata dasar '), B('gerus'), P(' berarti menggiling atau menghancurkan perlahan.')],
    [P('Dalam konteks ekonomi, daya beli '), B('berkurang sedikit demi sedikit'), P(' akibat inflasi.')],
    ],
  },

  {
    no: 30,
    stimulus: ['Sinyalemen Badan Meteorologi tentang potensi kekeringan panjang perlu direspons serius oleh pemerintah daerah.'],
    prompt: [P('Makna kata '), B('sinyalemen'), P(' dalam kalimat tersebut adalah ….')],
    options: [
      { key: "A", text: 'larangan resmi' },
      { key: "B", text: 'laporan keuangan' },
      { key: "C", text: 'peringatan atau pernyataan dugaan' },
      { key: "D", text: 'keputusan akhir' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Kata '), B('sinyalemen'), P(' berasal dari bahasa Belanda signalement yang berarti tanda atau pemberitahuan resmi berupa dugaan.')],
    [P('Dalam konteks ini bermakna '), B('peringatan atau pernyataan dugaan'), P(' akan terjadinya kekeringan.')],
    ],
  },

  {
    no: 31,
    stimulus: ['Hasil penelitian itu mengafirmasi dugaan para ahli bahwa konsumsi gula berlebih berkaitan dengan gangguan metabolisme.'],
    prompt: [P('Makna kata '), B('mengafirmasi'), P(' pada kalimat tersebut adalah ….')],
    options: [
      { key: "A", text: 'membantah' },
      { key: "B", text: 'menegaskan' },
      { key: "C", text: 'meragukan' },
      { key: "D", text: 'mengabaikan' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Kata serapan '), B('afirmasi'), P(' berarti penetapan atau penegasan.')],
    [P('Jadi, '), B('mengafirmasi'), P(' berarti '), B('menegaskan'), P(' kebenaran dugaan tersebut.')],
    ],
  },

  {
    no: 32,
    stimulus: ['Tenaga kerja yang elastis lebih mudah dipindahkan ke bidang usaha lain saat kondisi ekonomi berubah.'],
    prompt: [P('Makna kata '), B('elastis'), P(' dalam kalimat tersebut adalah ….')],
    options: [
      { key: "A", text: 'sulit diatur' },
      { key: "B", text: 'berketerampilan tinggi' },
      { key: "C", text: 'berpengalaman lama' },
      { key: "D", text: 'mudah menyesuaikan diri' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Secara harfiah '), B('elastis'), P(' berarti lentur atau dapat memanjang dan kembali ke bentuk semula.')],
    [P('Dalam konteks tenaga kerja, yang lentur berarti '), B('mudah menyesuaikan diri'), P(' terhadap perubahan.')],
    ],
  },

  {
    no: 33,
    stimulus: ['Meskipun sudah banyak pasar modern, pedagang konvensional di pasar tradisional tetap memiliki pelanggan setia.'],
    prompt: [P('Makna kata '), B('konvensional'), P(' pada kalimat tersebut adalah ….')],
    options: [
      { key: "A", text: 'modern dan serba digital' },
      { key: "B", text: 'bersifat sementara' },
      { key: "C", text: 'tradisional atau menurut kebiasaan umum' },
      { key: "D", text: 'bermodal besar' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Kata '), B('konvensional'), P(' berarti berdasarkan konvensi, yaitu kebiasaan atau kesepakatan umum.')],
    [P('Pedagang konvensional adalah pedagang '), B('tradisional yang menjalankan cara lama'), P('.')],
    ],
  },

  {
    no: 34,
    stimulus: ['Pemerintah menyalurkan subsidi pupuk agar harga jualnya tetap terjangkau oleh petani kecil.'],
    prompt: [P('Makna kata '), B('subsidi'), P(' dalam kalimat tersebut adalah ….')],
    options: [
      { key: "A", text: 'pinjaman berbunga rendah' },
      { key: "B", text: 'pajak atas hasil bumi' },
      { key: "C", text: 'dana cadangan desa' },
      { key: "D", text: 'bantuan dana dari pemerintah' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Kata '), B('subsidi'), P(' berarti bantuan (uang dan sebagainya) yang diberikan oleh negara kepada pihak tertentu.')],
    [P('Jadi, subsidi pupuk adalah '), B('bantuan dana pemerintah'), P(' agar harga pupuk terjangkau.')],
    ],
  },

  {
    no: 35,
    stimulus: ['Tanaman padi yang adaptif terhadap genangan air menjadi harapan petani di daerah rawan banjir.'],
    prompt: [P('Makna kata '), B('adaptif'), P(' dalam kalimat tersebut adalah ….')],
    options: [
      { key: "A", text: 'tahan terhadap serangan hama' },
      { key: "B", text: 'cepat berbuah dalam waktu singkat' },
      { key: "C", text: 'memerlukan banyak unsur hara' },
      { key: "D", text: 'mampu menyesuaikan diri dengan lingkungan' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Kata '), B('adaptif'), P(' berasal dari adaptasi, yaitu penyesuaian diri terhadap lingkungan.')],
    [P('Varietas padi adaptif berarti '), B('mampu menyesuaikan diri'), P(' dengan kondisi genangan.')],
    ],
  },

  {
    no: 36,
    stimulus: ['Pemberitaan yang tidak berimbang dapat menimbulkan distorsi informasi di tengah masyarakat.'],
    prompt: [P('Makna kata '), B('distorsi'), P(' dalam kalimat tersebut adalah ….')],
    options: [
      { key: "A", text: 'penyimpangan atau pemutarbalikan' },
      { key: "B", text: 'penyempurnaan berita' },
      { key: "C", text: 'penyebaran secara meluas' },
      { key: "D", text: 'penyaringan ketat' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Kata '), B('distorsi'), P(' berarti penyimpangan dari keadaan yang sebenarnya.')],
    [P('Distorsi informasi berarti '), B('penyimpangan atau pemutarbalikan'), P(' fakta.')],
    ],
  },

  {
    no: 37,
    stimulus: ['Program literasi keuangan di sekolah bertujuan agar siswa mampu mengelola uang saku dengan bijak.'],
    prompt: [P('Makna kata '), B('literasi'), P(' dalam kalimat tersebut adalah ….')],
    options: [
      { key: "A", text: 'kegiatan membaca buku di perpustakaan' },
      { key: "B", text: 'mata pelajaran bahasa Indonesia' },
      { key: "C", text: 'kemampuan menulis karya ilmiah' },
      { key: "D", text: 'kecakapan memahami dan menggunakan informasi' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Secara luas, '), B('literasi'), P(' berarti kemampuan memahami dan menggunakan informasi untuk kehidupan.')],
    [P('Literasi keuangan berarti '), B('kecakapan memahami dan menggunakan informasi'), P(' tentang keuangan.')],
    ],
  },

  {
    no: 38,
    stimulus: ['Penyelesaian masalah di lingkungan kerja modern menuntut pendekatan kolaboratif antarbagian.'],
    prompt: [P('Makna kata '), B('kolaboratif'), P(' dalam kalimat tersebut adalah ….')],
    options: [
      { key: "A", text: 'bersifat kompetitif' },
      { key: "B", text: 'bersifat bekerja sama' },
      { key: "C", text: 'bersifat hierarkis' },
      { key: "D", text: 'bersifat individual' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Kata '), B('kolaboratif'), P(' berasal dari kolaborasi yang berarti kerja sama.')],
    [P('Pendekatan kolaboratif berarti penyelesaian yang dilakukan secara '), B('bersama-sama'), P('.')],
    ],
  },

  {
    no: 39,
    stimulus: ['Anak-anak yang resilien mampu bangkit kembali setelah mengalami kegagalan dalam ujian maupun perlombaan.'],
    prompt: [P('Makna kata '), B('resilien'), P(' dalam kalimat tersebut adalah ….')],
    options: [
      { key: "A", text: 'pandai bersaing dengan teman' },
      { key: "B", text: 'sangat bergantung pada orang tua' },
      { key: "C", text: 'tangguh dan cepat pulih dari keterpurukan' },
      { key: "D", text: 'mudah menyerah pada keadaan' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Kata '), B('resilien'), P(' berarti mampu bertahan dan pulih dari keadaan sulit.')],
    [P('Anak resilien adalah anak yang '), B('tangguh dan cepat pulih'), P(' setelah mengalami kegagalan.')],
    ],
  },

  {
    no: 40,
    stimulus: ['Harga cabai di pasar induk bersifat fluktuatif, berubah hampir setiap pekan mengikuti musim panen.'],
    prompt: [P('Makna kata '), B('fluktuatif'), P(' dalam kalimat tersebut adalah ….')],
    options: [
      { key: "A", text: 'selalu naik secara tetap' },
      { key: "B", text: 'naik turun tidak menentu' },
      { key: "C", text: 'cenderung turun perlahan' },
      { key: "D", text: 'stabil dalam jangka panjang' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Kata '), B('fluktuatif'), P(' berasal dari fluktuasi yang berarti gejolak atau perubahan naik turun.')],
    [P('Harga yang fluktuatif berarti '), B('naik turun tidak menentu'), P('.')],
    ],
  },

  {
    no: 41,
    stimulus: ['Ruang publik yang ramah difabel harus mengakomodasi kebutuhan pengguna kursi roda, mulai dari jalur masuk hingga toilet.'],
    prompt: [P('Makna kata '), B('mengakomodasi'), P(' dalam kalimat tersebut adalah ….')],
    options: [
      { key: "A", text: 'menampung dan memenuhi kebutuhan' },
      { key: "B", text: 'menghalangi akses' },
      { key: "C", text: 'menyediakan tempat parkir' },
      { key: "D", text: 'memisahkan fasilitas khusus' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Kata dasar '), B('akomodasi'), P(' berarti sesuatu yang disediakan untuk memenuhi kebutuhan.')],
    [P('Jadi, '), B('mengakomodasi'), P(' berarti '), B('menampung dan memenuhi kebutuhan'), P('.')],
    ],
  },

  {
    no: 42,
    stimulus: ['Penangkapan ikan yang berlebihan merupakan bentuk eksploitasi sumber daya laut yang membahayakan ekosistem.'],
    prompt: [P('Makna kata '), B('eksploitasi'), P(' dalam kalimat tersebut adalah ….')],
    options: [
      { key: "A", text: 'pemeliharaan yang teratur' },
      { key: "B", text: 'pemanfaatan yang berlebihan' },
      { key: "C", text: 'pengawasan yang ketat' },
      { key: "D", text: 'pelestarian yang berkelanjutan' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Kata '), B('eksploitasi'), P(' berarti pengusahaan atau pemanfaatan untuk memperoleh keuntungan, sering kali berlebihan.')],
    [P('Dalam konteks ini bermakna '), B('pemanfaatan sumber daya yang berlebihan'), P('.')],
    ],
  },

  {
    no: 43,
    stimulus: ['Upaya preservasi naskah kuno dilakukan dengan menyimpan manuskrip pada suhu dan kelembapan yang terkendali.'],
    prompt: [P('Makna kata '), B('preservasi'), P(' dalam kalimat tersebut adalah ….')],
    options: [
      { key: "A", text: 'penerjemahan ke bahasa lain' },
      { key: "B", text: 'penggandaan dalam jumlah banyak' },
      { key: "C", text: 'penelitian isi naskah' },
      { key: "D", text: 'pemeliharaan agar tetap lestari' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Kata '), B('preservasi'), P(' berarti pemeliharaan atau perlindungan agar tidak rusak.')],
    [P('Preservasi naskah kuno berarti '), B('pemeliharaan agar naskah tetap lestari'), P('.')],
    ],
  },

  {
    no: 44,
    stimulus: ['Dalam film dokumenter itu, cuplikan wawancara dipotong menjadi fragmen-fragmen pendek agar alurnya dinamis.'],
    prompt: [P('Makna kata '), B('fragmen'), P(' dalam kalimat tersebut adalah ….')],
    options: [
      { key: "A", text: 'gambar bergerak' },
      { key: "B", text: 'suara latar' },
      { key: "C", text: 'penggalan atau bagian kecil' },
      { key: "D", text: 'adegan pembuka' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Kata '), B('fragmen'), P(' berarti cuplikan atau penggalan cerita.')],
    [P('Fragmen wawancara berarti '), B('penggalan atau bagian kecil'), P(' dari wawancara.')],
    ],
  },

  {
    no: 45,
    stimulus: ['Perusahaan teknologi besar itu mendominasi pasar aplikasi pesan instan di hampir seluruh dunia.'],
    prompt: [P('Makna kata '), B('mendominasi'), P(' dalam kalimat tersebut adalah ….')],
    options: [
      { key: "A", text: 'memasarkan' },
      { key: "B", text: 'mengembangkan' },
      { key: "C", text: 'menyaingi' },
      { key: "D", text: 'menguasai' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Kata dasar '), B('dominan'), P(' berarti berkuasa atau berpengaruh paling besar.')],
    [P('Jadi, '), B('mendominasi'), P(' berarti '), B('menguasai'), P(' pasar tersebut.')],
    ],
  },

  {
    no: 46,
    stimulus: ['Para atlet menjalani latihan intensif selama dua bulan menjelang kejuaraan nasional.'],
    prompt: [P('Makna kata '), B('intensif'), P(' dalam kalimat tersebut adalah ….')],
    options: [
      { key: "A", text: 'ringan dan santai' },
      { key: "B", text: 'sungguh-sungguh dan giat' },
      { key: "C", text: 'bersifat mendadak' },
      { key: "D", text: 'dilakukan bergantian' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Kata '), B('intensif'), P(' berarti secara giat dan sungguh-sungguh.')],
    [P('Latihan intensif berarti latihan yang dilakukan '), B('dengan giat dan sungguh-sungguh'), P('.')],
    ],
  },

  {
    no: 47,
    stimulus: ['Lumpur yang dibawa aliran sungai mengalami sedimentasi di muara sehingga membentuk daratan baru.'],
    prompt: [P('Makna kata '), B('sedimentasi'), P(' dalam kalimat tersebut adalah ….')],
    options: [
      { key: "A", text: 'pengikisan permukaan tanah' },
      { key: "B", text: 'penguapan air sungai' },
      { key: "C", text: 'pergerakan lempeng bumi' },
      { key: "D", text: 'pengendapan materi oleh air atau angin' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Kata '), B('sedimentasi'), P(' adalah proses pengendapan partikel padat yang terbawa air atau angin.')],
    [P('Jadi bermakna '), B('pengendapan materi oleh air atau angin'), P('.')],
    ],
  },

  {
    no: 48,
    stimulus: ['Pemerintah menyusun peta jalan energi yang komprehensif, mencakup aspek produksi, distribusi, hingga konsumsi.'],
    prompt: [P('Makna kata '), B('komprehensif'), P(' dalam kalimat tersebut adalah ….')],
    options: [
      { key: "A", text: 'bersifat sementara' },
      { key: "B", text: 'terbatas pada satu bidang' },
      { key: "C", text: 'sangat rumit' },
      { key: "D", text: 'menyeluruh dan lengkap' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Kata '), B('komprehensif'), P(' berarti meliputi segala aspek atau menyeluruh.')],
    [P('Peta jalan yang komprehensif berarti '), B('lengkap dan menyeluruh'), P('.')],
    ],
  },

  {
    no: 49,
    stimulus: ['Kelompok tani itu merasa terpinggirkan karena akses mereka terhadap modal masih marginal dibandingkan pengusaha besar.'],
    prompt: [P('Makna kata '), B('marginal'), P(' dalam kalimat tersebut adalah ….')],
    options: [
      { key: "A", text: 'kecil dan kurang diperhitungkan' },
      { key: "B", text: 'sangat menguntungkan' },
      { key: "C", text: 'paling utama' },
      { key: "D", text: 'bersifat tetap' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Kata '), B('marginal'), P(' berarti berkaitan dengan pinggiran; kurang mendapat perhatian.')],
    [P('Akses yang marginal berarti '), B('kecil dan kurang diperhitungkan'), P('.')],
    ],
  },

  {
    no: 50,
    stimulus: ['Pemerintah memberikan insentif berupa keringanan pajak bagi perusahaan yang membangun fasilitas daur ulang.'],
    prompt: [P('Makna kata '), B('insentif'), P(' dalam kalimat tersebut adalah ….')],
    options: [
      { key: "A", text: 'denda atas pelanggaran' },
      { key: "B", text: 'imbalan tambahan untuk merangsang kegiatan' },
      { key: "C", text: 'biaya perizinan usaha' },
      { key: "D", text: 'sumbangan sukarela masyarakat' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Kata '), B('insentif'), P(' berarti tambahan penghasilan atau imbalan untuk merangsang seseorang melakukan sesuatu.')],
    [P('Insentif pajak berarti '), B('imbalan tambahan untuk merangsang kegiatan'), P(' tertentu.')],
    ],
  },

  {
    no: 51,
    stimulus: ['Pembawa acara itu melatih artikulasi setiap hari agar setiap kata yang diucapkannya terdengar jelas.'],
    prompt: [P('Makna kata '), B('artikulasi'), P(' dalam kalimat tersebut adalah ….')],
    options: [
      { key: "A", text: 'pengaturan napas panjang' },
      { key: "B", text: 'pengucapan kata dengan jelas' },
      { key: "C", text: 'gerakan tubuh di panggung' },
      { key: "D", text: 'pemilihan kata yang indah' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Kata '), B('artikulasi'), P(' berarti lafal atau pengucapan kata.')],
    [P('Melatih artikulasi berarti melatih '), B('pengucapan kata agar jelas'), P('.')],
    ],
  },

  {
    no: 52,
    stimulus: ['Lampu di perpustakaan sekolah masih menyala ketika penjaga melewati lorong itu pada pukul sembilan malam. Padahal, perpustakaan biasanya ditutup pukul lima sore dan tidak ada kegiatan tambahan yang dijadwalkan.'],
    prompt: S('Simpulan yang paling tepat berdasarkan isi bacaan tersebut adalah ….'),
    options: [
      { key: "A", text: 'Perpustakaan sekolah dibuka kembali khusus pada malam hari' },
      { key: "B", text: 'Penjaga sekolah bertugas menyalakan lampu perpustakaan' },
      { key: "C", text: 'Kegiatan tambahan diadakan di perpustakaan setiap malam' },
      { key: "D", text: 'Ada kemungkinan seseorang masih berada atau lupa mematikan lampu di perpustakaan' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Bacaan hanya menyampaikan fakta lampu masih menyala padahal jam tutup sudah lewat dan tidak ada kegiatan terjadwal.')],
    [P('Kita tidak dapat memastikan penyebabnya; simpulan yang aman adalah '), B('ada kemungkinan seseorang masih berada di sana atau lupa mematikan lampu.')],
    ],
  },

  {
    no: 53,
    stimulus: ['Dalam sebuah kotak terdapat tiga bola: merah, biru, dan hijau. Andi mengambil satu bola tanpa melihat dan menyimpannya di dalam saku. Bola yang tersisa di kotak adalah biru dan hijau.'],
    prompt: S('Simpulan yang paling tepat adalah ….'),
    options: [
      { key: "A", text: 'Bola di saku Andi berwarna merah' },
      { key: "B", text: 'Bola di saku Andi berwarna biru' },
      { key: "C", text: 'Bola di saku Andi berwarna hijau' },
      { key: "D", text: 'Bola merah masih berada di dalam kotak' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Awalnya ada tiga bola: merah, biru, dan hijau. Setelah Andi mengambil satu, tersisa biru dan hijau.')],
    [P('Berarti bola yang diambil pasti '), B('merah'), P(', karena hanya warna itulah yang tidak tersisa.')],
    ],
  },

  {
    no: 54,
    stimulus: ['Semua siswa kelas X wajib mengikuti upacara Senin. Sebagian siswa kelas X mengikuti ekstrakurikuler pramuka. Hari ini Budi, siswa kelas X, tidak terlihat di lapangan upacara.'],
    prompt: S('Simpulan yang paling tepat adalah ….'),
    options: [
      { key: "A", text: 'Budi tidak mengikuti upacara Senin' },
      { key: "B", text: 'Budi sedang mengikuti latihan pramuka' },
      { key: "C", text: 'Budi bukan anggota pramuka' },
      { key: "D", text: 'Upacara Senin ditiadakan hari ini' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Budi adalah siswa kelas X yang seharusnya wajib mengikuti upacara, tetapi ia tidak terlihat di lapangan.')],
    [P('Simpulan langsung yang didukung data: '), B('Budi tidak mengikuti upacara Senin'), P(' hari itu.')],
    ],
  },

  {
    no: 55,
    stimulus: ['Setiap hari Rina berangkat ke sekolah naik sepeda. Hari ini sepeda Rina sedang diperbaiki di bengkel dan tidak ada kendaraan lain di rumahnya. Jarak sekolah dari rumah Rina cukup jauh untuk ditempuh dengan berjalan kaki.'],
    prompt: S('Simpulan yang paling tepat berdasarkan bacaan tersebut adalah ….'),
    options: [
      { key: "A", text: 'Rina berangkat ke sekolah naik angkutan umum' },
      { key: "B", text: 'Rina berjalan kaki menuju sekolah' },
      { key: "C", text: 'Rina meminjam sepeda tetangganya' },
      { key: "D", text: 'Rina kemungkinan tidak berangkat ke sekolah hari ini' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Sepeda Rina rusak dan tidak ada kendaraan lain, sedangkan jarak terlalu jauh untuk berjalan kaki.')],
    [P('Kita tidak tahu pasti solusi Rina, tetapi simpulan paling masuk akal adalah '), B('Rina kemungkinan tidak berangkat ke sekolah'), P(' hari itu.')],
    ],
  },

  {
    no: 56,
    stimulus: ['Sebuah desa mengalami musim kemarau panjang. Sumur-sumur warga mulai mengering dan tanaman palawija banyak yang layu. Pemerintah desa mengumumkan akan mengadakan pengiriman air bersih setiap dua hari sekali.'],
    prompt: S('Simpulan yang paling tepat berdasarkan bacaan tersebut adalah ….'),
    options: [
      { key: "A", text: 'Tanaman palawija di desa itu tidak layak dikonsumsi' },
      { key: "B", text: 'Warga desa mengalami kekurangan air bersih akibat kemarau panjang' },
      { key: "C", text: 'Pemerintah desa melarang warga menggunakan sumur' },
      { key: "D", text: 'Musim kemarau di desa itu baru berlangsung singkat' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Fakta: sumur mengering, tanaman layu, dan pemerintah mengirim air bersih.')],
    [P('Simpulan yang paling tepat: '), B('warga desa kekurangan air bersih akibat kemarau panjang'), P('.')],
    ],
  },

  {
    no: 57,
    stimulus: ['Di perempatan jalan itu, lampu lalu lintas menyala hijau. Namun, pengendara mobil di jalur paling kanan justru berhenti karena seorang pejalan kaki masih menyeberang di depan mereka.'],
    prompt: S('Simpulan yang paling tepat berdasarkan kejadian tersebut adalah ….'),
    options: [
      { key: "A", text: 'Pengendara mobil melanggar lampu lalu lintas' },
      { key: "B", text: 'Pejalan kaki menyeberang saat lampu belum aman bagi kendaraan' },
      { key: "C", text: 'Lampu lalu lintas di perempatan itu rusak' },
      { key: "D", text: 'Pejalan kaki sedang menunggu pengendara lewat' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Mobil berhenti meskipun lampu hijau karena ada pejalan kaki yang masih menyeberang di depannya.')],
    [P('Artinya, pejalan kaki itu menyeberang '), B('saat kondisi belum aman bagi kendaraan'), P(' untuk melaju.')],
    ],
  },

  {
    no: 58,
    stimulus: ['Rani selalu membawa botol minum ke sekolah. Hari ini ia lupa membawanya dan terlihat kehausan saat pelajaran olahraga. Di kantin sekolah tersedia air minum dalam kemasan gelas.'],
    prompt: S('Simpulan yang paling mungkin adalah ….'),
    options: [
      { key: "A", text: 'Rani pulang ke rumah untuk mengambil botol minum' },
      { key: "B", text: 'Rani akan membeli air minum di kantin untuk menghilangkan haus' },
      { key: "C", text: 'Rani meminjam botol minum teman sekelasnya' },
      { key: "D", text: 'Rani menahan haus sampai pulang sekolah' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Rani kehausan, tidak membawa botol, dan kantin menyediakan air minum kemasan.')],
    [P('Simpulan paling mungkin: '), B('Rani membeli air minum di kantin'), P(' untuk menghilangkan hausnya.')],
    ],
  },

  {
    no: 59,
    stimulus: ['Semua peserta rapat diminta datang tepat waktu. Dina hadir lima belas menit setelah rapat dimulai. Rapat diawali dengan pembahasan anggaran yang baru selesai setengah jam kemudian.'],
    prompt: S('Simpulan yang paling tepat adalah ….'),
    options: [
      { key: "A", text: 'Dina tidak mengikuti pembahasan anggaran sejak awal' },
      { key: "B", text: 'Dina memimpin jalannya rapat anggaran' },
      { key: "C", text: 'Rapat dimulai lebih cepat dari jadwal' },
      { key: "D", text: 'Dina bertugas mencatat hasil rapat' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Dina datang 15 menit setelah rapat dimulai, padahal rapat langsung membahas anggaran.')],
    [P('Karena itu, ia '), B('tidak mengikuti pembahasan anggaran sejak awal'), P('.')],
    ],
  },

  {
    no: 60,
    stimulus: ['Paket yang Dito pesan secara daring seharusnya tiba hari ini. Pelacakan menunjukkan paket masih berada di kota asal karena cuaca buruk menyebabkan penerbangan ditunda.'],
    prompt: S('Simpulan yang paling tepat berdasarkan bacaan tersebut adalah ….'),
    options: [
      { key: "A", text: 'Paket Dito hilang dalam perjalanan udara' },
      { key: "B", text: 'Paket Dito akan tiba lebih lambat dari jadwal karena penerbangan tertunda' },
      { key: "C", text: 'Cuaca buruk membuat paket Dito dikembalikan ke penjual' },
      { key: "D", text: 'Dito membatalkan pesanannya karena cuaca buruk' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Jadwal paket hari ini, tetapi kenyataannya masih di kota asal akibat penerbangan ditunda.')],
    [P('Jadi, paket Dito '), B('tiba lebih lambat dari perkiraan'), P('.')],
    ],
  },

  {
    no: 61,
    stimulus: ['Di pantai selatan yang berombak besar, hanya perahu nelayan berpengalaman yang berani melaut. Pak Jaya adalah nelayan yang sudah dua puluh tahun melaut dari pantai tersebut.'],
    prompt: S('Simpulan yang paling tepat adalah ….'),
    options: [
      { key: "A", text: 'Pak Jaya tidak pernah mengalami ombak besar' },
      { key: "B", text: 'Semua perahu di pantai itu milik Pak Jaya' },
      { key: "C", text: 'Pak Jaya baru pertama kali melaut tahun ini' },
      { key: "D", text: 'Pak Jaya termasuk nelayan yang berani melaut di pantai itu' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Pengalaman 20 tahun menunjukkan Pak Jaya adalah nelayan berpengalaman di pantai berombak besar.')],
    [P('Karena yang berani melaut hanyalah nelayan berpengalaman, '), B('Pak Jaya termasuk nelayan yang berani melaut'), P('.')],
    ],
  },

  {
    no: 62,
    stimulus: ['Kandungan gula dalam minuman kemasan tidak selalu terlihat dari rasanya yang manis. Beberapa produk berlabel rendah gula ternyata tetap memiliki kadar gula cukup tinggi.'],
    prompt: S('Simpulan yang paling tepat berdasarkan bacaan tersebut adalah ….'),
    options: [
      { key: "A", text: 'Minuman dengan rasa tidak manis pasti bebas gula' },
      { key: "B", text: 'Konsumen perlu memeriksa informasi nilai gizi sebelum membeli minuman kemasan' },
      { key: "C", text: 'Label rendah gula pada produk selalu akurat' },
      { key: "D", text: 'Minuman kemasan sebaiknya dihindari sama sekali' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Bacaan menyiratkan bahwa penilaian berdasarkan rasa atau label bisa menyesatkan.')],
    [P('Simpulan yang tepat: '), B('konsumen perlu memeriksa informasi nilai gizi'), P(' sebelum membeli.')],
    ],
  },

  {
    no: 63,
    stimulus: ['Seorang peneliti mengamati bahwa katak di sawah berkurang jumlahnya setelah petani meningkatkan pemakaian pestisida. Di sawah yang tidak memakai pestisida, populasi katak tetap stabil.'],
    prompt: S('Simpulan yang paling tepat berdasarkan hasil pengamatan tersebut adalah ….'),
    options: [
      { key: "A", text: 'Katak adalah hama yang merugikan petani' },
      { key: "B", text: 'Pestisida tidak berpengaruh terhadap lingkungan sawah' },
      { key: "C", text: 'Populasi katak menurun karena perubahan iklim' },
      { key: "D", text: 'Pemakaian pestisida berkaitan dengan menurunnya populasi katak' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Ada pola: sawah berpestisida populasi katak turun, sawah tanpa pestisida stabil.')],
    [P('Simpulan yang didukung data adalah '), B('pestisida berkaitan dengan penurunan populasi katak'), P('.')],
    ],
  },

  {
    no: 64,
    stimulus: ['Banyak perusahaan mulai menerapkan empat hari kerja dalam sepekan. Survei internal menunjukkan produktivitas karyawan justru meningkat dan tingkat kepuasan kerja lebih tinggi dibandingkan lima hari kerja.'],
    prompt: S('Simpulan yang paling tepat berdasarkan bacaan tersebut adalah ….'),
    options: [
      { key: "A", text: 'Perusahaan akan kembali ke lima hari kerja' },
      { key: "B", text: 'Karyawan menolak kebijakan empat hari kerja' },
      { key: "C", text: 'Produktivitas tidak dipengaruhi oleh jumlah hari kerja' },
      { key: "D", text: 'Pengurangan hari kerja dapat meningkatkan produktivitas dan kepuasan karyawan' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Data survei menghubungkan empat hari kerja dengan produktivitas dan kepuasan yang lebih tinggi.')],
    [P('Simpulan yang tepat: '), B('pengurangan hari kerja dapat meningkatkan produktivitas dan kepuasan'), P('.')],
    ],
  },

  {
    no: 65,
    stimulus: ['Harga tiket kereta api pada musim liburan selalu lebih mahal daripada hari biasa. Akibatnya, sebagian keluarga memilih bepergian dengan bus yang tarifnya lebih murah, meskipun waktu tempuhnya lebih lama.'],
    prompt: S('Simpulan yang paling tepat berdasarkan bacaan tersebut adalah ….'),
    options: [
      { key: "A", text: 'Bus selalu lebih nyaman daripada kereta api' },
      { key: "B", text: 'Harga tiket memengaruhi pilihan moda transportasi keluarga saat liburan' },
      { key: "C", text: 'Kereta api tidak laku pada musim liburan' },
      { key: "D", text: 'Keluarga tidak mempertimbangkan waktu tempuh' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Bacaan menunjukkan hubungan sebab-akibat: tiket kereta mahal membuat keluarga beralih ke bus.')],
    [P('Simpulan: '), B('harga tiket memengaruhi pilihan moda transportasi keluarga'), P('.')],
    ],
  },

  {
    no: 66,
    stimulus: ['Sebagian besar siswa di kelas X lebih suka membaca buku digital. Namun, peminjaman buku cetak di perpustakaan sekolah justru meningkat dua kali lipat pada semester ini.'],
    prompt: S('Simpulan yang paling mungkin berdasarkan bacaan tersebut adalah ….'),
    options: [
      { key: "A", text: 'Perpustakaan tidak lagi menyediakan buku digital' },
      { key: "B", text: 'Siswa kelas X dilarang membaca buku digital' },
      { key: "C", text: 'Peminjaman buku cetak menurun drastis' },
      { key: "D", text: 'Masih ada kelompok siswa yang gemar meminjam buku cetak di perpustakaan' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Fakta pertama tentang preferensi mayoritas tidak meniadakan fakta kedua tentang meningkatnya peminjaman buku cetak.')],
    [P('Keduanya dapat terjadi bersamaan: '), B('masih ada siswa yang gemar meminjam buku cetak'), P('.')],
    ],
  },

  {
    no: 67,
    stimulus: ['Andi selalu sarapan sebelum berangkat sekolah. Hari ini ia bangun kesiangan dan langsung bergegas ke sekolah tanpa sempat sarapan. Pada jam pelajaran ketiga, konsentrasi Andi menurun drastis.'],
    prompt: S('Simpulan yang paling mungkin berdasarkan bacaan tersebut adalah ….'),
    options: [
      { key: "A", text: 'Andi sakit karena terlalu banyak belajar' },
      { key: "B", text: 'Konsentrasi Andi menurun karena tidak sarapan' },
      { key: "C", text: 'Guru memberi tugas berat pada jam ketiga' },
      { key: "D", text: 'Andi mengantuk karena tidur larut malam' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Ada urutan waktu yang erat: Andi melewatkan sarapan lalu konsentrasinya menurun di sekolah.')],
    [P('Simpulan paling mungkin: '), B('konsentrasi Andi menurun karena tidak sarapan'), P('.')],
    ],
  },

  {
    no: 68,
    stimulus: ['Dua tim sepak bola, yaitu Tim Kijang dan Tim Elang, bertanding. Wasit meniup peluit panjang sebagai tanda pertandingan usai dengan skor akhir 2–1 untuk Tim Kijang.'],
    prompt: S('Simpulan yang paling tepat adalah ….'),
    options: [
      { key: "A", text: 'Tim Elang menang dengan selisih satu gol' },
      { key: "B", text: 'Pertandingan berakhir seri' },
      { key: "C", text: 'Tim Kijang memenangkan pertandingan' },
      { key: "D", text: 'Wasit membatalkan pertandingan' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Skor akhir 2–1 untuk Tim Kijang berarti Tim Kijang mencetak dua gol dan Tim Elang satu gol.')],
    [P('Simpulan yang tepat: '), B('Tim Kijang memenangkan pertandingan'), P('.')],
    ],
  },

  {
    no: 69,
    stimulus: ['Laporan cuaca menyebutkan bahwa angin kencang dan hujan lebat akan melanda wilayah pesisir mulai sore nanti. Kegiatan lomba layang-layang antardesa dijadwalkan berlangsung sore ini di lapangan dekat pantai.'],
    prompt: S('Simpulan yang paling tepat berdasarkan bacaan tersebut adalah ….'),
    options: [
      { key: "A", text: 'Lomba layang-layang tetap berjalan lancar' },
      { key: "B", text: 'Angin kencang akan membantu layang-layang terbang tinggi' },
      { key: "C", text: 'Lomba layang-layang berisiko terganggu atau ditunda karena cuaca buruk' },
      { key: "D", text: 'Panitia memindahkan lomba ke luar wilayah pesisir' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Cuaca buruk diperkirakan terjadi tepat saat lomba akan berlangsung di area pesisir.')],
    [P('Simpulan yang tepat: '), B('lomba berisiko terganggu atau ditunda karena cuaca buruk'), P('.')],
    ],
  },

  {
    no: 70,
    stimulus: ['Sebuah toko memberi diskon dua puluh persen untuk semua produk pakaian. Rina membeli kemeja seharga Rp150.000 dan membayar Rp120.000 di kasir.'],
    prompt: S('Simpulan yang paling tepat berdasarkan bacaan tersebut adalah ….'),
    options: [
      { key: "A", text: 'Harga yang dibayar Rina sesuai dengan diskon dua puluh persen' },
      { key: "B", text: 'Rina mendapatkan diskon lebih besar dari ketentuan toko' },
      { key: "C", text: 'Rina membayar harga penuh tanpa diskon' },
      { key: "D", text: 'Kemeja yang dibeli Rina bukan termasuk produk diskon' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Diskon 20% dari Rp150.000 adalah Rp30.000, sehingga harga bayar Rp120.000.')],
    [P('Jadi, '), B('pembayaran Rina sesuai dengan ketentuan diskon'), P('.')],
    ],
  },

  {
    no: 71,
    stimulus: ['Semenjak jalur sepeda dibangun, jumlah warga yang bersepeda ke tempat kerja meningkat. Di sisi lain, kepadatan lalu lintas kendaraan bermotor pada jam sibuk sedikit berkurang.'],
    prompt: S('Simpulan yang paling tepat berdasarkan bacaan tersebut adalah ….'),
    options: [
      { key: "A", text: 'Jalur sepeda mendorong peralihan sebagian warga dari kendaraan bermotor' },
      { key: "B", text: 'Semua warga kini bersepeda ke tempat kerja' },
      { key: "C", text: 'Jalur sepeda menyebabkan kemacetan bertambah parah' },
      { key: "D", text: 'Kendaraan bermotor dilarang melintasi jalur sepeda' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Kedua fakta saling berhubungan: naiknya pesepeda seiring turunnya kepadatan kendaraan bermotor.')],
    [P('Simpulan: '), B('jalur sepeda mendorong peralihan sebagian warga dari kendaraan bermotor'), P('.')],
    ],
  },

  {
    no: 72,
    stimulus: ['Di sebuah taman kota terdapat aturan bahwa pengunjung dilarang membawa hewan peliharaan. Hari Minggu, seorang ibu terlihat membawa kucing dalam keranjang tertutup saat memasuki taman.'],
    prompt: S('Simpulan yang paling tepat berdasarkan bacaan tersebut adalah ….'),
    options: [
      { key: "A", text: 'Kucing dalam keranjang tidak dianggap hewan peliharaan' },
      { key: "B", text: 'Aturan larangan hanya berlaku untuk anjing' },
      { key: "C", text: 'Ibu itu berpotensi melanggar aturan taman karena membawa kucing' },
      { key: "D", text: 'Ibu itu adalah pengelola taman kota' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Aturan melarang membawa hewan peliharaan, dan kucing adalah hewan peliharaan.')],
    [P('Meskipun dalam keranjang, tindakan ibu itu '), B('berpotensi melanggar aturan taman'), P('.')],
    ],
  },

  {
    no: 73,
    stimulus: ['Hasil uji laboratorium menunjukkan bahwa air sumur di tiga rumah warga mengandung bakteri E. coli melebihi ambang batas. Ketiga rumah tersebut berjarak kurang dari sepuluh meter dari septic tank komunal.'],
    prompt: S('Simpulan yang paling mungkin berdasarkan bacaan tersebut adalah ….'),
    options: [
      { key: "A", text: 'Bakteri E. coli berasal dari makanan kaleng' },
      { key: "B", text: 'Sumur di tiga rumah itu pasti bebas pencemaran' },
      { key: "C", text: 'Kedekatan sumur dengan septic tank berpotensi menyebabkan pencemaran air' },
      { key: "D", text: 'Septic tank komunal tidak pernah meluber' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Ada keterkaitan lokasi: sumur tercemar berada dekat septic tank.')],
    [P('Simpulan paling mungkin: '), B('kedekatan sumur dengan septic tank berpotensi menyebabkan pencemaran'), P('.')],
    ],
  },

  {
    no: 74,
    stimulus: ['Ketika harga minyak goreng naik, permintaan terhadap mentega dan margarin ikut meningkat. Begitu pula sebaliknya, saat harga minyak goreng turun, permintaan mentega menurun.'],
    prompt: S('Simpulan yang paling tepat berdasarkan bacaan tersebut adalah ….'),
    options: [
      { key: "A", text: 'Minyak goreng dan mentega merupakan barang yang saling menggantikan' },
      { key: "B", text: 'Minyak goreng dan mentega dijual dalam satu paket' },
      { key: "C", text: 'Mentega adalah bahan baku pembuatan minyak goreng' },
      { key: "D", text: 'Kenaikan harga selalu diikuti kenaikan permintaan' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Hubungan timbal balik itu menunjukkan konsumen berpindah antarkeduanya saat harga berubah.')],
    [P('Simpulan: '), B('minyak goreng dan mentega adalah barang substitusi (saling menggantikan)'), P('.')],
    ],
  },

  {
    no: 75,
    stimulus: ['Bayu berlatih piano setiap hari selama enam bulan terakhir. Gurunya mengatakan bahwa kelancaran Bayu bermain piano meningkat pesat dibandingkan saat pertama kali berlatih.'],
    prompt: S('Simpulan yang paling tepat berdasarkan bacaan tersebut adalah ….'),
    options: [
      { key: "A", text: 'Bayu berbakat menjadi pianis profesional' },
      { key: "B", text: 'Guru piano Bayu memberi nilai tertinggi' },
      { key: "C", text: 'Bayu tidak perlu berlatih lagi' },
      { key: "D", text: 'Latihan rutin yang dilakukan Bayu meningkatkan kemampuannya bermain piano' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Ada hubungan erat antara latihan rutin Bayu dan peningkatan kelancarannya.')],
    [P('Simpulan: '), B('latihan rutin meningkatkan kemampuan Bayu bermain piano'), P('.')],
    ],
  },

  {
    no: 76,
    stimulus: ['Di sebuah kelas, siswa yang duduk di deretan depan rata-rata memperoleh nilai lebih tinggi daripada siswa di deretan belakang. Guru kemudian mengubah posisi duduk siswa setiap dua minggu sekali.'],
    prompt: S('Simpulan yang paling tepat berdasarkan bacaan tersebut adalah ….'),
    options: [
      { key: "A", text: 'Siswa di deretan belakang tidak pandai' },
      { key: "B", text: 'Nilai siswa ditentukan oleh posisi duduknya' },
      { key: "C", text: 'Guru ingin memberi kesempatan yang sama kepada semua siswa melalui rotasi tempat duduk' },
      { key: "D", text: 'Guru menghukum siswa yang nilainya rendah' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Rotasi tempat duduk dilakukan agar tidak ada siswa yang terus-menerus berada di posisi yang nilainya rata-rata lebih rendah.')],
    [P('Simpulan yang paling masuk akal: '), B('guru memberi kesempatan sama melalui rotasi tempat duduk'), P('.')],
    ],
  },

  {
    no: 77,
    stimulus: ['Kalimat: "Dokter menyarankan pasien untuk mengkonsumsi makanan bergizi dan cukup minum air putih."'],
    prompt: S('Penulisan kata yang tidak tepat pada kalimat tersebut adalah ….'),
    options: [
      { key: "A", text: 'menyarankan' },
      { key: "B", text: 'bergizi' },
      { key: "C", text: 'air putih' },
      { key: "D", text: 'mengkonsumsi' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Kata dasar '), B('konsumsi'), P(' berawalan fonem /k/ sehingga ketika diberi prefiks meN- huruf k tersebut luluh.')],
    [P('Penulisan yang benar: '), B('mengonsumsi'), P(' (bukan mengkonsumsi).')],
    ],
  },

  {
    no: 78,
    stimulus: ['Kalimat: "Kegiatan bakti sosial itu merupakan salah satu bentuk aktifitas siswa dalam mengembangkan kepedulian sosial."'],
    prompt: S('Penulisan kata yang tidak tepat pada kalimat tersebut adalah ….'),
    options: [
      { key: "A", text: 'bakti sosial' },
      { key: "B", text: 'aktifitas' },
      { key: "C", text: 'kepedulian' },
      { key: "D", text: 'mengembangkan' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Kata serapan dari activity yang baku adalah '), B('aktivitas'), P(', bukan aktifitas.')],
    [P('Jadi, kata yang perlu diperbaiki adalah '), B('aktifitas'), P(' menjadi '), B('aktivitas.')],
    ],
  },

  {
    no: 79,
    stimulus: ['Kalimat: "Tim riset sedang menganalisa data hasil survei kepuasan pelanggan."'],
    prompt: S('Penulisan kata yang tidak tepat pada kalimat tersebut adalah ….'),
    options: [
      { key: "A", text: 'sedang' },
      { key: "B", text: 'survei' },
      { key: "C", text: 'kepuasan' },
      { key: "D", text: 'menganalisa' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Bentuk baku verba dari analisis adalah '), B('menganalisis'), P(', bukan menganalisa.')],
    [P('Jadi, kata yang salah adalah '), B('menganalisa'), P('; seharusnya '), B('menganalisis.')],
    ],
  },

  {
    no: 80,
    stimulus: ['Kalimat: "Kami sekeluarga akan merayakan hari raya Idul Fitri di kampung halaman."'],
    prompt: [P('Penulisan yang tepat untuk kata '), B('hari raya Idul Fitri'), P(' menurut kaidah adalah ….')],
    options: [
      { key: "A", text: 'hari raya Idulfitri' },
      { key: "B", text: 'Hari Raya Idul Fitri' },
      { key: "C", text: 'hari Raya idul fitri' },
      { key: "D", text: 'hari raya Idul Fitri' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Nama hari raya termasuk nama perayaan yang huruf pertamanya ditulis kapital: '), B('Idulfitri'), P('.')],
    [P('Penulisan bakunya adalah '), B('hari raya Idulfitri'), P(' (hari raya tidak perlu kapital karena bukan nama diri).')],
    ],
  },

  {
    no: 81,
    stimulus: ['Kalimat: "Penelitian itu bertujuan untuk memetakan potensi ekonomi kreatif di daerah-daerah."'],
    prompt: [P('Penulisan kata '), B('ekonomi kreatif'), P(' yang tepat menurut kaidah adalah ….')],
    options: [
      { key: "A", text: 'Ekonomi Kreatif' },
      { key: "B", text: 'ekonomi kreatif' },
      { key: "C", text: 'ekonomi Kreatif' },
      { key: "D", text: 'EKONOMI KREATIF' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Frasa '), B('ekonomi kreatif'), P(' merupakan istilah umum (bukan nama diri), sehingga ditulis dengan huruf kecil.')],
    [P('Penulisan yang tepat tetap '), B('ekonomi kreatif'), P('.')],
    ],
  },

  {
    no: 82,
    stimulus: ['Kalimat: "Buku itu seharusnya diletakkan diatas meja, bukan disimpan didalam lemari."'],
    prompt: S('Perbaikan penulisan kata depan yang tepat untuk kalimat tersebut adalah ….'),
    options: [
      { key: "A", text: 'diatas meja dan didalam lemari' },
      { key: "B", text: 'di atas meja dan di dalam lemari' },
      { key: "C", text: 'di atas meja dan didalam lemari' },
      { key: "D", text: 'diatas meja dan di dalam lemari' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Kata '), B('di'), P(' sebagai kata depan tempat ditulis terpisah dari kata yang mengikutinya.')],
    [P('Jadi penulisannya: '), B('di atas meja'), P(' dan '), B('di dalam lemari.')],
    ],
  },

  {
    no: 83,
    stimulus: ['Kalimat: "Anak-anak bermain dihalaman sekolah sepulang kelas."'],
    prompt: S('Perbaikan penulisan yang tepat untuk kalimat tersebut adalah ….'),
    options: [
      { key: "A", text: 'Anak-anak bermain dihalaman sekolah sepulang kelas.' },
      { key: "B", text: 'Anak-anak bermain di halaman sekolah sepulang kelas.' },
      { key: "C", text: 'Anak-anak bermain di Halaman sekolah sepulang kelas.' },
      { key: "D", text: 'Anak-anak bermain di halaman sekolah, sepulang kelas.' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Kata '), B('di'), P(' pada frasa tempat harus dipisah: '), B('di halaman'), P('.')],
    [P('Tidak diperlukan koma sebelum keterangan cara \'sepulang kelas\'. Jadi perbaikannya: '), B('Anak-anak bermain di halaman sekolah sepulang kelas.')],
    ],
  },

  {
    no: 84,
    stimulus: ['Kalimat: "Rapat akan dimulai pukul 09.00 WIB di ruang aula."'],
    prompt: S('Penulisan keterangan waktu yang tepat menurut kaidah adalah ….'),
    options: [
      { key: "A", text: 'pukul 09:00 WIB' },
      { key: "B", text: 'pukul 09,00 WIB' },
      { key: "C", text: 'pukul 09.00 WIB' },
      { key: "D", text: 'jam 09.00 wib' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Penulisan waktu dengan angka menggunakan tanda titik: '), B('09.00'), P('.')],
    [P('Singkatan zona waktu ditulis kapital: '), B('WIB'), P('. Jadi: pukul 09.00 WIB.')],
    ],
  },

  {
    no: 85,
    stimulus: ['Kalimat: "Siswa dilarang membawa alat-alat yang tidak diperlukan saat ujian berlangsung."'],
    prompt: S('Penulisan kata ulang yang tepat pada kalimat tersebut adalah ….'),
    options: [
      { key: "A", text: 'alat alat' },
      { key: "B", text: 'Alat-alat' },
      { key: "C", text: 'alat-alat' },
      { key: "D", text: 'alat2' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Kata ulang utuh ditulis dengan tanda hubung di antara unsur-unsurnya.')],
    [P('Penulisan yang benar: '), B('alat-alat'), P('.')],
    ],
  },

  {
    no: 86,
    stimulus: ['Kalimat: "Kepala sekolah meminta para guru untuk mensosialisasikan tata tertib baru kepada siswa."'],
    prompt: S('Penulisan kata yang tidak tepat pada kalimat tersebut adalah ….'),
    options: [
      { key: "A", text: 'meminta' },
      { key: "B", text: 'tata tertib' },
      { key: "C", text: 'kepada' },
      { key: "D", text: 'mensosialisasikan' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Kata dasar '), B('sosialisasi'), P(' diawali huruf /s/ yang tidak luluh saat diberi prefiks meN-, melainkan berubah menjadi meny-.')],
    [P('Bentuk bakunya: '), B('menyosialisasikan'), P(', bukan mensosialisasikan.')],
    ],
  },

  {
    no: 87,
    stimulus: ['Kalimat: "Proyek pembangunan jembatan itu ditargetkan rampung pada tahun 2026."'],
    prompt: S('Penulisan kata yang tidak tepat pada kalimat tersebut adalah ….'),
    options: [
      { key: "A", text: 'pembangunan' },
      { key: "B", text: 'jembatan' },
      { key: "C", text: 'ditargetkan' },
      { key: "D", text: 'rampung' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Kata '), B('rampung'), P(' adalah bentuk tidak baku; bentuk bakunya adalah '), B('tuntas'), P(' atau '), B('selesai.')],
    [P('Jadi, kata yang perlu diperbaiki adalah '), B('rampung.')],
    ],
  },

  {
    no: 88,
    stimulus: ['Kalimat: "Mereka berdiskusi tentang strategi pemasaran produk baru di ruang rapat."'],
    prompt: [P('Penulisan kata serapan yang tepat untuk '), B('strategi'), P(' menurut kaidah adalah ….')],
    options: [
      { key: "A", text: 'stratégi' },
      { key: "B", text: 'srtategi' },
      { key: "C", text: 'strategi' },
      { key: "D", text: 'sırateji' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Kata serapan yang sudah dibakukan adalah '), B('strategi'), P('.')],
    [P('Opsi lain bukan bentuk baku dalam KBBI.')],
    ],
  },

  {
    no: 89,
    stimulus: ['Kalimat: "Ia menerima hadiah karena berhasil menjadi juara pertama lomba menulis cerpen."'],
    prompt: [P('Penulisan kata yang tepat untuk '), B('juara pertama'), P(' pada kalimat tersebut adalah ….')],
    options: [
      { key: "A", text: 'Juara Pertama' },
      { key: "B", text: 'Juara pertama' },
      { key: "C", text: 'juara pertama' },
      { key: "D", text: 'juara I' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Frasa '), B('juara pertama'), P(' bersifat umum dan tidak merujuk nama gelar resmi yang dikapitalisasi.')],
    [P('Penulisan yang tepat adalah '), B('juara pertama'), P(' dengan huruf kecil.')],
    ],
  },

  {
    no: 90,
    stimulus: ['Kalimat: "Peserta diharap membawa laptop dan modul pelatihan masing-masing."'],
    prompt: [P('Penulisan kata '), B('laptop'), P(' dan '), B('modul'), P(' yang tepat menurut kaidah adalah ….')],
    options: [
      { key: "A", text: 'laptop dan modul' },
      { key: "B", text: 'laptoph dan modul' },
      { key: "C", text: 'laptop dan modull' },
      { key: "D", text: 'laptob dan modul' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Kata serapan '), B('laptop'), P(' dan '), B('modul'), P(' sudah sesuai dengan kaidah penulisan kata baku.')],
    [P('Jadi penulisan yang tepat: '), B('laptop dan modul.')],
    ],
  },

  {
    no: 91,
    stimulus: ['Kalimat: "Kegiatan pentas seni itu akan diselenggarakan di alun-alun kota."'],
    prompt: S('Penulisan kata yang tidak tepat pada kalimat tersebut adalah ….'),
    options: [
      { key: "A", text: 'alun-alun' },
      { key: "B", text: 'pentas seni' },
      { key: "C", text: 'diselenggarakan' },
      { key: "D", text: 'kota' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Kata '), B('alun-alun'), P(' adalah kata ulang yang sudah dianggap bentuk baku dan ditulis dengan tanda hubung.')],
    [P('Seluruh kata pada kalimat itu sudah tepat, termasuk '), B('alun-alun.')],
    ],
  },

  {
    no: 92,
    stimulus: ['Kalimat: "Perusahaan itu membuka lowongan kerja untuk posisi akunting dan administrasi."'],
    prompt: [P('Penulisan kata serapan yang tepat untuk '), B('akunting'), P(' adalah ….')],
    options: [
      { key: "A", text: 'akunting' },
      { key: "B", text: 'accounting' },
      { key: "C", text: 'akuntansi' },
      { key: "D", text: 'akunting' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Bentuk serapan yang baku dalam KBBI adalah '), B('akuntansi'), P(', bukan akunting.')],
    [P('Jadi penulisan yang tepat: '), B('akuntansi.')],
    ],
  },

  {
    no: 93,
    stimulus: ['Kalimat: "Kami mengucapkan terima kasih atas partisipasi bapak dan ibu sekalian."'],
    prompt: S('Penulisan kata yang tidak tepat pada kalimat tersebut adalah ….'),
    options: [
      { key: "A", text: 'terima kasih' },
      { key: "B", text: 'partisipasi' },
      { key: "C", text: 'bapak dan ibu' },
      { key: "D", text: 'sekalian' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Kata sapaan seperti '), B('Bapak'), P(' dan '), B('Ibu'), P(' ditulis dengan huruf kapital ketika digunakan sebagai sapaan.')],
    [P('Pada kalimat tersebut seharusnya ditulis '), B('Bapak dan Ibu'), P('.')],
    ],
  },

  {
    no: 94,
    stimulus: ['Kalimat: "Para relawan membagikan sembako kepada korban bencana alam di pengungsian."'],
    prompt: [P('Penulisan kata '), B('sembako'), P(' yang tepat menurut kaidah adalah ….')],
    options: [
      { key: "A", text: 'sembilan bahan pokok' },
      { key: "B", text: 'sembakoo' },
      { key: "C", text: '9 bahan pokok' },
      { key: "D", text: 'sembako' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Kata '), B('sembako'), P(' adalah akronim dari sembilan bahan pokok dan sudah menjadi kata baku.')],
    [P('Dalam kalimat resmi, '), B('sembako'), P(' dapat langsung digunakan.')],
    ],
  },

  {
    no: 95,
    stimulus: ['Kalimat: "Sebelum presentasi, pastikan slide yang akan ditampilkan sudah melalui proses editing dan revisi."'],
    prompt: [P('Penulisan kata serapan yang tepat untuk '), B('editing'), P(' pada kalimat tersebut adalah ….')],
    options: [
      { key: "A", text: 'editing' },
      { key: "B", text: 'editan' },
      { key: "C", text: 'penyuntingan' },
      { key: "D", text: 'pengeditan' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Bentuk serapan baku dari editing adalah '), B('penyuntingan'), P('.')],
    [P('Meskipun \'mengedit\' lazim dipakai, padanan bakunya untuk nomina adalah '), B('penyuntingan.')],
    ],
  },

  {
    no: 96,
    stimulus: ['Kalimat: "Jadwal keberangkatan kereta dapat dilihat pada papan informasi di stasiun."'],
    prompt: [P('Penulisan kata serapan yang tepat untuk '), B('informasi'), P(' dan '), B('stasiun'), P(' adalah ….')],
    options: [
      { key: "A", text: 'informasi dan station' },
      { key: "B", text: 'informasi dan stasiun' },
      { key: "C", text: 'information dan stasiun' },
      { key: "D", text: 'informasi dan stesyen' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Kedua kata sudah dibakukan sebagai '), B('informasi'), P(' dan '), B('stasiun.')],
    [P('Tidak perlu menggunakan bentuk asing atau tidak baku.')],
    ],
  },

  {
    no: 97,
    stimulus: ['Kalimat: "Dokter spesialis itu praktik di rumah sakit setiap hari Senin sampai Jumat."'],
    prompt: S('Penulisan kata yang tidak tepat pada kalimat tersebut adalah ….'),
    options: [
      { key: "A", text: 'praktik' },
      { key: "B", text: 'spesialis' },
      { key: "C", text: 'hari Senin' },
      { key: "D", text: 'sampai' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Kata baku untuk pekerjaan dokter adalah '), B('praktik'), P('; bentuk \'praktek\' tidak baku.')],
    [P('Pada kalimat itu penulisan '), B('praktik'), P(' sudah benar.')],
    ],
  },

  {
    no: 98,
    stimulus: ['Kalimat: "Lomba karya tulis ilmiah itu diikuti oleh pelajar dari berbagai provinsi di Indonesia."'],
    prompt: [P('Penulisan kata '), B('karya tulis ilmiah'), P(' yang tepat menurut kaidah adalah ….')],
    options: [
      { key: "A", text: 'karya tulis ilmiah' },
      { key: "B", text: 'Karya Tulis Ilmiah' },
      { key: "C", text: 'Karya tulis Ilmiah' },
      { key: "D", text: 'karya Tulis Ilmiah' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Frasa '), B('karya tulis ilmiah'), P(' digunakan sebagai istilah umum, bukan judul, sehingga ditulis dengan huruf kecil.')],
    [P('Penulisan yang tepat: '), B('karya tulis ilmiah.')],
    ],
  },

  {
    no: 99,
    stimulus: ['Kalimat: "Ibu membeli sayur mayur dan buah buahan di pasar pagi."'],
    prompt: S('Perbaikan penulisan kata ulang yang tepat pada kalimat tersebut adalah ….'),
    options: [
      { key: "A", text: 'sayur-mayur dan buah-buahan' },
      { key: "B", text: 'sayur mayur dan buah buahan' },
      { key: "C", text: 'sayur-mayur dan buah buahan' },
      { key: "D", text: 'sayur mayur dan buah-buahan' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Kata ulang berimbuhan '), B('buah-buahan'), P(' ditulis dengan tanda hubung.')],
    [P('Kata '), B('sayur-mayur'), P(' adalah kata ulang berubah bunyi yang juga ditulis dengan tanda hubung.')],
    [P('Jadi: '), B('sayur-mayur dan buah-buahan.')],
    ],
  },

  {
    no: 100,
    stimulus: ['Kalimat: "Acara perpisahan diisi dengan sambutan, pembacaan puisi, dan penampilan musik akustik."'],
    prompt: [P('Penulisan kata serapan yang tepat untuk '), B('akustik'), P(' adalah ….')],
    options: [
      { key: "A", text: 'acoustic' },
      { key: "B", text: 'akustic' },
      { key: "C", text: 'akustik' },
      { key: "D", text: 'akustika' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Bentuk baku serapan dari acoustic adalah '), B('akustik'), P('.')],
    [P('Jadi penulisan yang benar tetap '), B('akustik.')],
    ],
  },

  {
    no: 101,
    stimulus: ['Kalimat: "Setelah shalat Jumat, para pegawai mengikuti senam sehat di halaman kantor."'],
    prompt: S('Penulisan kata yang tidak tepat pada kalimat tersebut adalah ….'),
    options: [
      { key: "A", text: 'shalat' },
      { key: "B", text: 'senam sehat' },
      { key: "C", text: 'halaman kantor' },
      { key: "D", text: 'mengikuti' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Kata baku untuk ibadah umat Islam adalah '), B('salat'), P('; bentuk \'shalat\' tidak baku.')],
    [P('Jadi kata yang tidak tepat: '), B('shalat'), P(' — seharusnya '), B('salat.')],
    ],
  },

  {
    no: 102,
    stimulus: ['Kalimat: "Dinas pendidikan mengadakan sosialisasi tentang pencegahan perundungan di sekolah."'],
    prompt: [P('Penulisan kata yang tepat untuk '), B('sosialisasi'), P(' menurut kaidah adalah ….')],
    options: [
      { key: "A", text: 'sosialisa si' },
      { key: "B", text: 'sosialisasi' },
      { key: "C", text: 'sosial-isasi' },
      { key: "D", text: 'sosialisasi kegiatan' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Kata '), B('sosialisasi'), P(' ditulis serangkai tanpa spasi atau tanda hubung.')],
    [P('Penulisan yang benar: '), B('sosialisasi.')],
    ],
  },

  {
    no: 103,
    stimulus: [],
    prompt: S('Kalimat yang paling efektif adalah ….'),
    options: [
      { key: "A", text: 'Para siswa-siswa mendengarkan penjelasan guru dengan saksama.' },
      { key: "B", text: 'Para siswa mendengarkan penjelasannya guru dengan saksama.' },
      { key: "C", text: 'Para siswa mendengarkan penjelasan guru dengan saksama.' },
      { key: "D", text: 'Guru menjelaskan, para siswa mendengarkan dengan saksama.' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Kalimat efektif harus hemat kata dan tidak bermakna ganda.')],
    [P('Frasa '), B('para siswa'), P(' sudah menyatakan jamak, sehingga \'siswa-siswa\' berlebihan. Opsi yang tepat: '), B('Para siswa mendengarkan penjelasan guru dengan saksama.')],
    ],
  },

  {
    no: 104,
    stimulus: [],
    prompt: S('Kalimat yang paling efektif adalah ….'),
    options: [
      { key: "A", text: 'Hadirin dimohon berdiri.' },
      { key: "B", text: 'Para hadirin yang hadir dimohon berdiri.' },
      { key: "C", text: 'Kepada para hadirin dimohon berdiri.' },
      { key: "D", text: 'Semua hadirin dimohon berdiri semuanya.' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Kata '), B('hadirin'), P(' sudah bermakna jamak (\'para hadir\'), sehingga \'para hadirin\', \'semua hadirin\', atau \'yang hadir\' menjadi mubazir.')],
    [P('Kalimat efektif dan logis: '), B('Hadirin dimohon berdiri.')],
    ],
  },

  {
    no: 105,
    stimulus: [],
    prompt: S('Kalimat yang paling efektif adalah ….'),
    options: [
      { key: "A", text: 'Demi untuk kepentingan umum, kegiatan itu dihentikan.' },
      { key: "B", text: 'Untuk kepentingan umum, kegiatan itu dihentikan.' },
      { key: "C", text: 'Demi kepentingan umum, kegiatan itu dihentikan.' },
      { key: "D", text: 'Untuk demi kepentingan umum, kegiatan itu dihentikan.' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Penggunaan dua kata depan yang bermakna sama ('), B('demi'), P(' dan '), B('untuk'), P(') secara bersamaan membuat kalimat tidak efektif.')],
    [P('Pilih salah satu: '), B('Demi kepentingan umum'), P(' atau \'untuk kepentingan umum\'.')],
    ],
  },

  {
    no: 106,
    stimulus: [],
    prompt: S('Kalimat yang paling efektif adalah ….'),
    options: [
      { key: "A", text: 'Siswa yang tidak hadir dan sakit harus membawa surat keterangan dokter.' },
      { key: "B", text: 'Siswa yang tidak hadir karena sakit harus membawa surat keterangan dokter.' },
      { key: "C", text: 'Siswa yang absen tidak hadir karena sakit wajib membawa surat dokter.' },
      { key: "D", text: 'Siswa yang sakit tidak hadir, oleh karena itu ia membawa surat keterangan dokter.' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Kalimat efektif menggunakan kata secara tepat tanpa pengulangan makna.')],
    [P('Opsi C mengandung pemborosan: '), B('absen'), P(' dan '), B('tidak hadir'), P(' bermakna sama.')],
    [B('Kalimat paling efektif adalah opsi A.')],
    ],
  },

  {
    no: 107,
    stimulus: [],
    prompt: S('Kalimat yang paling efektif adalah ….'),
    options: [
      { key: "A", text: 'Waktu dan tempat kami persilakan kepada Bapak Kepala Sekolah.' },
      { key: "B", text: 'Kepada Bapak Kepala Sekolah, waktu dan tempat kami persilakan.' },
      { key: "C", text: 'Waktu serta tempat dipersilakan kepada Bapak Kepala Sekolah.' },
      { key: "D", text: 'Bapak Kepala Sekolah dipersilakan untuk memberikan sambutan.' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Frasa '), B('waktu dan tempat kami persilakan'), P(' adalah bentuk tidak logis karena yang disilakan adalah orang, bukan waktu dan tempat.')],
    [P('Kalimat yang logis dan efektif: '), B('Bapak Kepala Sekolah dipersilakan untuk memberikan sambutan.')],
    ],
  },

  {
    no: 108,
    stimulus: [],
    prompt: S('Kalimat yang paling efektif adalah ….'),
    options: [
      { key: "A", text: 'Dengan adanya rapat ini, diharapkan dapat menghasilkan keputusan.' },
      { key: "B", text: 'Melalui rapat ini, diharapkan keputusan dapat dihasilkan.' },
      { key: "C", text: 'Rapat ini diharapkan dapat menghasilkan keputusan.' },
      { key: "D", text: 'Adanya rapat ini diharapkan menghasilkan keputusan rapat.' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Kalimat tanpa subjek yang jelas (\'diharapkan dapat menghasilkan\') tidak efektif.')],
    [P('Subjek kalimat yang jelas adalah '), B('rapat ini'), P(': '), B('Rapat ini diharapkan dapat menghasilkan keputusan.')],
    ],
  },

  {
    no: 109,
    stimulus: [],
    prompt: S('Kalimat yang paling efektif adalah ….'),
    options: [
      { key: "A", text: 'Dalam musyawarah itu membahas tentang kenaikan iuran.' },
      { key: "B", text: 'Musyawarah itu membahas kenaikan iuran.' },
      { key: "C", text: 'Dalam musyawarah itu membahas mengenai kenaikan iuran.' },
      { key: "D", text: 'Musyawarah itu membahas tentang tentang kenaikan iuran.' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Kata '), B('membahas'), P(' sudah bermakna \'memperbincangkan tentang\', sehingga kata \'tentang/mengenai\' tidak diperlukan.')],
    [P('Kalimat efektif: '), B('Musyawarah itu membahas kenaikan iuran.')],
    ],
  },

  {
    no: 110,
    stimulus: [],
    prompt: S('Kalimat yang paling efektif adalah ….'),
    options: [
      { key: "A", text: 'Harga minyak goreng naik, tetapi harga cabai turun.' },
      { key: "B", text: 'Harga minyak goreng naik dan harga cabai turun.' },
      { key: "C", text: 'Harga minyak goreng naik, sementara harga cabai turun.' },
      { key: "D", text: 'Di satu sisi minyak goreng naik dan di sisi lain cabai turun.' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Kalimat efektif memakai konjungsi yang tepat: '), B('naik vs turun'), P(' menunjukkan pertentangan, sehingga konjungsi yang tepat adalah '), B('tetapi'), P(' atau \'sementara\'.')],
    [B('Opsi A dan B benar secara makna; opsi yang paling lazim dan efektif adalah B.')],
    ],
  },

  {
    no: 111,
    stimulus: [],
    prompt: S('Kalimat yang paling efektif adalah ….'),
    options: [
      { key: "A", text: 'Anak itu pandai dalam bermain catur.' },
      { key: "B", text: 'Anak itu sangat pandai sekali dalam bermain catur.' },
      { key: "C", text: 'Anak itu sangat pandai, sekali dalam bermain catur.' },
      { key: "D", text: 'Anak itu pandai sekali dalam memainkan permainan catur.' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Penggunaan '), B('sangat'), P(' dan '), B('sekali'), P(' secara bersamaan merupakan pemborosan karena keduanya menyatakan tingkat amat.')],
    [P('Kalimat efektif: '), B('Anak itu pandai dalam bermain catur.')],
    ],
  },

  {
    no: 112,
    stimulus: [],
    prompt: S('Kalimat yang paling efektif adalah ….'),
    options: [
      { key: "A", text: 'Semua siswa diharap hadir tepat waktu.' },
      { key: "B", text: 'Diharapkan kepada semua siswa untuk hadir tepat waktu.' },
      { key: "C", text: 'Para siswa-siswa diharapkan hadir tepat waktu.' },
      { key: "D", text: 'Kepada semua siswa diharap hadir tepat waktu.' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Kalimat berawal kata depan \'kepada\' tanpa subjek menjadikan kalimat tidak efektif.')],
    [P('Subjek yang jelas: '), B('semua siswa'), P('. Kalimat efektif: '), B('Semua siswa diharap hadir tepat waktu.')],
    ],
  },

  {
    no: 113,
    stimulus: [],
    prompt: S('Kalimat yang paling efektif adalah ….'),
    options: [
      { key: "A", text: 'Saya melihat pemandangan yang sangat indah di pantai itu.' },
      { key: "B", text: 'Saya melihat pemandangan yang indah sekali di pantai itu.' },
      { key: "C", text: 'Saya melihat pemandangan yang indah-indah di pantai itu.' },
      { key: "D", text: 'Saya melihat pemandangan yang sangat indah sekali di pantai itu.' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Opsi D salah karena '), B('sangat'), P(' dan '), B('sekali'), P(' bertumpuk.')],
    [P('Opsi C \'indah-indah\' tidak tepat karena kata ulang tidak diperlukan untuk adjektiva yang sudah bermakna penuh.')],
    [P('Kalimat efektif yang tepat: '), B('Saya melihat pemandangan yang sangat indah di pantai itu.')],
    ],
  },

  {
    no: 114,
    stimulus: [],
    prompt: S('Kalimat yang paling efektif adalah ….'),
    options: [
      { key: "A", text: 'Acara ini bertujuan mempererat persaudaraan.' },
      { key: "B", text: 'Tujuan acara ini adalah untuk mempererat persaudaraan antarwarga.' },
      { key: "C", text: 'Diadakannya acara ini bertujuan untuk mempererat persaudaraan.' },
      { key: "D", text: 'Tujuan dari diadakannya acara ini adalah untuk mempererat persaudaraan.' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Kalimat efektif menghindari penumpukan kata depan dan penanda pasif yang berlebihan.')],
    [P('Pilihan yang paling ringkas dan jelas: '), B('Acara ini bertujuan mempererat persaudaraan.')],
    ],
  },

  {
    no: 115,
    stimulus: [],
    prompt: S('Kalimat yang paling efektif adalah ….'),
    options: [
      { key: "A", text: 'Semua hadirin yang hadir serentak berdiri ketika lagu kebangsaan diperdengarkan.' },
      { key: "B", text: 'Hadirin serentak berdiri ketika lagu kebangsaan diperdengarkan.' },
      { key: "C", text: 'Para hadirin serentak berdiri mendengarkan lagu kebangsaan yang diperdengarkan.' },
      { key: "D", text: 'Hadirin semuanya berdiri serentak pada saat lagu kebangsaan itu diperdengarkan oleh panitia.' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Kata '), B('hadirin'), P(' sudah jamak, sehingga \'para hadirin\', \'semua hadirin\', atau \'hadirin semuanya\' mubazir.')],
    [P('Kalimat paling efektif: '), B('Hadirin serentak berdiri ketika lagu kebangsaan diperdengarkan.')],
    ],
  },

  {
    no: 116,
    stimulus: [],
    prompt: S('Kalimat yang paling efektif adalah ….'),
    options: [
      { key: "A", text: 'Dari hasil survei menunjukkan bahwa sebagian besar remaja menggunakan gawai lebih dari enam jam sehari.' },
      { key: "B", text: 'Hasil survei menunjukkan bahwa remaja menggunakan gawai lebih dari enam jam sehari sebagian besar.' },
      { key: "C", text: 'Berdasarkan hasil survei, sebagian besar remaja menggunakan gawai lebih dari enam jam sehari.' },
      { key: "D", text: 'Sebagian besar remaja, berdasarkan survei, menggunakan gawai lebih dari enam jam sehari waktunya.' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Kalimat \'Dari hasil survei menunjukkan...\' tidak efektif karena subjeknya ganda (frasa berpreposisi tidak dapat menjadi subjek).')],
    [P('Kalimat efektif: '), B('Berdasarkan hasil survei, sebagian besar remaja menggunakan gawai lebih dari enam jam sehari.')],
    ],
  },

  {
    no: 117,
    stimulus: [],
    prompt: S('Kalimat yang paling efektif adalah ….'),
    options: [
      { key: "A", text: 'Karena bangun kesiangan, Andi terlambat tiba di sekolah.' },
      { key: "B", text: 'Disebabkan karena bangun kesiangan, Andi terlambat tiba di sekolah.' },
      { key: "C", text: 'Andi terlambat tiba di sekolah karena disebabkan bangun kesiangan.' },
      { key: "D", text: 'Karena disebabkan oleh bangun kesiangan, maka Andi terlambat ke sekolah.' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Penggunaan kata '), B('disebabkan'), P(' dan '), B('karena'), P(' sekaligus merupakan pemborosan.')],
    [P('Kalimat efektif: '), B('Karena bangun kesiangan, Andi terlambat tiba di sekolah.')],
    ],
  },

  {
    no: 118,
    stimulus: [],
    prompt: S('Kalimat yang paling efektif adalah ….'),
    options: [
      { key: "A", text: 'Diputuskan oleh panitia bahwa kegiatan donor darah diundur minggu depan.' },
      { key: "B", text: 'Kegiatan donor darah diundur minggu depan adalah keputusan panitia.' },
      { key: "C", text: 'Panitia memutuskan mengundur kegiatan donor darah pada minggu depan waktunya.' },
      { key: "D", text: 'Panitia memutuskan bahwa kegiatan donor darah diundur minggu depan.' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Kalimat aktif dengan subjek jelas lebih efektif daripada kalimat pasif berpanjang.')],
    [P('Kalimat efektif: '), B('Panitia memutuskan bahwa kegiatan donor darah diundur minggu depan.')],
    ],
  },

  {
    no: 119,
    stimulus: [],
    prompt: S('Kalimat yang paling efektif adalah ….'),
    options: [
      { key: "A", text: 'Kami mengucapkan terima kasih atas bantuan Bapak.' },
      { key: "B", text: 'Kami mengucapkan banyak terima kasih atas bantuan Bapak yang telah diberikan.' },
      { key: "C", text: 'Tak lupa kami ucapkan terima kasih kepada Bapak atas bantuannya.' },
      { key: "D", text: 'Terima kasih kami sampaikan, atas bantuan Bapak, kami ucapkan.' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Ungkapan baku yang ringkas: '), B('mengucapkan terima kasih'), P('.')],
    [P('Kalimat efektif: '), B('Kami mengucapkan terima kasih atas bantuan Bapak.')],
    ],
  },

  {
    no: 120,
    stimulus: [],
    prompt: S('Kalimat yang paling efektif adalah ….'),
    options: [
      { key: "A", text: 'Rapat itu membicarakan soal keuangan.' },
      { key: "B", text: 'Di dalam rapat itu membicarakan perihal soal keuangan.' },
      { key: "C", text: 'Rapat itu membicarakan tentang perihal keuangan.' },
      { key: "D", text: 'Dalam rapat itu membicarakan soal keuangan.' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Kata '), B('membicarakan'), P(' tidak memerlukan \'tentang\' atau \'perihal\' karena verba itu transitif langsung.')],
    [P('Kalimat efektif: '), B('Rapat itu membicarakan soal keuangan.')],
    ],
  },

  {
    no: 121,
    stimulus: [],
    prompt: S('Kalimat yang paling efektif adalah ….'),
    options: [
      { key: "A", text: 'Kriteria-kriteria penerima beasiswa meliputi nilai, penghasilan orang tua, dan prestasi.' },
      { key: "B", text: 'Kriteria penerima beasiswa meliputi nilai, penghasilan orang tua, dan prestasi.' },
      { key: "C", text: 'Kriteria penerima beasiswa adalah: (1) nilai (2) penghasilan orang tua (3) prestasi.' },
      { key: "D", text: 'Kriteria dari pada penerima beasiswa itu meliputi nilai, penghasilan, dan prestasi.' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Kata '), B('kriteria'), P(' sudah bermakna jamak, sehingga \'kriteria-kriteria\' tidak tepat.')],
    [P('Kalimat efektif dan lengkap: '), B('Kriteria penerima beasiswa meliputi nilai, penghasilan orang tua, dan prestasi.')],
    ],
  },

  {
    no: 122,
    stimulus: [],
    prompt: S('Kalimat yang paling efektif adalah ….'),
    options: [
      { key: "A", text: 'Marilah kita panjatkan puji syukur ke hadirat Tuhan Yang Maha Esa.' },
      { key: "B", text: 'Puji dan syukur kami haturkan kepada Tuhan Yang Maha Esa.' },
      { key: "C", text: 'Dengan mengucap syukur ke hadirat Tuhan, kami panjatkan puji syukur.' },
      { key: "D", text: 'Kami memanjatkan puji syukur, dengan mengucap syukur ke hadirat Tuhan.' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Kalimat efektif tidak mengulang makna; '), B('puji syukur'), P(' dan '), B('mengucap syukur'), P(' adalah pemborosan bila dipakai bersamaan.')],
    [P('Kalimat yang lazim dan efektif: '), B('Marilah kita panjatkan puji syukur ke hadirat Tuhan Yang Maha Esa.')],
    ],
  },

  {
    no: 123,
    stimulus: [],
    prompt: S('Kalimat yang paling efektif adalah ….'),
    options: [
      { key: "A", text: 'Tugas itu agar dikerjakan sendiri oleh masing-masing siswa secara individu.' },
      { key: "B", text: 'Tugas itu hendaknya dikerjakan sendiri-sendiri oleh tiap-tiap siswa masing-masing.' },
      { key: "C", text: 'Tugas itu hendaknya dikerjakan oleh siswa secara individu.' },
      { key: "D", text: 'Tugas itu hendaknya dikerjakan oleh setiap siswa.' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Opsi C mubazir: '), B('sendiri-sendiri'), P(', '), B('tiap-tiap'), P(', dan '), B('masing-masing'), P(' bermakna sama.')],
    [P('Kalimat paling ringkas dan jelas: '), B('Tugas itu hendaknya dikerjakan oleh setiap siswa.')],
    ],
  },

  {
    no: 124,
    stimulus: [],
    prompt: S('Kalimat yang paling efektif adalah ….'),
    options: [
      { key: "A", text: 'Agus memperbaiki sepeda yang rusak rusak itu di bengkel.' },
      { key: "B", text: 'Sepeda yang rusak itu diperbaiki oleh Agus di bengkel.' },
      { key: "C", text: 'Agus memperbaiki sepeda yang rusak itu di bengkel.' },
      { key: "D", text: 'Di bengkel, sepeda yang rusak diperbaiki oleh Agus.' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Kalimat efektif harus logis: subjek melakukan tindakan, objek dikenai tindakan.')],
    [P('Kalimat aktif langsung yang paling efektif: '), B('Agus memperbaiki sepeda yang rusak itu di bengkel.')],
    ],
  },

  {
    no: 125,
    stimulus: [],
    prompt: S('Kalimat yang paling efektif adalah ….'),
    options: [
      { key: "A", text: 'Anak-anak bermain di taman kota setiap sore.' },
      { key: "B", text: 'Banyak anak-anak bermain di taman kota setiap sore.' },
      { key: "C", text: 'Banyak anak-anak yang bermain di taman kota setiap sore.' },
      { key: "D", text: 'Di taman kota, banyak anak-anak yang bermain setiap sore hari.' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Kata '), B('anak-anak'), P(' sudah jamak sehingga \'banyak anak-anak\' rancu (gabungan takrif dan taktakrif).')],
    [P('Kalimat efektif: '), B('Anak-anak bermain di taman kota setiap sore.')],
    ],
  },

  {
    no: 126,
    stimulus: [],
    prompt: S('Kalimat yang paling efektif adalah ….'),
    options: [
      { key: "A", text: 'Setiap siswa diharapkan membawa alat tulisnya masing-masing ketika ujian.' },
      { key: "B", text: 'Masing-masing siswa membawa alat tulis masing-masing ketika ujian.' },
      { key: "C", text: 'Siswa diharapkan membawa alat tulis masing-masing ketika ujian.' },
      { key: "D", text: 'Para siswa diharapkan membawa alat-alat tulis masing-masing ketika ujian.' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Kalimat efektif harus jelas dan tidak berlebihan.')],
    [P('Opsi C mubazir karena subjek \'masing-masing siswa\' diulang lagi dengan \'masing-masing\'.')],
    [P('Kalimat paling efektif: '), B('Siswa diharapkan membawa alat tulis masing-masing ketika ujian.')],
    ],
  },

  {
    no: 127,
    stimulus: [],
    prompt: S('Kalimat yang paling efektif adalah ….'),
    options: [
      { key: "A", text: 'Hujan deras menyebabkan pertandingan sepak bola ditunda.' },
      { key: "B", text: 'Karena hujan deras, maka pertandingan sepak bola ditunda.' },
      { key: "C", text: 'Pertandingan sepak bola ditunda dikarenakan hujan yang deras.' },
      { key: "D", text: 'Disebabkan hujan deras, maka dari itu pertandingan ditunda.' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Kata '), B('karena'), P(' dan '), B('maka'), P(' tidak perlu dipakai bersama; \'dikarenakan\' dan \'maka dari itu\' juga mubazir.')],
    [P('Kalimat efektif: '), B('Hujan deras menyebabkan pertandingan sepak bola ditunda.')],
    ],
  },

  {
    no: 128,
    stimulus: [],
    prompt: S('Kalimat yang paling efektif adalah ….'),
    options: [
      { key: "A", text: 'Demikian laporan ini disampaikan, atas perhatian Bapak/Ibu kami ucapkan terima kasih.' },
      { key: "B", text: 'Demikian laporan ini kami sampaikan, atas perhatiannya kami ucapkan terima kasih.' },
      { key: "C", text: 'Demikianlah laporan ini kami sampaikan. Atas perhatian Bapak dan Ibu, kami mengucapkan terima kasih.' },
      { key: "D", text: 'Demikian laporan ini saya sampaikan, atas perhatiannya diucapkan terima kasih.' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Kalimat penutup yang baik tidak mencampur persona secara rancu (\'saya\' lalu \'diucapkan\').')],
    [P('Kalimat yang paling efektif dan santun: '), B('Demikian laporan ini kami sampaikan. Atas perhatian Bapak dan Ibu, kami mengucapkan terima kasih.')],
    ],
  },

  {
    no: 129,
    stimulus: ['Kalimat: "Adik menonton film kartun di televisi, sambil makan pop corn."'],
    prompt: S('Perbaikan kalimat tersebut yang paling tepat adalah ….'),
    options: [
      { key: "A", text: 'Adik menonton film kartun di televisi, sambil makan pop corn.' },
      { key: "B", text: 'Adik menonton film kartun di televisi sambil makan popcorn.' },
      { key: "C", text: 'Adik, menonton film kartun di televisi, sambil makan popcorn.' },
      { key: "D", text: 'Adik menonton film kartun di televisi sambil makan pop corn.' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Tanda koma tidak diperlukan sebelum konjungsi '), B('sambil'), P(' karena tidak menghubungkan dua klausa setara.')],
    [P('Kata serapan yang baku adalah '), B('pop corn'), P(' (ditulis terpisah) menurut KBBI.')],
    [P('Perbaikan paling tepat: '), B('Adik menonton film kartun di televisi sambil makan pop corn.')],
    ],
  },

  {
    no: 130,
    stimulus: ['Kalimat: "Karena hari sudah malam, maka kami memutuskan untuk pulang."'],
    prompt: S('Perbaikan kalimat tersebut yang paling tepat adalah ….'),
    options: [
      { key: "A", text: 'Karena hari sudah malam, kami memutuskan untuk pulang.' },
      { key: "B", text: 'Karena hari sudah malam maka kami memutuskan untuk pulang.' },
      { key: "C", text: 'Hari sudah malam, maka dari itu kami memutuskan pulang.' },
      { key: "D", text: 'Karena hari sudah malam, maka dari itu kami pulang.' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Konjungsi '), B('karena'), P(' dan '), B('maka'), P(' tidak boleh dipakai bersamaan dalam satu kalimat.')],
    [P('Perbaikan yang tepat: '), B('Karena hari sudah malam, kami memutuskan untuk pulang.')],
    ],
  },

  {
    no: 131,
    stimulus: ['Kalimat: "Buku yang berjudul Laskar Pelangi ditulis oleh Andrea Hirata."'],
    prompt: S('Penulisan judul buku pada kalimat tersebut yang tepat adalah ….'),
    options: [
      { key: "A", text: 'Buku yang berjudul Laskar Pelangi ditulis oleh Andrea Hirata.' },
      { key: "B", text: 'Buku yang berjudul "Laskar Pelangi" ditulis oleh Andrea Hirata.' },
      { key: "C", text: 'Buku yang berjudul \'Laskar Pelangi\' ditulis oleh Andrea Hirata.' },
      { key: "D", text: 'Buku yang berjudul LASKAR PELANGI ditulis oleh Andrea Hirata.' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Judul buku yang disebut dalam kalimat diapit tanda petik dua: '), B('"Laskar Pelangi"'), P('.')],
    [P('Setiap kata pada judul ditulis dengan huruf kapital kecuali kata tugas.')],
    ],
  },

  {
    no: 132,
    stimulus: ['Kalimat: "Siswa kelas tujuh sampai sembilan mengikuti kegiatan perkemahan."'],
    prompt: [P('Penulisan yang tepat untuk kata '), B('tujuh sampai sembilan'), P(' pada kalimat tersebut adalah ….')],
    options: [
      { key: "A", text: '7 sampai 9' },
      { key: "B", text: 'tujuh s.d. sembilan' },
      { key: "C", text: '7 s/d 9' },
      { key: "D", text: 'tujuh sampai sembilan' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Dalam kalimat, angka tingkat atau bilangan dapat ditulis dengan huruf apabila tidak mendahului satuan.')],
    [P('Karena \'kelas tujuh\' bukan satuan ukuran, penulisan dengan huruf sudah tepat: '), B('tujuh sampai sembilan.')],
    ],
  },

  {
    no: 133,
    stimulus: ['Kalimat: "Dia membaca novel itu dengan tekun selama dua jam lamanya."'],
    prompt: S('Alasan kalimat tersebut tidak efektif adalah ….'),
    options: [
      { key: "A", text: 'Subjek kalimat tidak jelas' },
      { key: "B", text: 'Predikat kalimat tidak berawalan meN-' },
      { key: "C", text: 'Tidak ada objek dalam kalimat' },
      { key: "D", text: 'Ada pemborosan kata karena \'dua jam\' dan \'lamanya\' bermakna sama' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Keterangan '), B('selama dua jam'), P(' sudah menyatakan durasi, sehingga kata '), B('lamanya'), P(' mubazir.')],
    [P('Jadi kalimat tidak efektif karena '), B('pemborosan kata'), P('.')],
    ],
  },

  {
    no: 134,
    stimulus: ['Kalimat: "Rina tidak hanya pandai bernyanyi, tetapi juga pandai menari."'],
    prompt: S('Kalimat tersebut sudah efektif karena ….'),
    options: [
      { key: "A", text: 'menggunakan kata \'pandai\' secara berulang' },
      { key: "B", text: 'memiliki dua subjek yang berbeda' },
      { key: "C", text: 'tidak memiliki predikat' },
      { key: "D", text: 'menggunakan korelasi \'tidak hanya … tetapi juga\' dengan tepat dan sejajar' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Konjungsi korelatif '), B('tidak hanya … tetapi juga'), P(' menuntut bentuk yang sejajar: \'pandai bernyanyi\' sejajar dengan \'pandai menari\'.')],
    [P('Kalimat tersebut sudah efektif karena strukturnya '), B('sejajar dan menggunakan korelasi dengan tepat'), P('.')],
    ],
  },

  {
    no: 135,
    stimulus: ['Kalimat: "Peserta lomba diwajibkan membawa: kartu peserta, alat tulis, dan memakai pakaian rapi."'],
    prompt: S('Perbaikan kalimat tersebut yang paling tepat adalah ….'),
    options: [
      { key: "A", text: 'Peserta lomba diwajibkan: membawa kartu peserta, alat tulis, dan memakai pakaian rapi.' },
      { key: "B", text: 'Peserta lomba diwajibkan membawa kartu peserta, alat tulis, dan pakaian rapi.' },
      { key: "C", text: 'Peserta lomba diwajibkan membawa kartu peserta dan alat tulis serta memakai pakaian rapi.' },
      { key: "D", text: 'Peserta lomba diwajibkan membawa kartu peserta dan alat tulis, dan memakai pakaian rapi.' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Unsur dalam rincian harus sejajar. \'membawa kartu peserta, alat tulis\' tidak sejajar dengan \'memakai pakaian rapi\'.')],
    [P('Perbaikan yang sejajar: '), B('Peserta lomba diwajibkan membawa kartu peserta, alat tulis, dan pakaian rapi.')],
    ],
  },

  {
    no: 136,
    stimulus: ['Kalimat: "Gedung itu tingginya 25 lantai dan dibangun pada tahun 2019."'],
    prompt: [P('Penulisan yang tepat menurut kaidah untuk '), B('25 lantai'), P(' dan '), B('tahun 2019'), P(' adalah ….')],
    options: [
      { key: "A", text: '25 lantai dan tahun 2019' },
      { key: "B", text: 'dua puluh lima lantai dan tahun 2019' },
      { key: "C", text: '25 lantai dan tahun 2019 M' },
      { key: "D", text: '25 lantai dan Tahun 2019' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Angka yang menunjukkan jumlah dapat ditulis dengan angka bila diikuti satuan: '), B('25 lantai'), P('.')],
    [P('Penulisan tahun tidak perlu kata \'M\' atau kapital: '), B('tahun 2019.')],
    ],
  },

  {
    no: 137,
    stimulus: ['Kalimat: "Kami mengucapkan selamat ulang tahun yang ke-17 untuk kampus tercinta."'],
    prompt: [P('Penulisan '), B('ke-17'), P(' pada kalimat tersebut yang tepat adalah ….')],
    options: [
      { key: "A", text: 'ke-17' },
      { key: "B", text: 'ke 17' },
      { key: "C", text: 'ke17' },
      { key: "D", text: 'Ke-17' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Awalan '), B('ke-'), P(' diikuti angka ditulis serangkai dengan tanda hubung: '), B('ke-17'), P('.')],
    [P('Huruf k tidak perlu kapital karena bukan awal kalimat.')],
    ],
  },

  {
    no: 138,
    stimulus: ['Kalimat: "Tugas itu dapat diselesaikan oleh para siswa-siswa dengan cepat."'],
    prompt: S('Perbaikan kalimat tersebut yang paling tepat adalah ….'),
    options: [
      { key: "A", text: 'Tugas itu dapat diselesaikan oleh para siswa-siswa dengan cepat.' },
      { key: "B", text: 'Para siswa-siswa dapat menyelesaikan tugas itu dengan cepat.' },
      { key: "C", text: 'Tugas itu diselesaikan dengan cepat oleh para siswa-siswa.' },
      { key: "D", text: 'Tugas itu dapat diselesaikan oleh siswa dengan cepat.' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Kata '), B('para'), P(' dan bentuk ulang '), B('siswa-siswa'), P(' sama-sama menyatakan jamak, sehingga salah satu harus dihilangkan.')],
    [P('Perbaikan yang tepat: '), B('Tugas itu dapat diselesaikan oleh siswa dengan cepat.')],
    ],
  },

  {
    no: 139,
    stimulus: ['Kalimat: "Hadirin yang terhormat, marilah kita berdoa menurut agama dan kepercayaan masing-masing."'],
    prompt: S('Kalimat tersebut sudah tepat karena ….'),
    options: [
      { key: "A", text: 'mengulang kata \'masing-masing\'' },
      { key: "B", text: 'menggunakan kata \'marilah\' yang tidak perlu' },
      { key: "C", text: 'menggunakan kata sapaan \'hadirin\' dengan tanda koma serta pilihan kata yang santun' },
      { key: "D", text: 'tidak memiliki subjek yang jelas' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Kalimat pembuka pidato yang baik menggunakan sapaan yang diikuti koma: '), B('Hadirin yang terhormat,'), P(' lalu ajakan berdoa.')],
    [B('Pilihan kata \'menurut agama dan kepercayaan masing-masing\' bersifat inklusif dan santun, sehingga kalimat sudah tepat.')],
    ],
  },

  {
    no: 140,
    stimulus: ['Kalimat: "Antara pendapatan dan pengeluaran harus seimbang, agar keuangan keluarga sehat."'],
    prompt: S('Perbaikan penggunaan tanda koma pada kalimat tersebut yang tepat adalah ….'),
    options: [
      { key: "A", text: 'Antara pendapatan, dan pengeluaran harus seimbang, agar keuangan keluarga sehat.' },
      { key: "B", text: 'Antara pendapatan dan pengeluaran harus seimbang agar keuangan keluarga sehat.' },
      { key: "C", text: 'Antara pendapatan dan pengeluaran, harus seimbang agar keuangan keluarga sehat.' },
      { key: "D", text: 'Antara pendapatan dan pengeluaran harus seimbang, agar, keuangan keluarga sehat.' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Tanda koma tidak diperlukan sebelum konjungsi subordinatif '), B('agar'), P(' ketika anak kalimat berada di akhir.')],
    [P('Kalimat efektif tanpa koma: '), B('Antara pendapatan dan pengeluaran harus seimbang agar keuangan keluarga sehat.')],
    ],
  },

  {
    no: 141,
    stimulus: ['Kalimat: "Ibu pergi ke pasar, kemudian ke supermarket, lalu ke apotek."'],
    prompt: S('Kalimat tersebut menggunakan tanda koma dengan benar karena ….'),
    options: [
      { key: "A", text: 'menandai akhir kalimat berita' },
      { key: "B", text: 'mengapit keterangan tambahan' },
      { key: "C", text: 'memisahkan anak kalimat dari induk kalimat' },
      { key: "D", text: 'memisahkan unsur perincian berupa keterangan tempat yang berurutan' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Rincian \'ke pasar, ke supermarket, lalu ke apotek\' merupakan perincian yang setara sehingga dipisah koma.')],
    [P('Tanda koma berfungsi '), B('memisahkan unsur perincian'), P('.')],
    ],
  },

  {
    no: 142,
    stimulus: ['Kalimat: "Karena kurang persiapan, tim itu akhirnya kalah dalam pertandingan."'],
    prompt: S('Pola kalimat tersebut yang tepat adalah ….'),
    options: [
      { key: "A", text: 'Subjek + predikat + objek + keterangan sebab' },
      { key: "B", text: 'Keterangan sebab + subjek + predikat + keterangan waktu' },
      { key: "C", text: 'Objek + predikat + subjek + keterangan cara' },
      { key: "D", text: 'Keterangan sebab + subjek + keterangan cara + predikat + keterangan tempat' },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
    [P('Unsur kalimat: '), B('Karena kurang persiapan'), P(' = keterangan sebab; '), B('tim itu'), P(' = subjek; '), B('akhirnya'), P(' = keterangan; '), B('kalah'), P(' = predikat; '), B('dalam pertandingan'), P(' = keterangan.')],
    [P('Pola yang paling tepat adalah '), B('keterangan sebab + subjek + predikat + keterangan'), P('.')],
    ],
  },

  {
    no: 143,
    stimulus: ['Kalimat: "Banyak para pemuda mengikuti pelatihan keterampilan kerja di balai latihan kerja."'],
    prompt: S('Perbaikan kalimat tersebut yang paling tepat adalah ….'),
    options: [
      { key: "A", text: 'Banyak pemuda mengikuti pelatihan keterampilan kerja di balai latihan kerja.' },
      { key: "B", text: 'Banyak para pemuda mengikuti pelatihan keterampilan kerja di balai latihan kerja.' },
      { key: "C", text: 'Para pemuda-pemuda mengikuti pelatihan keterampilan kerja di balai latihan kerja.' },
      { key: "D", text: 'Pemuda banyak yang mengikuti pelatihan keterampilan di balai kerja.' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Kata '), B('banyak'), P(' dan '), B('para'), P(' memiliki fungsi yang bertentangan; \'para\' menyatakan takrif, \'banyak\' menyatakan taktakrif sehingga tidak dapat digabung.')],
    [P('Perbaikan: '), B('Banyak pemuda mengikuti pelatihan keterampilan kerja di balai latihan kerja.')],
    ],
  },

  {
    no: 144,
    stimulus: ['Kalimat: "Pohon kelapa memiliki banyak manfaat, akar, batang, daun, dan buahnya dapat dimanfaatkan."'],
    prompt: S('Perbaikan tanda baca kalimat tersebut yang paling tepat adalah ….'),
    options: [
      { key: "A", text: 'Pohon kelapa memiliki banyak manfaat, akar batang daun dan buahnya dapat dimanfaatkan.' },
      { key: "B", text: 'Pohon kelapa memiliki banyak manfaat: akar, batang, daun, dan buahnya dapat dimanfaatkan.' },
      { key: "C", text: 'Pohon kelapa memiliki banyak manfaat, akar, batang, daun dan buahnya, dapat dimanfaatkan.' },
      { key: "D", text: 'Pohon kelapa memiliki banyak manfaat, akar, batang, daun, dan buahnya dapat dimanfaatkan.' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Setelah kata yang diikuti perincian digunakan tanda titik dua: '), B('manfaat:'), P('.')],
    [P('Perbaikan yang tepat: '), B('Pohon kelapa memiliki banyak manfaat: akar, batang, daun, dan buahnya dapat dimanfaatkan.')],
    ],
  },

  {
    no: 145,
    stimulus: ['Kalimat: "Baik mahasiswa maupun dosen diharapkan hadir dalam seminar nasional itu."'],
    prompt: S('Kalimat tersebut menggunakan konjungsi ….'),
    options: [
      { key: "A", text: 'koordinatif' },
      { key: "B", text: 'subordinatif' },
      { key: "C", text: 'korelatif' },
      { key: "D", text: 'antarkalimat' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Konjungsi '), B('baik … maupun'), P(' adalah konjungsi korelatif yang menghubungkan dua unsur setara.')],
    [P('Jadi jawabannya: '), B('korelatif.')],
    ],
  },

  {
    no: 146,
    stimulus: ['Kalimat: "Siswa yang terlambat datang harus menghubungi guru piket."'],
    prompt: S('Anak kalimat pada kalimat tersebut adalah ….'),
    options: [
      { key: "A", text: 'yang terlambat datang' },
      { key: "B", text: 'Siswa' },
      { key: "C", text: 'harus menghubungi guru piket' },
      { key: "D", text: 'guru piket' },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
    [P('Anak kalimat adalah klausa yang dipendatkan dengan pemarkah '), B('yang'), P(': '), B('yang terlambat datang'), P('.')],
    [B('Klausa ini berfungsi sebagai pewatas subjek \'Siswa\'.')],
    ],
  },

  {
    no: 147,
    stimulus: ['Kalimat: "Setelah menyelesaikan pendidikan sarjana, ia bekerja di perusahaan swasta."'],
    prompt: S('Subjek pada kalimat tersebut adalah ….'),
    options: [
      { key: "A", text: 'Setelah menyelesaikan pendidikan sarjana' },
      { key: "B", text: 'ia' },
      { key: "C", text: 'bekerja' },
      { key: "D", text: 'perusahaan swasta' },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
    [P('Frasa \'Setelah menyelesaikan pendidikan sarjana\' adalah keterangan waktu, bukan subjek.')],
    [P('Subjek kalimat adalah pelaku yang melakukan pekerjaan, yaitu '), B('ia.')],
    ],
  },

  {
    no: 148,
    stimulus: ['Kalimat: "Harga bahan pokok di pasar tradisional relatif stabil, kecuali cabai yang harganya melonjak."'],
    prompt: S('Kalimat tersebut akan menjadi kalimat majemuk setara apabila diubah menjadi ….'),
    options: [
      { key: "A", text: 'Harga bahan pokok relatif stabil kecuali cabai yang melonjak.' },
      { key: "B", text: 'Karena harga cabai melonjak, harga bahan pokok lain relatif stabil.' },
      { key: "C", text: 'Harga bahan pokok di pasar tradisional relatif stabil, tetapi harga cabai melonjak.' },
      { key: "D", text: 'Cabai melonjak harganya, sedangkan di pasar tradisional stabil.' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Kalimat majemuk setara menghubungkan dua klausa yang setara dengan konjungsi koordinatif seperti '), B('tetapi'), P('.')],
    [P('Perubahan yang tepat: '), B('Harga bahan pokok di pasar tradisional relatif stabil, tetapi harga cabai melonjak.')],
    ],
  },

  {
    no: 149,
    stimulus: ['Kalimat: "Anak itu berlari cepat sekali sehingga jatuh tersandung batu."'],
    prompt: S('Kalimat tersebut tidak efektif karena ….'),
    options: [
      { key: "A", text: 'mengandung pemborosan kata' },
      { key: "B", text: 'tidak memiliki objek' },
      { key: "C", text: 'urutan peristiwa tidak logis, sebab \'tersandung batu\' seharusnya mendahului \'jatuh\'' },
      { key: "D", text: 'subjeknya tidak jelas' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Urutan yang logis: tersandung batu dahulu, baru jatuh. Kalimat asli menulis \'jatuh tersandung batu\' sehingga terkesan jatuh dahulu.')],
    [P('Perbaikannya: '), B('Anak itu berlari cepat sekali sehingga tersandung batu lalu jatuh.')],
    ],
  },

  {
    no: 150,
    stimulus: ['Kalimat: "Demi kelancaran acara, seluruh panitia dimohon hadir setengah jam sebelum acara dimulai."'],
    prompt: [P('Fungsi frasa '), B('Demi kelancaran acara'), P(' pada kalimat tersebut adalah ….')],
    options: [
      { key: "A", text: 'subjek kalimat' },
      { key: "B", text: 'objek kalimat' },
      { key: "C", text: 'keterangan tujuan' },
      { key: "D", text: 'pelengkap' },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
    [P('Kata depan '), B('demi'), P(' menyatakan tujuan, dan frasa \'Demi kelancaran acara\' menjawab pertanyaan \'untuk apa?\'.')],
    [P('Jadi frasa itu berfungsi sebagai '), B('keterangan tujuan.')],
    ],
  },

];
