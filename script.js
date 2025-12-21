
let userBalance = 1000.00;
let currentCaseId = null;
let userInventory = [];
let currentWinningSkin = null;
let isLoggedIn = false;
let isRouletteSpinning = false;

// --- DOM Elements ---
const userBalanceSpan = document.getElementById('user-balance');
const loginModalBackdrop = document.getElementById('login-modal-backdrop');
const mainContainer = document.getElementById('main-container');
const loginBtn = document.getElementById('login-btn');
const headerLoginBtn = document.getElementById('header-login-btn');
const userInfo = document.querySelector('.user-info');

// Unified Case Opening Screen Elements
const caseOpeningScreen = document.getElementById('case-opening-screen');
const backToMainBtn = document.getElementById('back-to-main-btn');
const caseNameTitle = document.getElementById('case-name-title');
const roulette = document.getElementById('roulette');
const winningSkinModal = document.getElementById('winning-skin-modal');
const winningSkinInfo = document.getElementById('winning-skin-info');
const winningSkinImage = document.getElementById('winning-skin-image');
const winningSkinName = document.getElementById('winning-skin-name');
const winningSkinRarity = document.getElementById('winning-skin-rarity');
const sellSkinBtn = document.getElementById('sell-skin-btn');
const openCaseButton = document.getElementById('open-case-button');
const resultButtons = document.getElementById('result-buttons');
const caseItemsGrid = document.getElementById('case-items-grid');
const inventoryBtn = document.getElementById('inventory-btn');

// --- Data ---
const rarityPercentages = {
    'covert': 2,
    'classified': 5,
    'restricted': 20,
    'mil-spec': 73
};

