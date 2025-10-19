let userBalance = 1000.00;
const userBalanceSpan = document.getElementById('user-balance');

function updateUserBalance() {
    userBalanceSpan.textContent = `R$ ${userBalance.toFixed(2)}`;
}

document.getElementById('login-btn').addEventListener('click', () => {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('main-container').style.display = 'block';
    updateUserBalance();
});

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

const openingScreen = document.getElementById('opening-screen');
const closeOpeningBtn = document.getElementById('close-opening-btn');
const winningSkinName = document.getElementById('winning-skin-name');
const winningSkinRarity = document.getElementById('winning-skin-rarity');
const roulette = document.getElementById('roulette');
const winningSkinInfo = document.getElementById('winning-skin-info');

function resetOpeningScreen() {
    roulette.innerHTML = '';
    roulette.style.transform = 'translateX(0)';
    winningSkinInfo.style.display = 'none';

    const oldWinner = document.querySelector('.roulette-item.winner');
    if (oldWinner) {
        oldWinner.classList.remove('winner');
    }
}

function openCase(caseId) {
    const selectedCase = cases[caseId];

    if (userBalance < selectedCase.price) {
        alert('Saldo insuficiente!');
        return;
    }

    userBalance -= selectedCase.price;
    updateUserBalance();
    resetOpeningScreen();

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

    openingScreen.style.display = 'flex';

    // Animate the roulette
    setTimeout(() => {
        const itemWidth = 150; // Must match CSS width
        const container = roulette.parentElement;
        const containerWidth = container.offsetWidth;
        const winningItemCenter = (itemWidth * 45) + (itemWidth / 2);
        const scrollAmount = winningItemCenter - (containerWidth / 2);
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

document.querySelectorAll('.case').forEach(caseElement => {
    caseElement.addEventListener('click', (e) => {
        const caseId = e.currentTarget.dataset.case;
        openCase(caseId);
    });
});

closeOpeningBtn.addEventListener('click', () => {
    openingScreen.style.display = 'none';
});