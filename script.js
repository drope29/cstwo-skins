
let userBalance = 1000.00;
let currentCaseId = null;
let userInventory = [];
let currentWinningSkin = null;

// --- DOM Elements ---
const userBalanceSpan = document.getElementById('user-balance');
const loginContainer = document.getElementById('login-container');
const mainContainer = document.getElementById('main-container');
const loginBtn = document.getElementById('login-btn');

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
const keepSkinBtn = document.getElementById('keep-skin-btn');
const openCaseButton = document.getElementById('open-case-button');
const caseItemsGrid = document.getElementById('case-items-grid');
const inventoryBtn = document.getElementById('inventory-btn');
const inventoryModal = document.getElementById('inventory-modal');
const inventoryGrid = document.getElementById('inventory-grid');
const closeInventoryBtn = document.getElementById('close-inventory-btn');

// --- Data ---
const cases = {
    case1: {
        name: 'Caixa Espectral',
        price: 15.00,
        skins: [
            { name: 'AWP | Asiimov', rarity: 'covert', image: 'images/skins/awp_asiimov.png', price: 13.50 },
            { name: 'AK-47 | Redline', rarity: 'classified', image: 'images/skins/ak47_redline.png', price: 12.00 },
            { name: 'M4A4 | Desolate Space', rarity: 'classified', image: ' images/skins/m4a4_desolate_space.png', price: 12.00 },
            { name: 'P250 | See Ya Later', rarity: 'restricted', image: '   images/skins/p250_see_ya_later.png', price: 11.25 },
            { name: 'UMP-45 | Primal Saber', rarity: 'restricted', image: ' images/skins/ump45_primal_saber.png', price: 11.25 },
            { name: 'FAMAS | Mecha Industries', rarity: 'mil-spec', image: 'images/skins/famas_mecha_industries.png', price: 10.50 },
            { name: 'Glock-18 | Weasel', rarity: 'mil-spec', image: 'images/skins/glock18_weasel.png', price: 10.50 },
            { name: 'AWP | Gungnir', rarity: 'covert', image: 'images/skins/awp_gungnir.png', price: 13.50 },
            { name: 'M4A4 | The Emperor', rarity: 'classified', image: 'images/skins/m4a4_the_emperor.png', price: 12.00 },
            { name: 'USP-S | Orion', rarity: 'restricted', image: 'images/skins/usps_orion.png', price: 11.25 },
            { name: 'Glock-18 | Vogue', rarity: 'restricted', image: 'images/skins/glock18_vogue.png', price: 11.25 },
            { name: 'Desert Eagle | Printstream', rarity: 'classified', image: 'images/skins/deagle_printstream.png', price: 12.00 },
            { name: 'P90 | Asiimov', rarity: 'classified', image: 'images/skins/p90_asiimov.png', price: 12.00 },
            { name: 'MAC-10 | Neon Rider', rarity: 'classified', image: 'images/skins/mac10_neon_rider.png', price: 12.00 }
        ]
    },
    case2: {
        name: 'Caixa das Sombras',
        price: 25.00,
        skins: [
            { name: 'Karambit | Fade', rarity: 'covert', image: 'images/skins/karambit_fade.png', price: 22.50 },
            { name: 'Glock-18 | Weasel', rarity: 'mil-spec', image: 'images/skins/glock18_weasel.png', price: 17.50 },
            { name: 'AK-47 | Fire Serpent', rarity: 'covert', image: 'images/skins/ak47_fire_serpent.png', price: 22.50 },
            { name: 'M4A4 | Desolate Space', rarity: 'classified', image: 'images/skins/m4a4_desolate_space.png', price: 20.00 },
            { name: 'AK-47 | Redline', rarity: 'classified', image: 'images/skins/ak47_redline.png', price: 20.00 },
            { name: 'P250 | See Ya Later', rarity: 'restricted', image: 'images/skins/p250_see_ya_later.png', price: 18.75 },
            { name: 'FAMAS | Mecha Industries', rarity: 'mil-spec', image: 'images/skins/famas_mecha_industries.png', price: 17.50 },
            { name: 'AK-47 | Gold Arabesque', rarity: 'covert', image: 'images/skins/ak47_gold_arabesque.png', price: 22.50 },
            { name: 'M4A1-S | Printstream', rarity: 'covert', image: 'images/skins/m4a1s_printstream.png', price: 22.50 },
            { name: 'Five-SeveN | Case Hardened', rarity: 'restricted', image: 'images/skins/five_seven_case_hardened.png', price: 18.75 },
            { name: 'MP9 | Starlight Protector', rarity: 'restricted', image: 'images/skins/mp9_starlight_protector.png', price: 18.75 },
            { name: 'Sawed-Off | The Kraken', rarity: 'mil-spec', image: 'images/skins/sawed_off_the_kraken.png', price: 17.50 },
            { name: 'AUG | Akihabara Accept', rarity: 'covert', image: 'images/skins/aug_akihabara_accept.png', price: 22.50 },
            { name: 'Galil AR | Cerberus', rarity: 'restricted', image: 'images/skins/galil_ar_cerberus.png', price: 18.75 }
        ]
    }
};

