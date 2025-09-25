// Fungsi untuk membuat elemen bintang rating (universal)
function createStarRating(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fa-solid fa-star"></i>';
    }
    if (hasHalfStar) {
        stars += '<i class="fa-solid fa-star-half-stroke"></i>';
    }
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="fa-regular fa-star"></i>';
    }
    return `<div class="stars">${stars} (${rating})</div>`;
}

// Fungsi untuk menampilkan produk di grid (universal)
function displayProducts(productsData, category) {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) return; 

    const filteredProducts = productsData.filter(product => product.category === category);

    productGrid.innerHTML = '';
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.dataset.id = product.id; 

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            ${createStarRating(product.rating)}
            <p class="price">${product.price}</p>
        `;
        
        productGrid.appendChild(productCard);
    });

    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const productId = e.currentTarget.dataset.id;
            const selectedProduct = productsData.find(p => p.id == productId);
            if (selectedProduct) {
                showProductPopup(selectedProduct);
            }
        });
    });
}

// Fungsi untuk menampilkan pop-up detail produk (universal)
function showProductPopup(product) {
    const productPopup = document.getElementById('productPopup');
    const productDetail = document.getElementById('product-detail');
    
    productDetail.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="detail-image">
        <div class="detail-info">
            <h2>${product.name}</h2>
            ${createStarRating(product.rating)}
            <p class="price">${product.price}</p>
            <p>${product.description}</p>
            <button class="buy-btn">Beli Sekarang</button>
        </div>
    `;

    productPopup.classList.add('show');
    
    const buyButton = productDetail.querySelector('.buy-btn');
    buyButton.addEventListener('click', () => {
        productPopup.classList.remove('show');
        document.getElementById('confirmPopup').classList.add('show');
    });

    productPopup.querySelector('.close-btn').addEventListener('click', () => {
        productPopup.classList.remove('show');
    });
}

// ===== Header Hide/Show =====
const header = document.querySelector("header");
let lastScroll = window.scrollY || 0;
let ticking = false;
const THRESHOLD = 12;

function handleScroll() {
    const currentScroll = window.scrollY || 0;
    
    if (currentScroll <= 0) {
        header.classList.remove("header-hidden", "header-scrolled");
        lastScroll = 0;
        ticking = false;
        return;
    }

    if (currentScroll > 20) {
        header.classList.add("header-scrolled");
    } else {
        header.classList.remove("header-scrolled");
    }

    if (Math.abs(currentScroll - lastScroll) <= THRESHOLD) {
        ticking = false;
        return;
    }

    if (currentScroll > lastScroll) {
        header.classList.add("header-hidden");
    } else {
        header.classList.remove("header-hidden");
    }

    lastScroll = currentScroll;
    ticking = false;
}

window.addEventListener("scroll", () => {
    if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
    }
}, { passive: true });

// Event listener yang dijalankan saat dokumen dimuat
document.addEventListener('DOMContentLoaded', () => {
    const confirmPopup = document.getElementById('confirmPopup');
    const successPopup = document.getElementById('successPopup');
    const contactPopup = document.getElementById('contactPopup');

    document.querySelectorAll('.popup-overlay .close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.popup-overlay').classList.remove('show');
        });
    });

    document.querySelectorAll('.popup-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target.classList.contains('popup-overlay')) {
                e.currentTarget.classList.remove('show');
            }
        });
    });

    // --- PERBAIKAN DI SINI ---
    // Logika pop-up konfirmasi
    document.querySelector('#confirmPopup .green-btn').addEventListener('click', () => {
        // Tutup pop-up konfirmasi
        confirmPopup.classList.remove('show');

        // Tampilkan pesan alert
        alert("Pembelian Berhasil! Pesanan Anda akan segera diproses.");

        // Jika Anda tetap ingin menampilkan pop-up sukses setelah alert
        // successPopup.classList.add('show');
    });

    document.querySelector('#confirmPopup .red-btn').addEventListener('click', () => {
        confirmPopup.classList.remove('show');
    });

    // Menutup pop-up sukses
    document.querySelector('#successPopup .close-btn').addEventListener('click', () => {
        successPopup.classList.remove('show');
    });
    // --- AKHIR PERBAIKAN ---

    const kontakLink = document.querySelector('.kontak-link');
    if (kontakLink) {
        kontakLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (contactPopup) {
                contactPopup.classList.add("show");
            }
        });
    }

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            contactPopup.classList.remove("show");
            successPopup.querySelector('p').textContent = "Pesan Berhasil Dikirim!";
            successPopup.classList.add("show");
        });
    }
});