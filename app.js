/**
 * ปังปุริเย่ เบเกอรี่ (Pangpuriye Bakery) - Interactive Logic
 * Coursework Project for Ajarn Prem
 * Updated with Real Bakery Photography & Circular Cat Holding Cake Logo
 */

// --- 1. ข้อมูลเมนูขนมเบเกอรี่และเครื่องดื่ม (ภาพถ่ายจริง Real Food Photography) ---
const bakeryMenu = [
  {
    id: 'prod-1',
    name: 'ปังเหมียวเนยสด (Neko Butter Bun)',
    category: 'bread',
    price: 45,
    tag: 'Best Seller',
    tagClass: 'badge-bestseller',
    desc: 'ขนมปังเนยสดก้อนกลมฟูนุ่ม หอมเนยแท้ชุ่มฉ่ำ อบสดใหม่จากเตาทุกเช้า การันตีความนุ่มละมุน',
    image: 'assets/images/cat-bun.jpg'
  },
  {
    id: 'prod-2',
    name: 'เค้กน้องแมว Meow Pastel (Cute Cat Cake)',
    category: 'cake',
    price: 145,
    tag: 'Special',
    tagClass: 'badge-special',
    desc: 'เค้กวานิลลาครีมสดสไตล์เกาหลี แต่งหน้าเค้กโทนฟ้าพาสเทลละมุนตา รสสัมผัสเบาละลายในปาก',
    image: 'assets/images/cat-cake.jpg'
  },
  {
    id: 'prod-3',
    name: 'ครัวซองต์เนยสดฝรั่งเศส (French Croissant)',
    category: 'bread',
    price: 65,
    tag: 'Fresh Baked',
    tagClass: 'badge-fresh',
    desc: 'ครัวซองต์เลเยอร์เนียนสวย แป้งกรอบนอกนุ่มใน หอมฟุ้งด้วยเนยแท้ฝรั่งเศส 100%',
    image: 'assets/images/croissant.jpg'
  },
  {
    id: 'prod-4',
    name: 'ปังบริออชคัสตาร์ดนมสด (Custard Brioche Bun)',
    category: 'bread',
    price: 50,
    tag: 'Popular',
    tagClass: 'badge-popular',
    desc: 'ขนมปังบริออชเนื้อทองคำ สอดไส้คัสตาร์ดครีมนมฮอกไกโดเข้มข้น หวานกำลังดี ไม่เลี่ยน',
    image: 'assets/images/bear-bun.jpg'
  },
  {
    id: 'prod-5',
    name: 'เค้กสตรอว์เบอร์รีวิปครีม (Strawberry Shortcake)',
    category: 'cake',
    price: 120,
    tag: 'Best Seller',
    tagClass: 'badge-bestseller',
    desc: 'เนื้อสปันจ์เค้กนุ่มละมุน แทรกชั้นสตรอว์เบอร์รีสดลูกโตและวิปครีมสดแท้หวานหอม',
    image: 'assets/images/strawberry-cake.jpg'
  },
  {
    id: 'prod-6',
    name: 'มาการองพาสเทลเซ็ต 5 ชิ้น (Pastel Macaron Set)',
    category: 'dessert',
    price: 150,
    tag: 'Recommended',
    tagClass: 'badge-special',
    desc: 'มาการองฝรั่งเศสแท้ โทนพาสเทล 5 รสชาติ (วานิลลา, มัทฉะ, เลมอน, สตรอว์เบอร์รี, ช็อกโกแลต)',
    image: 'assets/images/macarons.jpg'
  },
  {
    id: 'prod-7',
    name: 'โดนัทเคลือบเกลซคิ้วท์ตี้ (Sweet Glazed Donut)',
    category: 'dessert',
    price: 42,
    tag: 'Fresh Baked',
    tagClass: 'badge-fresh',
    desc: 'โดนัททอดไม่อมน้ำมัน เคลือบไวท์ช็อกโกแลตและสตรอว์เบอร์รีเกลซสีชมพู โรยเกล็ดน้ำตาลพาสเทลสายรุ้งสุดน่ารัก',
    image: 'assets/images/donut-glazed.jpg'
  },
  {
    id: 'prod-8',
    name: 'คุกกี้เนยสดกรอบโฮมเมด (Homemade Butter Cookies)',
    category: 'dessert',
    price: 85,
    tag: 'Popular',
    tagClass: 'badge-popular',
    desc: 'คุกกี้เนยสดสูตรลับเฉพาะ กรอบร่วนละมุนลิ้น บรรจุในกระปุกแก้วสุดน่ารักสำหรับเป็นของฝาก',
    image: 'assets/images/cookies.jpg'
  },
  {
    id: 'prod-9',
    name: 'มัทฉะคลาวด์ลาเต้นมสด (Matcha Cloud Latte)',
    category: 'drink',
    price: 65,
    tag: 'Best Seller',
    tagClass: 'badge-bestseller',
    desc: 'ชาเขียวมัทฉะอุจิแท้ 100% สกัดเข้มข้น ผสมนมสดฮอกไกโด ท็อปด้วยฟองนมนุ่มฟูเหมือนก้อนเมฆ',
    image: 'assets/images/matcha-latte.jpg'
  },
  {
    id: 'prod-10',
    name: 'พีชโซดาดอกไม้ซากุระ (Sparkling Peach Soda)',
    category: 'drink',
    price: 55,
    tag: 'Fresh Baked',
    tagClass: 'badge-fresh',
    desc: 'น้ำพีชญี่ปุ่นผสมโซดาซ่าสดชื่น ดับร้อน ท็อปด้วยกลีบดอกไม้และสไลซ์ผลไม้สดชื่นใจ',
    image: 'assets/images/peach-soda.jpg'
  }
];