// --- Functions ---
function updateUserBalance() {
    userBalanceSpan.textContent = `R$ ${userBalance.toFixed(2).replace('.', ',')}`;
}

function resetOpeningScreen() {
    roulette.style.transition = 'none';
    roulette.style.transform = 'translateX(0)';
    roulette.innerHTML = '';
    winningSkinModal.style.opacity = '0';
    winningSkinModal.style.pointerEvents = 'none';
    winningSkinInfo.style.borderColor = 'transparent';
    openCaseButton.disabled = false;
    const oldWinner = document.querySelector('.roulette-item.winner');
    if (oldWinner) {
        oldWinner.classList.remove('winner');
    }
}

function showCaseOpeningScreen(caseId) {
    currentCaseId = caseId;
    const selectedCase = cases[caseId];

    resetOpeningScreen();

    // Populate the screen elements
    caseNameTitle.textContent = selectedCase.name;
    caseItemsGrid.innerHTML = ''; // Clear previous items

    // Populate the grid of possible skins
    selectedCase.skins.forEach(skin => {
        const skinElement = document.createElement('div');
        skinElement.classList.add('case-skin-item', `rarity-${skin.rarity}`);
        skinElement.innerHTML = `
            <img src="${skin.image}" alt="${skin.name}">
            <span>${skin.name}</span>
        `;
        caseItemsGrid.appendChild(skinElement);
    });

    // Pre-populate the roulette for display (it won't spin yet)
    const previewItems = [...selectedCase.skins, ...selectedCase.skins, ...selectedCase.skins]; // Show more items
    previewItems.forEach(item => {
        const rouletteItem = document.createElement('div');
        rouletteItem.classList.add('roulette-item');
        // Set rarity background with style attribute for more control
        const rarityColor = getComputedStyle(document.documentElement).getPropertyValue(`--rarity-${item.rarity}-color`).trim();
        rouletteItem.style.backgroundImage = `radial-gradient(circle, ${rarityColor} 0%, rgba(0,0,0,0) 70%)`;
        rouletteItem.innerHTML = `<img src="${item.image}" alt="${item.name}"><p>${item.name}</p>`;
        roulette.appendChild(rouletteItem);
    });

    // Show the screen
    mainContainer.style.display = 'none';
    caseOpeningScreen.style.display = 'flex';
}

