
let userBalance = 1000.00;
let currentCaseId = null;

// --- DOM Elements ---
const userBalanceSpan = document.getElementById('user-balance');
const loginContainer = document.getElementById('login-container');
const mainContainer = document.getElementById('main-container');
const loginBtn = document.getElementById('login-btn');

// Screens
const preOpeningScreen = document.getElementById('pre-opening-screen');
const openingScreen = document.getElementById('opening-screen');

// Pre-opening Screen Elements
const backToMainBtn = document.getElementById('back-to-main-btn');
const preOpeningCaseName = document.getElementById('pre-opening-case-name');
const caseItemsGrid = document.getElementById('case-items-grid');
const openCaseButton = document.getElementById('open-case-button');

// Opening Screen Elements
const roulette = document.getElementById('roulette');
const winningSkinInfo = document.getElementById('winning-skin-info');
const winningSkinImage = document.getElementById('winning-skin-image');
const winningSkinName = document.getElementById('winning-skin-name');
const winningSkinRarity = document.getElementById('winning-skin-rarity');
const closeOpeningBtn = document.getElementById('close-opening-btn');

// --- Data ---
const cases = {
    case1: {
        name: 'Caixa Espectral',
        price: 15.00,
        skins: [
            { name: 'AWP | Asiimov', rarity: 'covert', image: 'assets/images/awp_asiimov.png' },
            { name: 'AK-47 | Redline', rarity: 'classified', image: 'assets/images/ak47_redline.png' },
            { name: 'M4A4 | Desolate Space', rarity: 'classified', image: 'assets/images/m4a4_desolate_space.png' },
            { name: 'P250 | See Ya Later', rarity: 'restricted', image: 'assets/images/p250_see_ya_later.png' },
            { name: 'UMP-45 | Primal Saber', rarity: 'restricted', image: 'assets/images/ump45_primal_saber.png' },
            { name: 'FAMAS | Mecha Industries', rarity: 'mil-spec', image: 'assets/images/famas_mecha_industries.png' },
            { name: 'Glock-18 | Weasel', rarity: 'mil-spec', image: 'assets/images/glock18_weasel.png' }
        ]
    },
    case2: {
        name: 'Caixa das Sombras',
        price: 25.00,
        skins: [
            { name: 'Karambit | Fade', rarity: 'covert', image: 'assets/images/karambit_fade.png' },
            { name: 'Glock-18 | Weasel', rarity: 'mil-spec', image: 'assets/images/glock18_weasel.png' },
            { name: 'AK-47 | Fire Serpent', rarity: 'covert', image: 'assets/images/ak47_fire_serpent.png' },
            { name: 'M4A4 | Desolate Space', rarity: 'classified', image: 'assets/images/m4a4_desolate_space.png' },
            { name: 'AK-47 | Redline', rarity: 'classified', image: 'assets/images/ak47_redline.png' },
            { name: 'P250 | See Ya Later', rarity: 'restricted', image: 'assets/images/p250_see_ya_later.png' },
            { name: 'FAMAS | Mecha Industries', rarity: 'mil-spec', image: 'assets/images/famas_mecha_industries.png' }
        ]
    }
};

// --- Functions ---
function updateUserBalance() {
    userBalanceSpan.textContent = `R$ ${userBalance.toFixed(2).replace('.', ',')}`;
}

function showPreOpeningScreen(caseId) {
    currentCaseId = caseId;
    const selectedCase = cases[caseId];

    // Populate the pre-opening screen
    preOpeningCaseName.textContent = selectedCase.name;
    caseItemsGrid.innerHTML = ''; // Clear previous items
    selectedCase.skins.forEach(skin => {
        const skinElement = document.createElement('div');
        skinElement.classList.add('case-skin-item', `rarity-${skin.rarity}`);
        skinElement.innerHTML = `
            <img src="${skin.image}" alt="${skin.name}">
            <span>${skin.name}</span>
        `;
        caseItemsGrid.appendChild(skinElement);
    });

    // Show the screen
    mainContainer.style.display = 'none';
    preOpeningScreen.style.display = 'flex';
}

function startRoulette() {
    if (!currentCaseId) return;

    const selectedCase = cases[currentCaseId];

    // Check balance
    if (userBalance < selectedCase.price) {
        alert('Saldo insuficiente!');
        return;
    }

    // Deduct price and update UI
    userBalance -= selectedCase.price;
    updateUserBalance();

    // Reset previous roulette state
    roulette.innerHTML = '';
    roulette.style.transform = 'translateX(0)';
    winningSkinInfo.style.display = 'none';
    const oldWinner = document.querySelector('.roulette-item.winner');
    if (oldWinner) {
        oldWinner.classList.remove('winner');
    }

    // Transition to the opening screen
    preOpeningScreen.style.display = 'none';
    openingScreen.style.display = 'flex';

    // --- Roulette Logic ---
    const skins = selectedCase.skins;
    const winningSkin = skins[Math.floor(Math.random() * skins.length)];
    let winningItemElement = null;

    // Populate the roulette with a long list of items for animation
    const rouletteItems = [];
    for (let i = 0; i < 50; i++) {
        rouletteItems.push(skins[Math.floor(Math.random() * skins.length)]);
    }
    // Place the winning item at a predictable position (e.g., 45th)
    rouletteItems[45] = winningSkin;

    rouletteItems.forEach((item, index) => {
        const rouletteItem = document.createElement('div');
        rouletteItem.classList.add('roulette-item', `rarity-${item.rarity}`);
        rouletteItem.innerHTML = `<img src="${item.image}" alt="${item.name}"><p>${item.name}</p>`;
        roulette.appendChild(rouletteItem);

        if (index === 45) {
            winningItemElement = rouletteItem;
        }
    });

    // Animate the roulette
    setTimeout(() => {
        const itemWidth = 150;
        const containerWidth = roulette.parentElement.offsetWidth;
        // Add a random offset to make the stop position less predictable
        const randomOffset = (Math.random() - 0.5) * (itemWidth * 0.8);
        const winningItemCenter = (itemWidth * 45) + (itemWidth / 2);
        const scrollAmount = winningItemCenter - (containerWidth / 2) + randomOffset;

        roulette.style.transition = 'transform 5s cubic-bezier(0.1, 0.8, 0.2, 1)';
        roulette.style.transform = `translateX(-${scrollAmount}px)`;
    }, 100);

    // Show winning skin info after animation
    setTimeout(() => {
        winningSkinImage.src = winningSkin.image;
        winningSkinName.textContent = winningSkin.name;
        winningSkinRarity.textContent = `Raridade: ${winningSkin.rarity}`;
        winningSkinInfo.style.display = 'flex';
        if (winningItemElement) {
            winningItemElement.classList.add('winner');
        }
    }, 5500); // This timeout should match the animation duration
}

function closeAllOverlays() {
    preOpeningScreen.style.display = 'none';
    openingScreen.style.display = 'none';
    mainContainer.style.display = 'block';
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
        showPreOpeningScreen(caseId);
    });
});

openCaseButton.addEventListener('click', startRoulette);
backToMainBtn.addEventListener('click', closeAllOverlays);
closeOpeningBtn.addEventListener('click', closeAllOverlays);

// Initial setup
updateUserBalance();
