
// --- Data Duplication (from script.js) ---
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
    },
    case4: {
        name: 'Caixa Lendária',
        price: 50.00,
        skins: [
            { name: 'AWP | Dragon Lore', rarity: 'covert', image: 'images/caixa4/awp-dragon-lore.png', price: 45000.00 },
            { name: 'M4A4 | Howl', rarity: 'covert', image: 'images/caixa4/m4a4-howl.png', price: 25000.00 },
            { name: 'AK-47 | Wild Lotus', rarity: 'classified', image: 'images/caixa4/ak47-wild-lotus.png', price: 18000.00 },
            { name: 'AWP | Medusa', rarity: 'classified', image: 'images/caixa4/awp-medusa.png', price: 12000.00 },
            { name: 'M4A1-S | Welcome to the Jungle', rarity: 'classified', image: 'images/caixa4/m4a1s-welcome-to-the-jungle.png', price: 8000.00 },
            { name: 'AWP | The Prince', rarity: 'restricted', image: 'images/caixa4/awp-the-prince.png', price: 6000.00 },
            { name: 'AK-47 | X-Ray', rarity: 'restricted', image: 'images/caixa4/ak47-xray.png', price: 4500.00 },
            { name: 'Glock-18 | Fade', rarity: 'restricted', image: 'images/caixa4/glock-fade.png', price: 3500.00 },
            { name: 'USP-S | The Traitor', rarity: 'restricted', image: 'images/caixa4/usp-the-traitor.png', price: 150.00 },
            { name: 'P250 | Nuclear Threat', rarity: 'restricted', image: 'images/caixa4/p250-nuclear-threat.png', price: 300.00 },
            { name: 'Five-SeveN | Hyper Beast', rarity: 'mil-spec', image: 'images/caixa4/five-seven-hyper-beast.png', price: 200.00 },
            { name: 'SSG 08 | Blood in the Water', rarity: 'mil-spec', image: 'images/caixa4/ssg-blood-in-the-water.png', price: 250.00 },
            { name: 'Galil AR | Sugar Rush', rarity: 'mil-spec', image: 'images/caixa4/galil-sugar-rush.png', price: 120.00 },
            { name: 'SG 553 | Integrale', rarity: 'mil-spec', image: 'images/caixa4/sg-integrale.png', price: 180.00 },
            { name: 'MP7 | Bloodsport', rarity: 'mil-spec', image: 'images/caixa4/mp7-bloodsport.png', price: 50.00 },
            { name: 'P90 | Emerald Dragon', rarity: 'mil-spec', image: 'images/caixa4/p90-emerald-dragon.png', price: 400.00 },
            { name: 'SCAR-20 | Splash Jam', rarity: 'mil-spec', image: 'images/caixa4/scar20-splash-jam.png', price: 80.00 },
            { name: 'MAC-10 | Graven', rarity: 'mil-spec', image: 'images/caixa4/mac10-graven.png', price: 90.00 }
        ]
    },
    case5: {
        name: 'Caixa Vulpina',
        price: 35.00,
        skins: [
            { name: 'Desert Eagle | Fennec Fox', rarity: 'covert', image: 'images/caixa5/eagle-fennec-fox.png', price: 2500.00 },
            { name: 'AWP | Wildfire', rarity: 'covert', image: 'images/caixa5/awp-wildfire.png', price: 800.00 },
            { name: 'M4A1-S | Player Two', rarity: 'classified', image: 'images/caixa5/m4a1-player-two.png', price: 400.00 },
            { name: 'AK-47 | Legion of Anubis', rarity: 'classified', image: 'images/caixa5/ak-legion-of-anubis.png', price: 150.00 },
            { name: 'M4A4 | Cyber Security', rarity: 'classified', image: 'images/caixa5/m4a4-cyber-security.png', price: 120.00 },
            { name: 'USP-S | Cortex', rarity: 'restricted', image: 'images/caixa5/usp-cortex.png', price: 80.00 },
            { name: 'Glock-18 | Bullet Queen', rarity: 'restricted', image: 'images/caixa5/glock-bullet-queen.png', price: 200.00 },
            { name: 'P250 | Bengal Tiger', rarity: 'restricted', image: 'images/caixa5/p250-bengal-tiger.png', price: 100.00 },
            { name: 'SSG 08 | Big Iron', rarity: 'restricted', image: 'images/caixa5/ssg-big-iron.png', price: 60.00 },
            { name: 'XM1014 | Incinegator', rarity: 'restricted', image: 'images/caixa5/xm1014-incinegator.png', price: 50.00 },
            { name: 'MP9 | Food Chain', rarity: 'mil-spec', image: 'images/caixa5/mp9-food-chain.png', price: 30.00 },
            { name: 'MAC-10 | Stalker', rarity: 'mil-spec', image: 'images/caixa5/mac10-stalker.png', price: 80.00 },
            { name: 'UMP-45 | Momentum', rarity: 'mil-spec', image: 'images/caixa5/ump45-momentum.png', price: 25.00 },
            { name: 'MAG-7 | Justice', rarity: 'mil-spec', image: 'images/caixa5/mag7-justice.png', price: 20.00 },
            { name: 'Nova | Hyper Beast', rarity: 'mil-spec', image: 'images/caixa5/nova-hyper-beast.png', price: 40.00 },
            { name: 'P90 | Tigris', rarity: 'mil-spec', image: 'images/caixa5/p90-tiger-pit.png', price: 15.00 },
            { name: 'Galil AR | Stone Cold', rarity: 'mil-spec', image: 'images/caixa5/galil-stone-cold.png', price: 10.00 },
            { name: 'FAMAS | Commemoration', rarity: 'mil-spec', image: 'images/caixa5/famas-commemoration.png', price: 70.00 }
        ]
    }
};