function startRoulette() {
    if (!currentCaseId) return;

    const selectedCase = cases[currentCaseId];

    if (userBalance < selectedCase.price) {
        alert('Saldo insuficiente!');
        return;
    }

    userBalance -= selectedCase.price;
    updateUserBalance();
    openCaseButton.disabled = true;

    // Reset and prepare for the actual spin
    roulette.style.transition = 'none';
    roulette.style.transform = 'translateX(0)';
    roulette.innerHTML = '';

    const skins = selectedCase.skins;
    currentWinningSkin = skins[Math.floor(Math.random() * skins.length)];
    let winningItemElement = null;

    // Populate the roulette for the real spin
    const rouletteItems = [];
    for (let i = 0; i < 50; i++) {
        rouletteItems.push(skins[Math.floor(Math.random() * skins.length)]);
    }
    rouletteItems[45] = currentWinningSkin;

    rouletteItems.forEach((item, index) => {
        const rouletteItem = document.createElement('div');
        rouletteItem.classList.add('roulette-item');
        const rarityColor = getComputedStyle(document.documentElement).getPropertyValue(`--rarity-${item.rarity}-color`).trim();
        rouletteItem.style.backgroundImage = `radial-gradient(circle, ${rarityColor} 0%, rgba(0,0,0,0) 70%)`;
        rouletteItem.innerHTML = `<img src="${item.image}" alt="${item.name}"><p>${item.name}</p>`;
        roulette.appendChild(rouletteItem);
        if (index === 45) {
            winningItemElement = rouletteItem;
        }
    });

    // Animate the roulette
    setTimeout(() => {
        const itemWidth = 170; // Use the new, larger item width
        const containerWidth = roulette.parentElement.offsetWidth;
        const randomOffset = (Math.random() - 0.5) * (itemWidth * 0.8);
        const winningItemCenter = (itemWidth * 45) + (itemWidth / 2);
        const scrollAmount = winningItemCenter - (containerWidth / 2) + randomOffset;

        roulette.style.transition = 'transform 8s cubic-bezier(0.1, 0.8, 0.2, 1)'; // Longer, more dramatic animation
        roulette.style.transform = `translateX(-${scrollAmount}px)`;
    }, 100);

    // Show winning skin info after animation
    setTimeout(() => {
        const rarityColor = getComputedStyle(document.documentElement).getPropertyValue(`--rarity-${currentWinningSkin.rarity}-color`).trim();
        winningSkinImage.src = currentWinningSkin.image;
        winningSkinName.textContent = currentWinningSkin.name;
        winningSkinRarity.textContent = `Raridade: ${currentWinningSkin.rarity.charAt(0).toUpperCase() + currentWinningSkin.rarity.slice(1)}`;
        winningSkinInfo.style.borderColor = rarityColor;
        winningSkinModal.style.opacity = '1';
        winningSkinModal.style.pointerEvents = 'auto';
        if (winningItemElement) {
            winningItemElement.classList.add('winner');
        }
    }, 8500); // Adjusted timing to match animation
}

function closeOpeningScreen() {
    winningSkinModal.style.opacity = '0';
    winningSkinModal.style.pointerEvents = 'none';
    // Don't re-show the whole screen, just enable the button
    setTimeout(() => {
        openCaseButton.disabled = false;
        resetOpeningScreen(); // Fully reset for the next spin
        // Re-populate the roulette for display
        const selectedCase = cases[currentCaseId];
        const previewItems = [...selectedCase.skins, ...selectedCase.skins, ...selectedCase.skins];
        previewItems.forEach(item => {
            const rouletteItem = document.createElement('div');
            rouletteItem.classList.add('roulette-item');
            const rarityColor = getComputedStyle(document.documentElement).getPropertyValue(`--rarity-${item.rarity}-color`).trim();
            rouletteItem.style.backgroundImage = `radial-gradient(circle, ${rarityColor} 0%, rgba(0,0,0,0) 70%)`;
            rouletteItem.innerHTML = `<img src="${item.image}" alt="${item.name}"><p>${item.name}</p>`;
            roulette.appendChild(rouletteItem);
        });
    }, 500); // Wait for fade-out
}

function goBackToMain() {
    caseOpeningScreen.style.display = 'none';
    mainContainer.style.display = 'block';
}

function sellSkin() {
    if (currentWinningSkin) {
        userBalance += currentWinningSkin.price;
        updateUserBalance();
        closeOpeningScreen();
    }
}

function keepSkin() {
    if (currentWinningSkin) {
        userInventory.push(currentWinningSkin);
        closeOpeningScreen();
    }
}

function openInventory() {
    inventoryGrid.innerHTML = '';
    userInventory.forEach(skin => {
        const skinElement = document.createElement('div');
        skinElement.classList.add('inventory-item', `rarity-${skin.rarity}`);
        skinElement.innerHTML = `
            <img src="${skin.image}" alt="${skin.name}">
            <span>${skin.name}</span>
        `;
        inventoryGrid.appendChild(skinElement);
    });
    inventoryModal.style.display = 'flex';
}

function closeInventory() {
    inventoryModal.style.display = 'none';
}

// --- Event Listeners ---
loginBtn.addEventListener('click', () => {
    loginContainer.style.display = 'none';
    mainContainer.style.display = 'block';
    updateUserBalance();
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
keepSkinBtn.addEventListener('click', keepSkin);
inventoryBtn.addEventListener('click', openInventory);
closeInventoryBtn.addEventListener('click', closeInventory);

// Initial setup
updateUserBalance();