const cases = {
    case1: {
        name: 'Caixa Espectral',
        price: 15.00,
        skins: [
            { name: 'AWP | Asiimov', rarity: 'covert', image: 'images/caixa1/awp_asiimov.png', price: 13.50 },
            { name: 'AK-47 | Redline', rarity: 'classified', image: 'images/caixa1/ak47_redline.png', price: 12.00 },
            { name: 'M4A4 | Desolate Space', rarity: 'classified', image: 'images/caixa1/m4a4_desolate_space.png', price: 12.00 },
            { name: 'P250 | See Ya Later', rarity: 'restricted', image: 'images/caixa1/p250_see_ya_later.png', price: 11.25 },
            { name: 'UMP-45 | Primal Saber', rarity: 'restricted', image: 'images/caixa1/ump45_primal_saber.png', price: 11.25 },
            { name: 'FAMAS | Mecha Industries', rarity: 'mil-spec', image: 'images/caixa1/famas_mecha_industries.png', price: 10.50 },
            { name: 'Glock-18 | Weasel', rarity: 'mil-spec', image: 'images/caixa1/glock18_weasel.png', price: 10.50 },
            { name: 'AWP | Gungnir', rarity: 'covert', image: 'images/caixa1/awp_gungnir.png', price: 13.50 },
            { name: 'M4A4 | The Emperor', rarity: 'classified', image: 'images/caixa1/m4a4_the_emperor.png', price: 12.00 },
            { name: 'USP-S | Orion', rarity: 'restricted', image: 'images/caixa1/usps_orion.png', price: 11.25 },
            { name: 'Glock-18 | Vogue', rarity: 'restricted', image: 'images/caixa1/glock18_vogue.png', price: 11.25 },
            { name: 'Desert Eagle | Printstream', rarity: 'classified', image: 'images/caixa1/deagle_printstream.png', price: 12.00 },
            { name: 'P90 | Asiimov', rarity: 'classified', image: 'images/caixa1/p90_asiimov.png', price: 12.00 },
            { name: 'MAC-10 | Neon Rider', rarity: 'classified', image: 'images/caixa1/mac10_neon_rider.png', price: 12.00 },
            { name: 'Tec-9 | Isaac', rarity: 'mil-spec', image: 'images/caixa1/tec9-isaac.png', price: 10.50 },
            { name: 'M4A1-S | Knight', rarity: 'covert', image: 'images/caixa1/m4a1-knight.png', price: 13.50 },
            { name: 'Galil AR | Chatterbox', rarity: 'classified', image: 'images/caixa1/galil-chatterbox.png', price: 12.00 },
            { name: 'P2000 | Fire Elemental', rarity: 'restricted', image: 'images/caixa1/p2000-fire-elemental.png', price: 11.25 }
        ]
    },
    case2: {
        name: 'Caixa das Sombras',
        price: 25.00,
        skins: [
            { name: 'Karambit | Fade', rarity: 'covert', image: 'images/caixa2/karambit_fade.png', price: 22.50 },
            { name: 'Glock-18 | Weasel', rarity: 'mil-spec', image: 'images/caixa1/glock18_weasel.png', price: 17.50 },
            { name: 'AK-47 | Fire Serpent', rarity: 'covert', image: 'images/caixa2/ak47_fire_serpent.png', price: 22.50 },
            { name: 'M4A4 | Desolate Space', rarity: 'classified', image: 'images/caixa1/m4a4_desolate_space.png', price: 20.00 },
            { name: 'AK-47 | Redline', rarity: 'classified', image: 'images/caixa1/ak47_redline.png', price: 20.00 },
            { name: 'P250 | See Ya Later', rarity: 'restricted', image: 'images/caixa1/p250_see_ya_later.png', price: 18.75 },
            { name: 'FAMAS | Mecha Industries', rarity: 'mil-spec', image: 'images/caixa1/famas_mecha_industries.png', price: 17.50 },
            { name: 'AK-47 | Gold Arabesque', rarity: 'covert', image: 'images/caixa2/ak47_gold_arabesque.png', price: 22.50 },
            { name: 'M4A1-S | Printstream', rarity: 'covert', image: 'images/caixa2/m4a1-printstream.png', price: 22.50 },
            { name: 'Five-SeveN | Case Hardened', rarity: 'restricted', image: 'images/caixa2/five_seven_case_hardened.png', price: 18.75 },
            { name: 'MP9 | Starlight Protector', rarity: 'restricted', image: 'images/caixa2/mp9_starlight_protector.png', price: 18.75 },
            { name: 'Sawed-Off | The Kraken', rarity: 'mil-spec', image: 'images/caixa2/sawed_off_the_kraken.png', price: 17.50 },
            { name: 'AUG | Akihabara Accept', rarity: 'covert', image: 'images/caixa2/aug_akihabara_accept.png', price: 22.50 },
            { name: 'Galil AR | Cerberus', rarity: 'restricted', image: 'images/caixa2/galil_ar_cerberus.png', price: 18.75 },
            { name: 'AK-47 | Vulcan', rarity: 'classified', image: 'images/caixa2/ak-vulcan.png', price: 20.00 },
            { name: 'USP-S | Kill Confirmed', rarity: 'covert', image: 'images/caixa2/usp-kill-confirmed.png', price: 22.50 },
            { name: 'Glock-18 | Water Elemental', rarity: 'restricted', image: 'images/caixa2/glock-water-elemental.png', price: 18.75 },
            { name: 'FAMAS | Roll Cage', rarity: 'mil-spec', image: 'images/caixa2/famas-roll-cage.png', price: 17.50 }
        ]
    },
    case3: {
        name: 'Caixa de Facas',
        price: 200.00,
        type: 'knife', 
        skins: [
            { name: 'Karambit | Fade', rarity: 'covert', image: 'images/caixa2/karambit_fade.png', price: 8000.00 },
            { name: 'Butterfly Knife | Tiger Tooth', rarity: 'covert', image: 'images/caixa3/bt-tiger-tooth.png', price: 6500.00 },
            { name: 'M9 Bayonet | Doppler', rarity: 'covert', image: 'images/caixa3/m9-doppler.png', price: 4000.00 },
            { name: 'Huntsman Knife | Slaughter', rarity: 'covert', image: 'images/caixa3/hunts-slaughter.png', price: 2500.00 },
            { name: 'Kukri Knife | Case Hardened', rarity: 'covert', image: 'images/caixa3/kukri-case-hardened.png', price: 2200.00 },
            { name: 'Skeleton Knife | Slaughter', rarity: 'covert', image: 'images/caixa3/skeleton-slaughter.png', price: 1800.00 },
            { name: 'Nomad Knife | Fade', rarity: 'covert', image: 'images/caixa3/nomad-fade.png', price: 1500.00 },
            { name: 'Survival Knife | Crimson Web', rarity: 'covert', image: 'images/caixa3/survival-crimson.png', price: 1200.00 },
            { name: 'Falchion Knife | Case Hardened', rarity: 'covert', image: 'images/caixa3/falchion-case-hardened.png', price: 1000.00 },
            { name: 'Paracord Knife | Night Stripe', rarity: 'covert', image: 'images/caixa3/paracord-night-stripe.png', price: 850.00 },
            { name: 'Classic Knife | Blue Steel', rarity: 'covert', image: 'images/caixa3/classic-blue-steel.png', price: 800.00 },
            { name: 'Stiletto Knife | Damascus Steel', rarity: 'covert', image: 'images/caixa3/stiletto-damascus.png', price: 750.00 },
            { name: 'Talon Knife | Stained', rarity: 'covert', image: 'images/caixa3/talon-stained.png', price: 700.00 },
            { name: 'Ursus Knife | Forest DDPAT', rarity: 'covert', image: 'images/caixa3/ursus-ddpat.png', price: 650.00 },
            { name: 'Bowie Knife | Scorched', rarity: 'covert', image: 'images/caixa3/bowie-scorched.png', price: 600.00 },
            { name: 'Gut Knife | Safari Mesh', rarity: 'covert', image: 'images/caixa3/gut-safari.png', price: 550.00 },
            { name: 'Navaja Knife | Boreal Forest', rarity: 'covert', image: 'images/caixa3/navaja-boreal.png', price: 500.00 },
            { name: 'Shadow Daggers | Rust Coat', rarity: 'covert', image: 'images/caixa3/shadow-rust-coat.png', price: 450.00 }
        ]
    }
};

