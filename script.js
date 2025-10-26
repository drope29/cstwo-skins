
let userBalance = 1000.00;
let currentCaseId = null;

// --- DOM Elements ---
const header = document.querySelector('header');
const userBalanceSpan = document.getElementById('user-balance');
const loginContainer = document.getElementById('login-container');
const mainContainer = document.getElementById('main-container');
const loginBtn = document.getElementById('login-btn');

// Unified Case Opening Screen Elements
const caseOpeningScreen = document.getElementById('case-opening-screen');
const backToMainBtn = document.getElementById('back-to-main-btn');
const caseNameTitle = document.getElementById('case-name-title');
const roulette = document.getElementById('roulette');
const winningSkinInfo = document.getElementById('winning-skin-info');
const winningSkinImage = document.getElementById('winning-skin-image');
const winningSkinName = document.getElementById('winning-skin-name');
const winningSkinRarity = document.getElementById('winning-skin-rarity');
const closeWinningBtn = document.getElementById('close-winning-btn');
const openCaseButton = document.getElementById('open-case-button');
const caseItemsGrid = document.getElementById('case-items-grid');

// --- Data ---
const cases = {
    case1: {
        name: 'Caixa Espectral',
        price: 15.00,
        skins: [
            { name: 'AWP | Asiimov', rarity: 'covert', image: 'images/skins/awp_asiimov.png' },
            { name: 'AK-47 | Redline', rarity: 'classified', image: 'images/skins/ak47_redline.png' },
            { name: 'M4A4 | Desolate Space', rarity: 'classified', image: ' images/skins/m4a4_desolate_space.png' },
            { name: 'P250 | See Ya Later', rarity: 'restricted', image: '   images/skins/p250_see_ya_later.png' },
            { name: 'UMP-45 | Primal Saber', rarity: 'restricted', image: ' images/skins/ump45_primal_saber.png' },
            { name: 'FAMAS | Mecha Industries', rarity: 'mil-spec', image: 'images/skins/famas_mecha_industries.png' },
            { name: 'Glock-18 | Weasel', rarity: 'mil-spec', image: 'images/skins/glock18_weasel.png' },
            { name: 'AWP | Gungnir', rarity: 'covert', image: 'images/skins/awp_gungnir.png' },
            { name: 'M4A4 | The Emperor', rarity: 'classified', image: 'images/skins/m4a4_the_emperor.png' },
            { name: 'USP-S | Orion', rarity: 'restricted', image: 'images/skins/usps_orion.png' },
            { name: 'Glock-18 | Vogue', rarity: 'restricted', image: 'images/skins/glock18_vogue.png' },
            { name: 'Desert Eagle | Printstream', rarity: 'classified', image: 'images/skins/deagle_printstream.png' },
            { name: 'P90 | Asiimov', rarity: 'classified', image: 'images/skins/p90_asiimov.png' },
            { name: 'MAC-10 | Neon Rider', rarity: 'classified', image: 'images/skins/mac10_neon_rider.png' }
        ]
    },
    case2: {
        name: 'Caixa das Sombras',
        price: 25.00,
        skins: [
            { name: 'Karambit | Fade', rarity: 'covert', image: 'images/skins/karambit_fade.png' },
            { name: 'Glock-18 | Weasel', rarity: 'mil-spec', image: 'images/skins/glock18_weasel.png' },
            { name: 'AK-47 | Fire Serpent', rarity: 'covert', image: 'images/skins/ak47_fire_serpent.png' },
            { name: 'M4A4 | Desolate Space', rarity: 'classified', image: 'images/skins/m4a4_desolate_space.png' },
            { name: 'AK-47 | Redline', rarity: 'classified', image: 'images/skins/ak47_redline.png' },
            { name: 'P250 | See Ya Later', rarity: 'restricted', image: 'images/skins/p250_see_ya_later.png' },
            { name: 'FAMAS | Mecha Industries', rarity: 'mil-spec', image: 'images/skins/famas_mecha_industries.png' },
            { name: 'AK-47 | Gold Arabesque', rarity: 'covert', image: 'images/skins/ak47_gold_arabesque.png' },
            { name: 'M4A1-S | Printstream', rarity: 'covert', image: 'images/skins/m4a1s_printstream.png' },
            { name: 'Five-SeveN | Case Hardened', rarity: 'restricted', image: 'images/skins/five_seven_case_hardened.png' },
            { name: 'MP9 | Starlight Protector', rarity: 'restricted', image: 'images/skins/mp9_starlight_protector.png' },
            { name: 'Sawed-Off | The Kraken', rarity: 'mil-spec', image: 'images/skins/sawed_off_the_kraken.png' },
            { name: 'AUG | Akihabara Accept', rarity: 'covert', image: 'images/skins/aug_akihabara_accept.png' },
            { name: 'Galil AR | Cerberus', rarity: 'restricted', image: 'images/skins/galil_ar_cerberus.png' }
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
    winningSkinInfo.classList.remove('visible');
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
        rouletteItem.classList.add('roulette-item', `rarity-${item.rarity}`);
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
    const winningSkin = skins[Math.floor(Math.random() * skins.length)];
    let winningItemElement = null;

    // Populate the roulette for the real spin
    const rouletteItems = [];
    for (let i = 0; i < 100; i++) { // Increased item count for a longer spin
        rouletteItems.push(skins[Math.floor(Math.random() * skins.length)]);
    }
    // Place winner near the end
    const winnerIndex = 95;
    rouletteItems[winnerIndex] = winningSkin;

    rouletteItems.forEach((item, index) => {
        const rouletteItem = document.createElement('div');
        rouletteItem.classList.add('roulette-item', `rarity-${item.rarity}`);
        rouletteItem.innerHTML = `<img src="${item.image}" alt="${item.name}"><p>${item.name}</p>`;
        roulette.appendChild(rouletteItem);
        if (index === winnerIndex) {
            winningItemElement = rouletteItem;
        }
    });

    // Animate the roulette
    setTimeout(() => {
        const itemWidth = 160; // Corresponds to the new CSS width
        const containerWidth = roulette.parentElement.offsetWidth;
        // Jitter effect for the final position
        const randomOffset = (Math.random() - 0.5) * (itemWidth * 0.6);
        const winningItemCenter = (itemWidth * winnerIndex) + (itemWidth / 2);
        const scrollAmount = winningItemCenter - (containerWidth / 2) + randomOffset;

        roulette.style.transition = 'transform 7s cubic-bezier(0.2, 0.9, 0.1, 1)'; // Longer and smoother easing
        roulette.style.transform = `translateX(-${scrollAmount}px)`;
    }, 100);

    // Show winning skin info after animation
    setTimeout(() => {
        winningSkinImage.src = winningSkin.image;
        winningSkinName.textContent = winningSkin.name;
        winningSkinRarity.textContent = `Raridade: ${winningSkin.rarity}`;
        winningSkinInfo.classList.add('visible');
        if (winningItemElement) {
            winningItemElement.classList.add('winner');
        }
    }, 7500); // Adjusted timeout to match animation
}

function closeOpeningScreen() {
    winningSkinInfo.classList.remove('visible');
    // Add a small delay to allow the fade-out animation to finish before resetting
    setTimeout(() => {
        showCaseOpeningScreen(currentCaseId); // Re-show the screen in its initial state
    }, 500);
}

function goBackToMain() {
    caseOpeningScreen.style.display = 'none';
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
        showCaseOpeningScreen(caseId);
    });
});

openCaseButton.addEventListener('click', startRoulette);
backToMainBtn.addEventListener('click', goBackToMain);
closeWinningBtn.addEventListener('click', closeOpeningScreen);

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Initial setup
updateUserBalance();
