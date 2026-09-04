"use client";

import type { BankSoal } from "@/lib/data/soal";

const S = (t: string) => [{ t }] as { t: string; b?: boolean }[];
const B = (t: string) => ({ t, b: true }) as { t: string; b?: boolean };
const P = (t: string) => ({ t }) as { t: string; b?: boolean };

export const BANK_SNBT_LBI: BankSoal[] = [
  {
    no: 1,
    stimulus: [
      "Urban farming tidak hanya sekadar tren gaya hidup, tetapi juga jawaban atas persoalan ketahanan pangan di kota besar. Dengan memanfaatkan lahan sempit, warga dapat memproduksi sayuran segar secara mandiri. Selain itu, praktik ini mengurangi biaya distribusi karena hasil panen dikonsumsi atau dijual di lingkungan sekitar.",
    ],
    prompt: S("Ide pokok paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "urban farming memanfaatkan lahan sempit di perkotaan" },
      { key: "B", text: "urban farming menjadi solusi ketahanan pangan kota besar" },
      { key: "C", text: "hasil panen urban farming dijual di lingkungan sekitar" },
      { key: "D", text: "biaya distribusi sayuran di kota besar sangat tinggi" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Kalimat pertama merupakan gagasan utama: urban farming adalah jawaban atas ketahanan pangan.")],
      [B("Jadi ide pokok = urban farming menjadi solusi ketahanan pangan kota besar.")],
    ],
  },
  {
    no: 2,
    stimulus: [
      "Bahasa daerah di Indonesia berada dalam posisi yang memprihatinkan. Banyak generasi muda lebih fasih menggunakan bahasa asing atau bahasa Indonesia daripada bahasa ibu mereka. Padahal, di dalam bahasa daerah tersimpan kearifan lokal dan identitas budaya yang tidak ternilai. Jika tidak ada upaya pelestarian yang serius, bukan mustahil bahasa daerah akan punah dalam beberapa dekade.",
    ],
    prompt: S("Simpulan yang paling tepat berdasarkan paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "Generasi muda lebih menyukai bahasa asing daripada bahasa Indonesia." },
      { key: "B", text: "Kearifan lokal hanya tersimpan di dalam bahasa daerah." },
      { key: "C", text: "Bahasa daerah terancam punah jika tidak dilestarikan." },
      { key: "D", text: "Pelestarian bahasa daerah sudah berjalan dengan baik." },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Paragraf memaparkan kondisi memprihatinkan dan ancaman kepunahan bahasa daerah.")],
      [B("Simpulan logis: bahasa daerah terancam punah jika tidak dilestarikan.")],
    ],
  },
  {
    no: 3,
    stimulus: [
      "Kecerdasan buatan semakin banyak digunakan dalam dunia pendidikan, mulai dari tutor daring hingga sistem penilaian otomatis. Teknologi ini membantu guru menghemat waktu dan memberi siswa umpan balik yang lebih cepat. Namun, ketergantungan yang berlebihan pada kecerdasan buatan dapat melemahkan kemampuan berpikir kritis siswa.",
    ],
    prompt: S("Pernyataan yang TIDAK sesuai dengan isi paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "Kecerdasan buatan memberi umpan balik lebih cepat kepada siswa." },
      { key: "B", text: "Kecerdasan buatan digunakan sebagai tutor daring." },
      { key: "C", text: "Ketergantungan berlebihan pada AI dapat melemahkan daya kritis siswa." },
      { key: "D", text: "Kecerdasan buatan diyakini mampu menggantikan peran guru sepenuhnya." },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Teks hanya menyebut AI membantu guru, bukan menggantikan peran guru sepenuhnya.")],
      [B("Pernyataan D bertentangan/melampaui isi teks, jadi tidak sesuai.")],
    ],
  },
  {
    no: 4,
    stimulus: [
      "Hutan mangrove memiliki fungsi ekologis yang sangat penting. Akar-akarnya yang rapat mampu menahan abrasi dan menjadi tempat berkembang biak berbagai biota laut. Mangrove juga menyerap karbon dalam jumlah besar, sehingga berperan dalam mitigasi perubahan iklim. Sayangnya, luas hutan mangrove terus menyusut akibat alih fungsi lahan menjadi tambak dan kawasan wisata.",
    ],
    prompt: S("Fungsi ekologis hutan mangrove menurut bacaan adalah …."),
    options: [
      { key: "A", text: "menahan abrasi dan menjadi habitat biota laut" },
      { key: "B", text: "menyediakan lahan untuk tambak dan wisata" },
      { key: "C", text: "menghasilkan kayu berkualitas tinggi" },
      { key: "D", text: "menyerap air laut agar tidak terjadi banjir" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Teks menyebut akar mangrove menahan abrasi dan menjadi tempat berkembang biak biota laut.")],
      [B("Jadi fungsi ekologis = menahan abrasi dan menjadi habitat biota laut.")],
    ],
  },
  {
    no: 5,
    stimulus: [
      "Kebiasaan membaca buku di kalangan pelajar masih rendah. Survei menunjukkan sebagian besar waktu luang pelajar dihabiskan untuk bermedia sosial. Padahal, membaca dapat melatih fokus dan memperluas wawasan. Oleh karena itu, orang tua perlu membiasakan anak membaca sejak dini dengan menyediakan buku yang menarik dan mendampingi saat membaca.",
    ],
    prompt: S("Kalimat yang tepat sebagai kalimat utama paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "Orang tua perlu menyediakan buku yang menarik bagi anak." },
      { key: "B", text: "Membaca dapat melatih fokus dan memperluas wawasan." },
      { key: "C", text: "Kebiasaan membaca buku di kalangan pelajar masih rendah." },
      { key: "D", text: "Pelajar menghabiskan waktu luang untuk bermedia sosial." },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Kalimat pertama menjadi gagasan utama yang kemudian dijelaskan kalimat-kalimat berikutnya.")],
      [B("Kalimat utama = kebiasaan membaca buku di kalangan pelajar masih rendah.")],
    ],
  },
  {
    no: 6,
    stimulus: [
      "Gempa bumi terjadi ketika energi yang tersimpan di dalam bumi dilepaskan secara tiba-tiba. Pelepasan energi ini biasanya disebabkan oleh pergerakan lempeng tektonik. Getaran yang dihasilkan merambat ke permukaan bumi dan dapat merusak bangunan. Kekuatan gempa diukur menggunakan skala magnitudo, sedangkan dampak kerusakannya dipengaruhi oleh kedalaman pusat gempa dan kondisi tanah.",
    ],
    prompt: S("Pernyataan yang sesuai dengan isi paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "Gempa bumi selalu disebabkan oleh aktivitas gunung berapi." },
      { key: "B", text: "Skala magnitudo mengukur kekuatan gempa bumi." },
      { key: "C", text: "Dampak gempa tidak dipengaruhi oleh kondisi tanah." },
      { key: "D", text: "Energi gempa tersimpan di permukaan bumi." },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Teks: kekuatan gempa diukur menggunakan skala magnitudo.")],
      [B("Pernyataan B sesuai; lainnya bertentangan dengan isi teks.")],
    ],
  },
  {
    no: 7,
    stimulus: [
      "Membaca nyaring kepada anak sebelum tidur memberikan manfaat yang tidak sedikit. Kegiatan ini memperkaya kosakata anak, menguatkan ikatan emosional antara orang tua dan anak, serta menumbuhkan minat baca sejak dini. Anak yang terbiasa dibacakan cerita cenderung memiliki kemampuan menyimak yang lebih baik ketika memasuki sekolah.",
    ],
    prompt: S("Makna kata menyimak pada paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "mendengarkan dengan saksama" },
      { key: "B", text: "membaca dengan suara keras" },
      { key: "C", text: "menuliskan kembali isi cerita" },
      { key: "D", text: "mengucapkan kata demi kata" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Dalam konteks pembelajaran bahasa, menyimak berarti mendengarkan dengan saksama.")],
      [B("Jawaban A tepat.")],
    ],
  },
  {
    no: 8,
    stimulus: [
      "Transportasi umum massal dianggap sebagai solusi mengatasi kemacetan. Dengan satu bus, puluhan kendaraan pribadi dapat digantikan sehingga volume kendaraan di jalan berkurang. Selain mengurangi kemacetan, transportasi massal juga menekan polusi udara. Sayangnya, sebagian masyarakat masih enggan berpindah karena alasan kenyamanan dan fleksibilitas waktu.",
    ],
    prompt: S("Sikap penulis terhadap transportasi umum massal dalam paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "menolak karena tidak nyaman" },
      { key: "B", text: "meragukan manfaatnya" },
      { key: "C", text: "mendukung sebagai solusi kemacetan" },
      { key: "D", text: "tidak peduli terhadap penggunaannya" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Penulis menyebut transportasi massal 'dianggap sebagai solusi' dan memaparkan manfaatnya.")],
      [B("Sikap penulis: mendukung transportasi umum massal sebagai solusi kemacetan.")],
    ],
  },
  {
    no: 9,
    stimulus: [
      "Sampah plastik merupakan salah satu masalah lingkungan yang paling sulit diurai. Dibutuhkan ratusan tahun bagi plastik untuk terurai secara alami. Oleh karena itu, berbagai negara mulai membatasi penggunaan kantong plastik sekali pakai dan mendorong masyarakat membawa tas belanja sendiri.",
    ],
    prompt: S("Kalimat yang paling tepat sebagai kalimat penjelas untuk melengkapi paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "Kantong plastik sangat praktis digunakan untuk berbelanja." },
      { key: "B", text: "Upaya ini diharapkan mampu mengurangi timbunan sampah plastik." },
      { key: "C", text: "Pabrik plastik menghasilkan banyak lapangan kerja." },
      { key: "D", text: "Harga kantong plastik di pasaran relatif murah." },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Paragraf membahas pembatasan kantong plastik sekali pakai.")],
      [B("Kalimat penjelas logis: upaya ini diharapkan mengurangi timbunan sampah plastik.")],
    ],
  },
  {
    no: 10,
    stimulus: [
      "Tidur yang cukup memiliki peran besar dalam menjaga kesehatan otak. Saat tidur, otak membersihkan zat-zat sisa metabolisme yang menumpuk sepanjang hari. Proses ini penting untuk menjaga daya ingat dan konsentrasi. Sebaliknya, kekurangan tidur dalam jangka panjang dikaitkan dengan penurunan fungsi kognitif dan gangguan suasana hati.",
    ],
    prompt: S("Hubungan antarkalimat yang paling tepat pada paragraf tersebut ditandai konjungsi …."),
    options: [
      { key: "A", text: "sebab itu" },
      { key: "B", text: "sementara itu" },
      { key: "C", text: "dengan demikian" },
      { key: "D", text: "sebaliknya" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Kalimat terakhir mempertentangkan kondisi cukup tidur dengan kekurangan tidur.")],
      [B("Konjungsi 'sebaliknya' menandai hubungan perlawanan/pertentangan.")],
    ],
  },
  {
    no: 11,
    stimulus: [
      "Penelitian menunjukkan bahwa olahraga teratur tidak hanya menyehatkan tubuh, tetapi juga memperbaiki suasana hati. Aktivitas fisik memicu pelepasan endorfin yang dikenal sebagai hormon kebahagiaan. Bahkan, olahraga ringan seperti berjalan kaki selama tiga puluh menit setiap hari sudah cukup untuk memberikan efek positif bagi kesehatan mental.",
    ],
    prompt: S("Maksud kalimat bercetak miring 'olahraga ringan seperti berjalan kaki selama tiga puluh menit setiap hari sudah cukup' adalah …."),
    options: [
      { key: "A", text: "Olahraga berat tidak diperlukan untuk memperbaiki suasana hati." },
      { key: "B", text: "Berjalan kaki adalah satu-satunya olahraga yang menyehatkan." },
      { key: "C", text: "Efek positif kesehatan mental dapat diperoleh dari olahraga ringan secara rutin." },
      { key: "D", text: "Semua orang harus berolahraga berat setiap hari." },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Kalimat itu menegaskan durasi dan intensitas ringan sudah cukup memberi efek positif.")],
      [B("Maknanya: efek positif dapat diperoleh dari olahraga ringan yang dilakukan rutin.")],
    ],
  },
  {
    no: 12,
    stimulus: [
      "Kopi merupakan salah satu komoditas ekspor unggulan Indonesia. Tanah vulkanik di dataran tinggi Nusantara menghasilkan biji kopi dengan cita rasa khas yang diakui dunia. Berbagai daerah, seperti Aceh, Toraja, dan Kintamani, telah dikenal sebagai sentra penghasil kopi. Pengembangan industri hilir kopi pun terus digalakkan agar nilai jualnya meningkat.",
    ],
    prompt: S("Fakta yang terdapat dalam paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "Kopi Indonesia adalah kopi terbaik di dunia." },
      { key: "B", text: "Aceh, Toraja, dan Kintamani merupakan sentra penghasil kopi." },
      { key: "C", text: "Industri hilir kopi seharusnya dikembangkan lebih cepat." },
      { key: "D", text: "Petani kopi Indonesia sudah sejahtera." },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Fakta adalah hal yang dapat dibuktikan kebenarannya; opini bersifat subjektif.")],
      [B("Pernyataan B merupakan fakta yang dinyatakan eksplisit dalam teks.")],
    ],
  },
  {
    no: 13,
    stimulus: [
      "Pasar tradisional memiliki daya tarik tersendiri yang tidak dimiliki pasar modern. Di pasar tradisional, pembeli dapat menawar harga dan berinteraksi langsung dengan pedagang. Akan tetapi, pasar tradisional sering dianggap kumuh dan kurang nyaman. Padahal, dengan pengelolaan yang baik, pasar tradisional dapat menjadi ruang publik yang bersih, nyaman, dan tetap menjaga nilai kebersamaan.",
    ],
    prompt: S("Kalimat yang menyatakan hubungan pertentangan dalam paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "Pasar tradisional memiliki daya tarik tersendiri." },
      { key: "B", text: "Pembeli dapat menawar harga di pasar tradisional." },
      { key: "C", text: "Pasar tradisional sering dianggap kumuh dan kurang nyaman." },
      { key: "D", text: "Pengelolaan yang baik menjadikan pasar tradisional nyaman." },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Konjungsi 'akan tetapi' menandai pertentangan; kalimat setelahnya menyebut sisi negatif.")],
      [B("Kalimat yang menyatakan pertentangan = pasar tradisional sering dianggap kumuh dan kurang nyaman.")],
    ],
  },
  {
    no: 14,
    stimulus: [
      "Krisis air bersih menjadi ancaman serius bagi banyak wilayah di Indonesia, terutama pada musim kemarau. Beberapa daerah bahkan mengalami kekeringan yang memaksa warga berjalan jauh untuk mendapatkan air. Salah satu upaya mengatasinya adalah dengan membangun sumur resapan dan memperbanyak tempat penampungan air hujan.",
    ],
    prompt: S("Gagasan utama paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "warga berjalan jauh untuk mendapatkan air bersih" },
      { key: "B", text: "krisis air bersih mengancam banyak wilayah Indonesia" },
      { key: "C", text: "sumur resapan mampu mengatasi semua masalah air" },
      { key: "D", text: "musim kemarau terjadi setiap tahun di Indonesia" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Gagasan utama terletak pada kalimat pertama dan diperinci kalimat berikutnya.")],
      [B("Gagasan utama = krisis air bersih mengancam banyak wilayah Indonesia.")],
    ],
  },
  {
    no: 15,
    stimulus: [
      "Wayang kulit bukan hanya seni pertunjukan, melainkan media pendidikan moral. Cerita dalam wayang sarat dengan nilai-nilai kehidupan, seperti kejujuran, kesetiaan, dan keberanian. Melalui tokoh-tokohnya, penonton diajak membedakan perbuatan baik dan buruk. Oleh sebab itu, wayang kulit layak terus dilestarikan sebagai warisan budaya bangsa.",
    ],
    prompt: S("Kata sarat pada kalimat 'Cerita dalam wayang sarat dengan nilai-nilai kehidupan' bermakna …."),
    options: [
      { key: "A", text: "penuh" },
      { key: "B", text: "kosong" },
      { key: "C", text: "terbatas" },
      { key: "D", text: "campur" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("'Sarat dengan nilai-nilai' berarti dipenuhi oleh nilai-nilai.")],
      [B("Jadi makna kata sarat = penuh.")],
    ],
  },
  {
    no: 16,
    stimulus: [
      "Gemar menabung memberikan rasa aman secara finansial. Dengan memiliki tabungan, seseorang memiliki dana cadangan ketika menghadapi kebutuhan mendadak, seperti biaya berobat atau perbaikan rumah. Menabung juga melatih disiplin dalam mengatur keuangan. Kebiasaan ini sebaiknya ditanamkan sejak usia dini agar tumbuh menjadi pribadi yang mandiri secara finansial.",
    ],
    prompt: S("Rujukan kata ini pada kalimat terakhir merujuk pada …."),
    options: [
      { key: "A", text: "dana cadangan" },
      { key: "B", text: "kebiasaan menabung" },
      { key: "C", text: "rasa aman" },
      { key: "D", text: "pengaturan keuangan" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("'Kebiasaan ini sebaiknya ditanamkan sejak usia dini' — ini merujuk pada kebiasaan menabung.")],
      [B("Rujukan kata 'ini' = kebiasaan menabung.")],
    ],
  },
  {
    no: 17,
    stimulus: [
      "Museum bukan sekadar tempat menyimpan benda-benda bersejarah. Di era digital, museum dituntut lebih kreatif agar menarik minat generasi muda. Penggunaan teknologi, seperti realitas virtual dan pameran interaktif, dapat menghadirkan pengalaman belajar yang menyenangkan. Dengan demikian, museum tetap relevan sebagai sumber ilmu pengetahuan.",
    ],
    prompt: S("Inti kalimat 'Penggunaan teknologi, seperti realitas virtual dan pameran interaktif, dapat menghadirkan pengalaman belajar yang menyenangkan' adalah …."),
    options: [
      { key: "A", text: "Penggunaan teknologi dapat menghadirkan pengalaman belajar yang menyenangkan." },
      { key: "B", text: "Realitas virtual dan pameran interaktif adalah teknologi baru." },
      { key: "C", text: "Museum menghadirkan pengalaman belajar bagi generasi muda." },
      { key: "D", text: "Teknologi digunakan di berbagai bidang kehidupan." },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Inti kalimat diperoleh dengan menghilangkan keterangan tambahan 'seperti realitas virtual dan pameran interaktif'.")],
      [B("Inti kalimat = penggunaan teknologi dapat menghadirkan pengalaman belajar yang menyenangkan.")],
    ],
  },
  {
    no: 18,
    stimulus: [
      "Kemacetan lalu lintas di kota besar tidak hanya membuang waktu, tetapi juga bahan bakar. Setiap tahun, kerugian ekonomi akibat kemacetan mencapai triliunan rupiah. Berbagai solusi telah ditawarkan, mulai dari perluasan jalan hingga pengembangan transportasi massal. Namun, tanpa perubahan perilaku masyarakat untuk beralih dari kendaraan pribadi, solusi tersebut tidak akan berjalan efektif.",
    ],
    prompt: S("Pernyataan yang merupakan opini penulis adalah …."),
    options: [
      { key: "A", text: "Kemacetan membuang waktu dan bahan bakar." },
      { key: "B", text: "Kerugian ekonomi akibat kemacetan mencapai triliunan rupiah." },
      { key: "C", text: "Tanpa perubahan perilaku, solusi kemacetan tidak akan berjalan efektif." },
      { key: "D", text: "Perluasan jalan merupakan salah satu solusi kemacetan." },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Opini bersifat subjektif dan belum tentu terbukti; fakta dapat diverifikasi.")],
      [B("Pernyataan C adalah penilaian/opini penulis, bukan fakta terukur.")],
    ],
  },
  {
    no: 19,
    stimulus: [
      "Vaksinasi merupakan salah satu cara paling efektif untuk mencegah penularan penyakit. Vaksin melatih sistem imun mengenali dan melawan virus atau bakteri penyebab penyakit. Semakin banyak orang yang divaksin, semakin terbentuk kekebalan kelompok yang melindungi mereka yang tidak dapat divaksin karena alasan medis.",
    ],
    prompt: S("Tujuan penulis menulis paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "menggambarkan proses pembuatan vaksin di laboratorium" },
      { key: "B", text: "mengajak pembaca memahami pentingnya vaksinasi" },
      { key: "C", text: "mengkritik masyarakat yang menolak vaksin" },
      { key: "D", text: "menjelaskan jenis-jenis penyakit menular" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Teks memaparkan fungsi dan manfaat vaksinasi secara informatif-positif.")],
      [B("Tujuan penulis = mengajak pembaca memahami pentingnya vaksinasi.")],
    ],
  },
  {
    no: 20,
    stimulus: [
      "Kejujuran akademik merupakan fondasi dunia pendidikan. Ketika siswa menyontek, ia sebenarnya merugikan dirinya sendiri karena tidak mengukur kemampuan sesungguhnya. Praktik tidak jujur juga mencederai keadilan bagi siswa lain yang belajar dengan sungguh-sungguh. Oleh karena itu, integritas harus ditanamkan sejak dini, baik di rumah maupun di sekolah.",
    ],
    prompt: S("Kalimat berikut yang merupakan kalimat penjelas yang TIDAK padu dengan isi paragraf adalah …."),
    options: [
      { key: "A", text: "Menyontek membuat siswa tidak mengetahui kemampuan aslinya." },
      { key: "B", text: "Ketidakjujuran merugikan siswa lain yang belajar sungguh-sungguh." },
      { key: "C", text: "Kejujuran akademik menjadi fondasi dunia pendidikan." },
      { key: "D", text: "Sekolah sebaiknya menyediakan kantin yang bersih dan sehat." },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Paragraf membahas kejujuran akademik dan dampak menyontek.")],
      [B("Kalimat tentang kantin tidak berkaitan, sehingga tidak padu.")],
    ],
  },
  {
    no: 21,
    stimulus: [
      "Bencana hidrometeorologi, seperti banjir dan tanah longsor, semakin sering terjadi. Salah satu pemicunya adalah alih fungsi lahan di daerah hulu yang mengurangi kemampuan tanah menyerap air. Selain itu, perubahan iklim menyebabkan curah hujan menjadi ekstrem. Mitigasi sejak dini, seperti menjaga daerah resapan air, menjadi langkah penting untuk mengurangi risiko bencana.",
    ],
    prompt: S("Kata mitigasi pada paragraf tersebut bermakna …."),
    options: [
      { key: "A", text: "tindakan memperparah dampak bencana" },
      { key: "B", text: "upaya memperkirakan waktu terjadinya bencana" },
      { key: "C", text: "serangkaian upaya untuk mengurangi risiko bencana" },
      { key: "D", text: "proses pemulihan setelah bencana terjadi" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Mitigasi bencana = upaya mengurangi risiko/dampak bencana.")],
      [B("Makna kata mitigasi = serangkaian upaya untuk mengurangi risiko bencana.")],
    ],
  },
  {
    no: 22,
    stimulus: [
      "Kuliner tradisional Indonesia kaya akan rempah dan cita rasa. Sayangnya, regenerasi penjual kuliner tradisional semakin berkurang karena generasi muda lebih tertarik pada makanan kekinian. Padahal, kuliner tradisional merupakan identitas budaya yang dapat menarik wisatawan. Diperlukan kreativitas untuk mengemas kuliner tradisional agar tetap diminati tanpa menghilangkan keaslian rasanya.",
    ],
    prompt: S("Simpulan yang tepat berdasarkan isi paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "Kuliner tradisional harus diubah total agar disukai generasi muda." },
      { key: "B", text: "Kuliner tradisional kurang diminati wisatawan mancanegara." },
      { key: "C", text: "Generasi muda tidak menyukai makanan yang mengandung rempah." },
      { key: "D", text: "Kreativitas diperlukan agar kuliner tradisional tetap diminati." },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Kalimat terakhir menegaskan perlunya kreativitas mengemas kuliner tradisional.")],
      [B("Simpulan yang tepat = kreativitas diperlukan agar kuliner tradisional tetap diminati.")],
    ],
  },
  {
    no: 23,
    stimulus: [
      "Sinar matahari pagi memiliki banyak manfaat bagi tubuh. Paparan sinar matahari pagi membantu tubuh memproduksi vitamin D yang penting untuk kesehatan tulang. Selain itu, sinar matahari pagi dapat memperbaiki suasana hati dan meningkatkan kualitas tidur. Namun, paparan sinar matahari pada tengah hari justru dapat merusak kulit karena kadar ultravioletnya tinggi.",
    ],
    prompt: S("Pernyataan yang sesuai dengan isi paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "Sinar matahari pagi membantu produksi vitamin D." },
      { key: "B", text: "Semua sinar matahari baik untuk kesehatan kulit." },
      { key: "C", text: "Vitamin D hanya dapat diperoleh dari sinar matahari." },
      { key: "D", text: "Paparan sinar matahari tengah hari aman bagi kulit." },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Teks: paparan sinar matahari pagi membantu tubuh memproduksi vitamin D.")],
      [B("Pernyataan A sesuai; B, C, dan D bertentangan dengan teks.")],
    ],
  },
  {
    no: 24,
    stimulus: [
      "Buku digital semakin digemari karena praktis dan mudah diakses. Dengan satu perangkat, pembaca dapat membawa ratusan judul buku ke mana pun. Meski demikian, sebagian orang tetap memilih buku cetak karena sensasi membalik halaman dan bebas dari gangguan notifikasi. Kedua format ini memiliki kelebihan masing-masing sehingga pilihan bergantung pada kebutuhan pembaca.",
    ],
    prompt: S("Topik yang dibahas dalam paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "keunggulan buku digital dibandingkan gawai" },
      { key: "B", text: "perbandingan buku digital dan buku cetak" },
      { key: "C", text: "cara mengakses buku secara daring" },
      { key: "D", text: "menurunnya minat baca masyarakat" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Paragraf membahas kelebihan buku digital lalu membandingkannya dengan buku cetak.")],
      [B("Topik = perbandingan buku digital dan buku cetak.")],
    ],
  },
  {
    no: 25,
    stimulus: [
      "Harga bahan pokok yang berfluktuasi sering menjadi keluhan masyarakat. Kenaikan harga biasanya terjadi menjelang hari raya karena permintaan meningkat. Pemerintah berupaya menstabilkan harga dengan menggelar operasi pasar dan memperlancar distribusi. Di sisi lain, masyarakat diimbau berbelanja secara bijak dan tidak berlebihan.",
    ],
    prompt: S("Kata berfluktuasi pada kalimat pertama bermakna …."),
    options: [
      { key: "A", text: "naik turun tidak menentu" },
      { key: "B", text: "terus meningkat tajam" },
      { key: "C", text: "tetap stabil dalam waktu lama" },
      { key: "D", text: "turun secara perlahan" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Fluktuasi berarti perubahan yang tidak tetap, naik turun.")],
      [B("Makna berfluktuasi = naik turun tidak menentu.")],
    ],
  },
  {
    no: 26,
    stimulus: [
      "Mikrohidro adalah pembangkit listrik skala kecil yang memanfaatkan aliran air. Berbeda dengan bendungan raksasa, mikrohidro tidak memerlukan genangan luas sehingga dampaknya terhadap lingkungan relatif kecil. Teknologi ini cocok dikembangkan di daerah pedesaan yang memiliki aliran sungai deras. Dengan biaya yang terjangkau, mikrohidro dapat membantu elektrifikasi wilayah terpencil.",
    ],
    prompt: S("Keunggulan utama mikrohidro menurut bacaan adalah …."),
    options: [
      { key: "A", text: "menghasilkan listrik dalam jumlah sangat besar" },
      { key: "B", text: "ramah lingkungan dan cocok untuk daerah terpencil" },
      { key: "C", text: "menggunakan bahan bakar minyak yang murah" },
      { key: "D", text: "memerlukan genangan air yang sangat luas" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Teks menyebut mikrohidro dampaknya kecil terhadap lingkungan dan cocok untuk pedesaan.")],
      [B("Keunggulan utama = ramah lingkungan dan cocok untuk daerah terpencil.")],
    ],
  },
  {
    no: 27,
    stimulus: [
      "Gotong royong merupakan kepribadian bangsa yang telah mengakar sejak dahulu. Nilai ini tercermin ketika warga bahu-membahu membangun fasilitas umum atau membantu tetangga yang tertimpa musibah. Akan tetapi, arus modernisasi membuat sebagian masyarakat lebih individualistis. Padahal, semangat gotong royong penting untuk menjaga kohesi sosial di tengah keberagaman.",
    ],
    prompt: S("Makna kata kohesi pada paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "persaingan" },
      { key: "B", text: "perpecahan" },
      { key: "C", text: "keterasingan" },
      { key: "D", text: "kebersamaan" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Kohesi sosial berarti keterikatan/kebersamaan antaranggota masyarakat.")],
      [B("Makna kohesi dalam konteks ini = kebersamaan.")],
    ],
  },
  {
    no: 28,
    stimulus: [
      "Hujan asam terjadi ketika gas sulfur dioksida dan nitrogen oksida di udara bereaksi dengan air membentuk asam. Gas-gas tersebut sebagian besar berasal dari pembakaran bahan bakar fosil di pabrik dan kendaraan. Hujan asam dapat merusak bangunan, mengasamkan tanah, dan mengganggu ekosistem perairan. Pengendalian emisi menjadi kunci untuk mencegah dampaknya.",
    ],
    prompt: S("Pernyataan yang TIDAK sesuai dengan isi paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "Hujan asam terbentuk dari reaksi gas polutan dengan air." },
      { key: "B", text: "Pembakaran bahan bakar fosil menyumbang gas penyebab hujan asam." },
      { key: "C", text: "Hujan asam dapat mengasamkan tanah dan merusak bangunan." },
      { key: "D", text: "Hujan asam hanya terjadi di kawasan industri besar." },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Teks tidak menyatakan hujan asam hanya terjadi di kawasan industri.")],
      [B("Pernyataan D melampaui isi teks sehingga tidak sesuai.")],
    ],
  },
  {
    no: 29,
    stimulus: [
      "Literasi keuangan penting dimiliki sejak remaja. Dengan memahami cara mengelola uang, remaja belajar membedakan kebutuhan dan keinginan. Mereka juga terhindar dari gaya hidup konsumtif yang didorong kemudahan transaksi digital. Pendidikan keuangan di sekolah dapat menjadi bekal agar remaja tumbuh menjadi pribadi yang bijak mengatur finansial.",
    ],
    prompt: S("Kalimat utama paragraf tersebut terdapat pada …."),
    options: [
      { key: "A", text: "kalimat kedua" },
      { key: "B", text: "kalimat pertama" },
      { key: "C", text: "kalimat ketiga" },
      { key: "D", text: "kalimat keempat" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Kalimat pertama 'Literasi keuangan penting dimiliki sejak remaja' menjadi gagasan utama.")],
      [B("Kalimat utama = kalimat pertama.")],
    ],
  },
  {
    no: 30,
    stimulus: [
      "Sampah elektronik atau e-waste meningkat seiring pesatnya pergantian gawai. Banyak orang menyimpan ponsel lama di laci tanpa tahu cara mendaur ulangnya. Padahal, e-waste mengandung logam berharga dan bahan berbahaya. Jika dikelola dengan benar, e-waste dapat menjadi sumber daya; jika dibuang sembarangan, ia menjadi racun lingkungan.",
    ],
    prompt: S("Ide pokok paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "e-waste perlu dikelola dengan benar karena bernilai sekaligus berbahaya" },
      { key: "B", text: "ponsel lama sebaiknya disimpan agar tidak mencemari lingkungan" },
      { key: "C", text: "e-waste hanya mengandung bahan berbahaya bagi manusia" },
      { key: "D", text: "pergantian gawai tidak berkaitan dengan meningkatnya e-waste" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Paragraf menekankan e-waste bernilai jika dikelola dan berbahaya jika dibuang sembarangan.")],
      [B("Ide pokok = e-waste perlu dikelola dengan benar karena bernilai sekaligus berbahaya.")],
    ],
  },
  {
    no: 31,
    stimulus: [
      "Bahasa Indonesia terus menyerap kosakata asing seiring perkembangan ilmu pengetahuan. Penyerapan ini wajar dan memperkaya bahasa, asalkan terdapat padanan yang tepat. Namun, sebagian masyarakat justru meninggalkan kata Indonesia dan memakai istilah asing demi terlihat modern. Sikap semacam itu dapat mengikis identitas bahasa nasional.",
    ],
    prompt: S("Sikap penulis terhadap penggunaan istilah asing yang berlebihan adalah …."),
    options: [
      { key: "A", text: "mendukung karena terlihat modern" },
      { key: "B", text: "acuh tak acuh terhadap perkembangannya" },
      { key: "C", text: "bangga karena bahasa Indonesia kaya" },
      { key: "D", text: "menyayangkan karena mengikis identitas bahasa" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Penulis menilai sikap memakai istilah asing demi gengsi 'dapat mengikis identitas bahasa nasional'.")],
      [B("Sikap penulis = menyayangkan penggunaan istilah asing yang berlebihan.")],
    ],
  },
  {
    no: 32,
    stimulus: [
      "Kebakaran hutan sering kali dipicu oleh aktivitas manusia, seperti membuka lahan dengan cara membakar. Asap yang ditimbulkannya tidak hanya merugikan kesehatan, tetapi juga mengganggu aktivitas penerbangan. Kerugian ekonomi akibat kebakaran hutan pun sangat besar. Penegakan hukum dan penyuluhan menjadi dua sisi yang harus berjalan beriringan untuk mencegahnya.",
    ],
    prompt: S("Pernyataan berikut yang merupakan fakta dalam paragraf adalah …."),
    options: [
      { key: "A", text: "Kebakaran hutan adalah bencana terburuk di Indonesia." },
      { key: "B", text: "Membuka lahan dengan membakar memicu kebakaran hutan." },
      { key: "C", text: "Penegakan hukum seharusnya lebih tegas daripada penyuluhan." },
      { key: "D", text: "Masyarakat tidak peduli terhadap bahaya kebakaran." },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Fakta = hal yang dapat dibuktikan; pernyataan B dinyatakan eksplisit dalam teks.")],
      [B("Jawaban B merupakan fakta.")],
    ],
  },
  {
    no: 33,
    stimulus: [
      "Menonton film dokumenter dapat menjadi sarana belajar yang menyenangkan. Film dokumenter menyajikan informasi secara visual sehingga mudah dipahami. Berbagai tema, mulai dari alam, sejarah, hingga teknologi, dapat dipilih sesuai minat. Dengan demikian, kegiatan menonton yang biasanya dianggap hiburan belaka dapat sekaligus menambah wawasan.",
    ],
    prompt: S("Hubungan antarkalimat pada paragraf tersebut menggunakan konjungsi yang menyatakan …."),
    options: [
      { key: "A", text: "urutan waktu" },
      { key: "B", text: "perlawanan" },
      { key: "C", text: "akibat atau simpulan" },
      { key: "D", text: "tujuan" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Konjungsi 'dengan demikian' pada akhir paragraf menyatakan simpulan/akibat.")],
      [B("Jadi hubungannya = akibat atau simpulan.")],
    ],
  },
  {
    no: 34,
    stimulus: [
      "Membaca peta merupakan keterampilan dasar yang semakin jarang dikuasai generasi muda. Kemudahan aplikasi navigasi membuat sebagian orang tidak lagi memahami arah mata angin. Padahal, pemahaman peta penting saat sinyal internet tidak tersedia, misalnya ketika mendaki gunung. Keterampilan ini sebaiknya tetap diajarkan di sekolah.",
    ],
    prompt: S("Contoh kalimat yang tepat untuk melengkapi paragraf tersebut agar menjadi padu adalah …."),
    options: [
      { key: "A", text: "Aplikasi navigasi sangat membantu pengguna di perkotaan." },
      { key: "B", text: "Peta digital selalu tersedia tanpa memerlukan sinyal." },
      { key: "C", text: "Mendaki gunung memerlukan perlengkapan yang lengkap." },
      { key: "D", text: "Dengan demikian, pembelajaran peta tetap relevan hingga kini." },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Paragraf menekankan pentingnya membaca peta, misalnya saat mendaki gunung tanpa sinyal.")],
      [B("Kalimat penutup logis: dengan demikian, pembelajaran peta tetap relevan hingga kini.")],
    ],
  },
  {
    no: 35,
    stimulus: [
      "Konservasi penyu menghadapi tantangan yang kompleks. Telur penyu sering diambil untuk diperdagangkan, sementara habitat pantai penelurannya semakin menyempit akibat pembangunan. Di sisi lain, nelayan kerap tidak sengaja menjaring penyu saat melaut. Semua pihak, termasuk pemerintah dan masyarakat pesisir, perlu bekerja sama menjaga kelestarian penyu.",
    ],
    prompt: S("Simpulan isi paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "Penyu hanya terancam oleh perdagangan telurnya." },
      { key: "B", text: "Pelestarian penyu memerlukan kerja sama semua pihak." },
      { key: "C", text: "Nelayan sengaja menjaring penyu untuk dijual." },
      { key: "D", text: "Pembangunan pantai tidak memengaruhi habitat penyu." },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Kalimat terakhir menegaskan perlunya kerja sama semua pihak menjaga penyu.")],
      [B("Simpulan = pelestarian penyu memerlukan kerja sama semua pihak.")],
    ],
  },
  {
    no: 36,
    stimulus: [
      "Madu telah digunakan manusia sejak ribuan tahun lalu sebagai obat tradisional. Kandungan antibakteri alami di dalamnya membantu mempercepat penyembuhan luka dan meredakan batuk. Selain itu, madu merupakan sumber energi yang baik. Meski demikian, madu sebaiknya tidak diberikan kepada bayi di bawah satu tahun karena risiko botulisme.",
    ],
    prompt: S("Pernyataan yang sesuai dengan isi paragraf adalah …."),
    options: [
      { key: "A", text: "Madu aman diberikan kepada bayi di bawah satu tahun." },
      { key: "B", text: "Madu hanya bermanfaat sebagai pemanis makanan." },
      { key: "C", text: "Madu mengandung zat antibakteri alami." },
      { key: "D", text: "Madu tidak dapat digunakan sebagai obat tradisional." },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Teks: madu mengandung antibakteri alami, membantu penyembuhan luka dan meredakan batuk.")],
      [B("Pernyataan C sesuai isi teks.")],
    ],
  },
  {
    no: 37,
    stimulus: [
      "Aroma kopi di pagi hari mampu membangkitkan semangat bagi para penikmatnya. Kandungan kafein merangsang sistem saraf sehingga rasa kantuk berkurang dan fokus meningkat. Namun, konsumsi kafein berlebihan dapat menimbulkan efek sebaliknya, seperti gelisah dan sulit tidur. Oleh karena itu, batas aman konsumsi kafein perlu diperhatikan.",
    ],
    prompt: S("Konjungsi namun pada paragraf tersebut menyatakan hubungan …."),
    options: [
      { key: "A", text: "sebab akibat" },
      { key: "B", text: "pertentangan" },
      { key: "C", text: "penambahan" },
      { key: "D", text: "perumpamaan" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Konjungsi 'namun' menghubungkan dua gagasan yang berlawanan/bertentangan.")],
      [B("Jadi, namun menyatakan hubungan pertentangan.")],
    ],
  },
  {
    no: 38,
    stimulus: [
      "Indonesia dikenal sebagai negara maritim dengan wilayah laut yang luas. Kekayaan lautnya melimpah, mulai dari ikan, terumbu karang, hingga potensi energi laut. Sayangnya, pemanfaatan sumber daya laut belum optimal karena keterbatasan teknologi dan modal. Padahal, pengelolaan laut yang baik dapat menjadi motor penggerak ekonomi nasional.",
    ],
    prompt: S("Kalimat yang tepat sebagai gagasan pendukung paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "Indonesia memiliki kekayaan laut yang melimpah." },
      { key: "B", text: "Laut Indonesia menyimpan potensi energi yang belum tergarap." },
      { key: "C", text: "Sebagian besar penduduk Indonesia bekerja sebagai nelayan." },
      { key: "D", text: "Pemanfaatan sumber daya laut terhambat oleh cuaca buruk." },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Gagasan pendukung memperjelas kekayaan laut: ikan, terumbu karang, potensi energi laut.")],
      [B("Pernyataan B memperinci kekayaan laut Indonesia.")],
    ],
  },
  {
    no: 39,
    stimulus: [
      "Permainan tradisional semakin ditinggalkan anak-anak yang akrab dengan gawai. Padahal, permainan seperti congklak dan engklek melatih motorik, kejujuran, serta interaksi sosial. Permainan tradisional juga tidak memerlukan biaya mahal karena menggunakan alat sederhana. Orang tua dapat mengenalkannya kembali sebagai alternatif hiburan yang mendidik.",
    ],
    prompt: S("Rujukan kata -nya pada kalimat 'Orang tua dapat mengenalkannya kembali' merujuk pada …."),
    options: [
      { key: "A", text: "permainan tradisional" },
      { key: "B", text: "gawai" },
      { key: "C", text: "anak-anak" },
      { key: "D", text: "alat sederhana" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("'Mengenalkannya kembali' — yang dikenalkan adalah permainan tradisional.")],
      [B("Rujukan -nya = permainan tradisional.")],
    ],
  },
  {
    no: 40,
    stimulus: [
      "Membawa bekal makanan ke sekolah memiliki banyak manfaat. Selain lebih hemat, bekal dari rumah cenderung lebih sehat karena kebersihannya terjamin. Anak juga belajar memilih makanan bergizi sesuai kebutuhan tubuhnya. Kebiasaan ini sekaligus mengurangi sampah kemasan plastik dari jajanan sekali pakai.",
    ],
    prompt: S("Tujuan penulisan paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "mengajak pembaca membiasakan membawa bekal makanan" },
      { key: "B", text: "menggambarkan suasana kantin sekolah yang bersih" },
      { key: "C", text: "membandingkan bekal dan jajanan sekolah" },
      { key: "D", text: "menjelaskan cara mengolah makanan bergizi" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Seluruh paragraf memaparkan manfaat membawa bekal, bersifat persuasif.")],
      [B("Tujuan = mengajak pembaca membiasakan membawa bekal makanan.")],
    ],
  },
  {
    no: 41,
    stimulus: [
      "Kota-kota besar di Indonesia mulai menerapkan konsep kota pintar atau smart city. Konsep ini memanfaatkan teknologi untuk meningkatkan pelayanan publik, seperti lampu jalan otomatis dan sistem pengaduan berbasis aplikasi. Penerapannya diharapkan membuat layanan lebih cepat dan transparan. Namun, keberhasilan smart city sangat bergantung pada partisipasi warganya.",
    ],
    prompt: S("Kata transparan pada paragraf tersebut bermakna …."),
    options: [
      { key: "A", text: "tertutup" },
      { key: "B", text: "terbuka" },
      { key: "C", text: "berbelit" },
      { key: "D", text: "mahal" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Transparan berarti terbuka, dapat diketahui publik.")],
      [B("Makna transparan = terbuka.")],
    ],
  },
  {
    no: 42,
    stimulus: [
      "Membaca puisi tidak cukup hanya melafalkan kata-kata. Seorang pembaca puisi perlu memahami suasana dan pesan yang terkandung agar ekspresi dan intonasinya tepat. Penghayatan terhadap isi puisi membuat pembacaan lebih hidup dan menyentuh pendengar. Oleh karena itu, latihan memahami makna puisi sama pentingnya dengan latihan vokal.",
    ],
    prompt: S("Kalimat utama paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "Membaca puisi tidak cukup hanya melafalkan kata-kata." },
      { key: "B", text: "Pembaca puisi perlu memiliki suara yang merdu." },
      { key: "C", text: "Pendengar puisi harus memahami latar belakang penyair." },
      { key: "D", text: "Latihan vokal tidak diperlukan dalam membaca puisi." },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Kalimat pertama menegaskan bahwa membaca puisi butuh lebih dari sekadar melafalkan.")],
      [B("Kalimat utama = membaca puisi tidak cukup hanya melafalkan kata-kata.")],
    ],
  },
  {
    no: 43,
    stimulus: [
      "Hutan bakau di pesisir utara Jawa semakin menyempit akibat pembangunan tambak. Padahal, hutan bakau melindungi pantai dari abrasi dan menjadi rumah bagi berbagai satwa. Pemerintah daerah kemudian mencanangkan program rehabilitasi dengan melibatkan warga sekitar. Warga diajak menanam bibit bakau dan merawatnya hingga tumbuh besar.",
    ],
    prompt: S("Pola pengembangan paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "generalisasi dengan contoh" },
      { key: "B", text: "sebab akibat" },
      { key: "C", text: "kronologi peristiwa" },
      { key: "D", text: "perbandingan" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Teks mengurutkan peristiwa: penyempitan → penanaman program → pelibatan warga.")],
      [B("Pola pengembangan = kronologi peristiwa.")],
    ],
  },
  {
    no: 44,
    stimulus: [
      "Telemedicine memungkinkan pasien berkonsultasi dengan dokter tanpa harus datang ke rumah sakit. Layanan ini sangat membantu masyarakat di daerah terpencil yang jauh dari fasilitas kesehatan. Selain menghemat waktu, telemedicine juga menekan biaya transportasi. Meski demikian, tidak semua penyakit dapat ditangani melalui konsultasi jarak jauh sehingga pemeriksaan langsung tetap diperlukan.",
    ],
    prompt: S("Kalimat yang TIDAK sesuai dengan isi paragraf adalah …."),
    options: [
      { key: "A", text: "Telemedicine membantu masyarakat di daerah terpencil." },
      { key: "B", text: "Telemedicine menghemat waktu dan biaya transportasi." },
      { key: "C", text: "Semua penyakit dapat ditangani melalui telemedicine." },
      { key: "D", text: "Pemeriksaan langsung masih diperlukan untuk penyakit tertentu." },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Teks justru menyatakan tidak semua penyakit dapat ditangani via telemedicine.")],
      [B("Pernyataan C bertentangan dengan isi teks.")],
    ],
  },
  {
    no: 45,
    stimulus: [
      "Angklung telah diakui UNESCO sebagai warisan budaya dunia. Pengakuan ini menjadi kebanggaan sekaligus tanggung jawab bagi bangsa Indonesia. Di satu sisi, angklung semakin dikenal di kancah internasional. Di sisi lain, regenerasi pemain angklung di dalam negeri perlu terus dijaga agar warisan ini tidak kehilangan penerusnya.",
    ],
    prompt: S("Inti kalimat 'Angklung telah diakui UNESCO sebagai warisan budaya dunia' adalah …."),
    options: [
      { key: "A", text: "Angklung diakui UNESCO sebagai warisan budaya dunia." },
      { key: "B", text: "UNESCO merupakan organisasi budaya dunia." },
      { key: "C", text: "Warisan budaya dunia diakui oleh angklung." },
      { key: "D", text: "Angklung adalah alat musik dari bambu." },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Subjek 'angklung', predikat 'diakui', pelengkap 'sebagai warisan budaya dunia'.")],
      [B("Inti kalimat = angklung diakui UNESCO sebagai warisan budaya dunia.")],
    ],
  },
  {
    no: 46,
    stimulus: [
      "Media sosial memiliki pengaruh besar terhadap cara remaja memandang diri sendiri. Paparan foto dan gaya hidup yang tampak sempurna kerap memicu rasa tidak percaya diri. Remaja lalu membandingkan kehidupan nyatanya dengan unggahan orang lain. Literasi digital yang baik diperlukan agar remaja tidak mudah terpengaruh oleh pencitraan di media sosial.",
    ],
    prompt: S("Simpulan yang tepat berdasarkan paragraf adalah …."),
    options: [
      { key: "A", text: "Media sosial selalu berdampak negatif bagi remaja." },
      { key: "B", text: "Remaja perlu berhenti menggunakan media sosial." },
      { key: "C", text: "Semua unggahan di media sosial adalah kenyataan." },
      { key: "D", text: "Literasi digital dibutuhkan agar remaja tidak mudah terpengaruh pencitraan." },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Paragraf diakhiri seruan perlunya literasi digital bagi remaja.")],
      [B("Simpulan = literasi digital dibutuhkan agar remaja tidak mudah terpengaruh pencitraan.")],
    ],
  },
  {
    no: 47,
    stimulus: [
      "Sistem irigasi subak di Bali tidak hanya mengatur pembagian air, tetapi juga merekatkan hubungan sosial petani. Keputusan tentang air diambil melalui musyawarah yang melibatkan seluruh anggota. Nilai gotong royong dan demokrasi pun tumbuh dari sistem ini. Tidak heran UNESCO menetapkan subak sebagai warisan budaya dunia.",
    ],
    prompt: S("Nilai yang terkandung dalam sistem subak menurut paragraf adalah …."),
    options: [
      { key: "A", text: "individualisme dan persaingan" },
      { key: "B", text: "materialisme dan konsumerisme" },
      { key: "C", text: "kebersamaan dan musyawarah" },
      { key: "D", text: "otokrasi dan sentralisasi" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Teks: keputusan diambil lewat musyawarah, tumbuh nilai gotong royong dan demokrasi.")],
      [B("Nilai yang terkandung = kebersamaan dan musyawarah.")],
    ],
  },
  {
    no: 48,
    stimulus: [
      "Kebiasaan menunda pekerjaan atau prokrastinasi sering dialami pelajar. Tugas yang seharusnya dikerjakan justru ditunda hingga mendekati tenggat. Akibatnya, hasil pekerjaan menjadi kurang maksimal dan tingkat stres meningkat. Salah satu cara mengatasinya adalah memecah tugas besar menjadi bagian-bagian kecil yang lebih mudah dikerjakan.",
    ],
    prompt: S("Gagasan utama paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "cara mengatasi kebiasaan menunda pekerjaan" },
      { key: "B", text: "tugas besar sebaiknya dikerjakan mendekati tenggat" },
      { key: "C", text: "prokrastinasi meningkatkan kreativitas pelajar" },
      { key: "D", text: "stres hanya dialami oleh pelajar yang malas" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Paragraf membahas prokrastinasi lalu memberi solusi memecah tugas.")],
      [B("Gagasan utama = cara mengatasi kebiasaan menunda pekerjaan.")],
    ],
  },
  {
    no: 49,
    stimulus: [
      "Kampanye hemat energi sering kali hanya menyasar penggunaan listrik di rumah. Padahal, sektor transportasi juga menyumbang konsumsi energi yang besar. Menggunakan transportasi umum, bersepeda, atau berjalan kaki untuk jarak dekat dapat mengurangi pemakaian bahan bakar. Kesadaran kolektif dalam memilih moda transportasi sangat menentukan keberhasilan hemat energi.",
    ],
    prompt: S("Contoh kalimat persuasif yang sesuai dengan isi paragraf adalah …."),
    options: [
      { key: "A", text: "Bersepeda membuat badan sehat dan hemat energi." },
      { key: "B", text: "Mulailah bersepeda atau menggunakan transportasi umum untuk jarak dekat." },
      { key: "C", text: "Kendaraan bermotor adalah penyebab utama polusi udara." },
      { key: "D", text: "Harga bahan bakar minyak terus mengalami kenaikan." },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Kalimat persuasif bersifat ajakan; ditandai kata 'mulailah'.")],
      [B("Jawaban B merupakan kalimat persuasif yang sejalan dengan isi paragraf.")],
    ],
  },
  {
    no: 50,
    stimulus: [
      "Komik tidak lagi dianggap bacaan ringan tanpa nilai. Kini banyak komik yang mengangkat isu sosial, sejarah, dan sains dengan cara menarik. Perpaduan gambar dan teks membuat pesan lebih mudah dipahami, terutama oleh pembaca muda. Karena itu, komik layak dijadikan media pembelajaran di sekolah.",
    ],
    prompt: S("Pernyataan yang merupakan opini penulis adalah …."),
    options: [
      { key: "A", text: "Komik layak dijadikan media pembelajaran di sekolah." },
      { key: "B", text: "Banyak komik mengangkat isu sosial dan sejarah." },
      { key: "C", text: "Perpaduan gambar dan teks memudahkan pemahaman pesan." },
      { key: "D", text: "Komik dibaca oleh pembaca dari berbagai kalangan." },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Opini adalah penilaian subjektif; pernyataan B, C, D dapat diamati/diverifikasi.")],
      [B("'Layak dijadikan media pembelajaran' merupakan opini penulis.")],
    ],
  },
  {
    no: 51,
    stimulus: [
      "Gamelan Jawa terdiri atas berbagai instrumen yang dimainkan bersama. Setiap instrumen memiliki fungsi berbeda, ada yang membawa melodi pokok, ada pula yang memberi ritme. Kekompakan pemain menjadi kunci agar suara yang dihasilkan selaras. Dalam pertunjukan, seorang pimpinan gamelan mengatur tempo dan dinamika.",
    ],
    prompt: S("Simpulan yang tepat berdasarkan paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "Gamelan Jawa hanya dimainkan pada acara keraton." },
      { key: "B", text: "Setiap pemain gamelan harus menguasai seluruh instrumen." },
      { key: "C", text: "Gamelan Jawa mudah dimainkan tanpa latihan." },
      { key: "D", text: "Kekompakan pemain menentukan keselarasan gamelan." },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Paragraf menyatakan kekompakan pemain menjadi kunci agar suara selaras.")],
      [B("Simpulan: kekompakan pemain menentukan keselarasan gamelan.")],
    ],
  },
  {
    no: 52,
    stimulus: [
      "Tanaman lidah buaya menyimpan air di dalam daunnya yang tebal. Kemampuan ini membuatnya tahan hidup di daerah kering. Selain itu, getah lidah buaya dikenal bermanfaat untuk melembapkan kulit dan menyuburkan rambut. Tidak heran banyak produk kosmetik menggunakan lidah buaya sebagai bahan dasar.",
    ],
    prompt: S("Ide pokok paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "Lidah buaya memiliki berbagai manfaat." },
      { key: "B", text: "Daun lidah buaya tebal dan menyimpan air." },
      { key: "C", text: "Lidah buaya hanya tumbuh di daerah kering." },
      { key: "D", text: "Produk kosmetik dibuat dari bahan alami." },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Kalimat-kalimat mendukung gagasan bahwa lidah buaya bermanfaat.")],
      [B("Ide pokok: lidah buaya memiliki berbagai manfaat.")],
    ],
  },
  {
    no: 53,
    stimulus: [
      "Sampah plastik menjadi masalah serius di lautan. Plastik yang tidak terurai dengan cepat dapat tertelan oleh biota laut. Paruh burung laut sering tersangkut cincin plastik sehingga kesulitan makan. Jika dibiarkan, ekosistem laut akan rusak dan nelayan pun ikut merugi.",
    ],
    prompt: S("Kalimat tanya yang jawabannya terdapat pada paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "Kapan sampah plastik mulai mencemari lautan?" },
      { key: "B", text: "Mengapa sampah plastik berbahaya bagi biota laut?" },
      { key: "C", text: "Bagaimana cara membersihkan sampah di laut?" },
      { key: "D", text: "Berapa lama plastik dapat terurai di laut?" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Bacaan menjelaskan dampak plastik bagi biota laut, yaitu tertelan dan tersangkut.")],
      [B("Pertanyaan 'mengapa plastik berbahaya' dijawab oleh kalimat kedua dan ketiga.")],
    ],
  },
  {
    no: 54,
    stimulus: [
      "Membaca nyaring berbeda dengan membaca dalam hati. Saat membaca nyaring, pelafalan dan intonasi harus jelas agar pendengar memahami isi bacaan. Kegiatan ini melatih kepercayaan diri dan kemampuan berbicara. Oleh karena itu, membaca nyaring sering digunakan dalam pembelajaran bahasa di kelas rendah.",
    ],
    prompt: S("Manfaat utama membaca nyaring menurut paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "menambah kosakata baru secara cepat" },
      { key: "B", text: "melatih kepercayaan diri dan kemampuan berbicara" },
      { key: "C", text: "mempercepat kegiatan membaca dalam hati" },
      { key: "D", text: "menghafal isi bacaan dengan mudah" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Paragraf menyatakan membaca nyaring melatih kepercayaan diri dan kemampuan berbicara.")],
      [B("Jawaban tepat: melatih kepercayaan diri dan kemampuan berbicara.")],
    ],
  },
  {
    no: 55,
    stimulus: [
      "Setiap tanggal 22 April, dunia memperingati Hari Bumi. Peringatan ini bertujuan meningkatkan kesadaran manusia untuk menjaga lingkungan. Berbagai kegiatan dilakukan, mulai dari menanam pohon, membersihkan pantai, hingga kampanye pengurangan plastik. Kesadaran menjaga bumi seharusnya tidak hanya dilakukan setahun sekali.",
    ],
    prompt: S("Pesan yang ingin disampaikan penulis melalui paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "Hari Bumi hanya dirayakan di Indonesia." },
      { key: "B", text: "Menjaga lingkungan sebaiknya menjadi kebiasaan sehari-hari." },
      { key: "C", text: "Kegiatan menanam pohon hanya dilakukan pada 22 April." },
      { key: "D", text: "Kampanye pengurangan plastik tidak efektif." },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Kalimat terakhir menegaskan kesadaran menjaga bumi tidak hanya setahun sekali.")],
      [B("Pesan: menjaga lingkungan menjadi kebiasaan sehari-hari.")],
    ],
  },
  {
    no: 56,
    stimulus: [
      "Bahasa daerah di Indonesia jumlahnya sangat banyak. Setiap daerah memiliki kekhasan kosakata dan pelafalan. Sayangnya, sebagian bahasa daerah terancam punah karena generasi muda jarang menggunakannya. Padahal, bahasa daerah merupakan bagian dari identitas budaya bangsa.",
    ],
    prompt: S("Fakta yang terdapat dalam paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "Bahasa daerah sebaiknya diajarkan di sekolah." },
      { key: "B", text: "Bahasa daerah yang punah tidak perlu disesali." },
      { key: "C", text: "Setiap daerah memiliki kekhasan kosakata dan pelafalan." },
      { key: "D", text: "Generasi muda harus bangga berbahasa daerah." },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Fakta adalah hal yang dapat dibuktikan kebenarannya.")],
      [B("'Setiap daerah memiliki kekhasan kosakata dan pelafalan' merupakan fakta.")],
    ],
  },
  {
    no: 57,
    stimulus: [
      "Kereta api cepat pertama di Asia Tenggara resmi beroperasi menghubungkan Jakarta dan Bandung. Perjalanan yang biasanya ditempuh lebih dari tiga jam kini hanya sekitar empat puluh menit. Layanan ini diharapkan mengurangi kemacetan di jalan tol serta mendorong pertumbuhan ekonomi di daerah yang dilalui.",
    ],
    prompt: S("Dampak yang diharapkan dari pengoperasian kereta cepat berdasarkan paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "meningkatnya jumlah kendaraan pribadi" },
      { key: "B", text: "berkurangnya kemacetan dan tumbuhnya ekonomi daerah" },
      { key: "C", text: "menurunnya jumlah penumpang kereta biasa" },
      { key: "D", text: "mahalnya harga tiket kereta api" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Paragraf menyebut harapan mengurangi kemacetan dan mendorong pertumbuhan ekonomi.")],
      [B("Dampak yang diharapkan: berkurangnya kemacetan dan tumbuhnya ekonomi daerah.")],
    ],
  },
  {
    no: 58,
    stimulus: [
      "Penulisan kata serapan harus mengikuti kaidah bahasa Indonesia. Kata asing yang diserap mengalami penyesuaian ejaan, misalnya 'aktif' dari active dan 'kualitas' dari quality. Penyesuaian ini bertujuan agar kata mudah diucapkan dan ditulis oleh masyarakat. Namun, tidak semua kata asing dapat diserap begitu saja.",
    ],
    prompt: S("Kata serapan yang penulisannya sudah tepat sesuai kaidah adalah …."),
    options: [
      { key: "A", text: "active" },
      { key: "B", text: "aktip" },
      { key: "C", text: "kwalitas" },
      { key: "D", text: "kualitas" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Kata serapan baku: 'aktif' dan 'kualitas'.")],
      [B("Opsi D 'kualitas' adalah bentuk baku.")],
    ],
  },
  {
    no: 59,
    stimulus: [
      "Madu dikenal sebagai pemanis alami yang kaya manfaat. Selain memberikan rasa manis, madu mengandung antioksidan yang baik bagi tubuh. Namun, konsumsi madu tetap perlu dibatasi karena kandungan gulanya cukup tinggi. Penderita diabetes sebaiknya berkonsultasi dengan dokter sebelum mengonsumsinya.",
    ],
    prompt: S("Inti kalimat 'Kandungan gulanya cukup tinggi' adalah …."),
    options: [
      { key: "A", text: "gulanya cukup tinggi" },
      { key: "B", text: "kandungan gulanya tinggi" },
      { key: "C", text: "kandungannya cukup tinggi" },
      { key: "D", text: "madu mengandung gula" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Inti kalimat ditemukan dengan menghilangkan keterangan dan perluasan.")],
      [B("Inti kalimat: kandungannya cukup tinggi (subjek 'kandungannya', predikat 'cukup tinggi').")],
    ],
  },
  {
    no: 60,
    stimulus: [
      "Museum bukan sekadar tempat menyimpan benda kuno. Museum modern kini menyajikan pengalaman belajar yang interaktif, misalnya melalui simulasi dan realitas virtual. Pengunjung diajak memahami sejarah secara langsung, bukan hanya melihat koleksi dari balik kaca. Dengan demikian, museum mampu menarik minat generasi muda.",
    ],
    prompt: S("Alasan museum modern menarik minat generasi muda adalah …."),
    options: [
      { key: "A", text: "menyimpan koleksi benda kuno yang langka" },
      { key: "B", text: "menyajikan pengalaman belajar interaktif" },
      { key: "C", text: "memiliki gedung yang megah dan luas" },
      { key: "D", text: "menjual berbagai cendera mata menarik" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Paragraf menyebut museum modern menyajikan pengalaman belajar interaktif.")],
      [B("Alasannya: menyajikan pengalaman belajar interaktif.")],
    ],
  },
  {
    no: 61,
    stimulus: [
      "Hujan asam terjadi ketika gas belerang dan nitrogen di udara bereaksi dengan air. Gas tersebut banyak berasal dari asap pabrik dan kendaraan bermotor. Hujan asam dapat merusak bangunan, mengganggu kesuburan tanah, dan membahayakan kesehatan. Pengendalian emisi gas menjadi langkah penting untuk mencegahnya.",
    ],
    prompt: S("Pernyataan yang sesuai dengan isi paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "Hujan asam hanya terjadi di daerah pegunungan." },
      { key: "B", text: "Hujan asam tidak berpengaruh terhadap bangunan." },
      { key: "C", text: "Pengendalian emisi gas dapat mencegah hujan asam." },
      { key: "D", text: "Hujan asam berasal dari uap air laut." },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Kalimat terakhir menyatakan pengendalian emisi gas menjadi langkah penting.")],
      [B("Pernyataan yang sesuai: pengendalian emisi gas dapat mencegah hujan asam.")],
    ],
  },
  {
    no: 62,
    stimulus: [
      "Pasar terapung merupakan salah satu daya tarik wisata di Kalimantan. Para pedagang menjual hasil bumi dari perahu sambil berdagang di atas air. Keunikan ini menarik wisatawan domestik maupun mancanegara. Namun, kebersihan sungai menjadi tantangan utama keberlangsungan pasar terapung.",
    ],
    prompt: S("Ide pokok paragraf tersebut terdapat pada kalimat …."),
    options: [
      { key: "A", text: "pertama" },
      { key: "B", text: "kedua" },
      { key: "C", text: "ketiga" },
      { key: "D", text: "keempat" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Ide pokok dapat terletak di awal atau akhir paragraf.")],
      [B("Kalimat keempat menyimpulkan tantangan utama pasar terapung, yaitu kebersihan sungai.")],
    ],
  },
  {
    no: 63,
    stimulus: [
      "Kegiatan donor darah memiliki banyak manfaat bagi kesehatan pendonor. Donor darah dapat membantu memperbarui sel darah merah dan menurunkan risiko penyakit jantung. Selain itu, sebelum donor, calon pendonor menjalani pemeriksaan kesehatan gratis. Dengan rutin donor, kesehatan pendonor turut terpantau.",
    ],
    prompt: S("Makna kata donor dalam paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "penerima" },
      { key: "B", text: "penyumbang" },
      { key: "C", text: "pengelola" },
      { key: "D", text: "pemeriksa" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Donor berarti penyumbang atau pemberi.")],
      [B("Makna donor = penyumbang.")],
    ],
  },
  {
    no: 64,
    stimulus: [
      "Kesalahan umum dalam penulisan surat resmi adalah penggunaan kata sapaan yang tidak tepat. Kata sapaan 'Bapak/Ibu' ditulis dengan huruf kapital pada awal kata. Penulisan yang benar misalnya 'Yang terhormat Bapak Kepala Sekolah'. Kesalahan kecil seperti ini dapat mengurangi nilai kesopanan surat.",
    ],
    prompt: S("Kalimat yang penulisan sapaan hormatnya tepat adalah …."),
    options: [
      { key: "A", text: "Kepada Yth. bapak Kepala Dinas Pendidikan." },
      { key: "B", text: "Kepada Yth. Bapak Kepala Dinas Pendidikan." },
      { key: "C", text: "kepada yth. Bapak kepala Dinas Pendidikan." },
      { key: "D", text: "Kepada yth. bapak kepala dinas pendidikan." },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Huruf kapital dipakai pada awal kalimat dan nama jabatan sebagai sapaan.")],
      [B("'Kepada Yth. Bapak Kepala Dinas Pendidikan' sudah tepat.")],
    ],
  },
  {
    no: 65,
    stimulus: [
      "Batik merupakan warisan budaya Indonesia yang diakui UNESCO. Setiap daerah memiliki motif batik dengan filosofi tersendiri. Motif parang misalnya melambangkan kekuatan dan keberanian. Dengan mengenakan batik, masyarakat turut melestarikan warisan leluhur.",
    ],
    prompt: S("Motif batik parang melambangkan …."),
    options: [
      { key: "A", text: "kesuburan dan kemakmuran" },
      { key: "B", text: "kebijaksanaan dan ketenangan" },
      { key: "C", text: "kekuatan dan keberanian" },
      { key: "D", text: "kesederhanaan dan kejujuran" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Teks menyebut motif parang melambangkan kekuatan dan keberanian.")],
      [B("Jadi, motif parang melambangkan kekuatan dan keberanian.")],
    ],
  },
  {
    no: 66,
    stimulus: [
      "Kemampuan literasi digital menjadi kebutuhan penting di era informasi. Literasi digital bukan hanya kemampuan mengoperasikan gawai, tetapi juga kemampuan menyaring informasi. Pengguna yang cakap digital mampu membedakan berita benar dan hoaks. Mereka juga bijak dalam membagikan informasi kepada orang lain.",
    ],
    prompt: S("Pengertian literasi digital menurut paragraf tersebut yang paling tepat adalah …."),
    options: [
      { key: "A", text: "kemampuan mengoperasikan berbagai gawai canggih" },
      { key: "B", text: "kemampuan membuat konten di media sosial" },
      { key: "C", text: "kemampuan menyaring dan membedakan informasi serta bijak membagikannya" },
      { key: "D", text: "kemampuan mengikuti perkembangan teknologi terbaru" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Paragraf menyatakan literasi digital mencakup menyaring informasi dan membedakan hoaks.")],
      [B("Definisi paling tepat: kemampuan menyaring dan bijak membagikan informasi.")],
    ],
  },
  {
    no: 67,
    stimulus: [
      "Tanpa disadari, sampah makanan menjadi penyumbang emisi gas rumah kaca yang besar. Makanan yang membusuk di tempat pembuangan akhir melepaskan metana, gas yang jauh lebih kuat daripada karbon dioksida dalam memerangkap panas. Oleh karena itu, mengurangi sisa makanan merupakan salah satu cara efektif menekan pemanasan global.",
    ],
    prompt: S("Hubungan sebab akibat pada paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "Sampah makanan menimbulkan bau tidak sedap di permukiman." },
      { key: "B", text: "Makanan membusuk melepaskan metana sehingga memperkuat pemanasan global." },
      { key: "C", text: "Karbon dioksida lebih kuat daripada metana dalam memerangkap panas." },
      { key: "D", text: "Mengurangi sisa makanan menyebabkan bertambahnya emisi metana." },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Sebab: makanan membusuk melepaskan metana. Akibat: memperkuat pemanasan global.")],
      [B("Hubungan sebab akibat: makanan membusuk → metana → pemanasan global.")],
    ],
  },
  {
    no: 68,
    stimulus: [
      "Hutan bakau memiliki akar yang mampu menahan lumpur dan mencegah abrasi pantai. Selain itu, hutan bakau menjadi tempat hidup berbagai jenis ikan dan burung. Masyarakat pesisir pun memanfaatkan kayu bakau untuk keperluan sehari-hari. Keberadaan hutan bakau sangat penting bagi keseimbangan ekosistem pesisir.",
    ],
    prompt: S("Gagasan utama paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "Hutan bakau penting bagi keseimbangan ekosistem pesisir." },
      { key: "B", text: "Akar bakau mampu menahan lumpur pantai." },
      { key: "C", text: "Ikan dan burung hidup di hutan bakau." },
      { key: "D", text: "Masyarakat pesisir memanfaatkan kayu bakau." },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Kalimat-kalimat memaparkan berbagai fungsi hutan bakau bagi lingkungan pesisir.")],
      [B("Gagasan utama: hutan bakau penting bagi keseimbangan ekosistem pesisir.")],
    ],
  },
  {
    no: 69,
    stimulus: [
      "Cokelat hitam mengandung flavonoid yang baik untuk kesehatan jantung. Kandungan ini membantu melancarkan aliran darah dan menurunkan tekanan darah. Meski demikian, cokelat hitam tetap mengandung lemak dan gula. Konsumsi yang wajar, misalnya satu hingga dua potong per hari, sudah cukup untuk memperoleh manfaatnya.",
    ],
    prompt: S("Kata flavonoid pada paragraf tersebut mengacu pada …."),
    options: [
      { key: "A", text: "jenis lemak dalam cokelat" },
      { key: "B", text: "gula alami pada cokelat" },
      { key: "C", text: "zat pewarna cokelat" },
      { key: "D", text: "senyawa baik untuk kesehatan jantung" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Teks menyebut flavonoid baik untuk kesehatan jantung dan membantu melancarkan darah.")],
      [B("Flavonoid = senyawa baik untuk kesehatan jantung.")],
    ],
  },
  {
    no: 70,
    stimulus: [
      "Legenda Danau Toba mengisahkan seorang pemuda yang melanggar amanat sehingga muncul bencana. Cerita rakyat semacam ini tidak hanya menghibur, tetapi juga mengandung nilai moral. Masyarakat mewariskannya secara lisan dari generasi ke generasi. Nilai yang terkandung di dalamnya tetap relevan hingga sekarang.",
    ],
    prompt: S("Nilai yang dominan dalam penggalan cerita legenda tersebut adalah …."),
    options: [
      { key: "A", text: "nilai moral tentang akibat melanggar amanat" },
      { key: "B", text: "nilai sosial tentang gotong royong" },
      { key: "C", text: "nilai ekonomi tentang mata pencaharian" },
      { key: "D", text: "nilai religius tentang upacara adat" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Cerita menekankan pemuda yang melanggar amanat sehingga terjadi bencana.")],
      [B("Nilai dominan: moral tentang akibat melanggar amanat.")],
    ],
  },
  {
    no: 71,
    stimulus: [
      "Media sosial memiliki dua sisi. Di satu sisi, media sosial memudahkan komunikasi dan penyebaran informasi. Di sisi lain, media sosial dapat menjadi sarana penyebaran ujaran kebencian dan kabar bohong. Penggunaan yang bijak menjadi kunci agar media sosial memberi manfaat, bukan mudarat.",
    ],
    prompt: S("Sikap penulis terhadap media sosial dalam paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "menolak penggunaan media sosial" },
      { key: "B", text: "mendukung penuh tanpa syarat" },
      { key: "C", text: "bersikap objektif dengan menyebut manfaat dan mudarat" },
      { key: "D", text: "meragukan manfaat media sosial" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Penulis memaparkan dua sisi media sosial secara berimbang.")],
      [B("Sikap penulis objektif: menyebut manfaat sekaligus mudarat.")],
    ],
  },
  {
    no: 72,
    stimulus: [
      "Dalam rapat karang taruna, terjadi perbedaan pendapat mengenai jenis kegiatan liburan. Sebagian mengusulkan bakti sosial, sebagian lagi menginginkan lomba olahraga. Setelah berdiskusi panjang, ketua mengusulkan agar kedua kegiatan digabung secara berurutan. Semua anggota menyetujui usulan tersebut.",
    ],
    prompt: S("Makna ungkapan perbedaan pendapat pada paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "perselisihan yang berujung perkelahian" },
      { key: "B", text: "kesepakatan bulat tanpa diskusi" },
      { key: "C", text: "pembatalan seluruh kegiatan" },
      { key: "D", text: "adanya pandangan yang tidak sama" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Perbedaan pendapat berarti pandangan atau usulan yang tidak sama.")],
      [B("Maknanya: adanya pandangan yang tidak sama.")],
    ],
  },
  {
    no: 73,
    stimulus: [
      "Untuk menulis berita yang baik, seorang jurnalis harus menjawab unsur 5W+1H. Unsur tersebut mencakup apa, siapa, kapan, di mana, mengapa, dan bagaimana. Kelengkapan unsur ini membuat berita informatif dan mudah dipahami pembaca. Berita yang tidak lengkap unsurnya dapat menimbulkan salah tafsir.",
    ],
    prompt: S("Unsur 5W+1H dalam penulisan berita berfungsi untuk …."),
    options: [
      { key: "A", text: "memperpanjang isi berita" },
      { key: "B", text: "menghias bahasa berita" },
      { key: "C", text: "melengkapi informasi agar berita mudah dipahami" },
      { key: "D", text: "menarik minat pengiklan" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Kelengkapan 5W+1H membuat berita informatif dan mudah dipahami.")],
      [B("Fungsinya: melengkapi informasi agar berita mudah dipahami.")],
    ],
  },
  {
    no: 74,
    stimulus: [
      "Sejak pagi, langit di ufuk barat tampak kelabu. Awan tebal menggantung rendah dan angin bertiup lebih kencang dari biasanya. Beberapa warga mulai menutup jendela dan mengamankan barang-barang di halaman. Suasana hening seakan menunggu sesuatu yang akan terjadi.",
    ],
    prompt: S("Suasana yang tergambar dalam kutipan cerita tersebut adalah …."),
    options: [
      { key: "A", text: "gembira" },
      { key: "B", text: "romantis" },
      { key: "C", text: "khusyuk" },
      { key: "D", text: "mencekam" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Lukisan langit kelabu, awan tebal, angin kencang, dan keheningan menimbulkan kesan mencekam.")],
      [B("Suasana yang tergambar: mencekam.")],
    ],
  },
  {
    no: 75,
    stimulus: [
      "Tidak semua kegiatan membaca dilakukan dengan tujuan yang sama. Ada orang membaca untuk mencari informasi tertentu, ada pula yang membaca untuk bersenang-senang. Perbedaan tujuan ini memengaruhi cara seseorang membaca. Pembaca yang mencari informasi cenderung membaca cepat bagian yang relevan.",
    ],
    prompt: S("Pernyataan yang sesuai dengan isi paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "Semua orang membaca dengan cara yang sama." },
      { key: "B", text: "Tujuan membaca memengaruhi cara seseorang membaca." },
      { key: "C", text: "Membaca untuk bersenang-senang tidak memerlukan teks." },
      { key: "D", text: "Membaca cepat hanya dilakukan saat membaca novel." },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Paragraf menyatakan perbedaan tujuan memengaruhi cara membaca.")],
      [B("Pernyataan sesuai: tujuan membaca memengaruhi cara seseorang membaca.")],
    ],
  },
  {
    no: 76,
    stimulus: [
      "Kopi liberika mulai dilirik petani karena lebih tahan terhadap penyakit karat daun dibandingkan kopi arabika. Rasanya yang khas membuat kopi liberika digemari sebagian penikmat. Meskipun produksinya belum sebanyak robusta, kopi liberika berpotensi menjadi komoditas unggulan daerah.",
    ],
    prompt: S("Keunggulan utama kopi liberika yang disebut dalam paragraf adalah …."),
    options: [
      { key: "A", text: "rasanya lebih manis daripada robusta" },
      { key: "B", text: "produksinya paling banyak di Indonesia" },
      { key: "C", text: "tahan terhadap penyakit karat daun" },
      { key: "D", text: "mudah ditanam di semua jenis tanah" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Paragraf menyebut liberika lebih tahan penyakit karat daun daripada arabika.")],
      [B("Keunggulan utama: tahan terhadap penyakit karat daun.")],
    ],
  },
  {
    no: 77,
    stimulus: [
      "Membaca intensif dilakukan untuk memahami isi bacaan secara mendalam. Pembaca perlu mencatat gagasan pokok tiap paragraf dan menghubungkannya. Kegiatan ini berbeda dengan membaca sekilas yang hanya mencari informasi umum. Membaca intensif biasanya dilakukan pada teks pelajaran atau dokumen penting.",
    ],
    prompt: S("Kegiatan yang paling sesuai dengan membaca intensif adalah …."),
    options: [
      { key: "A", text: "melihat judul dan gambar untuk mengetahui isi buku" },
      { key: "B", text: "mencari nomor telepon dalam buku petunjuk" },
      { key: "C", text: "membaca berita utama di koran selama beberapa menit" },
      { key: "D", text: "mencatat gagasan pokok tiap paragraf teks pelajaran" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Membaca intensif dilakukan dengan mencatat gagasan pokok dan memahami mendalam.")],
      [B("Kegiatan sesuai: mencatat gagasan pokok tiap paragraf teks pelajaran.")],
    ],
  },
  {
    no: 78,
    stimulus: [
      "Untuk meningkatkan minat baca, sekolah dapat menyediakan pojok baca di setiap kelas. Pojok baca diisi buku cerita, majalah anak, dan ensiklopedia sederhana. Siswa boleh membaca pada waktu luang atau meminjam buku untuk dibawa pulang. Kegiatan ini diharapkan membiasakan siswa membaca setiap hari.",
    ],
    prompt: S("Kalimat utama paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "Siswa boleh membaca pada waktu luang atau meminjam buku." },
      { key: "B", text: "Kegiatan ini diharapkan membiasakan siswa membaca setiap hari." },
      { key: "C", text: "Untuk meningkatkan minat baca, sekolah dapat menyediakan pojok baca di setiap kelas." },
      { key: "D", text: "Pojok baca diisi buku cerita, majalah anak, dan ensiklopedia sederhana." },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Kalimat utama berisi gagasan pokok yang kemudian diperinci kalimat lain.")],
      [B("Kalimat utama: sekolah dapat menyediakan pojok baca untuk meningkatkan minat baca.")],
    ],
  },
  {
    no: 79,
    stimulus: [
      "Teks laporan hasil observasi disusun berdasarkan pengamatan yang sistematis. Bagian deskripsi manfaat berisi kegunaan objek yang diamati. Sementara itu, deskripsi bagian memaparkan ciri-ciri objek secara terperinci. Struktur yang runtut membuat laporan mudah dipahami pembaca.",
    ],
    prompt: S("Struktur teks laporan hasil observasi yang benar adalah …."),
    options: [
      { key: "A", text: "abstrak, orientasi, krisis, resolusi" },
      { key: "B", text: "orientasi, rangkaian peristiwa, reorientasi" },
      { key: "C", text: "pembukaan, isi, penutup" },
      { key: "D", text: "definisi umum, deskripsi bagian, deskripsi manfaat" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Teks laporan hasil observasi berstruktur definisi umum, deskripsi bagian, deskripsi manfaat.")],
      [B("Struktur yang benar: definisi umum, deskripsi bagian, deskripsi manfaat.")],
    ],
  },
  {
    no: 80,
    stimulus: [
      "Gempa bumi terjadi akibat pergeseran lapisan kulit bumi. Ketika lempeng bumi bergerak dan bertumbukan, energi dilepaskan dalam bentuk getaran. Getaran ini menjalar ke permukaan dan dirasakan sebagai gempa. Kekuatan gempa diukur menggunakan skala magnitudo.",
    ],
    prompt: S("Pertanyaan yang jawabannya tidak terdapat pada paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "Apa yang menyebabkan terjadinya gempa bumi?" },
      { key: "B", text: "Bagaimana getaran gempa menjalar ke permukaan?" },
      { key: "C", text: "Apa nama alat pengukur kekuatan gempa?" },
      { key: "D", text: "Kapan gempa bumi paling sering terjadi?" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Bacaan menjelaskan penyebab, proses menjalar, dan skala magnitudo, tetapi tidak menyinggung waktu kejadian.")],
      [B("Jawaban tidak ditemukan: kapan gempa paling sering terjadi.")],
    ],
  },
  {
    no: 81,
    stimulus: [
      "Wayang kulit tidak sekadar tontonan, tetapi juga tuntunan. Pertunjukan wayang sarat pesan moral yang disampaikan melalui lakon. Dalang berperan penting dalam merangkai cerita dan menyisipkan nasihat. Melalui tokoh-tokohnya, penonton diajak merenungkan nilai kehidupan.",
    ],
    prompt: S("Makna kata tuntunan pada paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "ajaran atau petunjuk untuk berperilaku" },
      { key: "B", text: "hiburan yang mengundang gelak tawa" },
      { key: "C", text: "keterampilan mendalang yang rumit" },
      { key: "D", text: "kumpulan lakon warisan leluhur" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Wayang disebut sebagai tuntunan karena sarat pesan moral dan nasihat.")],
      [B("Tuntunan = ajaran atau petunjuk untuk berperilaku.")],
    ],
  },
  {
    no: 82,
    stimulus: [
      "Buku fiksi dan nonfiksi memiliki perbedaan yang mendasar. Buku fiksi berisi cerita rekaan yang berasal dari imajinasi pengarang. Adapun buku nonfiksi menyajikan informasi berdasarkan fakta dan data. Keduanya sama-sama bermanfaat, tetapi tujuan penulisannya berbeda.",
    ],
    prompt: S("Perbedaan mendasar buku fiksi dan nonfiksi adalah …."),
    options: [
      { key: "A", text: "jumlah halaman dan ketebalan buku" },
      { key: "B", text: "bahasa yang digunakan penulis" },
      { key: "C", text: "isi cerita rekaan versus informasi faktual" },
      { key: "D", text: "siapa penerbit buku tersebut" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Fiksi berisi rekaan/imajinasi; nonfiksi menyajikan fakta dan data.")],
      [B("Perbedaan mendasar: cerita rekaan versus informasi faktual.")],
    ],
  },
  {
    no: 83,
    stimulus: [
      "Setiap tahun, musim kemarau sering menyebabkan kekeringan di sejumlah daerah. Sungai-sungai kecil mengering dan para petani kesulitan mengairi sawah. Pemerintah daerah berupaya membangun embung untuk menampung air hujan. Akan tetapi, upaya ini perlu didukung kesadaran masyarakat dalam menghemat air.",
    ],
    prompt: S("Masalah utama yang dibahas dalam paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "petani tidak mampu membeli pupuk" },
      { key: "B", text: "harga air bersih semakin mahal" },
      { key: "C", text: "pembangunan embung memakan biaya besar" },
      { key: "D", text: "kekeringan akibat musim kemarau" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Paragraf membahas kekeringan yang terjadi setiap musim kemarau.")],
      [B("Masalah utama: kekeringan akibat musim kemarau.")],
    ],
  },
  {
    no: 84,
    stimulus: [
      "Bahasa daerah semakin terpinggirkan oleh bahasa asing dan bahasa gaul. Padahal, bahasa daerah menyimpan kekayaan budaya dan identitas bangsa. Salah satu cara melestarikannya adalah dengan menggunakannya dalam percakapan sehari-hari di rumah. Keluarga memiliki peran besar dalam mewariskan bahasa daerah kepada anak.",
    ],
    prompt: S("Cara pelestarian bahasa daerah yang disarankan penulis adalah …."),
    options: [
      { key: "A", text: "menggunakan bahasa daerah dalam percakapan sehari-hari di rumah" },
      { key: "B", text: "melarang penggunaan bahasa asing di sekolah" },
      { key: "C", text: "mewajibkan bahasa daerah sebagai bahasa pengantar di kantor" },
      { key: "D", text: "menuliskan bahasa daerah hanya dalam buku pelajaran" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Penulis menyarankan penggunaan bahasa daerah di rumah untuk melestarikannya.")],
      [B("Cara pelestarian: menggunakannya dalam percakapan sehari-hari di rumah.")],
    ],
  },
  {
    no: 85,
    stimulus: [
      "Ketika hujan deras turun, tanah di lereng gunung yang gundul mudah longsor. Akar pohon yang seharusnya menahan tanah telah hilang karena penebangan liar. Air hujan langsung mengalir membawa lapisan tanah ke bawah. Peristiwa ini sering terjadi berulang setiap tahun di daerah yang sama.",
    ],
    prompt: S("Pernyataan sebab akibat yang sesuai dengan paragraf adalah …."),
    options: [
      { key: "A", text: "Tanah longsor terjadi karena hujan deras dan hilangnya akar penahan tanah." },
      { key: "B", text: "Penebangan liar dilakukan karena sering terjadi tanah longsor." },
      { key: "C", text: "Hujan deras mengakibatkan pohon-pohon di lereng tumbuh subur." },
      { key: "D", text: "Air hujan mengalir membawa tanah karena tanah terlalu padat." },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Sebab: hujan deras dan tanah gundul akibat penebangan liar. Akibat: longsor.")],
      [B("Pernyataan tepat: longsor terjadi karena hujan deras dan hilangnya akar penahan tanah.")],
    ],
  },
  {
    no: 86,
    stimulus: [
      "Olahraga teratur memberikan manfaat bagi kesehatan mental, bukan hanya fisik. Saat berolahraga, tubuh melepaskan endorfin yang membuat suasana hati membaik. Aktivitas ini juga membantu mengurangi stres dan meningkatkan kualitas tidur. Tidak perlu berat, berjalan kaki tiga puluh menit setiap hari sudah cukup.",
    ],
    prompt: S("Manfaat olahraga bagi kesehatan mental yang disebut dalam paragraf adalah …."),
    options: [
      { key: "A", text: "menambah massa otot tubuh" },
      { key: "B", text: "meningkatkan daya tahan fisik" },
      { key: "C", text: "mengurangi stres dan memperbaiki suasana hati" },
      { key: "D", text: "mempercepat pembakaran lemak" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Paragraf menyebut endorfin memperbaiki suasana hati dan mengurangi stres.")],
      [B("Manfaat mental: mengurangi stres dan memperbaiki suasana hati.")],
    ],
  },
  {
    no: 87,
    stimulus: [
      "Perpustakaan keliling merupakan solusi untuk menjangkau daerah yang tidak memiliki gedung perpustakaan. Mobil perpustakaan berisi ratusan buku yang dipinjamkan kepada warga secara gratis. Petugas menjadwalkan kunjungan secara rutin ke desa-desa. Layanan ini mendekatkan buku kepada masyarakat.",
    ],
    prompt: S("Tujuan utama layanan perpustakaan keliling adalah …."),
    options: [
      { key: "A", text: "mengisi waktu luang petugas perpustakaan" },
      { key: "B", text: "menambah koleksi buku di desa" },
      { key: "C", text: "memperkenalkan profesi pustakawan" },
      { key: "D", text: "mendekatkan buku kepada masyarakat di daerah terpencil" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Layanan ini menjangkau daerah tanpa gedung perpustakaan dan mendekatkan buku.")],
      [B("Tujuan utama: mendekatkan buku kepada masyarakat daerah terpencil.")],
    ],
  },
  {
    no: 88,
    stimulus: [
      "Saat membaca puisi, penghayatan menjadi kunci utama. Pembaca perlu memahami makna tiap larik agar ekspresi sesuai. Lafal yang jelas dan intonasi yang tepat membuat puisi hidup. Gerak tubuh secukupnya dapat memperkuat makna yang disampaikan.",
    ],
    prompt: S("Hal yang paling ditekankan dalam membaca puisi menurut paragraf adalah …."),
    options: [
      { key: "A", text: "penggunaan kostum yang menarik" },
      { key: "B", text: "penghayatan dan pemahaman makna" },
      { key: "C", text: "penguasaan panggung yang luas" },
      { key: "D", text: "durasi pembacaan yang panjang" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Paragraf menyebut penghayatan menjadi kunci dan pemahaman makna diperlukan.")],
      [B("Hal terpenting: penghayatan dan pemahaman makna.")],
    ],
  },
  {
    no: 89,
    stimulus: [
      "Kemacetan di kota besar sering kali bertambah parah saat jam berangkat dan pulang kerja. Banyak karyawan memilih menggunakan kendaraan pribadi karena transportasi umum dianggap tidak nyaman. Pemerintah pun mendorong penerapan kebijakan ganjil genap. Kebijakan ini dinilai cukup efektif mengurangi volume kendaraan di jalan.",
    ],
    prompt: S("Kata ini pada kalimat terakhir merujuk pada …."),
    options: [
      { key: "A", text: "jam berangkat dan pulang kerja" },
      { key: "B", text: "kebijakan ganjil genap" },
      { key: "C", text: "penggunaan kendaraan pribadi" },
      { key: "D", text: "kemacetan di kota besar" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Kalimat sebelumnya menyebut pemerintah mendorong kebijakan ganjil genap.")],
      [B("Kata ini merujuk pada kebijakan ganjil genap.")],
    ],
  },
  {
    no: 90,
    stimulus: [
      "Madu dikenal sebagai pemanis alami yang kaya manfaat. Kandungan antioksidannya membantu melawan radikal bebas. Madu juga bersifat antibakteri sehingga dapat mempercepat penyembuhan luka ringan. Meski bermanfaat, konsumsi madu sebaiknya dibatasi karena tetap mengandung gula.",
    ],
    prompt: S("Simpulan yang tepat berdasarkan paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "Madu tidak boleh dikonsumsi sama sekali karena mengandung gula." },
      { key: "B", text: "Madu hanya bermanfaat sebagai pemanis alami." },
      { key: "C", text: "Madu bermanfaat bagi kesehatan, tetapi konsumsinya perlu dibatasi." },
      { key: "D", text: "Madu lebih berbahaya daripada gula pasir biasa." },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Paragraf memaparkan manfaat madu lalu mengingatkan batasan konsumsinya.")],
      [B("Simpulan: madu bermanfaat, tetapi konsumsinya perlu dibatasi.")],
    ],
  },
  {
    no: 91,
    stimulus: [
      "Rumah adat bukan hanya tempat tinggal, tetapi juga cermin nilai budaya masyarakatnya. Bentuk atap, ukiran, dan tata ruang menyimpan makna filosofis. Misalnya, rumah panggung dibuat untuk menghindari banjir dan serangan binatang buas. Kearifan lokal semacam ini patut dijaga dan dipelajari generasi muda.",
    ],
    prompt: S("Mengapa rumah adat disebut cermin nilai budaya? Karena …."),
    options: [
      { key: "A", text: "bentuk dan tata ruangnya menyimpan makna filosofis" },
      { key: "B", text: "rumah adat dibangun dengan biaya yang sangat mahal" },
      { key: "C", text: "rumah adat hanya dapat ditemukan di museum" },
      { key: "D", text: "bahan bangunannya berasal dari luar negeri" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Paragraf menyatakan bentuk, ukiran, dan tata ruang rumah adat menyimpan makna.")],
      [B("Alasannya: bentuk dan tata ruangnya menyimpan makna filosofis.")],
    ],
  },
  {
    no: 92,
    stimulus: [
      "Banyak siswa menganggap matematika sebagai pelajaran yang sulit dan menakutkan. Anggapan ini muncul karena mereka jarang berlatih dan mudah menyerah. Padahal, matematika melatih kemampuan berpikir logis dan memecahkan masalah. Jika dibiasakan berlatih sedikit demi sedikit, matematika akan terasa lebih mudah.",
    ],
    prompt: S("Solusi yang ditawarkan penulis untuk mengatasi anggapan sulit terhadap matematika adalah …."),
    options: [
      { key: "A", text: "menghapus pelajaran matematika dari kurikulum" },
      { key: "B", text: "memberi hadiah bagi siswa yang pandai berhitung" },
      { key: "C", text: "membiasakan berlatih matematika sedikit demi sedikit" },
      { key: "D", text: "mengganti guru matematika setiap semester" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Paragraf menyarankan pembiasaan berlatih sedikit demi sedikit.")],
      [B("Solusi: membiasakan berlatih matematika sedikit demi sedikit.")],
    ],
  },
  {
    no: 93,
    stimulus: [
      "Kata baku adalah kata yang penulisannya sesuai dengan kaidah bahasa Indonesia. Penggunaan kata baku penting dalam karya tulis ilmiah dan surat resmi. Sebaliknya, kata tidak baku lazim dipakai dalam percakapan sehari-hari. Pemilihan kata perlu disesuaikan dengan konteks dan lawan bicara.",
    ],
    prompt: S("Kata baku paling tepat digunakan dalam konteks …."),
    options: [
      { key: "A", text: "percakapan santai antarteman" },
      { key: "B", text: "pesan singkat di media sosial" },
      { key: "C", text: "obrolan di pasar tradisional" },
      { key: "D", text: "penulisan karya tulis ilmiah" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Paragraf menyatakan kata baku penting dalam karya tulis ilmiah dan surat resmi.")],
      [B("Konteks paling tepat: penulisan karya tulis ilmiah.")],
    ],
  },
  {
    no: 94,
    stimulus: [
      "Bambu merupakan tanaman serbaguna yang tumbuh cepat. Dalam waktu tiga hingga lima tahun, bambu sudah dapat dipanen. Batangnya kuat dan ringan sehingga banyak digunakan untuk bahan bangunan. Akar bambu juga mampu mencegah erosi tanah di daerah miring.",
    ],
    prompt: S("Kata serbaguna pada kalimat pertama bermakna …."),
    options: [
      { key: "A", text: "hanya dapat digunakan untuk satu keperluan" },
      { key: "B", text: "memiliki banyak kegunaan" },
      { key: "C", text: "mudah tumbuh di segala musim" },
      { key: "D", text: "harganya sangat murah" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Kalimat-kalimat berikutnya memaparkan beragam kegunaan bambu.")],
      [B("Serbaguna = memiliki banyak kegunaan.")],
    ],
  },
  {
    no: 95,
    stimulus: [
      "Teks prosedur memuat langkah-langkah melakukan sesuatu secara urut. Bahasa yang digunakan harus jelas dan mudah diikuti. Selain itu, teks prosedur sering dilengkapi gambar atau diagram untuk memperjelas. Ciri ini membedakan teks prosedur dari jenis teks lainnya.",
    ],
    prompt: S("Ciri utama teks prosedur yang disebut dalam paragraf adalah …."),
    options: [
      { key: "A", text: "berisi langkah-langkah yang urut dan jelas" },
      { key: "B", text: "menggunakan bahasa kiasan yang indah" },
      { key: "C", text: "menceritakan pengalaman pribadi penulis" },
      { key: "D", text: "memuat argumen pro dan kontra" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Teks prosedur berisi langkah-langkah urut dengan bahasa jelas.")],
      [B("Ciri utama: berisi langkah-langkah yang urut dan jelas.")],
    ],
  },
  {
    no: 96,
    stimulus: [
      "Gempa bumi terjadi ketika lempeng bumi bergerak dan melepaskan energi secara tiba-tiba. Getarannya menjalar ke segala arah dan dapat dirasakan di permukaan. Kekuatan gempa diukur dengan skala magnitudo. Semakin besar magnitudo, semakin besar pula kerusakan yang ditimbulkan.",
    ],
    prompt: S("Fakta yang sesuai dengan isi paragraf adalah …."),
    options: [
      { key: "A", text: "Gempa terjadi akibat pelepasan energi dari pergerakan lempeng bumi." },
      { key: "B", text: "Semua gempa bumi pasti menyebabkan tsunami." },
      { key: "C", text: "Kekuatan gempa hanya dapat dirasakan di permukaan laut." },
      { key: "D", text: "Magnitudo gempa tidak memengaruhi besarnya kerusakan." },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Kalimat pertama menyatakan gempa terjadi karena lempeng bergerak dan melepas energi.")],
      [B("Fakta yang sesuai: gempa akibat pelepasan energi dari pergerakan lempeng bumi.")],
    ],
  },
  {
    no: 97,
    stimulus: [
      "Menabung sejak dini melatih anak mengelola uang. Dengan menabung, anak belajar membedakan keinginan dan kebutuhan. Mereka juga terbiasa menunda keinginan demi mencapai tujuan. Kebiasaan ini akan berguna ketika mereka dewasa.",
    ],
    prompt: S("Kata menunda pada paragraf tersebut bermakna …."),
    options: [
      { key: "A", text: "mempercepat pemenuhan keinginan" },
      { key: "B", text: "menggeser atau tidak segera melakukan" },
      { key: "C", text: "menghapus seluruh keinginan" },
      { key: "D", text: "mengganti keinginan dengan yang lain" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Menabung melatih anak menunda keinginan, artinya tidak segera membelanjakan.")],
      [B("Menunda = menggeser atau tidak segera melakukan.")],
    ],
  },
  {
    no: 98,
    stimulus: [
      "Sebagian masyarakat masih membuang sampah ke sungai. Akibatnya, aliran air tersumbat dan banjir melanda saat hujan deras. Padahal, sungai memiliki peran penting bagi kehidupan. Menjaga kebersihan sungai adalah tanggung jawab bersama.",
    ],
    prompt: S("Kalimat utama paragraf tersebut terdapat pada …."),
    options: [
      { key: "A", text: "kalimat pertama" },
      { key: "B", text: "kalimat kedua" },
      { key: "C", text: "kalimat ketiga" },
      { key: "D", text: "kalimat keempat" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Gagasan utama paragraf adalah pentingnya menjaga sungai; kalimat ketiga dan keempat menegaskannya.")],
      [B("Kalimat utama terletak pada kalimat ketiga: sungai memiliki peran penting bagi kehidupan.")],
    ],
  },
  {
    no: 99,
    stimulus: [
      "Kopi mengandung kafein yang dapat meningkatkan kewaspadaan. Namun, konsumsi berlebihan menyebabkan jantung berdebar dan sulit tidur. Ahli menyarankan konsumsi kopi maksimal tiga hingga empat cangkir per hari. Setiap orang juga perlu mengenali batas tubuhnya masing-masing.",
    ],
    prompt: S("Informasi tersurat yang terdapat dalam paragraf adalah …."),
    options: [
      { key: "A", text: "Kopi sebaiknya dihindari oleh semua orang dewasa." },
      { key: "B", text: "Kafein tidak memiliki efek apa pun bagi tubuh." },
      { key: "C", text: "Batas konsumsi kopi yang disarankan adalah tiga hingga empat cangkir per hari." },
      { key: "D", text: "Kopi hanya boleh diminum pada pagi hari." },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Ahli menyarankan konsumsi kopi maksimal tiga hingga empat cangkir per hari.")],
      [B("Informasi tersurat: batas konsumsi kopi tiga hingga empat cangkir per hari.")],
    ],
  },
  {
    no: 100,
    stimulus: [
      "Wayang orang adalah seni pertunjukan yang menggabungkan tari, musik, dan drama. Para pemainnya menirukan gerak serta watak tokoh wayang. Pertunjukan ini biasanya mengangkat cerita Mahabharata atau Ramayana. Busana dan tata rias pemain dibuat menyerupai tokoh yang diperankan.",
    ],
    prompt: S("Hal yang membedakan wayang orang dari wayang kulit adalah …."),
    options: [
      { key: "A", text: "cerita yang diangkat selalu berbeda" },
      { key: "B", text: "tokohnya berasal dari kerajaan" },
      { key: "C", text: "alat musik pengiringnya lebih lengkap" },
      { key: "D", text: "tokoh diperankan langsung oleh manusia" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Wayang orang dimainkan langsung oleh manusia, bukan boneka kulit.")],
      [B("Pembedanya: tokoh diperankan langsung oleh manusia.")],
    ],
  },
  {
    no: 101,
    stimulus: [
      "Lautan menyimpan potensi ekonomi yang besar, seperti perikanan, wisata, dan energi terbarukan. Sayangnya, potensi ini belum dikelola secara optimal. Banyak nelayan masih menggunakan alat tangkap yang merusak lingkungan. Pengelolaan yang berkelanjutan diperlukan agar kekayaan laut tetap lestari.",
    ],
    prompt: S("Kata lestari pada kalimat terakhir bermakna …."),
    options: [
      { key: "A", text: "tetap ada dan tidak berubah selamanya" },
      { key: "B", text: "tetap bertahan dan tidak rusak atau punah" },
      { key: "C", text: "menjadi lebih banyak dari sebelumnya" },
      { key: "D", text: "cepat pulih setelah mengalami kerusakan" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Lestari berarti tetap bertahan, tidak rusak atau punah.")],
      [B("Makna lestari = tetap bertahan dan tidak rusak/punah.")],
    ],
  },
  {
    no: 102,
    stimulus: [
      "Puisi rakyat seperti pantun dan syair merupakan warisan budaya yang kaya pesan. Pantun memiliki ciri bersajak a-b-a-b dan terdiri atas sampiran serta isi. Syair berasal dari tradisi sastra Melayu dan tiap baitnya bersajak a-a-a-a. Keduanya sering digunakan untuk menyampaikan nasihat.",
    ],
    prompt: S("Persamaan pantun dan syair berdasarkan paragraf adalah …."),
    options: [
      { key: "A", text: "bersajak a-b-a-b dan memiliki sampiran" },
      { key: "B", text: "berasal dari tradisi sastra Melayu" },
      { key: "C", text: "terdiri atas empat baris dalam tiap bait" },
      { key: "D", text: "sering digunakan untuk menyampaikan nasihat" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Paragraf menyebut pantun dan syair sama-sama digunakan untuk menyampaikan nasihat.")],
      [B("Persamaannya: sama-sama sering menyampaikan nasihat.")],
    ],
  },
  {
    no: 103,
    stimulus: [
      "Kegiatan gotong royong semakin jarang terlihat di perkotaan. Kesibukan dan gaya hidup individualis membuat warga jarang berinteraksi. Padahal, gotong royong mempererat hubungan antartetangga. Kegiatan sederhana seperti kerja bakti membersihkan lingkungan dapat menghidupkannya kembali.",
    ],
    prompt: S("Pernyataan yang bertentangan dengan isi paragraf adalah …."),
    options: [
      { key: "A", text: "Gotong royong mempererat hubungan antartetangga." },
      { key: "B", text: "Kerja bakti adalah salah satu bentuk gotong royong." },
      { key: "C", text: "Gaya hidup individualis menyebabkan gotong royong semakin jarang." },
      { key: "D", text: "Gotong royong sudah tidak mungkin dihidupkan di perkotaan." },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Paragraf justru menyebut gotong royong dapat dihidupkan lewat kerja bakti.")],
      [B("Bertentangan: gotong royong sudah tidak mungkin dihidupkan di perkotaan.")],
    ],
  },
  {
    no: 104,
    stimulus: [
      "Mendengarkan musik sambil belajar memiliki efek yang berbeda-beda pada tiap orang. Sebagian orang merasa lebih fokus, sebagian lainnya justru terganggu. Jenis musik juga berpengaruh; musik instrumental umumnya lebih aman daripada musik berlirik. Oleh karena itu, setiap pelajar perlu menemukan cara belajar yang paling cocok.",
    ],
    prompt: S("Simpulan yang tepat berdasarkan paragraf adalah …."),
    options: [
      { key: "A", text: "Musik selalu mengganggu konsentrasi belajar." },
      { key: "B", text: "Efek musik saat belajar bersifat subjektif bagi tiap orang." },
      { key: "C", text: "Musik berlirik lebih baik daripada musik instrumental." },
      { key: "D", text: "Belajar sebaiknya dilakukan tanpa musik sama sekali." },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Efek musik saat belajar berbeda-beda pada tiap orang, jadi subjektif.")],
      [B("Simpulan: efek musik saat belajar bersifat subjektif.")],
    ],
  },
  {
    no: 105,
    stimulus: [
      "Batik merupakan warisan budaya Indonesia yang diakui UNESCO. Setiap daerah memiliki motif khas dengan makna tersendiri. Motif parang melambangkan keberanian, sedangkan motif mega mendung berasal dari Cirebon. Melestarikan batik berarti menjaga identitas bangsa.",
    ],
    prompt: S("Motif mega mendung berasal dari daerah …."),
    options: [
      { key: "A", text: "Yogyakarta" },
      { key: "B", text: "Solo" },
      { key: "C", text: "Pekalongan" },
      { key: "D", text: "Cirebon" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Paragraf menyebut motif mega mendung berasal dari Cirebon.")],
      [B("Mega mendung berasal dari Cirebon.")],
    ],
  },
  {
    no: 106,
    stimulus: [
      "Sampah organik dapat diolah menjadi kompos yang bermanfaat bagi tanaman. Pengomposan dilakukan dengan mencampur sampah organik dan aktivator, lalu menutupnya selama beberapa minggu. Kompos yang dihasilkan kaya unsur hara. Dengan begitu, sampah dapur tidak lagi berakhir di tempat pembuangan akhir.",
    ],
    prompt: S("Manfaat utama pengolahan sampah organik menjadi kompos adalah …."),
    options: [
      { key: "A", text: "menghasilkan gas untuk bahan bakar" },
      { key: "B", text: "mengurangi sampah yang berakhir di tempat pembuangan akhir" },
      { key: "C", text: "menambah populasi mikroorganisme tanah" },
      { key: "D", text: "mempercepat proses pembusukan sampah" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Kalimat terakhir menyebut sampah dapur tidak lagi berakhir di TPA.")],
      [B("Manfaat utama: mengurangi sampah yang berakhir di tempat pembuangan akhir.")],
    ],
  },
  {
    no: 107,
    stimulus: [
      "Hutan bakau tumbuh di pesisir pantai dan memiliki akar yang kokoh. Akar bakau mampu meredam ombak sehingga mencegah abrasi. Selain itu, hutan bakau menjadi tempat hidup berbagai ikan dan udang. Keberadaannya juga menyerap karbon dioksida dalam jumlah besar.",
    ],
    prompt: S("Informasi yang tidak terdapat dalam paragraf adalah …."),
    options: [
      { key: "A", text: "akar bakau meredam ombak dan mencegah abrasi" },
      { key: "B", text: "hutan bakau menjadi habitat ikan dan udang" },
      { key: "C", text: "hutan bakau menyerap karbon dioksida" },
      { key: "D", text: "hutan bakau dimanfaatkan kayunya untuk bahan bangunan" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Paragraf tidak menyebut pemanfaatan kayu bakau untuk bangunan.")],
      [B("Informasi yang tidak ada: kayu bakau untuk bahan bangunan.")],
    ],
  },
  {
    no: 108,
    stimulus: [
      "Membaca buku secara rutin memiliki banyak manfaat. Selain menambah wawasan, membaca melatih daya pikir dan imajinasi. Orang yang gemar membaca biasanya memiliki kosakata yang luas. Kebiasaan ini sebaiknya ditanamkan sejak anak-anak.",
    ],
    prompt: S("Topik paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "manfaat membaca buku secara rutin" },
      { key: "B", text: "cara memilih buku yang baik" },
      { key: "C", text: "jenis-jenis buku bacaan" },
      { key: "D", text: "sejarah perkembangan buku" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Seluruh kalimat membahas beragam manfaat membaca buku.")],
      [B("Topik paragraf: manfaat membaca buku secara rutin.")],
    ],
  },
  {
    no: 109,
    stimulus: [
      "Tanpa disadari, ponsel telah mengubah cara orang berkomunikasi. Dahulu orang mengirim surat yang membutuhkan waktu berhari-hari. Kini pesan dapat terkirim dalam hitungan detik. Namun, komunikasi tatap muka semakin berkurang.",
    ],
    prompt: S("Kata tatap muka pada kalimat terakhir bermakna …."),
    options: [
      { key: "A", text: "bertemu dan berbicara secara langsung" },
      { key: "B", text: "berbicara melalui sambungan telepon" },
      { key: "C", text: "mengirim pesan melalui aplikasi" },
      { key: "D", text: "berkomunikasi dengan bahasa isyarat" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Tatap muka berarti saling berhadapan langsung saat berkomunikasi.")],
      [B("Tatap muka = bertemu dan berbicara secara langsung.")],
    ],
  },
  {
    no: 110,
    stimulus: [
      "Kegiatan ekstrakurikuler memberi banyak manfaat bagi siswa. Melalui kegiatan ini, siswa dapat mengembangkan bakat dan minatnya. Mereka juga belajar bekerja sama dalam tim. Selain itu, ekstrakurikuler mengisi waktu luang dengan kegiatan positif.",
    ],
    prompt: S("Pernyataan yang merupakan opini penulis adalah …."),
    options: [
      { key: "A", text: "Ekstrakurikuler mengisi waktu luang dengan kegiatan positif." },
      { key: "B", text: "Siswa belajar bekerja sama dalam kegiatan tim." },
      { key: "C", text: "Kegiatan ekstrakurikuler diadakan setelah jam pelajaran." },
      { key: "D", text: "Setiap sekolah memiliki banyak pilihan ekstrakurikuler." },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("'Positif' merupakan penilaian subjektif; pernyataan lain bersifat faktual.")],
      [B("Opini penulis: ekstrakurikuler mengisi waktu luang dengan kegiatan positif.")],
    ],
  },
  {
    no: 111,
    stimulus: [
      "Pemanfaatan energi surya di rumah semakin diminati. Panel surya mengubah cahaya matahari menjadi listrik sehingga dapat mengurangi tagihan listrik bulanan. Meskipun biaya pemasangannya relatif mahal, dalam jangka panjang investasi ini dinilai lebih hemat. Pemerintah pun memberikan insentif bagi warga yang memasang panel surya.",
    ],
    prompt: S("Ide pokok paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "pemanfaatan energi surya di rumah semakin diminati karena menguntungkan" },
      { key: "B", text: "panel surya mengubah cahaya matahari menjadi energi listrik" },
      { key: "C", text: "biaya pemasangan panel surya masih tergolong mahal" },
      { key: "D", text: "pemerintah memberikan insentif bagi pengguna panel surya" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Kalimat pertama menjadi gagasan utama: pemanfaatan energi surya di rumah semakin diminati.")],
      [B("Kalimat lain hanya penjelas tentang keuntungan, biaya, dan insentif.")],
    ],
  },
  {
    no: 112,
    stimulus: [
      "Tari Saman berasal dari Gayo, Aceh, dan telah diakui UNESCO sebagai warisan budaya tak benda. Tarian ini dibawakan oleh sekelompok penari yang duduk berlutut sambil menepuk dada dan paha. Gerakannya yang kompak menuntut kekompakan dan konsentrasi tinggi. Tari Saman biasanya ditampilkan pada perayaan dan acara adat.",
    ],
    prompt: S("Informasi yang tidak terdapat dalam paragraf adalah …."),
    options: [
      { key: "A", text: "Tari Saman diakui UNESCO sebagai warisan budaya tak benda." },
      { key: "B", text: "Tari Saman menggunakan properti kipas dalam setiap pertunjukan." },
      { key: "C", text: "Tari Saman berasal dari Gayo, Aceh." },
      { key: "D", text: "Tari Saman menuntut kekompakan dan konsentrasi penari." },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Paragraf menyebut asal, pengakuan UNESCO, gerakan menepuk dada dan paha, serta kekompakan penari.")],
      [B("Properti kipas tidak disebut, jadi informasi itu yang tidak terdapat dalam paragraf.")],
    ],
  },
  {
    no: 113,
    stimulus: [
      "Urbanisasi yang tidak terkendali menimbulkan persoalan di kota, seperti kepadatan penduduk dan menjamurnya permukiman kumuh. Banyak penduduk desa datang ke kota dengan harapan memperoleh pekerjaan yang lebih baik, tetapi tidak semua berhasil. Pemerintah berupaya mengurangi arus urbanisasi dengan membangun pusat ekonomi baru di daerah.",
    ],
    prompt: S("Upaya mengurangi arus urbanisasi yang disebut dalam paragraf adalah …."),
    options: [
      { key: "A", text: "menertibkan permukiman kumuh di kota" },
      { key: "B", text: "membatasi jumlah penduduk yang masuk kota" },
      { key: "C", text: "menambah lapangan kerja di dalam kota" },
      { key: "D", text: "membangun pusat ekonomi baru di daerah" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Paragraf menyebut banyak penduduk desa datang ke kota mencari kerja, tetapi tidak semua berhasil.")],
      [B("Upayanya: membangun pusat ekonomi baru di daerah agar warga tidak perlu ke kota.")],
    ],
  },
  {
    no: 114,
    stimulus: [
      "Sampah makanan merupakan masalah yang sering terlupakan. Makanan yang terbuang percuma akan membusuk di tempat pembuangan akhir dan melepaskan gas metana, salah satu gas rumah kaca. Selain itu, sampah makanan juga berarti sumber daya, seperti air dan energi, yang terbuang sia-sia. Mengurangi sampah makanan dapat dimulai dari kebiasaan mengambil makanan secukupnya.",
    ],
    prompt: S("Pernyataan yang sesuai dengan isi paragraf adalah …."),
    options: [
      { key: "A", text: "Sampah makanan melepaskan gas metana saat membusuk di tempat pembuangan akhir." },
      { key: "B", text: "Sampah makanan tidak berdampak apa pun terhadap lingkungan." },
      { key: "C", text: "Gas metana tidak termasuk gas rumah kaca." },
      { key: "D", text: "Sampah makanan hanya berasal dari restoran besar." },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Paragraf menyatakan makanan yang membusuk melepaskan gas metana, salah satu gas rumah kaca.")],
      [B("Jadi pernyataan yang sesuai: sampah makanan melepaskan gas metana di TPA.")],
    ],
  },
  {
    no: 115,
    stimulus: [
      "Hidroponik adalah cara bercocok tanam tanpa tanah dengan memanfaatkan air yang kaya nutrisi. Teknik ini cocok untuk lahan sempit karena dapat dilakukan di pekarangan atau atap rumah. Tanaman hidroponik tumbuh lebih cepat dan tidak mudah terserang hama dari tanah. Namun, petani hidroponik perlu memperhatikan kepekatan larutan nutrisi secara berkala.",
    ],
    prompt: S("Keunggulan hidroponik yang disebut dalam paragraf adalah …."),
    options: [
      { key: "A", text: "tidak memerlukan air sama sekali" },
      { key: "B", text: "menggunakan tanah subur sebagai media tanam" },
      { key: "C", text: "dapat dilakukan di lahan sempit dan tanaman tumbuh lebih cepat" },
      { key: "D", text: "bebas dari segala jenis hama tanpa perawatan" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Paragraf menyebut hidroponik cocok untuk lahan sempit, tumbuh lebih cepat, dan tidak mudah terserang hama tanah.")],
      [B("Keunggulan yang sesuai: dapat dilakukan di lahan sempit dan tumbuh lebih cepat.")],
    ],
  },
  {
    no: 116,
    stimulus: [
      "Penggunaan bahasa gaul di kalangan remaja tidak dapat dihindari. Bahasa gaul dianggap lebih santai dan dekat dengan pergaulan sehari-hari. Meskipun demikian, remaja perlu tetap menguasai bahasa Indonesia yang baik dan benar. Kemampuan berbahasa formal tetap diperlukan, terutama saat menulis karya ilmiah atau berbicara di depan umum.",
    ],
    prompt: S("Sikap penulis terhadap bahasa gaul dalam paragraf tersebut adalah …."),
    options: [
      { key: "A", text: "menerima keberadaannya, tetapi mengingatkan pentingnya bahasa baku" },
      { key: "B", text: "menolak keras penggunaan bahasa gaul di kalangan remaja" },
      { key: "C", text: "menyerukan pelarangan bahasa gaul di lingkungan sekolah" },
      { key: "D", text: "menganggap bahasa gaul lebih baik daripada bahasa formal" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Penulis menyebut bahasa gaul tidak dapat dihindari, tetapi menekankan pentingnya bahasa formal.")],
      [B("Sikap penulis: menerima bahasa gaul, tetapi tetap mengingatkan pentingnya bahasa baku.")],
    ],
  },
  {
    no: 117,
    stimulus: [
      "Bank sampah menjadi salah satu solusi pengelolaan sampah berbasis masyarakat. Warga menabung sampah yang sudah dipilah, lalu ditimbang dan dicatat oleh pengurus. Sampah yang bernilai ekonomi akan dijual, sedangkan hasilnya dapat ditabung atau diambil dalam bentuk uang. Selain mengurangi sampah, bank sampah juga memberi tambahan penghasilan bagi warga.",
    ],
    prompt: S("Manfaat ganda bank sampah yang dimaksud dalam paragraf adalah …."),
    options: [
      { key: "A", text: "memilah sampah dan membuangnya ke tempat pembuangan akhir" },
      { key: "B", text: "menimbang sampah dan mencatatnya di buku tabungan" },
      { key: "C", text: "menjual sampah dan membagi hasilnya kepada pengurus" },
      { key: "D", text: "mengurangi sampah dan menambah penghasilan warga" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Kalimat terakhir menyebut bank sampah mengurangi sampah sekaligus menambah penghasilan warga.")],
      [B("Manfaat gandanya: mengurangi sampah dan menambah penghasilan.")],
    ],
  },
  {
    no: 118,
    stimulus: [
      "Perpustakaan digital memungkinkan masyarakat mengakses buku dan jurnal kapan saja dan dari mana saja. Koleksinya terus bertambah seiring kerja sama dengan penerbit. Meskipun praktis, perpustakaan digital belum sepenuhnya menjangkau daerah dengan internet terbatas. Oleh karena itu, keberadaan perpustakaan konvensional tetap diperlukan.",
    ],
    prompt: S("Simpulan yang tepat berdasarkan paragraf adalah …."),
    options: [
      { key: "A", text: "Perpustakaan konvensional sebaiknya dihapus karena sudah tergantikan." },
      { key: "B", text: "Perpustakaan digital hanya dapat diakses oleh penerbit buku." },
      { key: "C", text: "Perpustakaan digital dan konvensional saling melengkapi akses masyarakat." },
      { key: "D", text: "Perpustakaan konvensional tidak mengalami keterbatasan apa pun." },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Perpustakaan digital praktis tetapi belum menjangkau daerah berinternet terbatas.")],
      [B("Simpulannya: perpustakaan digital dan konvensional saling melengkapi.")],
    ],
  },
  {
    no: 119,
    stimulus: [
      "Kearifan lokal adalah pandangan hidup dan pengetahuan masyarakat setempat dalam menyikapi lingkungan. Contohnya, masyarakat Baduy menjaga hutan larangan sebagai sumber air. Mereka percaya merusak hutan berarti merusak kehidupan. Nilai-nilai seperti ini relevan untuk menghadapi krisis lingkungan saat ini.",
    ],
    prompt: S("Fungsi hutan larangan bagi masyarakat Baduy menurut paragraf adalah …."),
    options: [
      { key: "A", text: "sumber air yang harus dijaga kelestariannya" },
      { key: "B", text: "tempat mencari kayu untuk bahan bangunan" },
      { key: "C", text: "kawasan wisata yang ramai dikunjungi" },
      { key: "D", text: "lahan pertanian untuk bercocok tanam" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Paragraf menyebut masyarakat Baduy menjaga hutan larangan sebagai sumber air.")],
      [B("Fungsinya: sumber air yang harus dijaga kelestariannya.")],
    ],
  },
  {
    no: 120,
    stimulus: [
      "Bersepeda semakin populer sebagai sarana transportasi dan olahraga. Selain ramah lingkungan, bersepeda menyehatkan jantung dan otot tubuh. Pemerintah kota pun menyediakan jalur khusus agar pesepeda aman. Sayangnya, kesadaran pengendara lain untuk menghormati pesepeda masih perlu ditingkatkan.",
    ],
    prompt: S("Kata ramah lingkungan pada paragraf tersebut bermakna …."),
    options: [
      { key: "A", text: "dibuat dari bahan-bahan alam" },
      { key: "B", text: "digunakan di lingkungan yang bersih" },
      { key: "C", text: "hanya cocok untuk lingkungan tertentu" },
      { key: "D", text: "tidak merusak alam dan tidak menimbulkan polusi" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Bersepeda tidak mengeluarkan emisi sehingga tidak menambah polusi udara.")],
      [B("Ramah lingkungan = tidak merusak alam dan tidak menimbulkan polusi.")],
    ],
  },
  {
    no: 121,
    stimulus: [
      "Ikan merupakan sumber protein hewani yang penting. Kandungan asam lemak omega-3 di dalamnya baik untuk perkembangan otak anak. Dibandingkan daging merah, ikan memiliki kandungan lemak jenuh yang lebih rendah. Konsumsi ikan secara teratur dianjurkan sejak masa pertumbuhan.",
    ],
    prompt: S("Alasan ikan dianjurkan dikonsumsi sejak masa pertumbuhan adalah …."),
    options: [
      { key: "A", text: "mengandung omega-3 yang baik untuk perkembangan otak" },
      { key: "B", text: "harganya lebih murah daripada daging merah" },
      { key: "C", text: "rasanya lebih enak daripada sumber protein lain" },
      { key: "D", text: "mudah ditemukan di seluruh pasar tradisional" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Paragraf menyebut omega-3 pada ikan baik untuk perkembangan otak anak.")],
      [B("Karena itu ikan dianjurkan dikonsumsi sejak masa pertumbuhan.")],
    ],
  },
  {
    no: 122,
    stimulus: [
      "Taman kota memiliki banyak fungsi bagi warga perkotaan. Selain menjadi ruang bermain dan berolahraga, taman kota berperan sebagai paru-paru kota yang menyerap polusi. Keberadaan taman juga menjadi tempat interaksi sosial antartetangga. Semakin banyak taman kota, semakin sehat lingkungan dan warganya.",
    ],
    prompt: S("Fungsi taman kota sebagai paru-paru kota berarti taman mampu …."),
    options: [
      { key: "A", text: "menyediakan tempat bermain anak-anak" },
      { key: "B", text: "menjadi lokasi kegiatan ekonomi warga" },
      { key: "C", text: "menyerap polusi dan menghasilkan udara yang lebih bersih" },
      { key: "D", text: "menampung air hujan agar tidak terjadi banjir" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Paru-paru kota mengibaratkan fungsi taman yang menyerap polusi.")],
      [B("Artinya taman menyerap polusi dan menghasilkan udara lebih bersih.")],
    ],
  },
  {
    no: 123,
    stimulus: [
      "Eceng gondok sering dianggap gulma karena tumbuh cepat dan menutupi permukaan danau. Namun, di tangan warga sekitar danau, eceng gondok disulap menjadi kerajinan anyaman yang bernilai ekonomi, seperti tas dan tikar. Kegiatan ini mengurangi pencemaran sekaligus menambah penghasilan. Dengan demikian, eceng gondok tidak lagi sekadar tanaman pengganggu.",
    ],
    prompt: S("Pernyataan yang bertentangan dengan isi paragraf adalah …."),
    options: [
      { key: "A", text: "Eceng gondok dapat diolah menjadi kerajinan bernilai ekonomi." },
      { key: "B", text: "Eceng gondok menutupi permukaan danau dan tumbuh cepat." },
      { key: "C", text: "Kerajinan eceng gondok mengurangi pencemaran danau." },
      { key: "D", text: "Eceng gondok tidak dapat memberikan manfaat apa pun bagi warga." },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Paragraf justru menunjukkan eceng gondok bermanfaat sebagai bahan kerajinan.")],
      [B("Pernyataan yang bertentangan: eceng gondok tidak dapat memberi manfaat apa pun.")],
    ],
  },
  {
    no: 124,
    stimulus: [
      "Membaca kritis bukan sekadar memahami isi teks, tetapi juga menilai kebenaran argumen penulis. Pembaca kritis mempertanyakan data, melihat sudut pandang penulis, dan membandingkan dengan sumber lain. Kemampuan ini penting di tengah maraknya informasi palsu. Dengan membaca kritis, seseorang tidak mudah termakan hoaks.",
    ],
    prompt: S("Manfaat utama membaca kritis menurut paragraf adalah …."),
    options: [
      { key: "A", text: "mencegah seseorang mudah percaya pada informasi palsu" },
      { key: "B", text: "membuat seseorang lebih cepat menghabiskan buku" },
      { key: "C", text: "menambah jumlah kosakata baru setiap hari" },
      { key: "D", text: "membantu seseorang menulis karangan yang panjang" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Pembaca kritis mempertanyakan data dan membandingkan sumber sehingga tidak mudah termakan hoaks.")],
      [B("Manfaat utamanya: mencegah mudah percaya pada informasi palsu.")],
    ],
  },
  {
    no: 125,
    stimulus: [
      "Terumbu karang merupakan ekosistem laut yang sangat produktif. Ribuan jenis ikan dan biota laut menjadikan terumbu karang sebagai tempat tinggal dan mencari makan. Selain itu, terumbu karang melindungi pantai dari terjangan ombak. Sayangnya, pemanasan suhu laut menyebabkan pemutihan karang secara massal.",
    ],
    prompt: S("Dampak pemanasan suhu laut terhadap terumbu karang adalah …."),
    options: [
      { key: "A", text: "membuat terumbu karang semakin subur" },
      { key: "B", text: "menyebabkan pemutihan karang secara massal" },
      { key: "C", text: "menambah jumlah ikan di sekitar karang" },
      { key: "D", text: "memperkuat perlindungan pantai dari ombak" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Kalimat terakhir menyebut pemanasan suhu laut menyebabkan pemutihan karang secara massal.")],
      [B("Jadi dampaknya: pemutihan karang secara massal.")],
    ],
  },
  {
    no: 126,
    stimulus: [
      "Ecoprint adalah teknik membatik dengan mencetak motif dari daun dan bunga asli ke atas kain. Daun yang mengandung pigmen warna akan menempel setelah kain dipukul atau dikukus. Teknik ini ramah lingkungan karena tidak menggunakan pewarna sintetis. Hasilnya, setiap kain ecoprint memiliki motif yang unik.",
    ],
    prompt: S("Keunikan kain ecoprint menurut paragraf adalah …."),
    options: [
      { key: "A", text: "menggunakan pewarna sintetis yang tahan lama" },
      { key: "B", text: "proses pembuatannya memerlukan mesin modern" },
      { key: "C", text: "motifnya berasal dari daun dan bunga asli sehingga unik" },
      { key: "D", text: "warnanya selalu sama pada setiap produksi" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Ecoprint mencetak motif daun atau bunga asli ke atas kain.")],
      [B("Keunikannya: motif dari bahan alami sehingga setiap kain berbeda.")],
    ],
  },
  {
    no: 127,
    stimulus: [
      "Hutan kota adalah kawasan pepohonan yang ditanam di tengah kota dengan berbagai fungsi. Pepohonan menyerap karbon dioksida dan meredam kebisingan lalu lintas. Hutan kota juga menjadi habitat burung dan menurunkan suhu udara. Ruang terbuka hijau ini penting untuk menjaga keseimbangan ekosistem perkotaan.",
    ],
    prompt: S("Fungsi hutan kota yang tidak disebut dalam paragraf adalah …."),
    options: [
      { key: "A", text: "menghasilkan kayu untuk perabotan" },
      { key: "B", text: "menyerap karbon dioksida" },
      { key: "C", text: "meredam kebisingan lalu lintas" },
      { key: "D", text: "menjadi habitat burung" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Paragraf menyebut fungsi menyerap CO₂, meredam bising, menjadi habitat burung, dan menurunkan suhu.")],
      [B("Fungsi menghasilkan kayu untuk perabotan tidak disebut.")],
    ],
  },
  {
    no: 128,
    stimulus: [
      "Sumur resapan adalah lubang yang dibuat untuk menampung air hujan agar meresap ke dalam tanah. Pembuatannya membantu mencegah genangan dan banjir di permukiman. Selain itu, air yang meresap mengisi kembali air tanah. Semakin banyak sumur resapan, semakin berkurang risiko kekeringan saat musim kemarau.",
    ],
    prompt: S("Manfaat sumur resapan bagi air tanah adalah …."),
    options: [
      { key: "A", text: "membuat air tanah menjadi asin" },
      { key: "B", text: "mengalirkan air langsung ke sungai" },
      { key: "C", text: "menyaring air laut menjadi air tawar" },
      { key: "D", text: "mengisi kembali cadangan air tanah" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Paragraf menyebut air hujan yang meresap mengisi kembali air tanah.")],
      [B("Jadi sumur resapan membantu mengisi kembali cadangan air tanah.")],
    ],
  },
  {
    no: 129,
    stimulus: [
      "Catur adalah olahraga otak yang melatih kemampuan berpikir logis dan strategi. Pemain catur dituntut merencanakan langkah beberapa langkah ke depan dan mengantisipasi gerak lawan. Anak-anak yang gemar bermain catur umumnya terbiasa berpikir sebelum bertindak. Karena itu, catur kerap dijadikan kegiatan ekstrakurikuler di sekolah.",
    ],
    prompt: S("Alasan catur dijadikan kegiatan ekstrakurikuler di sekolah adalah …."),
    options: [
      { key: "A", text: "catur merupakan olahraga yang menguras tenaga fisik" },
      { key: "B", text: "catur membutuhkan peralatan yang mahal" },
      { key: "C", text: "catur melatih berpikir logis dan merencanakan langkah" },
      { key: "D", text: "catur dapat dimainkan secara perorangan maupun tim" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Catur melatih berpikir logis, strategi, dan kebiasaan berpikir sebelum bertindak.")],
      [B("Karena itu catur dijadikan ekstrakurikuler untuk melatih nalar siswa.")],
    ],
  },
  {
    no: 130,
    stimulus: [
      "Film edukasi mampu menyampaikan pesan yang rumit dengan cara yang menarik. Penonton dapat memahami peristiwa sejarah atau konsep sains melalui alur cerita dan visual. Namun, film edukasi perlu ditonton secara kritis agar tidak dianggap kebenaran mutlak. Pendampingan guru atau orang tua membantu anak memaknai isi film.",
    ],
    prompt: S("Pendampingan saat menonton film edukasi diperlukan agar …."),
    options: [
      { key: "A", text: "anak tidak meniru semua adegan dalam film" },
      { key: "B", text: "film dapat dipahami secara kritis dan tidak dianggap kebenaran mutlak" },
      { key: "C", text: "anak lebih cepat menghafal judul film" },
      { key: "D", text: "durasi menonton menjadi lebih singkat" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Film edukasi menarik, tetapi perlu ditonton kritis; pendampingan membantu anak memaknai.")],
      [B("Pendampingan diperlukan agar film dipahami secara kritis, bukan kebenaran mutlak.")],
    ],
  },
  {
    no: 131,
    stimulus: [
      "Gerakan literasi sekolah mendorong siswa membaca selama lima belas menit sebelum pelajaran. Kegiatan ini bertujuan menumbuhkan minat baca sejak dini. Setelah membaca, siswa diminta menceritakan kembali isi bacaan dengan bahasa sendiri. Guru berperan memilihkan bacaan yang sesuai dengan usia siswa.",
    ],
    prompt: S("Kegiatan yang dilakukan siswa setelah membaca dalam gerakan literasi adalah …."),
    options: [
      { key: "A", text: "mengerjakan soal ujian harian" },
      { key: "B", text: "membeli buku baru di toko" },
      { key: "C", text: "menyerahkan buku ke perpustakaan" },
      { key: "D", text: "menceritakan kembali isi bacaan dengan bahasa sendiri" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Paragraf menyebut setelah membaca, siswa menceritakan kembali isi bacaan.")],
      [B("Jadi kegiatannya: menceritakan kembali isi bacaan dengan bahasa sendiri.")],
    ],
  },
  {
    no: 132,
    stimulus: [
      "Semut hidup berkoloni dan memiliki pembagian tugas yang jelas. Ratu semut bertugas bertelur, semut pekerja mencari makan dan merawat larva, sedangkan semut prajurit menjaga sarang. Kerja sama ini membuat koloni semut mampu bertahan dan berkembang. Pola hidup semut mengajarkan pentingnya kerja sama dan pembagian peran.",
    ],
    prompt: S("Nilai yang dapat diteladani dari kehidupan semut menurut paragraf adalah …."),
    options: [
      { key: "A", text: "kerja sama dan pembagian tugas yang jelas" },
      { key: "B", text: "kemampuan bertahan hidup tanpa bantuan" },
      { key: "C", text: "kekuatan fisik yang mengalahkan musuh" },
      { key: "D", text: "kebiasaan menyimpan makanan dalam jumlah besar" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Paragraf menekankan pembagian tugas dan kerja sama dalam koloni semut.")],
      [B("Nilai yang diteladani: kerja sama dan pembagian tugas yang jelas.")],
    ],
  },
  {
    no: 133,
    stimulus: [
      "Teh herbal dibuat dari campuran bunga, daun, atau rempah kering. Berbeda dengan teh biasa, teh herbal tidak mengandung kafein sehingga aman diminum malam hari. Beberapa jenis teh herbal, seperti chamomile, dipercaya membantu tubuh lebih rileks. Kandungan antioksidannya juga baik untuk daya tahan tubuh.",
    ],
    prompt: S("Keunggulan teh herbal dibandingkan teh biasa menurut paragraf adalah …."),
    options: [
      { key: "A", text: "rasanya lebih manis karena dicampur gula" },
      { key: "B", text: "harganya jauh lebih murah di pasaran" },
      { key: "C", text: "tidak mengandung kafein sehingga aman diminum malam hari" },
      { key: "D", text: "dapat menggantikan fungsi obat-obatan medis" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Teh herbal tidak mengandung kafein, berbeda dengan teh biasa.")],
      [B("Keunggulannya: aman diminum malam hari karena tanpa kafein.")],
    ],
  },
  {
    no: 134,
    stimulus: [
      "Koperasi sekolah didirikan untuk melayani kebutuhan siswa dan menanamkan jiwa kewirausahaan. Anggota koperasi menabung dan membeli alat tulis dengan harga terjangkau. Keuntungan koperasi dikelola bersama dan sebagian menjadi kas kelas. Keanggotaan koperasi bersifat sukarela dan terbuka bagi seluruh siswa.",
    ],
    prompt: S("Ciri koperasi sekolah yang sesuai dengan paragraf adalah …."),
    options: [
      { key: "A", text: "keanggotaannya ditunjuk oleh kepala sekolah" },
      { key: "B", text: "keuntungannya menjadi milik pemilik modal" },
      { key: "C", text: "harga barangnya lebih mahal daripada di toko" },
      { key: "D", text: "keanggotaan bersifat sukarela dan terbuka bagi semua siswa" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Paragraf menyebut keanggotaan koperasi sukarela dan terbuka bagi seluruh siswa.")],
      [B("Ciri yang sesuai: keanggotaan sukarela dan terbuka.")],
    ],
  },
  {
    no: 135,
    stimulus: [
      "Kompos adalah pupuk alami yang berasal dari pelapukan sisa tanaman dan kotoran hewan. Penggunaan kompos memperbaiki struktur tanah dan meningkatkan kemampuan tanah menyimpan air. Berbeda dengan pupuk kimia, kompos tidak merusak mikroorganisme tanah. Petani yang menggunakan kompos memperoleh hasil panen yang sehat dengan biaya lebih hemat.",
    ],
    prompt: S("Dampak penggunaan kompos bagi tanah menurut paragraf adalah …."),
    options: [
      { key: "A", text: "memperbaiki struktur tanah dan meningkatkan kemampuannya menyimpan air" },
      { key: "B", text: "menggantikan seluruh fungsi mikroorganisme tanah" },
      { key: "C", text: "membuat tanah menjadi lebih padat dan kering" },
      { key: "D", text: "meningkatkan keasaman tanah secara drastis" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Kompos memperbaiki struktur tanah dan meningkatkan daya simpan air.")],
      [B("Dampaknya bagi tanah: struktur membaik dan kemampuan menyimpan air meningkat.")],
    ],
  },
  {
    no: 136,
    stimulus: [
      "Cerita rakyat berkembang secara lisan dari generasi ke generasi. Tokoh dalam cerita rakyat sering berupa hewan atau manusia dengan kekuatan luar biasa. Di balik alurnya yang sederhana, cerita rakyat menyimpan pesan moral dan asal-usul suatu tempat. Oleh karena itu, cerita rakyat perlu dilestarikan sebagai bagian dari budaya.",
    ],
    prompt: S("Alasan cerita rakyat perlu dilestarikan adalah …."),
    options: [
      { key: "A", text: "cerita rakyat memiliki alur yang paling rumit" },
      { key: "B", text: "cerita rakyat ditulis oleh pengarang terkenal" },
      { key: "C", text: "cerita rakyat menyimpan pesan moral dan asal-usul suatu tempat" },
      { key: "D", text: "cerita rakyat menggunakan bahasa asing yang indah" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Cerita rakyat menyimpan pesan moral dan asal-usul tempat.")],
      [B("Karena itu cerita rakyat perlu dilestarikan sebagai budaya.")],
    ],
  },
  {
    no: 137,
    stimulus: [
      "Tempe adalah makanan fermentasi khas Indonesia yang berbahan dasar kedelai. Proses fermentasi melibatkan jamur Rhizopus yang merekatkan biji kedelai menjadi padat. Tempe kaya protein dan lebih mudah dicerna daripada kedelai mentah. Harganya yang murah menjadikan tempe sumber protein utama masyarakat.",
    ],
    prompt: S("Pernyataan sebab akibat yang sesuai dengan paragraf adalah …."),
    options: [
      { key: "A", text: "Kedelai mentah lebih mudah dicerna daripada tempe." },
      { key: "B", text: "Karena harganya murah, tempe menjadi sumber protein utama masyarakat." },
      { key: "C", text: "Jamur Rhizopus menyebabkan kedelai membusuk dan tidak layak makan." },
      { key: "D", text: "Tempe kaya protein sehingga harganya sangat mahal." },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Paragraf menyebut harga tempe murah, sehingga menjadi sumber protein utama.")],
      [B("Hubungan sebab akibat: karena murah, tempe jadi sumber protein utama masyarakat.")],
    ],
  },
  {
    no: 138,
    stimulus: [
      "Penggunaan kendaraan pribadi menyebabkan kemacetan dan polusi udara di kota. Salah satu solusinya adalah beralih ke transportasi umum, seperti bus dan kereta. Transportasi umum mampu mengangkut banyak penumpang dalam satu kali perjalanan. Agar warga tertarik, pelayanan transportasi umum harus nyaman, aman, dan tepat waktu.",
    ],
    prompt: S("Agar warga tertarik beralih ke transportasi umum, hal yang harus diperbaiki adalah …."),
    options: [
      { key: "A", text: "menambah jumlah kendaraan pribadi di jalan" },
      { key: "B", text: "menaikkan tarif pada jam sibuk" },
      { key: "C", text: "membatasi jam operasional bus" },
      { key: "D", text: "meningkatkan kenyamanan, keamanan, dan ketepatan waktu" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Kalimat terakhir: pelayanan transportasi umum harus nyaman, aman, dan tepat waktu agar warga tertarik.")],
      [B("Jadi perbaikannya: meningkatkan kenyamanan, keamanan, dan ketepatan waktu.")],
    ],
  },
  {
    no: 139,
    stimulus: [
      "Minyak bumi merupakan sumber energi yang tidak dapat diperbarui. Proses pembentukannya membutuhkan jutaan tahun dari pelapukan organisme purba. Jika terus dikonsumsi tanpa penghematan, cadangan minyak bumi akan habis. Karena itu, diperlukan transisi ke energi terbarukan yang lebih ramah lingkungan.",
    ],
    prompt: S("Makna sumber energi yang tidak dapat diperbarui adalah …."),
    options: [
      { key: "A", text: "energi yang persediaannya terbatas dan tidak dapat diisi ulang dalam waktu singkat" },
      { key: "B", text: "energi yang selalu tersedia melimpah di alam" },
      { key: "C", text: "energi yang dapat diproduksi dari sampah rumah tangga" },
      { key: "D", text: "energi yang tidak menimbulkan pencemaran sama sekali" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Minyak bumi terbentuk jutaan tahun sehingga persediaannya tidak cepat pulih.")],
      [B("Tidak dapat diperbarui = persediaan terbatas dan tidak cepat terisi ulang.")],
    ],
  },
  {
    no: 140,
    stimulus: [
      "Pohon pisang memiliki banyak bagian yang bermanfaat. Buahnya dapat dimakan langsung atau diolah, daunnya dipakai sebagai pembungkus makanan, dan batangnya dimanfaatkan untuk pakan ternak. Bahkan, bonggol pisang dapat diolah menjadi keripik. Dengan demikian, hampir seluruh bagian pohon pisang dapat digunakan.",
    ],
    prompt: S("Simpulan yang tepat berdasarkan paragraf adalah …."),
    options: [
      { key: "A", text: "Pohon pisang hanya menghasilkan buah yang dapat dimakan." },
      { key: "B", text: "Pohon pisang sulit dibudidayakan di Indonesia." },
      { key: "C", text: "Hampir seluruh bagian pohon pisang dapat dimanfaatkan." },
      { key: "D", text: "Daun pisang lebih bermanfaat daripada buahnya." },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Paragraf merinci manfaat buah, daun, batang, hingga bonggol pisang.")],
      [B("Simpulannya: hampir seluruh bagian pohon pisang dapat dimanfaatkan.")],
    ],
  },
  {
    no: 141,
    stimulus: [
      "Dalam organisasi, delegasi adalah pemberian wewenang kepada orang lain untuk mengerjakan suatu tugas. Pemimpin yang baik tidak mengerjakan semua pekerjaan sendiri. Ia membagi tugas sesuai kemampuan anggota sambil tetap memberikan arahan. Dengan delegasi yang tepat, pekerjaan menjadi lebih ringan dan anggota belajar bertanggung jawab.",
    ],
    prompt: S("Manfaat delegasi yang tepat bagi anggota organisasi adalah …."),
    options: [
      { key: "A", text: "anggota terbebas dari semua tanggung jawab" },
      { key: "B", text: "pemimpin tidak perlu memberikan arahan lagi" },
      { key: "C", text: "pekerjaan diselesaikan oleh pemimpin seorang diri" },
      { key: "D", text: "anggota belajar bertanggung jawab dan pekerjaan lebih ringan" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Delegasi membuat pekerjaan ringan dan anggota belajar bertanggung jawab.")],
      [B("Manfaatnya: anggota belajar tanggung jawab dan beban kerja terbagi.")],
    ],
  },
  {
    no: 142,
    stimulus: [
      "Lebah dan kupu-kupu berperan sebagai penyerbuk tanaman. Saat hinggap untuk mengambil nektar, serbuk sari menempel pada tubuhnya dan terbawa ke bunga lain. Proses ini membantu tanaman berbuah dan berbiji. Menurunnya populasi serangga penyerbuk akibat pestisida mengancam produksi pangan dunia.",
    ],
    prompt: S("Akibat menurunnya populasi serangga penyerbuk adalah …."),
    options: [
      { key: "A", text: "produksi pangan dunia terancam" },
      { key: "B", text: "tanaman menjadi lebih cepat berbunga" },
      { key: "C", text: "nektar bunga semakin melimpah" },
      { key: "D", text: "serbuk sari tidak lagi menempel pada lebah" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Kalimat terakhir: menurunnya populasi penyerbuk mengancam produksi pangan.")],
      [B("Jadi akibatnya produksi pangan dunia terancam.")],
    ],
  },
  {
    no: 143,
    stimulus: [
      "Sebagian peternak ayam petelur menggunakan kandang baterai yang sempit. Ayam hanya mampu berdiri dan tidak leluasa bergerak. Kondisi ini dinilai tidak manusiawi dan memicu stres pada ayam. Kini mulai dikembangkan kandang bebas atau free range yang memberikan ruang gerak lebih luas bagi ayam.",
    ],
    prompt: S("Kandang free range memiliki kelebihan dibandingkan kandang baterai karena …."),
    options: [
      { key: "A", text: "memerlukan lahan yang paling sempit" },
      { key: "B", text: "memudahkan peternak mengontrol pakan ayam" },
      { key: "C", text: "memberikan ruang gerak yang lebih luas bagi ayam" },
      { key: "D", text: "menghasilkan telur dalam jumlah paling banyak" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Kandang free range memberi ruang gerak lebih luas bagi ayam.")],
      [B("Kelebihannya: ayam bebas bergerak, tidak seperti kandang baterai yang sempit.")],
    ],
  },
  {
    no: 144,
    stimulus: [
      "Noken adalah tas anyaman khas Papua yang terbuat dari serat kayu atau daun. Tas ini dibawa dengan cara digantung di kepala. Noken telah diakui UNESCO sebagai warisan budaya tak benda. Namun, regenerasi pengrajin noken semakin berkurang karena generasi muda lebih tertarik pada tas modern.",
    ],
    prompt: S("Masalah yang dihadapi dalam pelestarian noken adalah …."),
    options: [
      { key: "A", text: "bahan baku noken sudah tidak tersedia" },
      { key: "B", text: "UNESCO mencabut pengakuan terhadap noken" },
      { key: "C", text: "pemerintah melarang pembuatan noken" },
      { key: "D", text: "regenerasi pengrajin noken semakin berkurang" },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Kalimat terakhir menyebut regenerasi pengrajin noken berkurang.")],
      [B("Masalahnya: generasi muda kurang tertarik sehingga pengrajin tidak bertambah.")],
    ],
  },
  {
    no: 145,
    stimulus: [
      "Tubuh manusia sebagian besar terdiri atas air. Kekurangan cairan dapat menyebabkan dehidrasi yang membuat tubuh lemas dan sulit berkonsentrasi. Minum air putih secara cukup membantu melancarkan pencernaan dan menjaga suhu tubuh. Kebutuhan air setiap orang berbeda, tergantung usia dan aktivitasnya.",
    ],
    prompt: S("Dampak kekurangan cairan bagi tubuh menurut paragraf adalah …."),
    options: [
      { key: "A", text: "tubuh lemas dan sulit berkonsentrasi" },
      { key: "B", text: "pencernaan menjadi lebih lancar" },
      { key: "C", text: "suhu tubuh meningkat drastis" },
      { key: "D", text: "tubuh terasa lebih bertenaga" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Dehidrasi akibat kekurangan cairan membuat tubuh lemas dan sulit berkonsentrasi.")],
      [B("Dampaknya: tubuh lemas dan sulit berkonsentrasi.")],
    ],
  },
  {
    no: 146,
    stimulus: [
      "Kain tenun tradisional dibuat dengan alat tenun bukan mesin. Proses menenun membutuhkan ketelitian dan waktu yang lama. Setiap daerah memiliki motif tenun khas yang mengandung makna. Melestarikan kain tenun berarti menjaga warisan budaya sekaligus memberdayakan perajin lokal.",
    ],
    prompt: S("Pernyataan yang merupakan opini penulis adalah …."),
    options: [
      { key: "A", text: "Kain tenun dibuat dengan alat tenun bukan mesin." },
      { key: "B", text: "Melestarikan kain tenun berarti menjaga warisan budaya sekaligus memberdayakan perajin." },
      { key: "C", text: "Setiap daerah memiliki motif tenun khas." },
      { key: "D", text: "Proses menenun membutuhkan ketelitian dan waktu lama." },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Pernyataan A, C, dan D merupakan fakta yang dapat diamati/diukur.")],
      [B("Opini penulis: pelestarian kain tenun 'berarti' menjaga budaya dan memberdayakan perajin.")],
    ],
  },
  {
    no: 147,
    stimulus: [
      "Sabut kelapa sering dianggap limbah, padahal dapat diolah menjadi berbagai produk bernilai. Serat sabut kelapa dapat dijadikan keset, sikat, dan media tanam. Air kelapa dan tempurungnya pun masih memiliki nilai ekonomi. Pemanfaatan sabut kelapa mengurangi limbah pertanian dan menambah penghasilan petani.",
    ],
    prompt: S("Pernyataan yang sesuai dengan isi paragraf adalah …."),
    options: [
      { key: "A", text: "Sabut kelapa tidak memiliki nilai ekonomi sama sekali." },
      { key: "B", text: "Sabut kelapa hanya dapat dijadikan media tanam." },
      { key: "C", text: "Pengolahan sabut kelapa menambah volume limbah pertanian." },
      { key: "D", text: "Sabut kelapa dapat diolah menjadi keset, sikat, dan media tanam." },
    ],
    answer: "D",
    explanationTitle: "Jawaban: D",
    explanation: [
      [P("Paragraf menyebut sabut kelapa dapat menjadi keset, sikat, dan media tanam.")],
      [B("Jadi pernyataan yang sesuai: sabut kelapa diolah menjadi keset, sikat, dan media tanam.")],
    ],
  },
  {
    no: 148,
    stimulus: [
      "Ekosistem sawah merupakan rantai makanan yang saling terhubung. Padi dimakan tikus, tikus dimakan ular, dan ular dimakan elang. Jika petani membasmi tikus secara berlebihan dengan racun, ular kehilangan sumber makanan. Racun juga dapat meracuni ular dan elang melalui rantai makanan.",
    ],
    prompt: S("Dampak pembasmian tikus secara berlebihan menurut paragraf adalah …."),
    options: [
      { key: "A", text: "populasi padi meningkat pesat" },
      { key: "B", text: "elang mendapatkan makanan lebih banyak" },
      { key: "C", text: "ular kehilangan sumber makanan dan racun meracuni hewan lain" },
      { key: "D", text: "ekosistem sawah menjadi lebih seimbang" },
    ],
    answer: "C",
    explanationTitle: "Jawaban: C",
    explanation: [
      [P("Tikus adalah makanan ular; racun tikus juga meracuni ular dan elang lewat rantai makanan.")],
      [B("Dampaknya: ular kehilangan makanan dan racun menjalar ke hewan lain.")],
    ],
  },
  {
    no: 149,
    stimulus: [
      "Kunjungan ke museum sering dianggap membosankan oleh sebagian pelajar. Padahal, museum menyimpan benda bersejarah yang dapat memperkaya pengetahuan. Banyak museum kini menyediakan pemandu dan kegiatan interaktif agar pengunjung lebih tertarik. Dinas pendidikan pun mendorong sekolah mengadakan kunjungan ke museum.",
    ],
    prompt: S("Cara museum menarik minat pelajar menurut paragraf adalah …."),
    options: [
      { key: "A", text: "menyediakan pemandu dan kegiatan interaktif" },
      { key: "B", text: "menambah jumlah benda koleksi yang tersimpan" },
      { key: "C", text: "melarang pengunjung mengambil foto koleksi" },
      { key: "D", text: "menaikkan harga tiket masuk museum" },
    ],
    answer: "A",
    explanationTitle: "Jawaban: A",
    explanation: [
      [P("Museum menyediakan pemandu dan kegiatan interaktif agar pengunjung tertarik.")],
      [B("Caranya: pemandu dan kegiatan interaktif.")],
    ],
  },
  {
    no: 150,
    stimulus: [
      "Kentang merupakan makanan pokok pengganti beras yang mengandung karbohidrat. Di beberapa daerah, kentang diolah menjadi keripik yang bernilai ekonomi tinggi. Selain itu, kulit kentang mengandung serat yang baik untuk pencernaan. Dengan pengolahan yang tepat, kentang dapat menjadi peluang usaha bagi masyarakat.",
    ],
    prompt: S("Kata karbohidrat pada paragraf tersebut mengacu pada …."),
    options: [
      { key: "A", text: "protein yang membangun jaringan tubuh" },
      { key: "B", text: "zat gizi penghasil energi utama bagi tubuh" },
      { key: "C", text: "vitamin yang menjaga daya tahan tubuh" },
      { key: "D", text: "mineral yang menguatkan tulang" },
    ],
    answer: "B",
    explanationTitle: "Jawaban: B",
    explanation: [
      [P("Karbohidrat adalah zat gizi yang diubah tubuh menjadi energi.")],
      [B("Karbohidrat = zat gizi penghasil energi utama bagi tubuh.")],
    ],
  },
];