// --- Functions ---

function updateUIForLoginState() {
    if (isLoggedIn) {
        userInfo.style.display = 'flex';
        inventoryBtn.style.display = 'block';
        headerLoginBtn.style.display = 'none';
        loginModalBackdrop.style.display = 'none';
        updateUserBalance();
    } else {
        userInfo.style.display = 'none';
        inventoryBtn.style.display = 'none';
        headerLoginBtn.style.display = 'block';
    }
}

function handleLogin() {
    isLoggedIn = true;
    sessionStorage.setItem('isLoggedIn', 'true');
    updateUIForLoginState();
}

function getPriceWeightedRandomSkin(skins) {
    let totalWeight = 0;
    const skinWeights = skins.map(skin => {
        // Higher price = lower weight/chance. Using inverse of price.
        const weight = 1 / skin.price;
        totalWeight += weight;
        return { skin, weight };
    });

    let random = Math.random() * totalWeight;

    for (const weightedSkin of skinWeights) {
        random -= weightedSkin.weight;
        if (random <= 0) {
            return weightedSkin.skin;
        }
    }
    // Fallback in case of floating point issues
    return skinWeights[skinWeights.length - 1].skin;
}

function getWeightedRandomSkin(skins) {
    const rand = Math.random() * 100;
    let cumulativePercentage = 0;
    let selectedRarity = null;

    for (const rarity in rarityPercentages) {
        cumulativePercentage += rarityPercentages[rarity];
        if (rand < cumulativePercentage) {
            selectedRarity = rarity;
            break;
        }
    }

    if (!selectedRarity) {
        const rarities = Object.keys(rarityPercentages);
        selectedRarity = rarities[rarities.length - 1];
    }

    const skinsOfSelectedRarity = skins.filter(skin => skin.rarity === selectedRarity);

    if (skinsOfSelectedRarity.length > 0) {
        const randomIndex = Math.floor(Math.random() * skinsOfSelectedRarity.length);
        return skinsOfSelectedRarity[randomIndex];
    }

    return skins[Math.floor(Math.random() * skins.length)];
}

function updateUserBalance() {
    if (isLoggedIn) {
        userBalanceSpan.textContent = `R$ ${userBalance.toFixed(2).replace('.', ',')}`;
        localStorage.setItem('userBalance', userBalance.toString());
    }
}

function resetOpeningScreen() {
    roulette.style.transition = 'none';
    roulette.style.transform = 'translateX(0)';
    roulette.innerHTML = '';

    // Reset buttons logic
    openCaseButton.style.display = 'inline-block';
    resultButtons.style.display = 'none';
    openCaseButton.disabled = false;

    const oldWinner = document.querySelector('.roulette-item.winner');
    if (oldWinner) {
        oldWinner.classList.remove('winner');
    }
}