// --- 2. State & Storage ---
let cart = JSON.parse(localStorage.getItem('pangpuriye_cart')) || [];
let activeCategory = 'all';
let appliedDiscount = 0; // percentage

// --- 3. DOM Elements ---
const productsGrid = document.getElementById('products-grid');
const categoryTabs = document.querySelectorAll('.cat-btn');
const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
const openCartBtn = document.getElementById('open-cart-btn');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartBadgeCount = document.getElementById('cart-count-badge');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartDiscountEl = document.getElementById('cart-discount-val');
const cartTotalEl = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');

// Modal Elements
const checkoutModal = document.getElementById('checkout-modal');
const closeCheckoutBtn = document.getElementById('close-checkout-btn');
const checkoutForm = document.getElementById('checkout-form');
const receiptModal = document.getElementById('receipt-modal');
const closeReceiptBtn = document.getElementById('close-receipt-btn');
const receiptContent = document.getElementById('receipt-content');
const toastContainer = document.getElementById('toast-container');

// --- 4. Render Products Function (Using Real Photography) ---
function renderProducts() {
  if (!productsGrid) return;
  
  const filtered = activeCategory === 'all' 
    ? bakeryMenu 
    : bakeryMenu.filter(item => item.category === activeCategory);

  productsGrid.innerHTML = filtered.map(item => `
    <article class="product-card" data-id="${item.id}">
      <span class="card-badge ${item.tagClass}">${item.tag}</span>
      <div class="product-img-wrap">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
      </div>
      <div class="product-info">
        <span class="product-cat-name">${getCategoryThaiName(item.category)}</span>
        <h3 class="product-title">${item.name}</h3>
        <p class="product-desc">${item.desc}</p>
        <div class="product-footer">
          <div class="product-price">${item.price} <span>฿</span></div>
          <button class="btn-add-cart" onclick="addToCart('${item.id}')">
            <span>+</span> ใส่ตะกร้า
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

function getCategoryThaiName(cat) {
  switch (cat) {
    case 'bread': return '🍞 ขนมปังสดใหม่';
    case 'cake': return '🍰 เค้ก & ทาร์ต';
    case 'dessert': return '🍪 คุกกี้ & ของหวาน';
    case 'drink': return '🥤 เครื่องดื่มคาเฟ่';
    default: return '✨ เบเกอรี่โฮมเมด';
  }
}

// --- 5. Category Filter Tabs Event ---
categoryTabs.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryTabs.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.dataset.category;
    renderProducts();
  });
});

// --- 6. Shopping Cart Operations ---
function saveCart() {
  localStorage.setItem('pangpuriye_cart', JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId) {
  const product = bakeryMenu.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      qty: 1,
      image: product.image
    });
  }

  saveCart();
  showToast(`เพิ่ม "${product.name}" ลงในตะกร้าแล้ว! 🥐✨`);
  animateCartBadge();
}

function updateQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }
  saveCart();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  showToast('ลบรายการออกจากตะกร้าแล้ว');
}

function updateCartUI() {
  // Update badge count
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  if (cartBadgeCount) {
    cartBadgeCount.textContent = totalCount;
  }

  // Update Cart Drawer Items List
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart-state">
        <div class="empty-icon">🧺</div>
        <h4>ตะกร้ายังว่างอยู่เลย~</h4>
        <p>เลือกขนมปังและเค้กน่ารักๆ ใส่ตะกร้ากันเถอะ!</p>
      </div>
    `;
    checkoutBtn.disabled = true;
  } else {
    checkoutBtn.disabled = false;
    cartItemsContainer.innerHTML = cart.map(item => {
      const liveProduct = bakeryMenu.find(p => p.id === item.id);
      const imgUrl = liveProduct ? liveProduct.image : item.image;
      return `
      <div class="cart-item">
        <div class="cart-item-img">
          <img src="${imgUrl}" alt="${item.name}">
        </div>
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.name}</h4>
          <div class="cart-item-price">${item.price * item.qty} ฿ <span style="font-size:0.75rem; color:#A89F95;">(${item.price}฿/ชิ้น)</span></div>
        </div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="updateQuantity('${item.id}', -1)" title="ลดจำนวน">-</button>
          <span class="cart-item-qty">${item.qty}</span>
          <button class="qty-btn" onclick="updateQuantity('${item.id}', 1)" title="เพิ่มจำนวน">+</button>
        </div>
        <button class="btn-remove-item" onclick="removeFromCart('${item.id}')" title="ลบออก">✕</button>
      </div>
    `;}).join('');
  }

  // Calculate Totals
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const discountAmount = Math.round(subtotal * (appliedDiscount / 100));
  const finalTotal = Math.max(0, subtotal - discountAmount);

  if (cartSubtotalEl) cartSubtotalEl.textContent = `${subtotal.toLocaleString()} ฿`;
  if (cartDiscountEl) cartDiscountEl.textContent = appliedDiscount > 0 ? `-${discountAmount.toLocaleString()} ฿ (${appliedDiscount}%)` : '0 ฿';
  if (cartTotalEl) cartTotalEl.textContent = `${finalTotal.toLocaleString()} ฿`;
}

