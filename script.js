let userBalance = 1000.00;
const userBalanceSpan = document.getElementById('user-balance');

// --- DOM Elements ---
const loginContainer = document.getElementById('login-container');
const mainContainer = document.getElementById('main-container');
const loginBtn = document.getElementById('login-btn');
const caseScreen = document.getElementById('case-screen');
const closeCaseBtn = document.getElementById('close-case-btn');
const casePreview = document.getElementById('case-preview');
const casePreviewName = document.getElementById('case-preview-name');
const caseSkinsDisplay = document.getElementById('case-skins-display');
const startRouletteBtn = document.getElementById('start-roulette-btn');
const rouletteSection = document.getElementById('roulette-section');
const winningSkinName = document.getElementById('winning-skin-name');
const winningSkinRarity = document.getElementById('winning-skin-rarity');
const roulette = document.getElementById('roulette');
const winningSkinInfo = document.getElementById('winning-skin-info');

let currentCaseId = null;

const cases = {
    case1: {
        name: 'Caixa Espectral',
        price: 15.00,
        skins: [
            { name: 'AWP | Asiimov', rarity: 'covert', image: 'images/skins/awp_asiimov.png' },
            { name: 'AK-47 | Redline', rarity: 'classified', image: 'images/skins/ak47_redline.png' },
            { name: 'M4A4 | Desolate Space', rarity: 'classified', image: 'images/skins/m4a4_desolate_space.png' },
            { name: 'P250 | See Ya Later', rarity: 'restricted', image: 'images/skins/p250_see_ya_later.png' },
            { name: 'UMP-45 | Primal Saber', rarity: 'restricted', image: 'images/skins/ump45_primal_saber.png' },
            { name: 'FAMAS | Mecha Industries', rarity: 'mil-spec', image: 'images/skins/famas_mecha_industries.png' },
            { name: 'Glock-18 | Weasel', rarity: 'mil-spec', image: 'images/skins/glock18_weasel.png' }
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
            { name: 'FAMAS | Mecha Industries', rarity: 'mil-spec', image: 'images/skins/famas_mecha_industries.png' }
        ]
    }
};

function updateUserBalance() {
    userBalanceSpan.textContent = `R$ ${userBalance.toFixed(2)}`;
}

function resetCaseScreen() {
    roulette.innerHTML = '';
    roulette.style.transform = 'translateX(0)';
    winningSkinInfo.style.display = 'none';
    rouletteSection.style.display = 'none';
    casePreview.style.display = 'block';

    const oldWinner = document.querySelector('.roulette-item.winner');
    if (oldWinner) {
        oldWinner.classList.remove('winner');
    }
}

function showCasePreview(caseId) {
    currentCaseId = caseId;
    const selectedCase = cases[caseId];

    casePreviewName.textContent = selectedCase.name;
    caseSkinsDisplay.innerHTML = ''; // Clear previous skins

    selectedCase.skins.forEach(skin => {
        const skinElement = document.createElement('div');
        skinElement.classList.add('case-skin-item', `rarity-${skin.rarity}`);
        skinElement.innerHTML = `
            <img src="${skin.image}" alt="${skin.name}">
            <p>${skin.name}</p>
        `;
        caseSkinsDisplay.appendChild(skinElement);
    });

    resetCaseScreen();
    caseScreen.style.display = 'flex';
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

    // Hide preview, show roulette
    casePreview.style.display = 'none';
    rouletteSection.style.display = 'block';

    const skins = selectedCase.skins;
    const winningSkin = skins[Math.floor(Math.random() * skins.length)];
    let winningItemElement = null;

    // Populate the roulette
    const rouletteItems = [];
    for (let i = 0; i < 50; i++) {
        rouletteItems.push(skins[Math.floor(Math.random() * skins.length)]);
    }
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
        const itemWidth = 150; // Must match CSS width
        const container = roulette.parentElement;
        const containerWidth = container.offsetWidth;
        const randomOffset = (Math.random() - 0.5) * (itemWidth * 0.8);
        const winningItemCenter = (itemWidth * 45) + (itemWidth / 2);
        const scrollAmount = winningItemCenter - (containerWidth / 2) + randomOffset;
        roulette.style.transform = `translateX(-${scrollAmount}px)`;
    }, 100);

    // Show winning skin info and highlight winner after animation
    setTimeout(() => {
        winningSkinName.textContent = winningSkin.name;
        winningSkinRarity.textContent = `Raridade: ${winningSkin.rarity}`;
        winningSkinInfo.style.display = 'block';
        if (winningItemElement) {
            winningItemElement.classList.add('winner');
        }
    }, 5500);
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
        showCasePreview(caseId);
    });
});

startRouletteBtn.addEventListener('click', startRoulette);

closeCaseBtn.addEventListener('click', () => {
    caseScreen.style.display = 'none';
});

// Initial setup
updateUserBalance();