function showCaseOpeningScreen(caseId) {
    if (!isLoggedIn) {
        loginModalBackdrop.style.display = 'flex';
        return;
    }
    currentCaseId = caseId;
    const selectedCase = cases[caseId];
    resetOpeningScreen();
    backToMainBtn.style.display = 'flex'; // Show back button in header
    caseNameTitle.textContent = selectedCase.name;
    openCaseButton.querySelector('span').innerHTML = `Abrir Caixa <span class="btn-price">R$ ${selectedCase.price.toFixed(2).replace('.', ',')}</span>`;
    caseItemsGrid.innerHTML = '';

    caseItemsGrid.innerHTML = '';

    if (selectedCase.type === 'knife') {
        let totalWeight = 0;
        selectedCase.skins.forEach(skin => {
            totalWeight += 1 / skin.price;
        });

        const sortedSkins = [...selectedCase.skins].sort((a, b) => b.price - a.price);

        sortedSkins.forEach(skin => {
            const weight = 1 / skin.price;
            const percentage = (weight / totalWeight) * 100;
            const skinElement = document.createElement('div');
            skinElement.classList.add('case-skin-item', `rarity-${skin.rarity}`);
            skinElement.innerHTML = `
                <div class="content">
                    <div class="hexagon-bg"></div>
                    <div class="skin-percentage">${percentage.toFixed(4)}%</div>
                    <img src="${skin.image}" alt="${skin.name}">
                    <span>${skin.name}</span>
                </div>`;
            caseItemsGrid.appendChild(skinElement);
        });
    } else {
        const rarityOrder = { 'covert': 1, 'classified': 2, 'restricted': 3, 'mil-spec': 4 };
        const sortedSkins = [...selectedCase.skins].sort((a, b) => rarityOrder[a.rarity] - rarityOrder[b.rarity]);
        const skinsByRarity = selectedCase.skins.reduce((acc, skin) => {
            acc[skin.rarity] = (acc[skin.rarity] || 0) + 1;
            return acc;
        }, {});

        sortedSkins.forEach(skin => {
            const rarityCount = skinsByRarity[skin.rarity] || 1;
            const percentage = (rarityPercentages[skin.rarity] || 0) / rarityCount;
            const skinElement = document.createElement('div');
            skinElement.classList.add('case-skin-item', `rarity-${skin.rarity}`);
            skinElement.innerHTML = `
                <div class="content">
                    <div class="hexagon-bg"></div>
                    <div class="skin-percentage">${percentage.toFixed(2)}%</div>
                    <img src="${skin.image}" alt="${skin.name}">
                    <span>${skin.name}</span>
                </div>`;
            caseItemsGrid.appendChild(skinElement);
        });
    }

    // This variable needs to be accessible outside the if/else blocks
    const skinsToDisplay = selectedCase.type === 'knife'
        ? [...selectedCase.skins].sort((a, b) => b.price - a.price)
        : [...selectedCase.skins].sort((a, b) => {
            const rarityOrder = { 'covert': 1, 'classified': 2, 'restricted': 3, 'mil-spec': 4 };
            return rarityOrder[a.rarity] - rarityOrder[b.rarity];
          });


    const previewItems = [...skinsToDisplay, ...skinsToDisplay, ...skinsToDisplay];
    previewItems.forEach(item => {
        const rouletteItem = document.createElement('div');
        rouletteItem.classList.add('roulette-item', `rarity-${item.rarity}`);
        rouletteItem.innerHTML = `<div class="hexagon-bg"></div><img src="${item.image}" alt="${item.name}"><p>${item.name}</p>`;
        roulette.appendChild(rouletteItem);
    });

    mainContainer.style.display = 'none';
    caseOpeningScreen.style.display = 'flex';
}

