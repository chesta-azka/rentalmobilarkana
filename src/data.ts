import { Vehicle, Testimonial, FAQItem, ServiceItem, CompanyStat, ClientBrand } from './types';

export const VEHICLES: Vehicle[] = [
  {
    id: 'alphard',
    name: 'Toyota Alphard HEV',
    brand: 'Toyota',
    type: 'Luxury',
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=800',
    priceSelfDrive: 2500000,
    priceWithDriver: 3200000,
    transmission: 'Automatic',
    capacity: 7,
    fuel: 'Hybrid',
    year: '2024',
    isPopular: true,
    features: ['Captain Seats', 'Dual Sunroof', 'JBL Audio System', 'Wireless Charger', 'Pre-Collision System']
  },
  {
    id: 'palisade',
    name: 'Hyundai Palisade Signature',
    brand: 'Hyundai',
    type: 'Luxury',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=800',
    priceSelfDrive: 1800000,
    priceWithDriver: 2400000,
    transmission: 'Automatic',
    capacity: 7,
    fuel: 'Diesel',
    year: '2023',
    isPopular: true,
    features: ['Ventilated Seats', 'Panoramic Sunroof', 'Heads-up Display', 'All-Wheel Drive', 'SmartSense Safety']
  },
  {
    id: 'fortuner',
    name: 'Toyota Fortuner GR Sport',
    brand: 'Toyota',
    type: 'SUV',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800',
    priceSelfDrive: 1200000,
    priceWithDriver: 1600000,
    transmission: 'Automatic',
    capacity: 7,
    fuel: 'Diesel',
    year: '2024',
    isPopular: true,
    features: ['Leather Seats', '4x4 System', 'Power Tailgate', '360° Camera', 'Elegant Body Kit']
  },
  {
    id: 'zenix',
    name: 'Toyota Innova Zenix Hybrid',
    brand: 'Toyota',
    type: 'MPV',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800',
    priceSelfDrive: 850000,
    priceWithDriver: 1200000,
    transmission: 'CVT',
    capacity: 7,
    fuel: 'Hybrid',
    year: '2024',
    isPopular: true,
    features: ['Panoramic Roof', 'TSS Safety Suite', 'Otto Mode Seats', 'Rear Seat Entertainment', 'Eco & Power Mode']
  },
  {
    id: 'stargazer',
    name: 'Hyundai Stargazer Prime',
    brand: 'Hyundai',
    type: 'MPV',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
    priceSelfDrive: 450000,
    priceWithDriver: 700000,
    transmission: 'CVT',
    capacity: 7,
    fuel: 'Bensin',
    year: '2023',
    isPopular: false,
    features: ['Captain Seat Layout', 'Wireless Charger', 'Lane Keeping Assist', 'Tire Pressure Monitor', 'Ambient Lighting']
  },
  {
    id: 'avanza',
    name: 'Toyota All New Avanza Veloz',
    brand: 'Toyota',
    type: 'MPV',
    image: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=800',
    priceSelfDrive: 400000,
    priceWithDriver: 600000,
    transmission: 'Automatic',
    capacity: 7,
    fuel: 'Bensin',
    year: '2023',
    isPopular: false,
    features: ['Smart Connectivity', 'ISOFIX Seat', 'Hill Start Assist', 'Digital AC', 'Flexible Sofabed Mode']
  },
  {
    id: 'brio',
    name: 'Honda Brio RS Urbanite',
    brand: 'Honda',
    type: 'City Car',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800',
    priceSelfDrive: 350000,
    priceWithDriver: 550000,
    transmission: 'Automatic',
    capacity: 5,
    fuel: 'Bensin',
    year: '2024',
    isPopular: false,
    features: ['Compact Parking Able', 'Sleek Sporty Styling', 'Touchscreen Head Unit', 'Active Fuel Eco System', 'Agile Cornering']
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'daily',
    title: 'Rental Harian',
    description: 'Solusi transportasi flexible untuk perjalanan bisnis, liburan keluarga, ataupun urusan mendadak Anda di dalam kota.',
    iconName: 'Calendar',
    features: ['Durasi terhitung per 12 atau 24 jam', 'Pilihan Lepas Kunci / Dengan Sopir', 'Kondisi tangki selalu prima']
  },
  {
    id: 'weekly',
    title: 'Rental Mingguan',
    description: 'Paket sewa lebih ekonomis bagi wisatawan atau pebisnis yang memerlukan mobilitas tinggi selama beberapa hari.',
    iconName: 'CalendarRange',
    features: ['Tarif jauh lebih murah dibanding harian', 'Gratis antar-jemput unit sewa', 'Dukungan darurat jalan raya 24/7']
  },
  {
    id: 'monthly',
    title: 'Rental Bulanan',
    description: 'Pilihan terbaik untuk ekspatriat, kebutuhan operasional proyek, atau corporate client dengan skema hemat berkelanjutan.',
    iconName: 'CalendarDays',
    features: ['Kontrak sewa fleksibel bulanan', 'Perawatan berkala ditanggung penuh', 'Disediakan unit pengganti jika servis']
  },
  {
    id: 'driver',
    title: 'Sewa Dengan Sopir',
    description: 'Nikmati perjalanan tanpa lelah. Sopir profesional kami yang santun, rapi, dan terlatih siap mengantar Anda dengan aman.',
    iconName: 'UserCheck',
    features: ['Driver berpengalaman & berlisensi resmi', 'Memahami rute jalan tercepat & wisata', 'Bilingual (Bahasa & English basic)']
  },
  {
    id: 'self-drive',
    title: 'Sewa Lepas Kunci',
    description: 'Bagi Anda yang menyukai privasi penuh serta keleluasaan dalam mengemudi sendiri ke manapun tujuan perjalanan Anda.',
    iconName: 'Key',
    features: ['Privasi maksimal bersama keluarga', 'Sistem verifikasi data yang cepat', 'Asuransi komprehensif opsional']
  },
  {
    id: 'airport',
    title: 'Antar Jemput Bandara',
    description: 'Layanan transfer andalan menuju atau dari bandara udara terdekat untuk memastikan Anda sampai tepat waktu tanpa stres.',
    iconName: 'PlaneTakeoff',
    features: ['Penjemputan tepat waktu terjamin', 'Bantuan penanganan bagasi bawaan', 'Monitor delay jadwal penerbangan']
  },
  {
    id: 'corporate',
    title: 'Corporate Transportation',
    description: 'Penyediaan armada khusus operasional perusahaan demi efisiensi mobilitas staf, delegasi, maupun kunjungan direksi.',
    iconName: 'Briefcase',
    features: ['Skema pembayaran invoicing bulanan', 'Standardisasi armada seragam & steril', 'Penyediaan driver berpakaian rapi']
  },
  {
    id: 'wedding',
    title: 'Wedding & Event Car',
    description: 'Sempurnakan hari istimewa Pernikahan, Konser, Kenegaraan, maupun Event Organizer mewah Anda dengan armada termodern.',
    iconName: 'Heart',
    features: ['Termasuk dekorasi bunga premium', 'Driver VIP khusus bersetelan formal', 'Manajemen timeline acara ketat']
  }
];

