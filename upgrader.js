
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
    }
};

// --- State ---
let userInventory = [];
let allSiteSkins = [];
let selectedInputItems = [];
let selectedTargetItem = null;
let currentMultiplier = 1.5;
let winChance = 0;
let isSpinning = false;
let userBalance = 0;

// --- DOM Elements ---
const leftInventoryEl = document.getElementById('inventory-left');
const rightInventoryEl = document.getElementById('inventory-right');
const leftItemImg = document.getElementById('left-item-img');
const leftPriceEl = document.getElementById('left-price');
const rightItemImg = document.getElementById('right-item-img');
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

    // Set default multiplier
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
    // Deduplicate by name but keep price variations if any (assuming same name = same price here)
    // Actually, create a unique list based on name to avoid clutter
    const uniqueMap = new Map();
    allSiteSkins.forEach(skin => {
        if (!uniqueMap.has(skin.name)) {
            uniqueMap.set(skin.name, skin);
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
                <span class="price">R$ ${item.price.toFixed(2)}</span>
            `;
            div.onclick = () => toggleInputItem(item);
            leftInventoryEl.appendChild(div);
        });
}

function renderRightInventory() {
    rightInventoryEl.innerHTML = '';
    const searchTerm = document.getElementById('search-right').value.toLowerCase();

    allSiteSkins
        .filter(item => item.name.toLowerCase().includes(searchTerm))
        .forEach(item => {
            const div = document.createElement('div');
            div.className = 'inventory-item-upgrade';
            if (selectedTargetItem && selectedTargetItem.name === item.name) {
                div.classList.add('selected');
            }
            div.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <span>${item.name}</span>
                <span class="price">R$ ${item.price.toFixed(2)}</span>
            `;
            div.onclick = () => selectTargetItem(item);
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

    // Auto-select target based on multiplier if we have inputs
    if (selectedInputItems.length > 0) {
        autoSelectTarget();
    } else {
        selectedTargetItem = null;
        updateTargetUI();
        renderRightInventory();
    }

    calculateChance();
}

function selectTargetItem(item) {
    if (isSpinning) return;

    selectedTargetItem = item;

    // If we select a target manually, we might need to adjust multiplier visually or just calc chance
    // The requirement says "tera 5 opçoes para escolher o quanto o valor da skin sera multiplicado"
    // If manual selection, the multiplier is implied. We can clear multiplier active state.
    document.querySelectorAll('.multiplier-btn').forEach(b => b.classList.remove('active'));
    currentMultiplier = null;

    updateTargetUI();
    renderRightInventory();
    calculateChance();
}

function updateInputUI() {
    const totalInput = selectedInputItems.reduce((acc, item) => acc + item.price, 0);
    leftPriceEl.textContent = `R$ ${totalInput.toFixed(2)}`;

    if (selectedInputItems.length > 0) {
        leftItemImg.src = selectedInputItems[selectedInputItems.length - 1].image; // Show last selected
        leftItemImg.classList.remove('placeholder');
    } else {
        leftItemImg.src = "https://via.placeholder.com/200x150?text=Item";
        leftItemImg.classList.add('placeholder');
    }
}

function updateTargetUI() {
    if (selectedTargetItem) {
        rightPriceEl.textContent = `R$ ${selectedTargetItem.price.toFixed(2)}`;
        rightItemImg.src = selectedTargetItem.image;
        rightItemImg.classList.remove('placeholder');
    } else {
        rightPriceEl.textContent = "R$ 0,00";
        rightItemImg.src = "https://via.placeholder.com/200x150?text=Target";
        rightItemImg.classList.add('placeholder');
    }
}

function autoSelectTarget() {
    const totalInput = selectedInputItems.reduce((acc, item) => acc + item.price, 0);
    const targetPrice = totalInput * currentMultiplier;

    // Find skin closest to targetPrice
    let closestSkin = null;
    let minDiff = Infinity;

    for (const skin of allSiteSkins) {
        // Target must be at least more expensive than input? Not necessarily, but usually "upgrade" means higher value.
        // But logic works either way.
        const diff = Math.abs(skin.price - targetPrice);
        if (diff < minDiff) {
            minDiff = diff;
            closestSkin = skin;
        }
    }

    selectedTargetItem = closestSkin;
    updateTargetUI();
    renderRightInventory();
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

    if (totalInput === 0 || !selectedTargetItem) {
        winChance = 0;
        winChanceEl.textContent = "0.00%";
        updateCircle(0);
        upgradeBtn.disabled = true;
        return;
    }

    const targetPrice = selectedTargetItem.price;

    // House edge? Usually upgrades have a slight edge. Let's say 5% edge.
    // Formula: (Input / Target) * 0.95
    // But if user selected multiplier, we should respect that roughly.
    // Actually, fair chance is Input / Target.
    // Let's stick to pure math: Input / Target.

    let chance = (totalInput / targetPrice) * 100;

    // Cap at 90% or something?
    // And allow low chances.

    // Apply house edge (standard in sites is ~5-10%)
    chance = chance * 0.95;

    if (chance > 95) chance = 95; // Max cap
    if (chance < 1) chance = 1; // Min visible cap?

    // However, if target is cheaper than input, chance > 100%.
    // Upgrader usually implies chance < 100%.
    // If chance > 100%, cap at 100? Or 95?

    winChance = chance;
    winChanceEl.textContent = winChance.toFixed(2) + "%";

    updateCircle(winChance);
    upgradeBtn.disabled = false;
}

function updateCircle(percentage) {
    // Conic gradient: Start at top (0deg).
    // CSS conic-gradient starts at 12 o'clock if we rotate container? No, starts at top.
    // gradient: color 0% X%, transparent X% 100%
    // To center the "win zone" at the top, we need it to span from -half to +half.
    // e.g. 50% chance -> 180deg. Range -90 to +90.
    // CSS conic gradient starts at 0deg (top).
    // So if we want center at top:
    // Color from (100 - p/2) to 100 AND 0 to (p/2) ?
    // Or just rotate the whole background so the segment is at top.

    // Easier: Make the segment start at 0.
    // Then rotate the .upgrade-circle-progress by -(percentage/2) degrees (converted to rotation).
    // 360 * (percentage/100) = degrees width.
    // Rotation = - (degrees width / 2).

    const deg = 3.6 * percentage;
    rouletteProgress.style.background = `conic-gradient(#ffc107 0deg ${deg}deg, transparent ${deg}deg 360deg)`;
    rouletteProgress.style.transform = `rotate(-${deg/2}deg)`;
}

// --- Interaction ---

multiplierBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (isSpinning) return;
        currentMultiplier = parseFloat(btn.dataset.mult);
        updateMultiplierUI(currentMultiplier);

        if (selectedInputItems.length > 0) {
            autoSelectTarget();
            calculateChance();
        }
    });
});