function startRoulette() {
    if (!currentCaseId || !isLoggedIn || isRouletteSpinning) return;
    const selectedCase = cases[currentCaseId];
    if (userBalance < selectedCase.price) {
        alert('Saldo insuficiente!');
        return;
    }
    userBalance -= selectedCase.price;
    updateUserBalance();
    openCaseButton.disabled = true;
    isRouletteSpinning = true;
    roulette.style.transition = 'none';
    roulette.style.transform = 'translateX(0)';
    roulette.innerHTML = '';
    const skins = selectedCase.skins;
    if (selectedCase.type === 'knife') {
        currentWinningSkin = getPriceWeightedRandomSkin(skins);
    } else {
        currentWinningSkin = getWeightedRandomSkin(skins);
    }
    let winningItemElement = null;
    const rouletteItems = [];
    for (let i = 0; i < 50; i++) {
        rouletteItems.push(skins[Math.floor(Math.random() * skins.length)]);
    }
    rouletteItems[45] = currentWinningSkin;
    rouletteItems.forEach((item, index) => {
        const rouletteItem = document.createElement('div');
        rouletteItem.classList.add('roulette-item', `rarity-${item.rarity}`);
        rouletteItem.innerHTML = `<div class="hexagon-bg"></div><img src="${item.image}" alt="${item.name}"><p>${item.name}</p>`;
        roulette.appendChild(rouletteItem);
        if (index === 45) {
            winningItemElement = rouletteItem;
        }
    });

    setTimeout(() => {
        const itemWidth = 180; // Width (170px) + Margin (10px)
        const containerWidth = roulette.parentElement.offsetWidth;
        // Make the stop position slightly random but always centered on the item
        const randomOffset = (Math.random() - 0.5) * (itemWidth * 0.5);
        const winningItemCenter = (itemWidth * 45) + (itemWidth / 2);
        const scrollAmount = winningItemCenter - (containerWidth / 2) + randomOffset;

        // Smoother animation: cubic-bezier(0.2, 0, 0.2, 1) and 7s duration
        roulette.style.transition = 'transform 7s cubic-bezier(0.15, 0.85, 0.35, 1)';
        roulette.style.transform = `translateX(-${scrollAmount}px)`;
    }, 100);

    setTimeout(() => {
        if (isRouletteSpinning) { // If user is still here
            if (winningItemElement) {
                winningItemElement.classList.add('winner');
            }
            // Swap buttons
            openCaseButton.style.display = 'none';

            // Update Sell Button Text with Price
            sellSkinBtn.innerHTML = `VENDER <span class="btn-price">R$ ${currentWinningSkin.price.toFixed(2).replace('.', ',')}</span>`;

            resultButtons.style.display = 'flex';

            // IMMEDIATE KEEP: Add to inventory immediately
            userInventory.push(currentWinningSkin);
            localStorage.setItem('userInventory', JSON.stringify(userInventory));
        }
        isRouletteSpinning = false; // Reset state after animation finishes
    }, 7500); // slightly shorter than 8s to match new animation duration
}

function closeOpeningScreen() {
    // Just reset screen immediately since there is no modal fade out
    openCaseButton.disabled = false;
    resetOpeningScreen();
    const selectedCase = cases[currentCaseId];
    const previewItems = [...selectedCase.skins, ...selectedCase.skins, ...selectedCase.skins];
    previewItems.forEach(item => {
        const rouletteItem = document.createElement('div');
        rouletteItem.classList.add('roulette-item', `rarity-${item.rarity}`);
        rouletteItem.innerHTML = `<div class="hexagon-bg"></div><img src="${item.image}" alt="${item.name}"><p>${item.name}</p>`;
        roulette.appendChild(rouletteItem);
    });
}

function goBackToMain() {
    if (isRouletteSpinning) {
        // Stop the roulette logic if they leave mid-spin
        isRouletteSpinning = false;

        // Even if they leave mid-spin, we should probably award the item if it was decided?
        // But currentWinningSkin is decided at start.
        // Let's stick to the previous logic: if spinning, add it.
        if (currentWinningSkin) {
            userInventory.push(currentWinningSkin);
            localStorage.setItem('userInventory', JSON.stringify(userInventory));
        }
    }
    // If spin finished, item is ALREADY in inventory (added in setTimeout).
    // So we just close.

    backToMainBtn.style.display = 'none'; // Hide back button
    caseOpeningScreen.style.display = 'none';
    mainContainer.style.display = 'block';
}