export const ADVANTAGES = [
  {
    id: 1,
    title: 'Armada Selalu Terawat',
    description: 'Setiap mobil melalui inspeksi rutin 40 titik standar manufaktur dan pembersihan higienis sebelum diserahkan kepada Anda.',
    iconName: 'ShieldCheck'
  },
  {
    id: 2,
    title: 'Driver Profesional',
    description: 'Driver kami melalui pelatihan berkendara defensif (defensive driving), ramah, tepat waktu, dan memiliki catatan berkendara yang aman.',
    iconName: 'Award'
  },
  {
    id: 3,
    title: 'Harga Transparan',
    description: 'Tidak ada biaya tersembunyi. Semua tarif yang Anda lihat adalah harga final sesuai kesepakatan awal pemesanan.',
    iconName: 'Sparkles'
  },
  {
    id: 4,
    title: 'Booking Mudah & Cepat',
    description: 'Sistem reservasi online modern terintegrasi WhatsApp yang responsif, selesai dalam waktu kurang dari 5 menit.',
    iconName: 'Smartphone'
  },
  {
    id: 5,
    title: 'Asuransi Kendaraan',
    description: 'Seluruh armada kami dilindungi oleh asuransi All-Risk demi kenyamanan dan perlindungan finansial perjalanan Anda.',
    iconName: 'HeartHandshake'
  },
  {
    id: 6,
    title: 'Support 24/7 Nonstop',
    description: 'Layanan darurat jalan raya dan customer service siaga 24 jam sehari untuk membantu kendala perjalanan Anda kapan saja.',
    iconName: 'Clock'
  },
  {
    id: 7,
    title: 'Kehadiran Tepat Waktu',
    description: 'Disiplin waktu adalah prinsip utama kami. Driver akan siap di titik penjemputan 15 menit sebelum waktu pemesanan.',
    iconName: 'CheckCircle'
  },
  {
    id: 8,
    title: 'Banyak Pilihan Armada',
    description: 'Variasi jenis mobil lengkap, mulai dari city car lincah, MPV keluarga lega, SUV tangguh, hingga mobil luxury kelas eksekutif.',
    iconName: 'Grid'
  }
];

