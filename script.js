// Enhanced Product Data with More Comprehensive Information
const enhancedProducts = [
    {
        id: 1,
        name: "Cadbury Dairy Milk Silk Chocolate 60g",
        image: "cookie",
        category: "groceries",
        brand: "Cadbury",
        description: "Rich and creamy milk chocolate with a smooth silk texture",
        prices: {
            zepto: { price: 220, delivery: 10, time: "10 mins" },
            blinkit: { price: 215, delivery: 15, time: "15 mins" },
            instamart: { price: 230, delivery: 0, time: "20 mins" },
            bigbasket: { price: 225, delivery: 30, time: "Next day" },
            amazon: { price: 218, delivery: 40, time: "2 days" },
            flipkart: { price: 210, delivery: 0, time: "3 days" },
            swiggy: { price: 225, delivery: 25, time: "30 mins" }
        },
        bestPrice: 210,
        savings: 20,
        cashback: 5,
        rating: 4.5,
        reviews: 1250,
        tags: ["sweet", "chocolate", "snack"],
        availability: { zepto: true, blinkit: true, instamart: true, bigbasket: false, amazon: true, flipkart: true, swiggy: true, myntra: false }
    },
    {
        id: 2,
        name: "Apple iPhone 14 Pro 128GB Deep Purple",
        image: "mobile-alt",
        category: "electronics",
        brand: "Apple",
        description: "Latest iPhone with A16 Bionic chip, Pro camera system, and Dynamic Island",
        prices: {
            blinkit: { price: 129499, delivery: 0, time: "2 hours" },
            bigbasket: { price: 129999, delivery: 100, time: "Next day" },
            amazon: { price: 128999, delivery: 0, time: "1 day" },
            flipkart: { price: 127999, delivery: 0, time: "2 days" },
            myntra: { price: 130499, delivery: 200, time: "3 days" }
        },
        bestPrice: 127999,
        savings: 3000,
        cashback: 7,
        rating: 4.8,
        reviews: 3420,
        tags: ["smartphone", "premium", "camera"],
        availability: { zepto: false, blinkit: true, instamart: false, bigbasket: true, amazon: true, flipkart: true, myntra: true, swiggy: false }
    },
    {
        id: 3,
        name: "Nike Air Max 270 Running Shoes",
        image: "shoe-prints",
        category: "fashion",
        brand: "Nike",
        description: "Comfortable running shoes with Air Max cushioning technology",
        prices: {
            amazon: { price: 8599, delivery: 0, time: "2 days" },
            flipkart: { price: 8499, delivery: 0, time: "3 days" },
            myntra: { price: 8299, delivery: 0, time: "2 days" }
        },
        bestPrice: 8299,
        savings: 900,
        cashback: 4,
        rating: 4.6,
        reviews: 890,
        tags: ["running", "sports", "comfortable"],
        availability: { zepto: false, blinkit: false, instamart: false, bigbasket: false, amazon: true, flipkart: true, myntra: true, swiggy: false }
    },
    {
        id: 4,
        name: "Samsung 55-inch 4K Crystal UHD Smart TV",
        image: "tv",
        category: "electronics",
        brand: "Samsung",
        description: "Crystal clear 4K resolution with smart TV features and HDR support",
        prices: {
            blinkit: { price: 53999, delivery: 150, time: "4 hours" },
            bigbasket: { price: 54999, delivery: 250, time: "Next day" },
            amazon: { price: 52999, delivery: 0, time: "2 days" },
            flipkart: { price: 51999, delivery: 0, time: "3 days" },
        },
        bestPrice: 51999,
        savings: 4000,
        cashback: 6,
        rating: 4.7,
        reviews: 2100,
        tags: ["4k", "smart tv", "entertainment"],
        availability: { zepto: false, blinkit: true, instamart: false, bigbasket: true, amazon: true, flipkart: true, myntra: false, swiggy: false }
    },
    {
        id: 5,
        name: "Nestle KitKat Chocolate Bar 4 Finger Pack",
        image: "candy-cane",
        category: "groceries",
        brand: "Nestle",
        description: "Crispy wafer fingers covered with smooth milk chocolate",
        prices: {
            zepto: { price: 150, delivery: 10, time: "10 mins" },
            blinkit: { price: 145, delivery: 15, time: "15 mins" },
            instamart: { price: 155, delivery: 0, time: "20 mins" },
            bigbasket: { price: 150, delivery: 30, time: "Next day" },
            amazon: { price: 140, delivery: 40, time: "2 days" },
            flipkart: { price: 135, delivery: 0, time: "3 days" },
            swiggy: { price: 150, delivery: 25, time: "30 mins" }
        },
        bestPrice: 135,
        savings: 20,
        cashback: 3,
        rating: 4.3,
        reviews: 567,
        tags: ["chocolate", "wafer", "sweet"],
        availability: { zepto: true, blinkit: true, instamart: true, bigbasket: true, amazon: true, flipkart: true, swiggy: true, myntra: false }
    },
    {
        id: 6,
        name: "Adidas Essentials 3-Stripes T-Shirt",
        image: "tshirt",
        category: "fashion",
        brand: "Adidas",
        description: "Comfortable cotton t-shirt with iconic 3-stripes design",
        prices: {
            amazon: { price: 1799, delivery: 0, time: "2 days" },
            flipkart: { price: 1699, delivery: 0, time: "3 days" },
            myntra: { price: 1599, delivery: 0, time: "2 days" }
        },
        bestPrice: 1599,
        savings: 500,
        cashback: 4,
        rating: 4.4,
        reviews: 445,
        tags: ["casual", "sports", "cotton"],
        availability: { zepto: false, blinkit: false, instamart: false, bigbasket: false, amazon: true, flipkart: true, myntra: true, swiggy: false }
    }
];

