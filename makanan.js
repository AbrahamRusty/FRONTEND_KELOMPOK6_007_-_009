// Data Produk Frozen Tradisional Indonesia
// =====================
const frozenProducts = [
  {
    id: 1,
    name: "Pempek Palembang",
    price: "Rp 50.000",
    rating: 5,
    image: "img/frozen/pempek.jpg",
    description: "Pempek ikan tenggiri khas Palembang, lengkap dengan kuah cuko. Isi 10 pcs."
  },
  {
    id: 2,
    name: "Siomay Bandung",
    price: "Rp 45.000",
    rating: 4.5,
    image: "img/frozen/siomay.jpg",
    description: "Siomay ikan tenggiri dengan tekstur kenyal, cocok disantap dengan saus kacang."
  },
  {
    id: 3,
    name: "Batagor Bandung",
    price: "Rp 48.000",
    rating: 4,
    image: "img/frozen/batagor.jpg",
    description: "Batagor crispy siap goreng dengan bumbu kacang khas Bandung."
  },
  {
    id: 4,
    name: "Lumpia Semarang",
    price: "Rp 55.000",
    rating: 5,
    image: "img/frozen/lumpia.jpg",
    description: "Lumpia isi rebung khas Semarang. Isi 5 pcs."
  },
  {
    id: 5,
    name: "Risol Mayo",
    price: "Rp 40.000",
    rating: 4,
    image: "img/frozen/risol.jpg",
    description: "Risol isi smoked beef, keju, dan mayonaise creamy."
  },
  {
    id: 6,
    name: "Pastel Ayam",
    price: "Rp 42.000",
    rating: 4.5,
    image: "img/frozen/pastel.jpg",
    description: "Pastel isi ayam, wortel, kentang dengan bumbu gurih."
  },
  {
    id: 7,
    name: "Martabak Mini Manis",
    price: "Rp 38.000",
    rating: 4,
    image: "img/frozen/martabak.jpg",
    description: "Martabak mini isi coklat dan keju. Isi 6 pcs."
  },
  {
    id: 8,
    name: "Sate Lilit Bali",
    price: "Rp 60.000",
    rating: 5,
    image: "img/frozen/sate-lilit.jpg",
    description: "Sate lilit khas Bali dengan aroma rempah. Isi 10 tusuk."
  },
  {
    id: 9,
    name: "Otak-Otak Ikan",
    price: "Rp 45.000",
    rating: 4.5,
    image: "img/frozen/otak-otak.jpg",
    description: "Otak-otak ikan gurih, bisa dipanggang atau goreng."
  },
  {
    id: 10,
    name: "Perkedel Kentang",
    price: "Rp 35.000",
    rating: 4,
    image: "img/frozen/perkedel.jpg",
    description: "Perkedel kentang lembut dengan bumbu tradisional. Isi 10 pcs."
  },
  {
    id: 11,
    name: "Bakso Sapi",
    price: "Rp 55.000",
    rating: 5,
    image: "img/frozen/bakso.jpg",
    description: "Bakso sapi urat kenyal khas Indonesia. Isi 25 pcs."
  },
  {
    id: 12,
    name: "Bakwan Jagung",
    price: "Rp 32.000",
    rating: 4,
    image: "img/frozen/bakwan.jpg",
    description: "Bakwan jagung kriuk dengan jagung manis asli."
  },
  {
    id: 13,
    name: "Tempe Mendoan",
    price: "Rp 30.000",
    rating: 4.5,
    image: "img/frozen/mendoan.jpg",
    description: "Tempe mendoan siap goreng dengan bumbu khas Banyumas."
  },
  {
    id: 14,
    name: "Ayam Geprek Crispy",
    price: "Rp 58.000",
    rating: 5,
    image: "img/frozen/geprek.jpg",
    description: "Ayam goreng crispy pedas, tinggal dipanaskan."
  },
  {
    id: 15,
    name: "Gudeg Jogja",
    price: "Rp 70.000",
    rating: 5,
    image: "img/frozen/gudeg.jpg",
    description: "Gudeg Jogja lengkap dengan krecek dan telur."
  },
  {
    id: 16,
    name: "Rujak Cingur",
    price: "Rp 40.000",
    rating: 4.5,
    image: "img/frozen/nasi-goreng.jpg",
    description: "Nasi goreng khas kampung dengan ayam dan telur."
  }
];

// =====================
// Render Produk ke Grid
// =====================
function displayFrozenProducts() {
  const grid = document.getElementById("frozenGrid");
  grid.innerHTML = "";

  frozenProducts.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    // generate bintang rating
    const fullStars = Math.floor(product.rating);
    const halfStar = product.rating % 1 !== 0;
    let starsHTML = "";
    for (let i = 0; i < fullStars; i++) starsHTML += `<i class="fa-solid fa-star"></i>`;
    if (halfStar) starsHTML += `<i class="fa-solid fa-star-half-stroke"></i>`;
    for (let i = fullStars + (halfStar ? 1 : 0); i < 5; i++) starsHTML += `<i class="fa-regular fa-star"></i>`;

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="price">${product.price}</p>
      <div class="stars">${starsHTML}</div>
    `;

    card.addEventListener("click", () => showFrozenDetail(product));
    grid.appendChild(card);
  });
}

// =====================
// Popup Detail Produk
// =====================
function showFrozenDetail(product) {
  const detail = document.getElementById("frozen-detail");

  const fullStars = Math.floor(product.rating);
  const halfStar = product.rating % 1 !== 0;
  let starsHTML = "";
  for (let i = 0; i < fullStars; i++) starsHTML += `<i class="fa-solid fa-star"></i>`;
    if (halfStar) starsHTML += `<i class="fa-solid fa-star-half-stroke"></i>`;
    for (let i = fullStars + (halfStar ? 1 : 0); i < 5; i++) starsHTML += `<i class="fa-regular fa-star"></i>`;

  detail.innerHTML = `
    <img src="${product.image}" class="detail-image" alt="${product.name}">
    <div class="detail-info">
      <h2>${product.name}</h2>
      <div class="stars">${starsHTML}</div>
      <p class="price">${product.price}</p>
      <p>${product.description}</p>
      <button class="btn green-btn" onclick="openFrozenConfirm()">Beli Sekarang</button>
    </div>
  `;

  document.getElementById("frozenPopup").style.display = "flex";

  // tombol close
  document.querySelector("#frozenPopup .close-btn").onclick = () => {
    document.getElementById("frozenPopup").style.display = "none";
  };
}

// =====================
// Popup Konfirmasi
// =====================
function openFrozenConfirm() {
  const confirmPopup = document.getElementById("frozenConfirmPopup");
  confirmPopup.style.display = "flex";

  document.getElementById("frozenCancelBtn").onclick = () => {
    confirmPopup.style.display = "none";
  };

  document.getElementById("frozenConfirmBtn").onclick = () => {
    alert("Pembelian Berhasil!");
    confirmPopup.style.display = "none";
    document.getElementById("frozenPopup").style.display = "none";
  };
}

// =====================
// Load Produk saat page dibuka
// =====================
document.addEventListener("DOMContentLoaded", displayFrozenProducts);
