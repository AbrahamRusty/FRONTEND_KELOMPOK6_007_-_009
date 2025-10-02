// Data Produk Frozen Tradisional Indonesia
const frozenProducts = [
  {
    id: 1,
    name: "Pempek Palembang",
    price: "Rp 50.000",
    rating: 5,
    image: "images/pempek.jpeg",
    description: "Nikmati cita rasa khas Palembang dengan aneka pempek yang gurih dan lezat! Dibuat dari ikan pilihan dan tepung sagu berkualitas, menghasilkan tekstur kenyal sempurna dan rasa yang otentik."
  },
  {
    id: 2,
    name: "Siomay Bandung",
    price: "Rp 45.000",
    rating: 4.5,
    image: "images/siomay.jpeg",
    description: "Nikmati hidangan khas Bandung yang sudah jadi favorit banyak orang! Terbuat dari ikan segar pilihan dan bumbu istimewa, menghasilkan siomay dengan tekstur lembut, gurih, dan aroma khas yang menggoda."
  },
  {
    id: 3,
    name: "Batagor Bandung",
    price: "Rp 48.000",
    rating: 4,
    image: "images/batagor.jpeg",
    description: "Batagor (Bakso Tahu Goreng) khas Bandung, sajian legendaris yang selalu bikin rindu! Terbuat dari adonan ikan segar yang dibalut kulit pangsit dan tahu, kemudian digoreng hingga renyah keemasan. Disajikan dengan bumbu kacang kental, manis, gurih, serta perasan jeruk limau yang menyegarkan."
  },
  {
    id: 4,
    name: "Lumpia Semarang",
    price: "Rp 55.000",
    rating: 5,
    image: "images/lumpia.jpeg",
    description: "Lumpia khas Semarang dengan cita rasa legendaris yang sudah turun-temurun! Kulitnya tipis dan renyah, berisi tumisan rebung segar, ayam/udang, serta bumbu rempah pilihan yang harum menggoda."
  },
  {
    id: 5,
    name: "Risol Mayo",
    price: "Rp 40.000",
    rating: 4,
    image: "images/risol.jpeg",
    description: "Risol kekinian dengan isian melimpah, perpaduan sosis, smoked beef, telur, dan mayones creamy yang lumer di mulut. Dibungkus dengan kulit risol yang tipis lalu digoreng hingga golden brown, menghasilkan tekstur luar renyah dan dalamnya lembut gurih."
  },
  {
    id: 6,
    name: "Pastel Ayam",
    price: "Rp 42.000",
    rating: 4.5,
    image: "images/pastel.jpeg",
    description: "Gurihnya pastel goreng dengan kulit tipis renyah keemasan dan isian melimpah. Dibuat dari campuran kentang, wortel, telur, bihun, dan bumbu rempah pilihan yang harum dan lezat."
  },
  {
    id: 7,
    name: "Martabak Mini Manis",
    price: "Rp 38.000",
    rating: 4,
    image: "images/martabak.jpeg",
    description: "Martabak mini dengan tekstur empuk dan gurih, dipadukan dengan topping cokelat meises manis legit serta keju parut gurih yang lumer di mulut. Perpaduan rasa manis dan gurihnya pas banget untuk camilan santai maupun suguhan tamu."
  },
  {
    id: 8,
    name: "Sate Lilit Bali",
    price: "Rp 60.000",
    rating: 5,
    image: "images/sate-lilit.jpeg",
    description: "Nikmati cita rasa khas Bali dengan Sate Lilit yang dibuat dari daging cincang pilihan, dicampur dengan bumbu rempah tradisional yang harum."
  },
  {
    id: 9,
    name: "Otak-Otak Ikan",
    price: "Rp 45.000",
    rating: 4.5,
    image: "images/otak-otak.jpeg",
    description: "Nikmati lezatnya otak-otak khas Nusantara yang dibungkus daun pisang dan dipanggang hingga harum. Terbuat dari adonan ikan segar yang lembut, dipadukan dengan bumbu pilihan yang meresap sempurna."
  },
  {
    id: 10,
    name: "Perkedel Kentang",
    price: "Rp 35.000",
    rating: 4,
    image: "images/perkedel.jpeg",
    description: "Perkedel kentang goreng yang berwarna keemasan menggoda. Teksturnya renyah di luar, lembut dan gurih di dalam. Perkedel ini dibuat dari kentang yang dihaluskan, dicampur dengan bumbu pilihan, lalu digoreng hingga matang sempurna."
  },
  {
    id: 11,
    name: "Bakso Sapi",
    price: "Rp 55.000",
    rating: 5,
    image: "images/bakso.jpeg",
    description: "Bakso sapi urat kenyal khas Indonesia. Isi 25 pcs."
  },
  {
    id: 12,
    name: "Bakwan Jagung",
    price: "Rp 32.000",
    rating: 4,
    image: "images/bakwan.jpeg",
    description: "Nikmati lezatnya bakwan jagung khas Indonesia yang renyah di luar dan lembut di dalam, terbuat dari jagung manis segar dicampur dengan bumbu rempah pilihan."
  },
  {
    id: 13,
    name: "Tempe Mendoan",
    price: "Rp 30.000",
    rating: 4.5,
    image: "images/mendoan.jpeg",
    description: "Tempe Mendoan kami dibuat dari tempe kedelai segar pilihan yang diiris tipis, kemudian dicelupkan ke dalam adonan tepung berbumbu kaya rempah yang khas."
  },  
  {
    id: 14,
    name: "Ayam Geprek Crispy",
    price: "Rp 58.000",
    rating: 5,
    image: "images/geprek.jpeg",
    description: "Ayam crispy renyah yang digeprek dengan Sambal Bawang segar yang pedas dan gurih nendang. Disajikan lengkap dengan nasi pulen hangat dan timun segar."
  },  
  {
    id: 15,
    name: "Gudeg Jogja",
    price: "Rp 70.000", 
    rating: 5,
    image: "images/gudeg.jpeg",
    description: "Gudeg klasik dari nangka muda yang dimasak berjam-jam (di-mudhet) hingga empuk, berserat halus, dan berwarna cokelat kemerahan pekat secara alami. Rasanya manis legit dengan sentuhan gurih santan dan rempah khas."
  },
  {
    id: 16,
    name: "Nasi Goreng Kampung",
    price: "Rp 40.000",
    rating: 4.5,
    image: "images/nasi-goreng.jpeg",
    description: "Nasi goreng khas kampung dengan ayam dan telur."
  }
];