// Application State
const appState = {
    currentTheme: localStorage.getItem('theme') || 'light',
    currentProducts: [...enhancedProducts],
    currentFilters: {
        category: 'all',
        priceRange: { min: 0, max: 200000 },
        platforms: [],
    },
    currentSort: 'best-price',
    currentView: 'grid',
    searchTerm: '',
    isFilterPanelOpen: false,
};

// DOM Elements
const DOMElements = {
    header: document.getElementById('header'),
    themeToggle: document.getElementById('themeToggle'),
    searchToggle: document.getElementById('searchToggle'),
    mobileSearchBar: document.getElementById('mobileSearchBar'),
    heroSearchInput: document.getElementById('heroSearchInput'),
    searchSuggestions: document.getElementById('searchSuggestions'),
    filterChips: document.querySelectorAll('.filter-chip'),
    advancedFiltersBtn: document.getElementById('advancedFilters'),
    filterPanel: document.getElementById('filterPanel'),
    productsContainer: document.getElementById('productsContainer'),
    advancedSort: document.getElementById('advancedSort'),
    viewBtns: document.querySelectorAll('.view-btn'),
    productModal: document.getElementById('productModal'),
    modalBody: document.getElementById('modalBody'),
    modalClose: document.getElementById('modalClose'),
    notificationToast: document.getElementById('notificationToast'),
    minPrice: document.getElementById('minPrice'),
    maxPrice: document.getElementById('maxPrice'),
    minPriceDisplay: document.getElementById('minPriceDisplay'),
    maxPriceDisplay: document.getElementById('maxPriceDisplay'),
};

// Search Suggestions Data
const searchSuggestions_data = ["iPhone 14 Pro", "Samsung Galaxy", "Chocolate", "Running Shoes", "Smart TV", "Laptop", "Headphones", "T-shirt", "Jeans", "Groceries", "Electronics", "Fashion", "Nike", "Adidas", "Apple", "Samsung"];

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
});

function initializeApp() {
    setupTheme();
    setupHeaderScrollEffect();
    updatePriceRangeUI();
    loadProducts();
}

