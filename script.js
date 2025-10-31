
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
            { name: 'AWP | Asiimov', rarity: 'covert', image: 'images/awp_asiimov.png', price: 13.50 },
            { name: 'AK-47 | Redline', rarity: 'classified', image: 'images/ak47_redline.png', price: 12.00 },
            { name: 'M4A4 | Desolate Space', rarity: 'classified', image: 'images/m4a4_desolate_space.png', price: 12.00 },
            { name: 'P250 | See Ya Later', rarity: 'restricted', image: 'images/p250_see_ya_later.png', price: 11.25 },
            { name: 'UMP-45 | Primal Saber', rarity: 'restricted', image: 'images/ump45_primal_saber.png', price: 11.25 },
            { name: 'FAMAS | Mecha Industries', rarity: 'mil-spec', image: 'images/famas_mecha_industries.png', price: 10.50 },
            { name: 'Glock-18 | Weasel', rarity: 'mil-spec', image: 'images/glock18_weasel.png', price: 10.50 },
            { name: 'AWP | Gungnir', rarity: 'covert', image: 'images/awp_gungnir.png', price: 13.50 },
            { name: 'M4A4 | The Emperor', rarity: 'classified', image: 'images/m4a4_the_emperor.png', price: 12.00 },
            { name: 'USP-S | Orion', rarity: 'restricted', image: 'images/usps_orion.png', price: 11.25 },
            { name: 'Glock-18 | Vogue', rarity: 'restricted', image: 'images/glock18_vogue.png', price: 11.25 },
            { name: 'Desert Eagle | Printstream', rarity: 'classified', image: 'images/deagle_printstream.png', price: 12.00 },
            { name: 'P90 | Asiimov', rarity: 'classified', image: 'images/p90_asiimov.png', price: 12.00 },
            { name: 'MAC-10 | Neon Rider', rarity: 'classified', image: 'images/mac10_neon_rider.png', price: 12.00 }
        ]
    },
    case2: {
        name: 'Caixa das Sombras',
        price: 25.00,
        skins: [
            { name: 'Karambit | Fade', rarity: 'covert', image: 'images/karambit_fade.png', price: 22.50 },
            { name: 'Glock-18 | Weasel', rarity: 'mil-spec', image: 'images/glock18_weasel.png', price: 17.50 },
            { name: 'AK-47 | Fire Serpent', rarity: 'covert', image: 'images/ak47_fire_serpent.png', price: 22.50 },
            { name: 'M4A4 | Desolate Space', rarity: 'classified', image: 'images/m4a4_desolate_space.png', price: 20.00 },
            { name: 'AK-47 | Redline', rarity: 'classified', image: 'images/ak47_redline.png', price: 20.00 },
            { name: 'P250 | See Ya Later', rarity: 'restricted', image: 'images/p250_see_ya_later.png', price: 18.75 },
            { name: 'FAMAS | Mecha Industries', rarity: 'mil-spec', image: 'images/famas_mecha_industries.png', price: 17.50 },
            { name: 'AK-47 | Gold Arabesque', rarity: 'covert', image: 'images/ak47_gold_arabesque.png', price: 22.50 },
            { name: 'M4A1-S | Printstream', rarity: 'covert', image: 'images/m4a1s_printstream.png', price: 22.50 },
            { name: 'Five-SeveN | Case Hardened', rarity: 'restricted', image: 'images/five_seven_case_hardened.png', price: 18.75 },
            { name: 'MP9 | Starlight Protector', rarity: 'restricted', image: 'images/mp9_starlight_protector.png', price: 18.75 },
            { name: 'Sawed-Off | The Kraken', rarity: 'mil-spec', image: 'images/sawed_off_the_kraken.png', price: 17.50 },
            { name: 'AUG | Akihabara Accept', rarity: 'covert', image: 'images/aug_akihabara_accept.png', price: 22.50 },
            { name: 'Galil AR | Cerberus', rarity: 'restricted', image: 'images/galil_ar_cerberus.png', price: 18.75 }
        ]
    }
};

// --- Functions ---
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
    userBalanceSpan.textContent = `R$ ${userBalance.toFixed(2).replace('.', ',')}`;
}