function animateCartBadge() {
  if (!cartBadgeCount) return;
  cartBadgeCount.style.transform = 'scale(1.4)';
  setTimeout(() => {
    cartBadgeCount.style.transform = 'scale(1)';
  }, 200);
}

// Discount Code Handler
window.applyCoupon = function() {
  const couponInput = document.getElementById('coupon-input');
  if (!couponInput) return;
  const code = couponInput.value.trim().toUpperCase();

  if (code === 'PANGPURIYE' || code === 'MEOW10') {
    appliedDiscount = 10;
    showToast('🎉 ใช้โค้ดลด 10% สำเร็จแล้ว!');
    updateCartUI();
  } else if (code === 'AJARNPREM' || code === 'PREM100') {
    appliedDiscount = 20;
    showToast('⭐ โค้ดพิเศษสำหรับการบ้านอาจารย์เปรม รับส่วนลด 20%!');
    updateCartUI();
  } else if (code === '') {
    showToast('กรุณากรอกโค้ดส่วนลด');
  } else {
    showToast('❌ โค้ดไม่ถูกต้อง (ลองใส่ PANGPURIYE หรือ PREM100)');
  }
};

// --- 7. Drawer Open/Close Listeners ---
function openCart() {
  cartDrawerOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartDrawerOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

if (openCartBtn) openCartBtn.addEventListener('click', openCart);
if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
cartDrawerOverlay.addEventListener('click', (e) => {
  if (e.target === cartDrawerOverlay) closeCart();
});

// --- 8. Checkout Modal & Form Submission ---
if (checkoutBtn) {
  checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;
    closeCart();
    checkoutModal.classList.add('active');
  });
}