function setupEventListeners() {
    DOMElements.themeToggle?.addEventListener('click', toggleTheme);
    DOMElements.searchToggle?.addEventListener('click', toggleMobileSearch);
    DOMElements.heroSearchInput?.addEventListener('input', handleSearchInput);
    DOMElements.heroSearchInput?.addEventListener('focus', showSearchSuggestions);
    document.addEventListener('click', (e) => {
        if (!DOMElements.heroSearchInput?.contains(e.target)) {
            hideSearchSuggestions();
        }
    });
    DOMElements.heroSearchInput?.addEventListener('keydown', handleSearchKeydown);
    DOMElements.filterChips.forEach(chip => chip.addEventListener('click', handleFilterChip));
    DOMElements.advancedFiltersBtn?.addEventListener('click', toggleFilterPanel);
    DOMElements.advancedSort?.addEventListener('change', handleSortChange);
    DOMElements.viewBtns.forEach(btn => btn.addEventListener('click', handleViewChange));
    DOMElements.modalClose?.addEventListener('click', closeModal);
    DOMElements.productModal?.addEventListener('click', e => {
        if (e.target === DOMElements.productModal) closeModal();
    });
    DOMElements.minPrice?.addEventListener('input', handlePriceRangeChange);
    DOMElements.maxPrice?.addEventListener('input', handlePriceRangeChange);
    document.querySelector('.btn-apply')?.addEventListener('click', applyFilters);
    document.querySelector('.btn-reset')?.addEventListener('click', resetFilters);
    document.querySelector('.btn-load-more')?.addEventListener('click', () => showNotification('All products are currently displayed.', 'info'));
}

// --- CORE FUNCTIONALITY ---

function loadProducts() {
    showLoading();
    setTimeout(() => {
        filterAndDisplayProducts();
        hideLoading();
    }, 500);
}

function filterAndDisplayProducts() {
    let filtered = [...enhancedProducts];
    if (appState.searchTerm) {
        const term = appState.searchTerm.toLowerCase();
        filtered = filtered.filter(p => p.name.toLowerCase().includes(term) || p.brand.toLowerCase().includes(term) || p.tags.some(t => t.toLowerCase().includes(term)));
    }
    if (appState.currentFilters.category !== 'all') {
        filtered = filtered.filter(p => p.category === appState.currentFilters.category);
    }
    filtered = filtered.filter(p => p.bestPrice >= appState.currentFilters.priceRange.min && p.bestPrice <= appState.currentFilters.priceRange.max);
    if (appState.currentFilters.platforms.length > 0) {
        filtered = filtered.filter(p => appState.currentFilters.platforms.some(platform => p.availability[platform]));
    }
    sortProducts(filtered, appState.currentSort);
    displayProducts(filtered);
}

function sortProducts(products, sortBy) {
    products.sort((a, b) => {
        switch (sortBy) {
            case 'highest-savings': return b.savings - a.savings;
            case 'most-popular': return b.reviews - a.reviews;
            case 'highest-rated': return b.rating - a.rating;
            case 'newest': return b.id - a.id;
            case 'best-price':
            default: return a.bestPrice - b.bestPrice;
        }
    });
}

function displayProducts(products) {
    if (!DOMElements.productsContainer) return;
    if (products.length === 0) {
        DOMElements.productsContainer.innerHTML = `<div class="no-products"><h3>No products found</h3><p>Try adjusting your search or filters</p></div>`;
        return;
    }
    DOMElements.productsContainer.innerHTML = products.map(createProductCard).join('');
}

// --- UI & EVENT HANDLERS ---

function setupTheme() {
    document.body.setAttribute('data-theme', appState.currentTheme);
}

function toggleTheme() {
    appState.currentTheme = appState.currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', appState.currentTheme);
    setupTheme();
}

function handleSearchInput(e) {
    const query = e.target.value.toLowerCase();
    appState.searchTerm = query;
    if (query.length > 0) {
        updateSearchSuggestions(query);
        showSearchSuggestions();
    } else {
        hideSearchSuggestions();
    }
    // Debounce search
    clearTimeout(handleSearchInput.timeout);
    handleSearchInput.timeout = setTimeout(filterAndDisplayProducts, 300);
}

function handleFilterChip(e) {
    DOMElements.filterChips.forEach(chip => chip.classList.remove('active'));
    e.currentTarget.classList.add('active');
    appState.currentFilters.category = e.currentTarget.dataset.filter;
    filterAndDisplayProducts();
}

function toggleFilterPanel() {
    appState.isFilterPanelOpen = !appState.isFilterPanelOpen;
    DOMElements.filterPanel?.classList.toggle('active', appState.isFilterPanelOpen);
}

