const wordList = [
    {
        word: "gitar",
        hint: "Sebuah alat musik yang memiliki senar."
    },
    {
        word: "oksigen",
        hint: "Gas tak berwarna dan tidak berbau yang penting untuk kehidupan."
    },
    {
        word: "gunung",
        hint: "Sebuah elevasi alami besar dari permukaan Bumi."
    },
    {
        word: "lukisan",
        hint: "Seni menggunakan warna pada permukaan untuk menciptakan gambar atau ekspresi."
    },
    {
        word: "astronomi",
        hint: "Studi ilmiah tentang objek dan fenomena langit."
    },
    {
        word: "sepak bola",
        hint: "Olahraga populer yang dimainkan dengan bola bulat."
    },
    {
        word: "cokelat",
        hint: "Makanan manis yang terbuat dari biji kakao."
    },
    {
        word: "kupu-kupu",
        hint: "Serangga dengan sayap berwarna-warni dan tubuh ramping."
    },
    {
        word: "sejarah",
        hint: "Studi tentang peristiwa masa lalu dan peradaban manusia."
    },
    {
        word: "pizza",
        hint: "Hidangan gurih yang terdiri dari dasar bulat yang datar dengan topping."
    },
    {
        word: "jazz",
        hint: "Genre musik yang ditandai dengan improvisasi dan sinkopasi."
    },
    {
        word: "kamera",
        hint: "Alat yang digunakan untuk menangkap dan merekam gambar atau video."
    },
    {
        word: "berlian",
        hint: "Batu permata berharga yang dikenal karena kilau dan kekerasannya."
    },
    {
        word: "petualangan",
        hint: "Pengalaman yang menarik atau berani."
    },
    {
        word: "sains",
        hint: "Studi sistematis tentang struktur dan perilaku dunia fisik dan alami."
    },
    {
        word: "sepeda",
        hint: "Kendaraan yang digerakkan oleh manusia dengan dua roda."
    },
    {
        word: "matahari terbenam",
        hint: "Kehilangan harian matahari di bawah cakrawala."
    },
    {
        word: "kopi",
        hint: "Minuman berkafein populer yang terbuat dari biji kopi yang dipanggang."
    },
    {
        word: "tari",
        hint: "Gerakan ritmis tubuh yang sering dilakukan dengan musik."
    },
    {
        word: "galaksi",
        hint: "Sistem luas bintang, gas, dan debu yang diikat oleh gravitasi."
    },
    {
        word: "orkestra",
        hint: "Ensemble besar musisi yang memainkan berbagai alat musik."
    },
    {
        word: "gunung berapi",
        hint: "Gunung atau bukit dengan saluran tempat lava, fragmen batu, uap panas, dan gas dikeluarkan."
    },
    {
        word: "novel",
        hint: "Karya fiksi panjang, biasanya dengan plot dan karakter yang kompleks."
    },
    {
        word: "patung",
        hint: "Bentuk seni tiga dimensi yang dibuat dengan membentuk atau menggabungkan bahan."
    },
    {
        word: "symphony",
        hint: "Komposisi musik panjang untuk orkestra penuh, biasanya dalam beberapa gerakan."
    },
    {
        word: "arsitektur",
        hint: "Seni dan ilmu merancang dan membangun bangunan."
    },
    {
        word: "ballet",
        hint: "Bentuk tari klasik yang ditandai dengan gerakan yang tepat dan anggun."
    },
    {
        word: "astronot",
        hint: "Orang yang dilatih untuk bepergian dan bekerja di luar angkasa."
    },
    {
        word: "air terjun",
        hint: "Aliran air yang jatuh dari ketinggian."
    },
    {
        word: "teknologi",
        hint: "Penerapan pengetahuan ilmiah untuk tujuan praktis."
    },
    {
        word: "pelangi",
        hint: "Fenomena meteorologi yang disebabkan oleh refleksi, refraksi, dan dispersi cahaya."
    },
    {
        word: "alam semesta",
        hint: "Semua materi, ruang, dan waktu yang ada sebagai keseluruhan."
    },
    {
        word: "piano",
        hint: "Alat musik yang dimainkan dengan menekan tuts yang menyebabkan palu memukul senar."
    },
    {
        word: "liburan",
        hint: "Periode waktu yang didedikasikan untuk kesenangan, istirahat, atau relaksasi."
    },
    {
        word: "hutan hujan",
        hint: "Hutan lebat yang ditandai dengan curah hujan tinggi dan keanekaragaman hayati."
    },
    {
        word: "teater",
        hint: "Bangunan atau area luar ruangan di mana pertunjukan, film, atau pertunjukan lainnya dipentaskan."
    },
    {
        word: "telepon",
        hint: "Alat yang digunakan untuk mentransmisikan suara jarak jauh."
    },
    {
        word: "bahasa",
        hint: "Sistem komunikasi yang terdiri dari kata-kata, isyarat, dan sintaksis."
    },
    {
        word: "gurun",
        hint: "Tanah tandus atau kering dengan sedikit atau tanpa curah hujan."
    },
    {
        word: "bunga matahari",
        hint: "Tanaman tinggi dengan kepala bunga kuning besar."
    },
    {
        word: "fantasi",
        hint: "Genre fiksi imajinatif yang melibatkan sihir dan elemen supernatural."
    },
    {
        word: "teleskop",
        hint: "Alat optik yang digunakan untuk melihat objek jauh di luar angkasa."
    },
    {
        word: "angin sepoi-sepoi",
        hint: "Angin lembut."
    },
    {
        word: "oasis",
        hint: "Tempat subur di gurun di mana air ditemukan."
    },
    {
        word: "fotografi",
        hint: "Seni, proses, atau praktik menciptakan gambar dengan merekam cahaya atau radiasi elektromagnetik lainnya."
    },
    {
        word: "safari",
        hint: "Ekspedisi atau perjalanan, biasanya untuk mengamati satwa liar di habitat alami mereka."
    },
    {
        word: "planet",
        hint: "Benda langit yang mengorbit bintang dan tidak memproduksi cahaya sendiri."
    },
    {
        word: "sungai",
        hint: "Aliran air alami besar yang mengalir dalam saluran menuju laut, danau, atau aliran lainnya."
    },
    {
        word: "tropis",
        hint: "Berkaitan dengan atau terletak di wilayah antara Garis Balik Utara dan Garis Balik Selatan."
    },
    {
        word: "misterius",
        hint: "Sulit atau tidak mungkin untuk dipahami, dijelaskan, atau diidentifikasi."
    },
    {
        word: "enigma",
        hint: "Sesuatu yang misterius, membingungkan, atau sulit dipahami."
    },
    {
        word: "paradoks",
        hint: "Pernyataan atau situasi yang saling bertentangan atau melawan intuisi."
    },
    {
        word: "teka-teki",
        hint: "Permainan, mainan, atau masalah yang dirancang untuk menguji kecerdikan atau pengetahuan."
    },
    {
        word: "bisikan",
        hint: "Berbicara dengan sangat lembut atau pelan, seringkali dengan cara yang rahasia."
    },
    {
        word: "bayangan",
        hint: "Area atau bentuk gelap yang dihasilkan oleh objek yang menghalangi cahaya."
    },
    {
        word: "rahasia",
        hint: "Sesuatu yang disimpan tersembunyi atau tidak diketahui orang lain."
    },
    {
        word: "rasa ingin tahu",
        hint: "Keinginan yang kuat untuk mengetahui atau belajar sesuatu."
    },
    {
        word: "tidak terduga",
        hint: "Tidak dapat diprediksi atau diketahui sebelumnya; tidak pasti."
    },
    {
        word: "mengaburkan",
        hint: "Membingungkan atau membingungkan seseorang; membuat sesuatu tidak jelas atau sulit dipahami."
    },
    {
        word: "mengungkap",
        hint: "Membuat sesuatu yang sebelumnya rahasia atau tidak diketahui menjadi diketahui."
    },
    {
        word: "ilusi",
        hint: "Persepsi atau keyakinan yang salah; penampilan atau kesan yang menipu."
    },
    {
        word: "cahaya bulan",
        hint: "Cahaya dari bulan."
    },
    {
        word: "bersemangat",
        hint: "Penuh energi, kecerahan, dan kehidupan."
    },
    {
        word: "nostalgia",
        hint: "Kerinduan sentimental atau kasih sayang yang penuh harapan untuk masa lalu."
    },
    {
        word: "brilian",
        hint: "Sangat cerdas, berbakat, atau mengesankan."
    },
    {
        word: "komputer",
        hint: "Sebuah perangkat elektronik yang dapat memproses data dan menjalankan program."
    },
    {
        word: "laut",
        hint: "Badan air besar yang menutupi sebagian besar permukaan Bumi."
    },
    {
        word: "buku",
        hint: "Kumpulan halaman yang berisi teks atau gambar, biasanya dijilid."
    },
    {
        word: "mobil",
        hint: "Kendaraan bermotor yang digunakan untuk transportasi di darat."
    },
    {
        word: "internet",
        hint: "Jaringan global yang menghubungkan komputer dan perangkat di seluruh dunia."
    },
    {
        word: "kucing",
        hint: "Hewan peliharaan kecil yang dikenal karena sifatnya yang mandiri dan lucu."
    },
    {
        word: "pohon",
        hint: "Tanaman besar dengan batang kayu yang biasanya memiliki cabang dan daun."
    },
    {
        word: "bintang",
        hint: "Benda langit yang bersinar di malam hari, biasanya merupakan bola gas yang sangat panas."
    },
    {
        word: "sepatu",
        hint: "Alat pelindung kaki yang biasanya terbuat dari kulit atau bahan sintetis."
    },
    {
        word: "kue",
        hint: "Makanan manis yang biasanya dipanggang dan terbuat dari tepung, gula, dan bahan lainnya."
    },
    {
        word: "kamera",
        hint: "Alat yang digunakan untuk mengambil foto atau merekam video."
    },
    {
        word: "sandal",
        hint: "Sepatu terbuka yang biasanya digunakan di rumah atau saat cuaca panas."
    },
    {
        word: "televisi",
        hint: "Perangkat yang digunakan untuk menampilkan gambar bergerak dan suara."
    },
    {
        word: "bunga",
        hint: "Bagian dari tanaman yang biasanya berwarna-warni dan berfungsi untuk reproduksi."
    },
    {
        word: "kulkas",
        hint: "Perangkat yang digunakan untuk menyimpan makanan dan minuman agar tetap dingin."
    },
    {
        word: "jendela",
        hint: "Lubang pada dinding yang dilengkapi dengan kaca untuk membiarkan cahaya masuk."
    },
    {
        word: "peta",
        hint: "Representasi grafis dari area geografis, menunjukkan lokasi dan fitur."
    },
    {
        word: "sinar",
        hint: "Cahaya yang dipancarkan oleh sumber cahaya, seperti matahari atau lampu."
    },
    {
        word: "kebun",
        hint: "Area tanah yang ditanami dengan berbagai jenis tanaman, biasanya untuk tujuan hiasan atau pertanian."
    },
    {
        word: "baterai",
        hint: "Sumber energi yang menyimpan listrik untuk digunakan dalam perangkat elektronik."
    },
    {
        word: "kunci",
        hint: "Alat yang digunakan untuk membuka atau mengunci pintu atau benda lainnya."
    },
    {
        word: "piring",
        hint: "Wadah datar yang digunakan untuk menyajikan makanan."
    },
    {
        word: "lampu",
        hint: "Perangkat yang menghasilkan cahaya, biasanya menggunakan listrik."
    },
    {
        word: "kertas",
        hint: "Bahan tipis yang terbuat dari serat tanaman, digunakan untuk menulis atau mencetak."
    },
    {
        word: "gitar",
        hint: "Alat musik petik yang memiliki enam senar."
    },
    {
        word: "kulkas",
        hint: "Perangkat yang digunakan untuk menyimpan makanan dan minuman agar tetap dingin."
    },
    {
        word: "susu",
        hint: "Minuman putih yang dihasilkan oleh mamalia, kaya akan kalsium."
    },
    {
        word: "biskuit",
        hint: "Makanan ringan yang biasanya renyah dan manis."
    },
    {
        word: "kacamata",
        hint: "Alat bantu penglihatan yang digunakan untuk memperbaiki penglihatan."
    },
    {
        word: "piano",
        hint: "Alat musik yang dimainkan dengan menekan tuts untuk menghasilkan nada."
    },
    {
        word: "kulkas",
        hint: "Perangkat yang digunakan untuk menyimpan makanan dan minuman agar tetap dingin."
    },
    {
        word: "sandal",
        hint: "Sepatu terbuka yang biasanya digunakan di rumah atau saat cuaca panas."
    },
    {
        word: "komputer",
        hint: "Sebuah perangkat elektronik yang dapat memproses data dan menjalankan program."
    },
    {
        word: "buku",
        hint: "Kumpulan halaman yang berisi teks atau gambar, biasanya dijilid."
    },
    {
        word: "laut",
        hint: "Badan air besar yang menutupi sebagian besar permukaan Bumi."
    },
];