// --- State ---
let userInventory = [];
let allSiteSkins = [];
let selectedInputItems = [];
let selectedTargetItems = []; // Changed to Array
let currentMultiplier = 1.5;
let winChance = 0;
let isSpinning = false;
let userBalance = 0;
let globalRotation = 0; // Moved globalRotation here

// --- DOM Elements ---
const leftInventoryEl = document.getElementById('inventory-left');
const rightInventoryEl = document.getElementById('inventory-right');
const leftItemsContainer = document.getElementById('left-items-container');
const leftPriceEl = document.getElementById('left-price');
const rightItemsContainer = document.getElementById('right-items-container');
const rightPriceEl = document.getElementById('right-price');
const winChanceEl = document.getElementById('win-chance');
const upgradeBtn = document.getElementById('upgrade-btn-action');
const multiplierBtns = document.querySelectorAll('.multiplier-btn');
const roulettePointerContainer = document.getElementById('roulette-pointer-container');
const rouletteProgress = document.getElementById('roulette-progress');
const userBalanceEl = document.getElementById('user-balance');

// --- Initialization ---

document.addEventListener('DOMContentLoaded', () => {
    loadUserBalance();
    loadUserInventory();
    loadSiteInventory();

    // Set default multiplier (null for initial state to show all items as requested)
    currentMultiplier = null;
    updateMultiplierUI(currentMultiplier);

    // Check login
    if (sessionStorage.getItem('isLoggedIn') !== 'true') {
        alert("Por favor, faça login na página principal primeiro.");
        window.location.href = 'index.html';
    }
});

function loadUserBalance() {
    const stored = localStorage.getItem('userBalance');
    if (stored) {
        userBalance = parseFloat(stored);
        userBalanceEl.textContent = `R$ ${userBalance.toFixed(2).replace('.', ',')}`;
    }
}

function loadUserInventory() {
    const stored = localStorage.getItem('userInventory');
    if (stored) {
        userInventory = JSON.parse(stored);
        renderLeftInventory();
    }
}