document.getElementById('search-left').addEventListener('input', renderLeftInventory);
document.getElementById('search-right').addEventListener('input', renderRightInventory);

upgradeBtn.addEventListener('click', () => {
    if (isSpinning || winChance <= 0) return;

    // Remove input items from inventory immediately (visual)
    // Actually wait for result?
    // Standard: Deduct immediately.

    // Remove selected items from inventory array
    selectedInputItems.forEach(inputItem => {
        const idx = userInventory.indexOf(inputItem);
        if (idx > -1) userInventory.splice(idx, 1);
    });
    localStorage.setItem('userInventory', JSON.stringify(userInventory));
    selectedInputItems = [];
    renderLeftInventory();
    updateInputUI(); // Will clear input UI
    upgradeBtn.disabled = true;

    startSpin();
});

function startSpin() {
    isSpinning = true;

    // Random spin:
    // We need to land either INSIDE the zone or OUTSIDE.
    // Zone is centered at TOP (0deg visually).
    // Zone width = 3.6 * winChance degrees.
    // Range: [-width/2, +width/2].

    const isWin = Math.random() * 100 < winChance;

    // Calculate stop angle
    // If win: angle between -halfWidth and +halfWidth
    // If lose: angle anywhere else

    const halfWidth = (3.6 * winChance) / 2;
    let stopAngle;

    if (isWin) {
        // Random angle within win zone (with margin of error?)
        stopAngle = (Math.random() * (halfWidth * 1.8)) - (halfWidth * 0.9); // Slightly safer
    } else {
        // Random angle outside win zone
        // Zone is [-half, +half].
        // Outside is [half, 360 - half].
        const safeZoneStart = halfWidth + 5; // buffer
        const safeZoneEnd = 360 - halfWidth - 5;
        stopAngle = safeZoneStart + (Math.random() * (safeZoneEnd - safeZoneStart));
    }

    // Add multiple full rotations for effect (e.g., 5-10 spins)
    const spins = 5 + Math.floor(Math.random() * 5);
    const finalRotation = (spins * 360) + stopAngle;

    // Animate
    roulettePointerContainer.style.transition = 'transform 6s cubic-bezier(0.1, 0.8, 0.1, 1)';
    // Note: The pointer is at TOP (0deg). Rotating container CLOCKWISE moves pointer CLOCKWISE relative to circle?
    // Wait, pointer is child of container. Container rotates. Pointer rotates with it.
    // Circle is static (well, background).
    // Win zone is at TOP.
    // If we rotate container +X degrees, pointer moves to +X degrees.
    // So positive rotation is correct.

    roulettePointerContainer.style.transform = `rotate(${finalRotation}deg)`;

    setTimeout(() => {
        endSpin(isWin);
    }, 6000);
}