if (closeCheckoutBtn) {
  closeCheckoutBtn.addEventListener('click', () => {
    checkoutModal.classList.remove('active');
  });
}

if (checkoutForm) {
  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const customerName = document.getElementById('cust-name').value;
    const customerPhone = document.getElementById('cust-phone').value;
    const orderType = document.querySelector('input[name="orderType"]:checked')?.value || 'หน้าร้าน';
    const paymentMethod = document.getElementById('pay-method').value;
    const note = document.getElementById('cust-note').value;

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const discountAmount = Math.round(subtotal * (appliedDiscount / 100));
    const finalTotal = subtotal - discountAmount;
    const orderNumber = 'PP-' + Math.floor(100000 + Math.random() * 900000);
    const now = new Date();
    const dateFormatted = now.toLocaleDateString('th-TH', { 
      year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' 
    });

    // Render Cute Thermal Receipt with Circular Cat Holding Cake Logo
    receiptContent.innerHTML = `
      <div class="receipt-paper">
        <div class="receipt-header">
          <div style="width: 70px; height: 70px; margin: 0 auto 8px;">
            <img src="assets/images/logo.svg" alt="ปังปุริเย่ เบเกอรี่ โลโก้" style="width: 100%; height: 100%; border-radius: 50%;">
          </div>
          <h4>ปังปุริเย่ เบเกอรี่</h4>
          <p>Pangpuriye Bakery & Cafe</p>
          <p style="margin-top: 4px;">เลขที่ออเดอร์: <strong>#${orderNumber}</strong></p>
          <p>วันที่: ${dateFormatted}</p>
        </div>

        <div style="margin-bottom: 0.8rem; font-size: 0.85rem; color: #5D544C;">
          <p><strong>ผู้สั่งซื้อ:</strong> ${customerName} (${customerPhone})</p>
          <p><strong>รูปแบบบริการ:</strong> <span style="color:#4A89C8; font-weight:600;">${orderType}</span></p>
          <p><strong>วิธีชำระเงิน:</strong> ${paymentMethod}</p>
          ${note ? `<p><strong>หมายเหตุ:</strong> ${note}</p>` : ''}
        </div>

        <div class="receipt-divider"></div>

        <div class="receipt-items-list">
          ${cart.map(item => `
            <div class="receipt-item-row">
              <span>${item.name} x ${item.qty}</span>
              <span>${(item.price * item.qty).toLocaleString()} ฿</span>
            </div>
          `).join('')}
        </div>

        <div class="receipt-divider"></div>

        <div class="receipt-item-row" style="color: #7D736A; font-size: 0.85rem;">
          <span>ยอดรวมสินค้า</span>
          <span>${subtotal.toLocaleString()} ฿</span>
        </div>
        ${appliedDiscount > 0 ? `
          <div class="receipt-item-row" style="color: #FF5E7E; font-size: 0.85rem;">
            <span>ส่วนลด (${appliedDiscount}%)</span>
            <span>-${discountAmount.toLocaleString()} ฿</span>
          </div>
        ` : ''}

        <div class="receipt-total" style="margin-top: 0.5rem;">
          <span>ยอดชำระสุทธิ</span>
          <span style="color:#4A89C8;">${finalTotal.toLocaleString()} ฿</span>
        </div>

        ${paymentMethod.includes('QR') || paymentMethod.includes('พร้อมเพย์') ? `
          <div class="qr-placeholder">
            <p style="font-size: 0.82rem; font-weight: 600; color: #4A89C8; margin-bottom: 8px;">
              📱 สแกน QR Code พร้อมเพย์ เพื่อชำระเงิน
            </p>
            <!-- Simulated cute QR Code SVG with cat logo center -->
            <svg width="120" height="120" viewBox="0 0 120 120">
              <rect width="120" height="120" fill="#FFFFFF"/>
              <!-- Corner Markers -->
              <rect x="10" y="10" width="30" height="30" fill="#4A89C8" rx="4"/>
              <rect x="16" y="16" width="18" height="18" fill="#FFFFFF" rx="2"/>
              <rect x="20" y="20" width="10" height="10" fill="#4A89C8" rx="1"/>

              <rect x="80" y="10" width="30" height="30" fill="#4A89C8" rx="4"/>
              <rect x="86" y="16" width="18" height="18" fill="#FFFFFF" rx="2"/>
              <rect x="90" y="20" width="10" height="10" fill="#4A89C8" rx="1"/>

              <rect x="10" y="80" width="30" height="30" fill="#4A89C8" rx="4"/>
              <rect x="16" y="86" width="18" height="18" fill="#FFFFFF" rx="2"/>
              <rect x="20" y="90" width="10" height="10" fill="#4A89C8" rx="1"/>

              <!-- Simulated Data dots -->
              <rect x="50" y="15" width="8" height="8" fill="#4A89C8"/>
              <rect x="62" y="25" width="8" height="8" fill="#4A89C8"/>
              <rect x="50" y="50" width="20" height="20" rx="4" fill="#E89B53"/>
              
              <!-- Cat Face in Center -->
              <circle cx="60" cy="60" r="7" fill="#FFFFFF"/>
              <circle cx="58" cy="59" r="1" fill="#3D352E"/>
              <circle cx="62" cy="59" r="1" fill="#3D352E"/>
              <polygon points="56,54 58,51 60,54" fill="#FFB7C5"/>
              <polygon points="60,54 62,51 64,54" fill="#FFB7C5"/>

              <rect x="25" y="55" width="8" height="8" fill="#4A89C8"/>
              <rect x="85" y="55" width="8" height="8" fill="#4A89C8"/>
              <rect x="60" y="85" width="8" height="8" fill="#4A89C8"/>
              <rect x="75" y="85" width="8" height="8" fill="#4A89C8"/>
              <rect x="90" y="75" width="8" height="8" fill="#4A89C8"/>
            </svg>
            <p style="font-size: 0.75rem; color: #A89F95; margin-top: 4px;">ปังปุริเย่ เบเกอรี่ (PromptPay 08X-XXX-XXXX)</p>
          </div>
        ` : ''}

        <div style="text-align: center; margin-top: 1.25rem;">
          <p style="font-family: 'Mali', cursive; color: #4A89C8; font-size: 1rem; font-weight: 600;">
            ขอบพระคุณที่อุดหนุนปังปุริเย่นะคะ 🤍
          </p>
          <p style="font-size: 0.75rem; color: #A89F95; margin-top: 2px;">
            ขนมโฮมเมด อบสดใหม่เพื่อคุณทุกวัน
          </p>
        </div>
      </div>

      <div style="display: flex; gap: 10px; margin-top: 1.25rem;">
        <button class="btn-primary" style="flex: 1; justify-content: center;" onclick="window.print()">
          🖨️ พิมพ์ใบเสร็จ
        </button>
        <button class="btn-secondary" style="flex: 1; justify-content: center;" onclick="finishOrder()">
          เสร็จสิ้น
        </button>
      </div>
    `;

    // Clear cart and close checkout modal, show receipt
    cart = [];
    appliedDiscount = 0;
    saveCart();
    checkoutModal.classList.remove('active');
    receiptModal.classList.add('active');
  });
}

if (closeReceiptBtn) {
  closeReceiptBtn.addEventListener('click', () => {
    receiptModal.classList.remove('active');
  });
}

window.finishOrder = function() {
  receiptModal.classList.remove('active');
  showToast('ขอบคุณสำหรับการสั่งซื้อนะคะ! ออเดอร์กำลังจัดเตรียมค่ะ 🍞✨');
};

// --- 9. Toast Helper ---
function showToast(message) {
  if (!toastContainer) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>🍞</span><span>${message}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// --- 10. Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();
});