function loadSiteInventory() {
    // Flatten all skins
    allSiteSkins = [];
    Object.values(cases).forEach(c => {
        allSiteSkins.push(...c.skins);
    });

    // Create a unique list based on name and price combination
    // to handle skins with same name but different prices (e.g. Karambit in different cases)
    const uniqueMap = new Map();
    allSiteSkins.forEach(skin => {
        const key = `${skin.name}-${skin.price}`; // Combine name and price
        if (!uniqueMap.has(key)) {
            uniqueMap.set(key, skin);
        }
    });

    allSiteSkins = Array.from(uniqueMap.values());
    allSiteSkins.sort((a, b) => b.price - a.price); // High to low

    renderRightInventory();
}

function renderLeftInventory() {
    leftInventoryEl.innerHTML = '';
    const searchTerm = document.getElementById('search-left').value.toLowerCase();

    userInventory
        .filter(item => item.name.toLowerCase().includes(searchTerm))
        .sort((a, b) => b.price - a.price)
        .forEach(item => {
            const div = document.createElement('div');
            div.className = 'inventory-item-upgrade';
            if (selectedInputItems.includes(item)) {
                div.classList.add('selected');
            }
            div.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <span>${item.name}</span>
                <span class="price">R$ ${item.price.toFixed(2).replace('.', ',')}</span>
            `;
            div.onclick = () => toggleInputItem(item);
            leftInventoryEl.appendChild(div);
        });
}

function renderRightInventory() {
    rightInventoryEl.innerHTML = '';
    const searchTerm = document.getElementById('search-right').value.toLowerCase();

    // Filtering Logic based on Multiplier
    const totalInput = selectedInputItems.reduce((acc, item) => acc + item.price, 0);
    const targetPriceCenter = totalInput * (currentMultiplier || 1.5);

    let filteredSkins = allSiteSkins.filter(item => item.name.toLowerCase().includes(searchTerm));

    // If we have input items and a multiplier is active, filter around the target price
    // But user also wants to see options. Let's filter to show items +/- 30% of target price?
    // User request: "apareça no inventario do site apenas skins com o valor mais ou menos multiplicado pelo multiplicador escolhido"
    // "mais ou menos" -> roughly.

    if (totalInput > 0 && currentMultiplier) {
        const lowerBound = targetPriceCenter * 0.7; // -30%
        const upperBound = targetPriceCenter * 1.3; // +30%

        filteredSkins = filteredSkins.filter(item => item.price >= lowerBound && item.price <= upperBound);
    }

    // If list is empty after filtering, maybe show closest ones?
    // Or just show empty.

    filteredSkins.forEach(item => {
        const div = document.createElement('div');
        div.className = 'inventory-item-upgrade';

        // Check if selected (need to check object reference or ID/key)
        const isSelected = selectedTargetItems.some(i => i.name === item.name && i.price === item.price);
        if (isSelected) {
            div.classList.add('selected');
        }

        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <span>${item.name}</span>
            <span class="price">R$ ${item.price.toFixed(2).replace('.', ',')}</span>
        `;
        div.onclick = () => toggleTargetItem(item);
        rightInventoryEl.appendChild(div);
    });
}

// --- Logic ---

function toggleInputItem(item) {
    if (isSpinning) return;

    if (selectedInputItems.includes(item)) {
        selectedInputItems = selectedInputItems.filter(i => i !== item);
    } else {
        selectedInputItems.push(item);
    }

    updateInputUI();
    renderLeftInventory();

    // When input changes, update filtered right inventory if multiplier is active
    if (currentMultiplier) {
         renderRightInventory();
    }

    // Recalculate everything
    calculateChance();
}

function toggleTargetItem(item) {
    if (isSpinning) return;

    // Check if already selected
    const exists = selectedTargetItems.find(i => i.name === item.name && i.price === item.price);

    if (exists) {
        selectedTargetItems = selectedTargetItems.filter(i => i !== exists);
    } else {
        selectedTargetItems.push(item);
    }

    // If manual selection, we might want to disable multiplier auto-select logic?
    // But keep filtering if user wants.
    // Let's NOT clear multiplier, just let them pick from filtered list.

    updateTargetUI();
    renderRightInventory();
    calculateChance();
}

