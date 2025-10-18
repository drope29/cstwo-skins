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
            { name: 'AWP | Asiimov', rarity: 'covert', image: 'https://cdn.skinsmonkey.com/econ/default_generated/weapon_awp_cu_awp_asimov_medium_png.png' },
            { name: 'AK-47 | Redline', rarity: 'classified', image: 'https://cdn.skinsmonkey.com/econ/default_generated/weapon_ak47_cu_ak47_cobra_light_png.png' },
            { name: 'M4A4 | Desolate Space', rarity: 'classified', image: 'https://cdn.skinsmonkey.com/econ/default_generated/weapon_m4a1_cu_m4a4_desolate_space_light_png.png' },
            { name: 'P250 | See Ya Later', rarity: 'restricted', image: 'https://cdn.skinsmonkey.com/econ/default_generated/weapon_p250_cu_p250_cybercroc_light_png.png' },
            { name: 'UMP-45 | Primal Saber', rarity: 'restricted', image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0Ob3ZDBSuImJhJKCmvb4ILrTk3lu5Mx2gv2Po9v3jVLt-hJoYG7wINKTdwI7YF6G_FTtxeznjZG9vc_LzHU3uCAm7GGdwUIwVIf-Gg' },
            { name: 'FAMAS | Mecha Industries', rarity: 'mil-spec', image: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf1OD3dzxP7c-JmYWIn_bLP7LWnn8f65cnjrrH9o_22QHirRZuZTuiJ4WXd1NqZluC-Fi-yOy9hsO9tJ3Aymwj5Hdve0dwuA' },
            { name: 'Glock-18 | Weasel', rarity: 'mil-spec', image: 'https://cdn.skinsmonkey.com/econ/default_generated/weapon_glock_cu_glock18_weasel_light_png.png' }
        ]
    },
    case2: {
        name: 'Caixa das Sombras',
        price: 25.00,
        skins: [
            { name: 'Karambit | Fade', rarity: 'covert', image: 'https://cdn.skinsmonkey.com/econ/default_generated/weapon_knife_karambit_aa_fade_light_png.png' },
            { name: 'Butterfly Knife | Tiger Tooth', rarity: 'covert', image: 'https://cdn.skinsmonkey.com/econ/default_generated/weapon_knife_butterfly_cu_butterfly_tiger_tooth_light_png.png' },
            { name: 'AK-47 | Fire Serpent', rarity: 'covert', image: 'https://cdn.skinsmonkey.com/econ/default_generated/weapon_ak47_cu_fireserpent_ak47_bravo_light_png.png' },
            { name: 'AWP | Gungnir', rarity: 'covert', image: 'https://cdn.skinsmonkey.com/econ/default_generated/weapon_awp_op_awp_gungnir_light_png.png' },
            { name: 'SSG 08 | Dragonfire', rarity: 'classified', image: 'https://cdn.skinsmonkey.com/econ/default_generated/weapon_ssg08_cu_ssg08_dragonfire_light_png.png' },
            { name: 'Glock-18 | Water Elemental', rarity: 'restricted', image: 'https://cdn.skinsmonkey.com/econ/default_generated/weapon_glock_cu_glock_water_elemental_light_png.png' },
            { name: 'P2000 | Fire Elemental', rarity: 'mil-spec', image: 'https://cdn.skinsmonkey.com/econ/default_generated/weapon_p2000_cu_p2000_fire_elemental_light_png.png' }
        ]
    }
};

const modalContainer = document.getElementById('modal-container');
const closeModalBtn = document.getElementById('close-modal-btn');
const skinName = document.getElementById('skin-name');
const skinImage = document.getElementById('skin-image');
const skinRarity = document.getElementById('skin-rarity');

document.querySelectorAll('.open-case-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const caseId = e.target.dataset.case;
        const selectedCase = cases[caseId];

        if (userBalance >= selectedCase.price) {
            userBalance -= selectedCase.price;
            updateUserBalance();

            const skins = selectedCase.skins;
            const randomSkin = skins[Math.floor(Math.random() * skins.length)];

            skinName.textContent = randomSkin.name;
            skinImage.src = randomSkin.image;
            skinRarity.textContent = `Raridade: ${randomSkin.rarity}`;

            modalContainer.style.display = 'block';
        } else {
            alert('Saldo insuficiente!');
        }
    });
});

closeModalBtn.addEventListener('click', () => {
    modalContainer.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == modalContainer) {
        modalContainer.style.display = 'none';
    }
});