function sellSkin() {
    if (currentWinningSkin) {
        // Remove from inventory (it was added immediately after spin)
        // Find the index of the object. Since we just pushed it, it should be at the end,
        // but let's be safe and find the LAST instance of this specific object or matching props.
        // Since objects in JS are references, and we pushed `currentWinningSkin`, we can find it.
        const index = userInventory.lastIndexOf(currentWinningSkin);
        if (index > -1) {
            userInventory.splice(index, 1);
            localStorage.setItem('userInventory', JSON.stringify(userInventory));
        }

        userBalance += currentWinningSkin.price;
        updateUserBalance();
        closeOpeningScreen();
    }
}

function openInventoryPage() {
    window.location.href = 'inventory.html';
}

// --- Event Listeners ---
loginBtn.addEventListener('click', handleLogin);
headerLoginBtn.addEventListener('click', () => {
    loginModalBackdrop.style.display = 'flex';
});

document.querySelectorAll('.case').forEach(caseElement => {
    caseElement.addEventListener('click', (e) => {
        const caseId = e.currentTarget.dataset.case;
        showCaseOpeningScreen(caseId);
    });
});

openCaseButton.addEventListener('click', startRoulette);
backToMainBtn.addEventListener('click', goBackToMain);
sellSkinBtn.addEventListener('click', sellSkin);
inventoryBtn.addEventListener('click', openInventoryPage);

// --- Initial Page Load ---
document.addEventListener('DOMContentLoaded', () => {
    const storedBalance = localStorage.getItem('userBalance');
    if (storedBalance) {
        userBalance = parseFloat(storedBalance);
    } else {
        localStorage.setItem('userBalance', userBalance.toString());
    }

    const storedInventory = localStorage.getItem('userInventory');
    if (storedInventory) {
        userInventory = JSON.parse(storedInventory);
    } else {
        localStorage.setItem('userInventory', JSON.stringify(userInventory));
    }

    const storedLoginState = sessionStorage.getItem('isLoggedIn');
    if (storedLoginState === 'true') {
        isLoggedIn = true;
    }

    updateUIForLoginState();

    // Carousel Logic
    const slides = document.querySelectorAll('.carousel-slide');
    const prevArrow = document.querySelector('.carousel-arrow.prev');
    const nextArrow = document.querySelector('.carousel-arrow.next');
    let currentSlide = 0;
    let isAnimating = false;

    function showSlide(index, direction) {
        if (isAnimating) return;
        isAnimating = true;

        const nextSlideIndex = index;
        const currentSlideElement = slides[currentSlide];
        const nextSlideElement = slides[nextSlideIndex];
        const outgoingDirection = direction === 'next' ? -100 : 100;
        const incomingDirection = direction === 'next' ? 100 : -100;

        // Position the incoming slide off-screen without animation
        nextSlideElement.style.transition = 'none';
        nextSlideElement.style.transform = `translateX(${incomingDirection}%)`;
        // Force a reflow to apply the transform instantly
        nextSlideElement.offsetHeight;

        // Add active-slide class to bring it into view (opacity)
        nextSlideElement.classList.add('active-slide');

        // Re-enable transition and start the animation
        currentSlideElement.style.transition = 'transform 0.5s ease-in-out';
        nextSlideElement.style.transition = 'transform 0.5s ease-in-out';

        currentSlideElement.style.transform = `translateX(${outgoingDirection}%)`;
        nextSlideElement.style.transform = 'translateX(0)';

        setTimeout(() => {
            currentSlideElement.classList.remove('active-slide');
            // Clean up old transition to prevent interference
            currentSlideElement.style.transition = 'none';
            currentSlide = nextSlideIndex;
            isAnimating = false;
        }, 500); // Match CSS transition duration
    }

    function next() {
        const nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex, 'next');
    }

    function prev() {
        const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prevIndex, 'prev');
    }

    if (slides.length > 1) {
        prevArrow.addEventListener('click', prev);
        nextArrow.addEventListener('click', next);

        // Initial setup: all slides are off-screen to the right, except the active one
        slides.forEach((slide, index) => {
            slide.style.transform = index === currentSlide ? 'translateX(0)' : 'translateX(100%)';
            slide.style.transition = 'transform 0.5s ease-in-out';
        });
        slides[currentSlide].classList.add('active-slide');
    } else {
        if (slides.length === 1) {
          slides[0].classList.add('active-slide');
          slides[0].style.transform = 'translateX(0)';
        }
        prevArrow.style.display = 'none';
        nextArrow.style.display = 'none';
    }
});