function updateInputUI() {
    const totalInput = selectedInputItems.reduce((acc, item) => acc + item.price, 0);
    leftPriceEl.textContent = `R$ ${totalInput.toFixed(2).replace('.', ',')}`;
    leftItemsContainer.innerHTML = '';

    if (selectedInputItems.length > 0) {
        selectedInputItems.forEach(item => {
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            leftItemsContainer.appendChild(img);
        });
    } else {
        const placeholder = document.createElement('img');
        placeholder.src = "https://via.placeholder.com/200x150?text=Item";
        placeholder.alt = "Item";
        placeholder.className = "placeholder";
        leftItemsContainer.appendChild(placeholder);
    }
}

function updateTargetUI() {
    const totalTarget = selectedTargetItems.reduce((acc, item) => acc + item.price, 0);
    rightItemsContainer.innerHTML = '';

    if (totalTarget > 0) {
        rightPriceEl.textContent = `R$ ${totalTarget.toFixed(2).replace('.', ',')}`;
        selectedTargetItems.forEach(item => {
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            rightItemsContainer.appendChild(img);
        });
    } else {
        rightPriceEl.textContent = "R$ 0,00";
        const placeholder = document.createElement('img');
        placeholder.src = "https://via.placeholder.com/200x150?text=Target";
        placeholder.alt = "Target";
        placeholder.className = "placeholder";
        rightItemsContainer.appendChild(placeholder);
    }
}

function updateMultiplierUI(mult) {
    multiplierBtns.forEach(btn => {
        if (parseFloat(btn.dataset.mult) === mult) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function calculateChance() {
    const totalInput = selectedInputItems.reduce((acc, item) => acc + item.price, 0);
    const totalTarget = selectedTargetItems.reduce((acc, item) => acc + item.price, 0);

    if (totalInput === 0 || totalTarget === 0) {
        winChance = 0;
        winChanceEl.textContent = "0.00%";
        updateCircle(0);
        upgradeBtn.disabled = true;
        return;
    }

    let chance = (totalInput / totalTarget) * 100;

    // Apply house edge
    chance = chance * 0.95;

    if (chance > 95) chance = 95;
    if (chance < 0.01) chance = 0.01; // Min visual

    winChance = chance;
    winChanceEl.textContent = winChance.toFixed(2) + "%";

    updateCircle(winChance);
    upgradeBtn.disabled = false;
}

function updateCircle(percentage) {
    const deg = 3.6 * percentage;
    rouletteProgress.style.background = `conic-gradient(#ffc107 0deg ${deg}deg, transparent ${deg}deg 360deg)`;
    rouletteProgress.style.transform = `rotate(-${deg/2}deg)`;
}

// --- Interaction ---

multiplierBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (isSpinning) return;
        const clickedMultiplier = parseFloat(btn.dataset.mult);

        // Toggle Logic
        if (currentMultiplier === clickedMultiplier) {
            currentMultiplier = null;
        } else {
            currentMultiplier = clickedMultiplier;
        }

        updateMultiplierUI(currentMultiplier);

        // Update filtered list on right
        renderRightInventory();

        // Clear selection to force user to pick from new range/all skins
        selectedTargetItems = [];
        updateTargetUI();
        calculateChance();
    });
});

document.getElementById('search-left').addEventListener('input', renderLeftInventory);
document.getElementById('search-right').addEventListener('input', renderRightInventory);

