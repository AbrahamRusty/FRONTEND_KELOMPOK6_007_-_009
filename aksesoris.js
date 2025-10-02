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

// Fungsi untuk menampilkan produk
function displayProducts(productsToShow, category = "Aksesoris") {
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
        searchResults.innerHTML = '<p class="search-info">Masukkan nama aksesoris untuk mencari</p>';
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
            searchResults.innerHTML = `<p class="search-success">1 aksesoris ditemukan: <strong>"${foundProducts[0].name}"</strong></p>`;
        } else {
            const productNames = foundProducts.map(p => `"${p.name}"`).join(', ');
            searchResults.innerHTML = `<p class="search-success">${foundProducts.length} aksesoris ditemukan: ${productNames}</p>`;
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
        searchResults.innerHTML = `<p class="no-results">Aksesoris dengan nama "<strong>${searchInput.value}</strong>" tidak ditemukan. Silakan coba nama lain.</p>`;
        
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
            document.getElementById('searchResults').innerHTML = '<p class="search-info">Masukkan nama aksesoris untuk mencari</p>';
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
        alert(`Pembelian aksesoris berhasil!\nProduk: ${product.name}\nHarga: ${product.price}\nSilakan lanjutkan ke pembayaran.`);
        confirmPopup.classList.remove('show');
    };
    
    document.getElementById('cancelBtn').onclick = function() {
        confirmPopup.classList.remove('show');
    };
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Tampilkan semua produk saat pertama kali load
    displayProducts(products, "Aksesoris");
    
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
    document.getElementById('searchResults').innerHTML = '<p class="search-info">Masukkan nama aksesoris untuk mencari</p>';
});