function resetOpeningScreen() {
    roulette.style.transition = 'none';
    roulette.style.transform = 'translateX(0)';
    roulette.innerHTML = '';
    winningSkinModal.style.opacity = '0';
    winningSkinModal.style.pointerEvents = 'none';
    const oldWinner = document.querySelector('.roulette-item.winner');
    if (oldWinner) {
        oldWinner.classList.remove('winner');
    }
    const winningSkinInfo = document.getElementById('winning-skin-info');
    winningSkinInfo.className = '';
}

function showCaseOpeningScreen(caseId) {
    currentCaseId = caseId;
    const selectedCase = cases[caseId];
    resetOpeningScreen();
    caseNameTitle.textContent = selectedCase.name;
    caseItemsGrid.innerHTML = '';

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
            <div class="skin-percentage">${percentage.toFixed(2)}%</div>
            <img src="${skin.image}" alt="${skin.name}">
            <span>${skin.name}</span>`;
        caseItemsGrid.appendChild(skinElement);
    });

    const previewItems = [...sortedSkins, ...sortedSkins, ...sortedSkins];
    previewItems.forEach(item => {
        const rouletteItem = document.createElement('div');
        rouletteItem.classList.add('roulette-item', `rarity-${item.rarity}`);
        rouletteItem.innerHTML = `<img src="${item.image}" alt="${item.name}"><p>${item.name}</p>`;
        roulette.appendChild(rouletteItem);
    });

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
    roulette.style.transition = 'none';
    roulette.style.transform = 'translateX(0)';
    roulette.innerHTML = '';
    const skins = selectedCase.skins;
    currentWinningSkin = getWeightedRandomSkin(skins);
    let winningItemElement = null;
    const rouletteItems = [];
    for (let i = 0; i < 50; i++) {
        rouletteItems.push(skins[Math.floor(Math.random() * skins.length)]);
    }
    rouletteItems[45] = currentWinningSkin;
    rouletteItems.forEach((item, index) => {
        const rouletteItem = document.createElement('div');
        rouletteItem.classList.add('roulette-item', `rarity-${item.rarity}`);
        rouletteItem.innerHTML = `<img src="${item.image}" alt="${item.name}"><p>${item.name}</p>`;
        roulette.appendChild(rouletteItem);
        if (index === 45) {
            winningItemElement = rouletteItem;
        }
    });

    setTimeout(() => {
        const itemWidth = 170;
        const containerWidth = roulette.parentElement.offsetWidth;
        const randomOffset = (Math.random() - 0.5) * (itemWidth * 0.8);
        const winningItemCenter = (itemWidth * 45) + (itemWidth / 2);
        const scrollAmount = winningItemCenter - (containerWidth / 2) + randomOffset;
        roulette.style.transition = 'transform 8s cubic-bezier(0.1, 0.8, 0.2, 1)';
        roulette.style.transform = `translateX(-${scrollAmount}px)`;
    }, 100);

    setTimeout(() => {
        winningSkinInfo.className = '';
        winningSkinInfo.classList.add(`rarity-${currentWinningSkin.rarity}`);
        winningSkinImage.src = currentWinningSkin.image;
        winningSkinName.textContent = currentWinningSkin.name;
        // winningSkinRarity.textContent = `Raridade: ${currentWinningSkin.rarity.charAt(0).toUpperCase() + currentWinningSkin.rarity.slice(1)}`;
        winningSkinModal.style.opacity = '1';
        winningSkinModal.style.pointerEvents = 'auto';
        if (winningItemElement) {
            winningItemElement.classList.add('winner');
        }
    }, 8500);
}

function closeOpeningScreen() {
    winningSkinModal.style.opacity = '0';
    winningSkinModal.style.pointerEvents = 'none';
    setTimeout(() => {
        openCaseButton.disabled = false;
        resetOpeningScreen();
        const selectedCase = cases[currentCaseId];
        const previewItems = [...selectedCase.skins, ...selectedCase.skins, ...selectedCase.skins];
        previewItems.forEach(item => {
            const rouletteItem = document.createElement('div');
            rouletteItem.classList.add('roulette-item', `rarity-${item.rarity}`);
            rouletteItem.innerHTML = `<img src="${item.image}" alt="${item.name}"><p>${item.name}</p>`;
            roulette.appendChild(rouletteItem);
        });
    }, 500);
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
            <span>${skin.name}</span>`;
        inventoryGrid.appendChild(skinElement);
    });
    inventoryModal.style.display = 'flex';
}

function closeInventory() {
    inventoryModal.style.display = 'none';
}

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

updateUserBalance();