function handleSortChange(e) {
    appState.currentSort = e.target.value;
    filterAndDisplayProducts();
}

function handleViewChange(e) {
    DOMElements.viewBtns.forEach(btn => btn.classList.remove('active'));
    e.currentTarget.classList.add('active');
    appState.currentView = e.currentTarget.dataset.view;
    DOMElements.productsContainer?.classList.toggle('list-view', appState.currentView === 'list');
}

function handlePriceRangeChange() {
    const minVal = parseInt(DOMElements.minPrice.value);
    const maxVal = parseInt(DOMElements.maxPrice.value);
    if (minVal > maxVal) {
        DOMElements.minPrice.value = maxVal;
        appState.currentFilters.priceRange = { min: maxVal, max: maxVal };
    } else {
        appState.currentFilters.priceRange = { min: minVal, max: maxVal };
    }
    updatePriceRangeUI();
}

function updatePriceRangeUI() {
    DOMElements.minPriceDisplay.textContent = `₹${appState.currentFilters.priceRange.min.toLocaleString()}`;
    DOMElements.maxPriceDisplay.textContent = `₹${appState.currentFilters.priceRange.max.toLocaleString()}`;
}

function applyFilters() {
    const platformCheckboxes = document.querySelectorAll('.platform-filter input:checked');
    appState.currentFilters.platforms = Array.from(platformCheckboxes).map(cb => cb.value);
    filterAndDisplayProducts();
    toggleFilterPanel();
    showNotification('Filters applied successfully!', 'success');
}

function resetFilters() {
    appState.currentFilters = { category: 'all', priceRange: { min: 0, max: 200000 }, platforms: [] };
    DOMElements.minPrice.value = 0;
    DOMElements.maxPrice.value = 200000;
    updatePriceRangeUI();
    document.querySelectorAll('.filter-panel input[type="checkbox"]').forEach(cb => cb.checked = true);
    DOMElements.filterChips.forEach(chip => chip.classList.remove('active'));
    document.querySelector('.filter-chip[data-filter="all"]')?.classList.add('active');
    filterAndDisplayProducts();
    showNotification('Filters reset successfully!', 'info');
}