// =====================
// Fungsi untuk menampilkan produk
// =====================
function displayFrozenProducts(productsToShow = frozenProducts) {
  const grid = document.getElementById("frozenGrid");
  if (!grid) return;
  
  if (productsToShow.length === 0) {
    grid.innerHTML = '<p class="no-products">Tidak ada produk yang ditemukan</p>';
    return;
  }

  grid.innerHTML = "";

  productsToShow.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.setAttribute("data-id", product.id);
    card.setAttribute("data-name", product.name.toLowerCase());

    // Generate bintang rating
    const fullStars = Math.floor(product.rating);
    const halfStar = product.rating % 1 !== 0;
    let starsHTML = "";
    for (let i = 0; i < fullStars; i++) starsHTML += `<i class="fa-solid fa-star"></i>`;
    if (halfStar) starsHTML += `<i class="fa-solid fa-star-half-stroke"></i>`;
    for (let i = fullStars + (halfStar ? 1 : 0); i < 5; i++) starsHTML += `<i class="fa-regular fa-star"></i>`;

    card.innerHTML = `
      <div class="product-id">ID: ${product.id}</div>
      <img src="${product.image}" alt="${product.name}" onerror="this.src='images/placeholder.jpg'">
      <h3>${product.name}</h3>
      <p class="price">${product.price}</p>
      <div class="stars">${starsHTML}</div>
    `;

    card.addEventListener("click", () => showFrozenDetail(product));
    grid.appendChild(card);
  });
}

// =====================
// Fungsi untuk mencari produk berdasarkan NAMA
// =====================
function searchFrozenProduct() {
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
    displayFrozenProducts();
    searchResults.innerHTML = '<p class="search-info">Masukkan nama makanan untuk mencari</p>';
    return;
  }
  
  // Cari produk berdasarkan NAMA (case insensitive)
  const foundProducts = frozenProducts.filter(product => 
    product.name.toLowerCase().includes(searchTerm)
  );
  
  if (foundProducts.length > 0) {
    // Tampilkan produk yang ditemukan
    displayFrozenProducts(foundProducts);
    
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
    searchResults.innerHTML = `<p class="no-results">Makanan dengan nama "<strong>${searchInput.value}</strong>" tidak ditemukan. Silakan coba nama lain.</p>`;
    
    // Tampilkan semua produk
    displayFrozenProducts();
  }
}

