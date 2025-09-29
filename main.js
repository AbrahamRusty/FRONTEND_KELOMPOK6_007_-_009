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
// Event listener yang dijalankan saat dokumen dimuat
document.addEventListener('DOMContentLoaded', () => {
    // Ambil semua pop-up yang mungkin ada di halaman ini
    const confirmPopup = document.getElementById('confirmPopup') || document.getElementById('frozenConfirmPopup');
    const successPopup = document.getElementById('successPopup');
    const contactPopup = document.getElementById('contactPopup');

    // 1. Logika untuk tombol Close (X) pada pop-up
    document.querySelectorAll('.popup-overlay .close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.popup-overlay').classList.remove('show');
        });
    });

    // 2. Logika untuk menutup pop-up ketika klik di luar konten pop-up
    document.querySelectorAll('.popup-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target.classList.contains('popup-overlay')) {
                e.currentTarget.classList.remove('show');
            }
        });
    });

    // 3. Logika pop-up konfirmasi (Hanya dijalankan jika elemen ada)
    if (confirmPopup) {
        // Karena di makanan.js sudah ada, bagian ini mungkin tidak perlu, 
        // tetapi kita amankan jika memang ada tombol konfirmasi universal
        const greenBtn = confirmPopup.querySelector('.green-btn');
        const redBtn = confirmPopup.querySelector('.red-btn');

        if (greenBtn) {
            greenBtn.addEventListener('click', () => {
                confirmPopup.classList.remove('show');
                alert("Pembelian Berhasil! Pesanan Anda akan segera diproses.");
            });
        }

        if (redBtn) {
            redBtn.addEventListener('click', () => {
                confirmPopup.classList.remove('show');
            });
        }
    }
    
    // 4. Menutup pop-up sukses (Hanya dijalankan jika elemen ada)
    if (successPopup) {
        document.querySelector('#successPopup .close-btn').addEventListener('click', () => {
            successPopup.classList.remove('show');
        });
    }

    // 5. Logika UTAMA untuk tombol KONTAK
    const kontakLink = document.querySelector('.kontak-link');
    if (kontakLink) {
        kontakLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Inilah baris yang Anda perlukan. Sekarang contactPopup pasti terdefinisi!
            if (contactPopup) {
                contactPopup.classList.add("show");
            } else {
                console.error("Popup Kontak tidak ditemukan.");
            }
        });
    }

    // 6. Logika Submit Form Kontak
    const contactForm = document.querySelector('.contact-form');
    if (contactForm && contactPopup && successPopup) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            contactPopup.classList.remove("show");
            successPopup.querySelector('p').textContent = "Pesan Berhasil Dikirim!";
            successPopup.classList.add("show");
        });
    }
});