export const STATS: CompanyStat[] = [
  { value: 5000, suffix: '+', label: 'Pelanggan Puas' },
  { value: 150, suffix: '+', label: 'Unit Armada' },
  { value: 24, suffix: ' Jam', label: 'Customer Support' },
  { value: 10, suffix: ' Tahun', label: 'Pengalaman' }
];

export const CLIENT_BRANDS: ClientBrand[] = [
  { name: 'Traveloka', fallbackText: 'Traveloka Partner' },
  { name: 'Gojek', fallbackText: 'Gojek Corporate' },
  { name: 'Mandiri', fallbackText: 'Bank Mandiri Tbk' },
  { name: 'Telkomsel', fallbackText: 'Telkomsel Group' },
  { name: 'Sheraton', fallbackText: 'Sheraton Residences' },
  { name: 'Pakuwon Group', fallbackText: 'Pakuwon Grand Event' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Budi Santoso',
    role: 'Procurement Specialist',
    company: 'GoTo Group',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    text: 'Sangat puas dengan layanan korporat Arkana. Kami menyewa Camry dan Alphard secara bulanan untuk direksi asing kami. Mobil selalu bersih berkilau, driver fasih rute VIP, dan administrasinya sangat transparan serta mudah.',
    date: '10 April 2026'
  },
  {
    id: 2,
    name: 'Nadia Siregar',
    role: 'Premium Travel Vlogger',
    company: 'Explore Nusantara',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    text: 'Sewa lepas kunci Fortuner untuk trip overland di Jawa kemarin benar-benar memuaskan! Mobilnya dalam kondisi seperti baru, suspensinya empuk, dan sistem serah terimanya cepat sekali tanpa proses bertingkat-tingkat yang menyusahkan.',
    date: '2 Mei 2026'
  },
  {
    id: 3,
    name: 'Irwan Prasetyo',
    role: 'CEO & Founder',
    company: 'Digital Space Indonesia',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    text: 'Selalu mempercayakan kunjungan tamu premium kami kepada Arkana Rent Car. Penyambutan driver di bandara sungguh mengesankan, menggunakan seragam yang rapi, membawa papan nama digital, dan sigap mengurus koper tamu.',
    date: '15 Mei 2026'
  },
  {
    id: 4,
    name: 'Silvia Angelica',
    role: 'Senior Wedding Planner',
    company: 'The Royal Day WO',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    text: 'Pilihan wedding car Toyota Alphard HEV di Arkana Rent Car adalah dekorasi terbaik hari pernikahan klien kami. Suka sekali dengan paket all-inclusive yang sudah termasuk hiasan bunga mawar segar dan driver berseragam resmi jas formal.',
    date: '22 Mei 2026'
  },
  {
    id: 5,
    name: 'Andi Wijaya',
    role: 'Keluarga Wisatawan',
    company: 'Pribadi',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    text: 'Menyewa Innova Zenix Hybrid Lepas Kunci untuk mudik lebaran keluarga. Mobil terbukti super irit bahan bakar, kabin wangi, AC dingin menggigil. Menempuh perjalanan 800 km bersama anak-anak terasa rileks dan aman.',
    date: '28 Mei 2026'
  },
  {
    id: 6,
    name: 'Rian Hidayat',
    role: 'Event Director',
    company: 'Sindo Megah Kreasi (EO)',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    text: 'Skala event internasional kami menuntut logistik delegasi yang tanpa celah. Arkana menyediakan koordinasi 15 unit Palisade & Alphard secara bersamaan. Respon CS siaga penuh di group koordinasi dan semuanya berjalan lancar.',
    date: '29 Mei 2026'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: 'Apa saja syarat utama sewa mobil Lepas Kunci (self-drive)?',
    answer: 'Persyaratan untuk sewa lepas kunci mencakup: Foto KTP asli, foto SIM A aktif, foto ID Card Karyawan/Kartu Mahasiswa, akun sosial media aktif yang dapat diverifikasi, serta bersedia di-survei tempat tinggal atau kantor oleh tim kami (untuk penyewa baru).',
    category: 'Persyaratan'
  },
  {
    id: 2,
    question: 'Apakah harga sewa yang tertera sudah termasuk bensin dan parkir?',
    answer: 'Untuk paket sewa "Lepas Kunci" harga belum termasuk bensin, tol, parkir, dan akomodasi driver. Untuk paket "Dengan Driver", harga sewa standar meliputi armada dan driver saja, sedangkan bensin, e-toll, serta biaya parkir opsional dibayarkan sesuai pemakaian riil atau bisa memilih paket "All-In" (Sewa + Driver + BBM).',
    category: 'Pembayaran'
  },
  {
    id: 3,
    question: 'Bagaimana jika saya memerlukan pembatalan sewa (cancel booking)?',
    answer: 'Pembatalan gratis dapat dilakukan maksimal 48 jam sebelum jadwal keberangkatan yang disepakati. Pembatalan dalam waktu kurang dari 24 jam dikenakan biaya pembatalan sebesar 50% dari total nilai sewa hari pertama.',
    category: 'Umum'
  },
  {
    id: 4,
    question: 'Apakah mobil yang disewa dilindungi asuransi jika terjadi kecelakaan?',
    answer: 'Ya, seluruh unit armada Arkana dilindungi oleh asuransi All-Risk (Kerusakan Komprehensif). Penyewa Lepas Kunci hanya dikenai biaya klaim asuransi (Own Damage Claim) standar industri sebesar Rp 300.000,- per titik/kejadian, sesuai regulasi kesepakatan sewa.',
    category: 'Umum'
  },
  {
    id: 5,
    question: 'Bagaimana sistem perhitungan waktu sewa (durasi sewa)?',
    answer: 'Sewa harian dihitung per hari kalender dengan batas pengembalian maksimal pukul 23.59 atau sewa 24 Jam dengan durasi tepat waktu dari jam pengambilan awal (khusus VIP lepas kunci). Untuk sewa dengan supir, dihitung durasi maksimal 12 jam per hari.',
    category: 'Umum'
  },
  {
    id: 6,
    question: 'Berapa denda untuk keterlambatan pengembalian mobil (overtime)?',
    answer: 'Bila terjadi keterlambatan pengembalian unit, akan dikenakan biaya overtime sebesar 10% per jam dari tarif harian mobil yang bersangkutan. Terlambat lebih dari 5 jam akan otomatis terhitung tambahan sewa 1 hari penuh.',
    category: 'Pembayaran'
  },
  {
    id: 7,
    question: 'Apakah Arkana Rent Car melayani perjalanan ke luar kota?',
    answer: 'Ya, kami melayani perjalanan keluar kota, baik dalam pulau maupun antar kota propinsi. Silakan infokan rute perjalanan dan tujuan Anda kepada admin sales kami saat memesan agar kami menyiapkan mobil dan driver dengan spesifikasi luar kota yang prima.',
    category: 'Umum'
  },
  {
    id: 8,
    question: 'Metode pembayaran apa saja yang diterima?',
    answer: 'Kami menerima pembayaran tunai via Transfer Bank Utama (BCA, Mandiri, BNI, BRI), Kartu Kredit, Virtual Account, serta invoicing bulanan dengan purchase order resmi khusus pelanggan perusahaan (Corporate Client) terdaftar.',
    category: 'Pembayaran'
  },
  {
    id: 9,
    question: 'Apakah bisa melakukan sewa darurat atau di jemput di lokasi manapun?',
    answer: 'Tentu. Demi kenyamanan maksimal, kami dapat mengantarkan mobil langsung ke depan rumah, hotel, stasiun kereta, rumah sakit, maupun bandara udara terdekat. Layanan antar-jemput gratis untuk area dalam kota tertentu.',
    category: 'Lainnya'
  },
  {
    id: 10,
    question: 'Bagaimana jika mobil mengalami kerusakan teknis di perjalanan?',
    answer: 'Jika unit mengalami kerusakan mekanis di jalan, Anda tidak perlu panik. Cukup hubungi call center siaga 24 jam kami. Kami segera mengirimkan tim mekanik tanggap darurat, penarik derek gratis, dan jika perbaikan memakan waktu lama, kami sediakan unit mobil pengganti setara secara gratis langsung ke lokasi Anda.',
    category: 'Lainnya'
  }
];
