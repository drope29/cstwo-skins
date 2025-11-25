document.addEventListener('DOMContentLoaded', () => {
    const inventoryGrid = document.getElementById('inventory-grid-page');
    const userBalanceSpan = document.getElementById('user-balance');
    const userInfo = document.querySelector('.user-info');

    let userInventory = [];
    let userBalance = 0.00;

    function loadDataFromStorage() {
        const storedInventory = localStorage.getItem('userInventory');
        const storedBalance = localStorage.getItem('userBalance');

        if (storedInventory) {
            userInventory = JSON.parse(storedInventory);
        }

        if (storedBalance) {
            userBalance = parseFloat(storedBalance);
        }
    }

    function saveDataToStorage() {
        localStorage.setItem('userInventory', JSON.stringify(userInventory));
        localStorage.setItem('userBalance', userBalance.toString());
    }

    function updateUserBalanceDisplay() {
        if (userBalanceSpan) {
            userBalanceSpan.textContent = `R$ ${userBalance.toFixed(2).replace('.', ',')}`;
            userInfo.style.display = 'flex';
        }
    }

    function sellItem(itemIndex) {
        const soldItem = userInventory.splice(itemIndex, 1)[0];
        if (soldItem) {
            userBalance += soldItem.price;
            saveDataToStorage();
            renderInventory();
            updateUserBalanceDisplay();
        }
    }

    function renderInventory() {
        if (!inventoryGrid) return;
        inventoryGrid.innerHTML = '';

        if (userInventory.length === 0) {
            inventoryGrid.innerHTML = '<p>Seu inventário está vazio.</p>';
            return;
        }

        userInventory.forEach((skin, index) => {
            const skinElement = document.createElement('div');
            skinElement.classList.add('case-skin-item', `rarity-${skin.rarity}`); // Reusing case-skin-item style
            skinElement.innerHTML = `
                <div class="content">
                    <img src="${skin.image}" alt="${skin.name}">
                    <span>${skin.name}</span>
                    <button class="sell-button-inventory" data-index="${index}">Vender (R$ ${skin.price.toFixed(2).replace('.', ',')})</button>
                </div>
            `;
            inventoryGrid.appendChild(skinElement);
        });

        document.querySelectorAll('.sell-button-inventory').forEach(button => {
            button.addEventListener('click', (e) => {
                const itemIndex = parseInt(e.currentTarget.dataset.index, 10);
                sellItem(itemIndex);
            });
        });
    }

    // Initial load
    loadDataFromStorage();
    updateUserBalanceDisplay();
    renderInventory();
});