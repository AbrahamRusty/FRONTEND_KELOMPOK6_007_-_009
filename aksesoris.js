// Data produk khusus untuk halaman aksesoris
const products = [
    {
        id: 2,
        name: "Kalung Etnik Dayak",
        image: "images/kalung.jpg",
        price: "Rp120.000",
        rating: 5.0,
        description: "Kalung handmade dari suku Dayak Kalimantan. Terbuat dari manik-manik khas, memberikan sentuhan etnik yang kuat dan unik pada penampilanmu.",
        category: "Aksesoris"
    },
    {
        id: 4,
        name: "Gelang Perunggu Bali",
        image: "images/gelang.jpg",
        price: "Rp85.000",
        rating: 4.7,
        description: "Gelang perunggu minimalis dari pengrajin Bali. Desainnya sangat tradisional.",
        category: "Aksesoris"
    },
    {
        id: 6,
        name: "Anting Perak Toraja",
        image: "images/anting.jpeg",
        price: "Rp155.000",
        rating: 4.6,
        description: "Anting-anting perak dengan ukiran khas Toraja. Kerajinan tangan yang presisi, memberikan kesan mewah dan otentik.",
        category: "Aksesoris"
    },
    {
        id: 8,
        name: "Tas Kulit Garut",
        image: "images/tas-garut.jpeg",
        price: "Rp650.000",
        rating: 5.0,
        description: "Tas tangan kulit asli dari Garut, Jawa Barat. Jahitan rapi dan desain elegan, menjadikannya teman setia untuk setiap kegiatan.",
        category: "Aksesoris"
    },
    {
        id: 10,
        name: "Bros Kebaya Silver",
        image: "images/bros.jpg",
        price: "Rp95.000",
        rating: 4.8,
        description: "Bros perak elegan untuk melengkapi kebaya atau busana formal lainnya. Desainnya terinspirasi dari motif ukiran tradisional.",
        category: "Aksesoris"
    },
    {
        id: 12,
        name: "Cincin Perhiasan Etnik",
        image: "images/cincin.jpg",
        price: "Rp110.000",
        rating: 4.7,
        description: "Cincin perak dengan hiasan batu alam. Desainnya unik dan memberikan kesan otentik pada gaya Anda.",
        category: "Aksesoris"
    },
    {
        id: 14,
        name: "Topi Rotan Lombok",
        image: "images/topi.jpg",
        price: "Rp80.000",
        rating: 4.5,
        description: "Topi rotan handmade dari pengrajin di Lombok. Desainnya stylish dan fungsional untuk melindungi dari sinar matahari.",
        category: "Aksesoris"
    },
    {
        id: 16,
        name: "Gelang Manik-Manik Papua",
        image: "images/gelang-papua.jpg",
        price: "Rp90.000",
        rating: 4.9,
        description: "Gelang manik-manik berwarna-warni dari Papua. Kerajinan tangan yang cerah dan penuh makna budaya.",
        category: "Aksesoris"
    },
    {
        id: 25,
        name: "Selendang Tenun",
        image: "images/selendang.jpg",
        price: "Rp150.000",
        rating: 4.8,
        description: "Selendang tenun dari bahan katun ringan, cocok untuk melengkapi busana.",
        category: "Aksesoris"
    },
    {
        id: 26,
        name: "Sandal Etnik Kulit",
        image: "images/sandal.jpg",
        price: "Rp220.000",
        rating: 4.7,
        description: "Sandal kulit dengan hiasan manik-manik etnik, nyaman dan bergaya.",
        category: "Aksesoris"
    },
    {
        id: 27,
        name: "Dompet Kulit Coklat",
        image: "images/dompet-kulit.jpg",
        price: "Rp180.000",
        rating: 4.9,
        description: "Dompet kulit asli dengan jahitan tangan yang rapi dan elegan.",
        category: "Aksesoris"
    },
    {
        id: 28,
        name: "Kipas Tangan Bambu",
        image: "images/kipas-bambu.jpg",
        price: "Rp50.000",
        rating: 4.5,
        description: "Kipas tangan dari bambu dengan aksesoris pita yang lucu dan cocok untuk semua penampilan.",
        category: "Aksesoris"
    },
    {
        id: 29,
        name: "Topi Batik",
        image: "images/topi-batik.jpg",
        price: "Rp110.000",
        rating: 4.6,
        description: "Topi kasual dengan bahan batik, cocok untuk gaya sehari-hari.",
        category: "Aksesoris"
    },
    {
        id: 30,
        name: "Gelang Manik Bali",
        image: "images/gelang-manik-bali.jpg",
        price: "Rp75.000",
        rating: 4.8,
        description: "Gelang dari manik-manik kaca berwarna-warni khas Bali.",
        category: "Aksesoris"
    },
    {
        id: 31,
        name: "Gantungan Kunci Wayang",
        image: "images/gantungan-wayang.jpg",
        price: "Rp35.000",
        rating: 4.9,
        description: "Gantungan kunci kayu dengan ukiran wayang golek mini.",
        category: "Aksesoris"
    },
    {
        id: 32,
        name: "Bros Bunga Ukir",
        image: "images/bros-ukir.jpg",
        price: "Rp65.000",
        rating: 4.7,
        description: "Bros metal dengan ukiran motif bunga yang halus.",
        category: "Aksesoris"
    }
];

// Panggil fungsi displayProducts saat dokumen dimuat
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products, "Aksesoris");
});