// =====================
// Fungsi untuk mencari secara real-time (opsional)
// =====================
function setupFrozenRealTimeSearch() {
  const searchInput = document.getElementById('searchInput');
  let searchTimeout;
  
  searchInput.addEventListener('input', function() {
    clearTimeout(searchTimeout);
    const searchTerm = this.value.trim();
    
    if (searchTerm.length === 0) {
      displayFrozenProducts();
      document.getElementById('searchResults').innerHTML = '<p class="search-info">Masukkan nama makanan untuk mencari</p>';
      return;
    }
    
    // Delay pencarian untuk menghindari terlalu banyak request
    searchTimeout = setTimeout(() => {
      if (searchTerm.length >= 2) { // Minimal 2 karakter
        searchFrozenProduct();
      }
    }, 300);
  });
}

// =====================
// Popup Detail Produk
// =====================
function showFrozenDetail(product) {
  const popup = document.getElementById("frozenPopup");
  const detail = document.getElementById("frozen-detail");
  
  if (!popup || !detail) return;

  const fullStars = Math.floor(product.rating);
  const halfStar = product.rating % 1 !== 0;
  let starsHTML = "";
  for (let i = 0; i < fullStars; i++) starsHTML += `<i class="fa-solid fa-star"></i>`;
  if (halfStar) starsHTML += `<i class="fa-solid fa-star-half-stroke"></i>`;
  for (let i = fullStars + (halfStar ? 1 : 0); i < 5; i++) starsHTML += `<i class="fa-regular fa-star"></i>`;

  detail.innerHTML = `
    <img src="${product.image}" class="detail-image" alt="${product.name}" onerror="this.src='images/placeholder.jpg'">
    <div class="detail-info">
      <span class="product-id-large">ID: ${product.id}</span>
      <h2>${product.name}</h2>
      <div class="stars">${starsHTML}</div>
      <p class="price">${product.price}</p>
      <p>${product.description}</p>
      <button class="btn buy-now-btn" onclick="openFrozenConfirm(${product.id})">Beli Sekarang</button>
    </div>
  `;

  // Tampilkan popup
  popup.classList.add("show");
  
  // Event listener untuk tombol close
  const closeBtn = popup.querySelector(".close-btn");
  if (closeBtn) {
    closeBtn.onclick = function() {
      closeFrozenPopup();
    };
  }
  
  // Tutup popup jika klik di luar konten
  popup.onclick = function(event) {
    if (event.target === popup) {
      closeFrozenPopup();
    }
  };
}

// Fungsi untuk menutup popup detail
function closeFrozenPopup() {
  const popup = document.getElementById("frozenPopup");
  if (popup) {
    popup.classList.remove("show");
  }
}

// =====================
// Popup Konfirmasi (Updated)
// =====================
function openFrozenConfirm(productId) {
  const confirmPopup = document.getElementById("frozenConfirmPopup");
  if (!confirmPopup) return;
  
  // Cari produk berdasarkan ID
  const product = frozenProducts.find(p => p.id === productId);
  
  confirmPopup.classList.add("show");

  // Tombol Batal
  const cancelBtn = document.getElementById("frozenCancelBtn");
  if (cancelBtn) {
    cancelBtn.onclick = function() {
      confirmPopup.classList.remove("show");
    };
  }

  // Tombol Konfirmasi
  const confirmBtn = document.getElementById("frozenConfirmBtn");
  if (confirmBtn) {
    confirmBtn.onclick = function() {
      if (product) {
        alert(`Pembelian berhasil!\nProduk: ${product.name}\nHarga: ${product.price}\nSilakan lanjutkan ke pembayaran.`);
      } else {
        alert("Pembelian berhasil!");
      }
      confirmPopup.classList.remove("show");
      closeFrozenPopup();
    };
  }
  
  // Tutup jika klik di luar konten
  confirmPopup.onclick = function(event) {
    if (event.target === confirmPopup) {
      confirmPopup.classList.remove("show");
    }
  };
}

// =====================
// Event Listeners saat page loaded
// =====================
document.addEventListener("DOMContentLoaded", function() {
  // Tampilkan semua produk saat pertama kali load
  displayFrozenProducts();
  
  // Event listener untuk tombol search
  document.getElementById('searchBtn').addEventListener('click', searchFrozenProduct);
  
  // Event listener untuk tekan Enter di input search
  document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      searchFrozenProduct();
    }
  });
  
  // Setup real-time search (opsional)
  setupFrozenRealTimeSearch();
  
  // Tampilkan placeholder di search results
  document.getElementById('searchResults').innerHTML = '<p class="search-info">Masukkan nama makanan untuk mencari</p>';
  
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
});