function openProductModal(productId) {
    const product = enhancedProducts.find(p => p.id === productId);
    if (!product || !DOMElements.productModal || !DOMElements.modalBody) return;
    DOMElements.modalBody.innerHTML = createProductModalContent(product);
    DOMElements.productModal.style.display = 'flex';
    setTimeout(() => DOMElements.productModal.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    DOMElements.productModal.classList.remove('active');
    setTimeout(() => {
        DOMElements.productModal.style.display = 'none';
        DOMElements.modalBody.innerHTML = '';
    }, 300);
    document.body.style.overflow = 'auto';
}

// --- HTML GENERATORS ---

function createProductCard(product) {
    const bestPlatform = Object.keys(product.prices).reduce((a, b) => product.prices[a].price < product.prices[b].price ? a : b);
    const availablePlatforms = Object.entries(product.availability).filter(([, available]) => available).slice(0, 4);
    return `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <div class="product-image"><i class="fas fa-${product.image}"></i><div class="product-badge">${product.cashback}% Cashback</div></div>
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <div class="product-title">${product.name}</div>
                <div class="product-rating"><div class="stars">${'★'.repeat(Math.round(product.rating))}${'☆'.repeat(5 - Math.round(product.rating))}</div><span class="rating-text">${product.rating} (${product.reviews.toLocaleString()})</span></div>
                <div class="product-price">₹${product.bestPrice.toLocaleString()}</div>
                <div class="savings-info"><span class="savings">Save ₹${product.savings.toLocaleString()}</span><span class="best-platform">on ${bestPlatform}</span></div>
                <div class="product-actions">
                    <button class="btn-view" onclick="event.stopPropagation(); openProductModal(${product.id})"><i class="fas fa-eye"></i> View</button>
                    <button class="btn-buy" onclick="event.stopPropagation(); buyProduct(${product.id}, '${bestPlatform}')"><i class="fas fa-shopping-cart"></i> Buy Now</button>
                </div>
            </div>
        </div>`;
}

function createProductModalContent(product) {
    const allPlatforms = Object.entries(product.prices).filter(([platform]) => product.availability[platform]);
    return `
        <div class="modal-product-header">
            <div class="modal-product-image"><i class="fas fa-${product.image}"></i></div>
            <div class="modal-product-info">
                <h2>${product.name}</h2><p class="product-brand">${product.brand}</p>
                <p class="product-description">${product.description}</p>
                <div class="product-rating"><div class="stars">${'★'.repeat(Math.round(product.rating))}${'☆'.repeat(5 - Math.round(product.rating))}</div><span>${product.rating} (${product.reviews.toLocaleString()} reviews)</span></div>
            </div>
        </div>
        <div class="price-comparison-section">
            <h3>Price Comparison</h3>
            <div class="platform-comparison">${allPlatforms.map(([platform, data]) => `
                <div class="platform-comparison-item ${data.price === product.bestPrice ? 'best-deal' : ''}">
                    <div class="platform-info">
                        <div class="platform-logo"><i class="fas fa-${getPlatformIcon(platform)}"></i></div>
                        <div class="platform-details"><div class="platform-name">${platform}</div><div class="delivery-info">${data.time} delivery</div></div>
                    </div>
                    <div class="platform-pricing"><div class="platform-price">₹${(data.price + data.delivery).toLocaleString()}</div></div>
                    <button class="btn-buy-platform" onclick="buyProduct(${product.id}, '${platform}')">Buy Now</button>
                </div>`).join('')}
            </div>
        </div>
        <div class="product-tags"><h4>Tags</h4><div class="tags-list">${product.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div></div>`;
}

// --- UTILITY & HELPER FUNCTIONS ---

function getPlatformIcon(platform) {
    const icons = { amazon: 'fa-amazon fab', flipkart: 'fa-shopping-cart', myntra: 'fa-tshirt', zepto: 'fa-shipping-fast', blinkit: 'fa-bolt', instamart: 'fa-store', swiggy: 'fa-utensils', bigbasket: 'fa-shopping-basket' };
    return icons[platform] || 'fa-question-circle';
}

function buyProduct(productId, platform) {
    showNotification(`Redirecting you to ${platform} to buy...`, 'success');
    closeModal();
}

function addToWishlist(productId) {
    showNotification(`Product added to your wishlist!`, 'success');
}

function showNotification(message, type = 'info') {
    const toast = DOMElements.notificationToast;
    if (!toast) return;
    const icon = toast.querySelector('.toast-icon');
    toast.querySelector('.toast-message').textContent = message;
    toast.querySelector('.toast-title').textContent = type.charAt(0).toUpperCase() + type.slice(1);
    icon.className = `toast-icon ${type}`;
    icon.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
}

function showLoading() {
    DOMElements.productsContainer.innerHTML = '<div class="loading-spinner"></div>';
}

function hideLoading() {
    const spinner = DOMElements.productsContainer.querySelector('.loading-spinner');
    if (spinner) spinner.remove();
}

function setupHeaderScrollEffect() {
    window.addEventListener('scroll', () => {
        DOMElements.header?.classList.toggle('scrolled', window.scrollY > 50);
    });
}

function toggleMobileSearch() {
    DOMElements.mobileSearchBar?.style.display === 'block' ? DOMElements.mobileSearchBar.style.display = 'none' : DOMElements.mobileSearchBar.style.display = 'block';
}

function showSearchSuggestions() {
    if (appState.searchTerm.length > 0) DOMElements.searchSuggestions.style.display = 'block';
}

function hideSearchSuggestions() {
    DOMElements.searchSuggestions.style.display = 'none';
}

function updateSearchSuggestions(query) {
    const filtered = searchSuggestions_data.filter(s => s.toLowerCase().includes(query)).slice(0, 5);
    DOMElements.searchSuggestions.innerHTML = filtered.map(s => `<div class="suggestion-item" onclick="selectSuggestion('${s}')"><span>${s}</span></div>`).join('');
}

function selectSuggestion(suggestion) {
    DOMElements.heroSearchInput.value = suggestion;
    appState.searchTerm = suggestion.toLowerCase();
    hideSearchSuggestions();
    filterAndDisplayProducts();
}

function handleSearchKeydown(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        filterAndDisplayProducts();
        hideSearchSuggestions();
    }
}