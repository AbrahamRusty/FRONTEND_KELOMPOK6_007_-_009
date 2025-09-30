// GANTI SELURUH ISI FILE makanan.js DENGAN KODE DI BAWAH INI
// Data Produk Frozen Tradisional Indonesia
// =====================
const frozenProducts = [
  {
    id: 1,
    name: "Pempek Palembang",
    price: "Rp 50.000",
    rating: 5,
    image: "img/pempek.jpg",
    description: "Nikmati cita rasa khas Palembang dengan aneka pempek yang gurih dan lezat! Dibuat dari ikan pilihan dan tepung sagu berkualitas, menghasilkan tekstur kenyal sempurna dan rasa yang otentik."
  },
  {
    id: 2,
    name: "Siomay Bandung",
    price: "Rp 45.000",
    rating: 4.5,
    image: "img/siomay.jpg",
    description: "Nikmati hidangan khas Bandung yang sudah jadi favorit banyak orang! Terbuat dari ikan segar pilihan dan bumbu istimewa, menghasilkan siomay dengan tekstur lembut, gurih, dan aroma khas yang menggoda."
  },
  {
    id: 3,
    name: "Batagor Bandung",
    price: "Rp 48.000",
    rating: 4,
    image: "img/batagor.jpg",
    description: "Batagor (Bakso Tahu Goreng) khas Bandung, sajian legendaris yang selalu bikin rindu! Terbuat dari adonan ikan segar yang dibalut kulit pangsit dan tahu, kemudian digoreng hingga renyah keemasan. Disajikan dengan bumbu kacang kental, manis, gurih, serta perasan jeruk limau yang menyegarkan."
  },
  {
    id: 4,
    name: "Lumpia Semarang",
    price: "Rp 55.000",
    rating: 5,
    image: "img/lumpia.jpg",
    description: "Lumpia khas Semarang dengan cita rasa legendaris yang sudah turun-temurun! Kulitnya tipis dan renyah, berisi tumisan rebung segar, ayam/udang, serta bumbu rempah pilihan yang harum menggoda."
  },
  {
    id: 5,
    name: "Risol Mayo",
    price: "Rp 40.000",
    rating: 4,
    image: "img/risol.jpg",
    description: "Risol kekinian dengan isian melimpah, perpaduan sosis, smoked beef, telur, dan mayones creamy yang lumer di mulut. Dibungkus dengan kulit risol yang tipis lalu digoreng hingga golden brown, menghasilkan tekstur luar renyah dan dalamnya lembut gurih."
  },
  {
    id: 6,
    name: "Pastel Ayam",
    price: "Rp 42.000",
    rating: 4.5,
    image: "img/pastel.jpg",
    description: "Gurihnya pastel goreng dengan kulit tipis renyah keemasan dan isian melimpah. Dibuat dari campuran kentang, wortel, telur, bihun, dan bumbu rempah pilihan yang harum dan lezat."
  },
  {
    id: 7,
    name: "Martabak Mini Manis",
    price: "Rp 38.000",
    rating: 4,
    image: "img/martabak.jpg",
    description: "Martabak mini dengan tekstur empuk dan gurih, dipadukan dengan topping cokelat meises manis legit serta keju parut gurih yang lumer di mulut. Perpaduan rasa manis dan gurihnya pas banget untuk camilan santai maupun suguhan tamu."
  },
  {
    id: 8,
    name: "Sate Lilit Bali",
    price: "Rp 60.000",
    rating: 5,
    image: "img/sate-lilit.jpg",
    description: "Nikmati cita rasa khas Bali dengan Sate Lilit yang dibuat dari daging cincang pilihan, dicampur dengan bumbu rempah tradisional yang harum."
  },
  {
    id: 9,
    name: "Otak-Otak Ikan",
    price: "Rp 45.000",
    rating: 4.5,
    image: "img/otak-otak.jpg",
    description: "Nikmati lezatnya otak-otak khas Nusantara yang dibungkus daun pisang dan dipanggang hingga harum. Terbuat dari adonan ikan segar yang lembut, dipadukan dengan bumbu pilihan yang meresap sempurna."
  },
  {
    id: 10,
    name: "Perkedel Kentang",
    price: "Rp 35.000",
    rating: 4,
    image: "img/perkedel.jpg",
    description: "Perkedel kentang goreng yang berwarna keemasan menggoda. Teksturnya renyah di luar, lembut dan gurih di dalam. Perkedel ini dibuat dari kentang yang dihaluskan, dicampur dengan bumbu pilihan, lalu digoreng hingga matang sempurna."
  },
  {
    id: 11,
    name: "Bakso Sapi",
    price: "Rp 55.000",
    rating: 5,
    image: "img/bakso.jpg",
    description: "Bakso sapi urat kenyal khas Indonesia. Isi 25 pcs."
  },
  {
    id: 12,
    name: "Bakwan Jagung",
    price: "Rp 32.000",
    rating: 4,
    image: "img/bakwan.jpg",
    description: "Nikmati lezatnya bakwan jagung khas Indonesia yang renyah di luar dan lembut di dalam, terbuat dari jagung manis segar dicampur dengan bumbu rempah pilihan."
  },
  {
    id: 13,
    name: "Tempe Mendoan",
    price: "Rp 30.000",
    rating: 4.5,
    image: "img/mendoan.jpg",
    description: "Tempe Mendoan kami dibuat dari tempe kedelai segar pilihan yang diiris tipis, kemudian dicelupkan ke dalam adonan tepung berbumbu kaya rempah yang khas."
  },  
  {
    id: 14,
    name: "Ayam Geprek Crispy",
    price: "Rp 58.000",
    rating: 5,
    image: "img/geprek.jpg",
    description: "Ayam crispy renyah yang digeprek dengan Sambal Bawang segar yang pedas dan gurih nendang. Disajikan lengkap dengan nasi pulen hangat dan timun segar."
  },  
  {
    id: 15,
    name: "Gudeg Jogja",
    price: "Rp 70.000", 
    rating: 5,
    image: "img/gudeg.jpg",
    description: "Gudeg klasik dari nangka muda yang dimasak berjam-jam (di-mudhet) hingga empuk, berserat halus, dan berwarna cokelat kemerahan pekat secara alami. Rasanya manis legit dengan sentuhan gurih santan dan rempah khas."
  },
  {
    id: 16,
    name: "Nasi Goreng Kampung",
    price: "Rp 40.000",
    rating: 4.5,
    image: "img/nasi-goreng.jpg",
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

  // PERBAIKAN 1
  document.getElementById("frozenPopup").classList.add("show");
  // tombol close
  document.querySelector("#frozenPopup .close-btn").onclick = () => {
  // PERBAIKAN 2
    document.getElementById("frozenPopup").classList.remove("show");
  };
}

// =====================
// Popup Konfirmasi
// =====================
function openFrozenConfirm() {
  const confirmPopup = document.getElementById("frozenConfirmPopup");
  // PERBAIKAN 3
  confirmPopup.classList.add("show");

  document.getElementById("frozenCancelBtn").onclick = () => {
    // PERBAIKAN 4
    confirmPopup.classList.remove("show");
  };

  document.getElementById("frozenConfirmBtn").onclick = () => {
    alert("Pembelian Berhasil!");
    // PERBAIKAN 5
    confirmPopup.classList.remove("show");
    // PERBAIKAN 6
    document.getElementById("frozenPopup").classList.remove("show");
  };
}

// =====================
// Load Produk saat page dibuka
// =====================
document.addEventListener("DOMContentLoaded", displayFrozenProducts);