upgradeBtn.addEventListener('click', () => {
    if (isSpinning || winChance <= 0) return;

    // Remove selected items from inventory array
    selectedInputItems.forEach(inputItem => {
        const idx = userInventory.indexOf(inputItem);
        if (idx > -1) userInventory.splice(idx, 1);
    });
    localStorage.setItem('userInventory', JSON.stringify(userInventory));

    // We keep visual reference of selected items during spin?
    // Yes, but standard behavior is they are "bet".
    // selectedInputItems = []; // FIX: Don't clear local selection array yet, so image persists!
    renderLeftInventory();
    // updateInputUI(); // This clears the image if array is empty. But array is not empty now.
    // But we still want to show the items as "locked" or "bet".
    // Actually, simply doing nothing here preserves the UI state (Image and Price).
    // FIX: Don't clear UI immediately? Or show "Locked" state?
    // User complaint: "foto da skin que eu escolhi ... nao aparece".
    // This happens because I clear `selectedInputItems` here BEFORE spin starts.
    // I should clear them AFTER spin or just visually lock them.

    // Let's restore the UI for the duration of the spin.
    // Actually, simply NOT calling updateInputUI() here will leave the last image.
    // But `selectedInputItems` is empty, so `updateInputUI` would show placeholder.
    // Let's defer clearing `selectedInputItems` logic until result?
    // But if they refresh, items are gone.
    // Safe way: remove from localStorage, but keep in local `selectedInputItems` variable until animation ends.

    // Re-fill selectedInputItems just for display (we already removed from userInventory)
    // Actually, just don't clear the array yet.
    // But we need to ensure they can't be re-used if something fails.
    // We already spliced `userInventory`.

    // So:
    // 1. Remove from `userInventory` (Data persistence)
    // 2. Render Left Inventory (so they disappear from list)
    // 3. KEEP `selectedInputItems` populated so UI (Image/Price) remains visible.
    // 4. Clear `selectedInputItems` only at `endSpin`.

    // Re-render only list
    // renderLeftInventory() uses `userInventory`, so they are gone from list. Correct.
    // updateInputUI() uses `selectedInputItems`. If we don't clear it, image remains. Correct.

    // We need to disable interactions.

    upgradeBtn.disabled = true;
    startSpin();
});

function startSpin() {
    isSpinning = true;
    const isWin = Math.random() * 100 < winChance;

    const halfWidth = (3.6 * winChance) / 2;
    let stopAngle;

    if (isWin) {
        stopAngle = (Math.random() * (halfWidth * 1.8)) - (halfWidth * 0.9);
    } else {
        const safeZoneStart = halfWidth + 15; // Increased buffer
        const safeZoneEnd = 360 - halfWidth - 15;
        stopAngle = safeZoneStart + (Math.random() * (safeZoneEnd - safeZoneStart));
    }

    const spins = 5 + Math.floor(Math.random() * 3);
    const currentFullRotations = Math.floor(globalRotation / 360);
    const targetFullRotations = currentFullRotations + spins;

    let targetRotation = (targetFullRotations * 360) + stopAngle;
    if (targetRotation < globalRotation) targetRotation += 360;
    globalRotation = targetRotation;

    // Improved Animation Easing
    roulettePointerContainer.style.transition = 'transform 6s cubic-bezier(0.2, 0.8, 0.1, 1)'; // More ease-out
    roulettePointerContainer.style.transform = `rotate(${globalRotation}deg)`;

    setTimeout(() => {
        endSpin(isWin);
    }, 6000);
}

function endSpin(isWin) {
    isSpinning = false;

    if (isWin) {
        // Add targets to inventory
        selectedTargetItems.forEach(item => {
             userInventory.push(item);
        });
        localStorage.setItem('userInventory', JSON.stringify(userInventory));
        renderLeftInventory();

        document.querySelector('.upgrade-roulette-container').classList.add('win-pulse');
        setTimeout(() => document.querySelector('.upgrade-roulette-container').classList.remove('win-pulse'), 2000);
    } else {
        document.querySelector('.upgrade-roulette-container').classList.add('lose-pulse');
        setTimeout(() => document.querySelector('.upgrade-roulette-container').classList.remove('lose-pulse'), 2000);
    }

    // Now we can clear selection
    selectedInputItems = [];
    selectedTargetItems = [];

    updateInputUI(); // Now it clears the image
    updateTargetUI();

    upgradeBtn.disabled = true;

    // Recalculate chance (will be 0)
    calculateChance();

    // Re-render lists to clear selection highlights
    renderLeftInventory();
    renderRightInventory();
}
