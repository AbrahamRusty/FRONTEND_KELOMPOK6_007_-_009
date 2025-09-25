// Data produk khusus untuk halaman pakaian
const products = [
    {
        id: 1,
        name: "Batik Parang Kencana",
        image: "images/batik1.jpg",
        price: "Rp350.000",
        rating: 4.8,
        description: "Batik tulis motif Parang Kencana dari Jogja, dibuat dengan tangan dan pewarna alami. Memiliki sentuhan modern yang cocok untuk acara formal atau kasual.",
        category: "Pakaian"
    },
    {
        id: 3,
        name: "Kemeja Tenun Sumba",
        image: "images/kemeja.jpg",
        price: "Rp480.000",
        rating: 4.5,
        description: "Kemeja lengan pendek dari kain tenun asli Sumba. Motifnya yang khas dan warnanya yang cerah menjadikan kemeja ini pilihan sempurna untuk gaya modern etnik.",
        category: "Pakaian"
    },
    {
        id: 5,
        name: "Blouse Batik Pekalongan",
        image: "images/blouse.jpg",
        price: "Rp210.000",
        rating: 4.9,
        description: "Blouse batik cap dengan motif kontemporer dari Pekalongan. Bahan katun adem, nyaman dipakai di berbagai cuaca.",
        category: "Pakaian"
    },
    {
        id: 7,
        name: "Rok Batik Parang",
        image: "images/rok-batik.jpeg",
        price: "Rp280.000",
        rating: 4.7,
        description: "Rok midi batik motif Parang yang timeless. Fleksibel untuk dipadukan dengan berbagai atasan, dari kasual hingga formal.",
        category: "Pakaian"
    },
    {
        id: 9,
        name: "Kain Tenun Ikat Timor",
        image: "images/tenun-timor.jpg",
        price: "Rp750.000",
        rating: 4.9,
        description: "Kain tenun ikat asli dari Timor, NTT. Motifnya sarat makna budaya dan dibuat dengan teknik tradisional yang rumit.",
        category: "Pakaian"
    },
    {
        id: 11,
        name: "Syal Batik Sutra",
        image: "images/syal-batik.jpg",
        price: "Rp180.000",
        rating: 4.6,
        description: "Syal dari sutra halus dengan motif batik tradisional. Memberikan sentuhan gaya yang chic dan mewah untuk busana harian.",
        category: "Pakaian"
    },
    {
        id: 13,
        name: "Blangkon Solo",
        image: "images/blangkon.jpg",
        price: "Rp175.000",
        rating: 5.0,
        description: "Blangkon khas Solo, Jawa Tengah. Dibuat dari bahan batik berkualitas, cocok untuk acara adat atau koleksi.",
        category: "Pakaian"
    },
    {
        id: 15,
        name: "Celana Batik Jogja",
        image: "images/celana.jpg",
        price: "Rp220.000",
        rating: 4.6,
        description: "Celana kulot batik nyaman dengan motif sederhana. Bahan katun yang ringan, ideal untuk bersantai.",
        category: "Pakaian"
    },
    {
        id: 17,
        name: "Dress Batik Jawa",
        image: "images/dress-batik.jpg",
        price: "Rp420.000",
        rating: 4.9,
        description: "Dress batik elegan dengan motif modern, cocok untuk acara semi-formal.",
        category: "Pakaian"
    },
    {
        id: 18,
        name: "Tunik Tenun Ikat",
        image: "images/tunik-tenun.jpeg",
        price: "Rp380.000",
        rating: 4.7,
        description: "Tunik tenun ikat dengan warna cerah dan nyaman dipakai.",
        category: "Pakaian"
    },
    {
        id: 19,
        name: "Baju Adat Bali",
        image: "images/baju-adat-bali.jpg",
        price: "Rp650.000",
        rating: 5.0,
        description: "Baju adat Bali lengkap dengan udeng dan selendang.",
        category: "Pakaian"
    },
    {
        id: 20,
        name: "Sarung Samarinda",
        image: "images/sarung-samarinda.jpg",
        price: "Rp250.000",
        rating: 4.6,
        description: "Sarung tenun khas Samarinda dengan motif geometris unik.",
        category: "Pakaian"
    },
    {
        id: 21,
        name: "Kebaya Modern",
        image: "images/kebaya-modern.jpg",
        price: "Rp550.000",
        rating: 4.8,
        description: "Kebaya brokat modern dengan desain elegan dan jahitan rapi.",
        category: "Pakaian"
    },
    {
        id: 22,
        name: "Rompi Etnik",
        image: "images/rompi-etnik.jpg",
        price: "Rp190.000",
        rating: 4.5,
        description: "Rompi dari kain tenun dan bordir etnik, stylish untuk luaran.",
        category: "Pakaian"
    },
    {
        id: 23,
        name: "Gamis Batik",
        image: "images/gamis-batik.jpg",
        price: "Rp380.000",
        rating: 4.9,
        description: "Gamis dari bahan katun batik dengan potongan modern.",
        category: "Pakaian"
    },
    {
        id: 24,
        name: "Jaket Tenun",
        image: "images/jaket-tenun.jpg",
        price: "Rp450.000",
        rating: 4.7,
        description: "Jaket kasual dari kain tenun ikat yang tebal dan nyaman.",
        category: "Pakaian"
    }
];

// Panggil fungsi displayProducts saat dokumen dimuat
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products, "Pakaian");
});