function endSpin(isWin) {
    isSpinning = false;
    roulettePointerContainer.style.transition = 'none';
    const currentRot = getComputedStyle(roulettePointerContainer).transform;
    // Keep it there or reset?
    // Let's keep it.

    if (isWin) {
        // Add target to inventory
        userInventory.push(selectedTargetItem);
        localStorage.setItem('userInventory', JSON.stringify(userInventory));
        renderLeftInventory(); // Update inventory list

        // Pulse Green
        document.querySelector('.upgrade-roulette-container').classList.add('win-pulse');
        setTimeout(() => document.querySelector('.upgrade-roulette-container').classList.remove('win-pulse'), 2000);

        // alert(`SUCESSO! Você ganhou ${selectedTargetItem.name}`);
    } else {
        // Pulse Red
        document.querySelector('.upgrade-roulette-container').classList.add('lose-pulse');
        setTimeout(() => document.querySelector('.upgrade-roulette-container').classList.remove('lose-pulse'), 2000);

        // alert("FALHA! Você perdeu seus itens.");
    }

    // Reset inputs
    // selectedInputItems are already cleared.
    // Keep target selected? Maybe clear it.
    // selectedTargetItem = null;
    // updateTargetUI();

    // Actually, usually reset everything for next go
    upgradeBtn.disabled = true;

    // Reset rotation (optional, or just add to it next time)
    // To allow next spin to be smooth, we should track total rotation in a variable instead of resetting.
    // But for simplicity, we reset logic on next click.
    // Just removing the transition style allows us to reset transform instantly if we wanted,
    // but we can just accumulate rotation.
    // For now, let's leave it rotated.
}

// Reset rotation properly for next spin (requires tracking current rotation)
// Since we used `finalRotation` which is local, next spin starts from 0? No, CSS transform persists.
// But if we set new transform, it animates from current.
// Wait, `finalRotation` was calculated from 0?
// Yes: `transform: rotate(${finalRotation}deg)`.
// So next spin needs to start from `finalRotation`.
// Let's track global rotation.
let globalRotation = 0;

// Override startSpin to use globalRotation
const originalStartSpin = startSpin;
startSpin = function() {
    isSpinning = true;
    const isWin = Math.random() * 100 < winChance;

    const halfWidth = (3.6 * winChance) / 2;
    let stopAngle; // Relative to 0 (top)

    if (isWin) {
        stopAngle = (Math.random() * (halfWidth * 1.8)) - (halfWidth * 0.9);
    } else {
        const safeZoneStart = halfWidth + 10;
        const safeZoneEnd = 360 - halfWidth - 10;
        stopAngle = safeZoneStart + (Math.random() * (safeZoneEnd - safeZoneStart));
    }

    // We want to add at least 5 spins to CURRENT rotation.
    // And land on `stopAngle` modulo 360.
    // Current visual angle = globalRotation % 360.
    // Target visual angle = stopAngle.

    // Spins
    const spins = 5 + Math.floor(Math.random() * 3);
    const additionalDegrees = (spins * 360) + stopAngle;

    // Since we want the final position to be `stopAngle`, and we are currently at `globalRotation`.
    // We want `(globalRotation + delta) % 360 ~= stopAngle`.
    // Actually, just calculating absolute target is easier.
    // We want target = (some multiple of 360) + stopAngle.
    // And target > globalRotation.

    // Current full rotations:
    const currentFullRotations = Math.floor(globalRotation / 360);
    const targetFullRotations = currentFullRotations + spins;

    let targetRotation = (targetFullRotations * 360) + stopAngle;

    // Ensure it's forward
    if (targetRotation < globalRotation) {
        targetRotation += 360;
    }

    globalRotation = targetRotation;

    roulettePointerContainer.style.transition = 'transform 6s cubic-bezier(0.1, 0.8, 0.1, 1)';
    roulettePointerContainer.style.transform = `rotate(${globalRotation}deg)`;

    setTimeout(() => {
        endSpin(isWin);
    }, 6000);
}
