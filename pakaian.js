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

// Fungsi untuk menampilkan produk
function displayProducts(productsToShow, category = "Pakaian") {
    const productGrid = document.getElementById('productGrid');
    
    if (productsToShow.length === 0) {
        productGrid.innerHTML = '<p class="no-products">Tidak ada produk yang ditemukan</p>';
        return;
    }
    
    productGrid.innerHTML = productsToShow.map(product => `
        <div class="product-card" data-id="${product.id}" data-name="${product.name.toLowerCase()}">
            <div class="product-id">ID: ${product.id}</div>
            <img src="${product.image}" alt="${product.name}" onerror="this.src='images/placeholder.jpg'">
            <h3>${product.name}</h3>
            <div class="stars">
                ${generateStars(product.rating)}
            </div>
            <div class="price">${product.price}</div>
        </div>
    `).join('');

    // Tambahkan event listener untuk setiap card produk
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            if (product) {
                showProductDetail(product);
            }
        });
    });
}

// Fungsi untuk menghasilkan bintang rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let stars = '';
    
    // Bintang penuh
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    // Setengah bintang
    if (halfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Bintang kosong
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Fungsi untuk mencari produk berdasarkan NAMA
function searchProduct() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    // Reset hasil pencarian sebelumnya
    searchResults.innerHTML = '';
    document.querySelectorAll('.product-card').forEach(card => {
        card.classList.remove('highlight');
    });
    
    if (!searchTerm) {
        // Jika search kosong, tampilkan semua produk
        displayProducts(products);
        searchResults.innerHTML = '<p class="search-info">Masukkan nama produk untuk mencari</p>';
        return;
    }
    
    // Cari produk berdasarkan NAMA (case insensitive)
    const foundProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );
    
    if (foundProducts.length > 0) {
        // Tampilkan produk yang ditemukan
        displayProducts(foundProducts);
        
        // Highlight semua produk yang ditemukan
        foundProducts.forEach(product => {
            const productCard = document.querySelector(`.product-card[data-id="${product.id}"]`);
            if (productCard) {
                productCard.classList.add('highlight');
            }
        });
        
        // Tampilkan pesan sukses
        if (foundProducts.length === 1) {
            searchResults.innerHTML = `<p class="search-success">1 produk ditemukan: <strong>"${foundProducts[0].name}"</strong></p>`;
        } else {
            const productNames = foundProducts.map(p => `"${p.name}"`).join(', ');
            searchResults.innerHTML = `<p class="search-success">${foundProducts.length} produk ditemukan: ${productNames}</p>`;
        }
        
        // Scroll ke produk pertama yang ditemukan
        if (foundProducts.length > 0) {
            const firstProductCard = document.querySelector(`.product-card[data-id="${foundProducts[0].id}"]`);
            if (firstProductCard) {
                firstProductCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
        
    } else {
        // Tampilkan pesan tidak ditemukan
        searchResults.innerHTML = `<p class="no-results">Produk dengan nama "<strong>${searchInput.value}</strong>" tidak ditemukan. Silakan coba nama lain.</p>`;
        
        // Tampilkan semua produk
        displayProducts(products);
    }
}

// Fungsi untuk mencari produk secara real-time (opsional)
function setupRealTimeSearch() {
    const searchInput = document.getElementById('searchInput');
    let searchTimeout;
    
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        const searchTerm = this.value.trim();
        
        if (searchTerm.length === 0) {
            displayProducts(products);
            document.getElementById('searchResults').innerHTML = '<p class="search-info">Masukkan nama produk untuk mencari</p>';
            return;
        }
        
        // Delay pencarian untuk menghindari terlalu banyak request
        searchTimeout = setTimeout(() => {
            if (searchTerm.length >= 2) { // Minimal 2 karakter
                searchProduct();
            }
        }, 300);
    });
}

// Fungsi untuk menampilkan detail produk
function showProductDetail(product) {
    const productDetail = document.getElementById('product-detail');
    const popup = document.getElementById('productPopup');
    
    productDetail.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="detail-image" onerror="this.src='images/placeholder.jpg'">
        <div class="detail-info">
            <span class="product-id-large">ID: ${product.id}</span>
            <h2>${product.name}</h2>
            <div class="stars">
                ${generateStars(product.rating)}
            </div>
            <div class="price">${product.price}</div>
            <p>${product.description}</p>
            <button class="btn buy-now-btn" onclick="showConfirmPopup(${product.id})">Beli Sekarang</button>
        </div>
    `;
    
    popup.classList.add('show');
}

// Fungsi untuk menampilkan popup konfirmasi
function showConfirmPopup(productId) {
    // Tutup popup detail produk
    document.getElementById('productPopup').classList.remove('show');
    
    // Tampilkan popup konfirmasi
    const confirmPopup = document.getElementById('confirmPopup');
    confirmPopup.classList.add('show');
    
    // Setup event listeners untuk tombol konfirmasi
    document.getElementById('confirmBtn').onclick = function() {
        // Logic untuk proses pembelian
        const product = products.find(p => p.id === productId);
        alert(`Pembelian produk: ${product.name} berhasil!\nSilakan lanjutkan ke pembayaran.`);
        confirmPopup.classList.remove('show');
    };
    
    document.getElementById('cancelBtn').onclick = function() {
        confirmPopup.classList.remove('show');
    };
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Tampilkan semua produk saat pertama kali load
    displayProducts(products, "Pakaian");
    
    // Event listener untuk tombol search
    document.getElementById('searchBtn').addEventListener('click', searchProduct);
    
    // Event listener untuk tekan Enter di input search
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchProduct();
        }
    });
    
    // Setup real-time search (opsional)
    setupRealTimeSearch();
    
    // Event listener untuk tombol close popup
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.popup-overlay').classList.remove('show');
        });
    });
    
    // Event listener untuk klik di luar popup
    document.querySelectorAll('.popup-overlay').forEach(overlay => {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('show');
            }
        });
    });
    
    // Tampilkan placeholder di search results
    document.getElementById('searchResults').innerHTML = '<p class="search-info">Masukkan nama produk untuk mencari</p>';
});