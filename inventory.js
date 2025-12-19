document.addEventListener('DOMContentLoaded', () => {
    const inventoryGrid = document.getElementById('inventory-grid-page');
    const userBalanceSpan = document.getElementById('user-balance');
    const userInfo = document.querySelector('.user-info');
    const inventoryCountSpan = document.getElementById('inventory-count');
    const inventoryTotalValueSpan = document.getElementById('inventory-total-value');

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

    function updateInventoryStats() {
        if (inventoryCountSpan) {
            inventoryCountSpan.textContent = `${userInventory.length} item${userInventory.length !== 1 ? 's' : ''}`;
        }

        if (inventoryTotalValueSpan) {
            const totalValue = userInventory.reduce((sum, item) => sum + item.price, 0);
            inventoryTotalValueSpan.textContent = `R$ ${totalValue.toFixed(2).replace('.', ',')}`;
        }
    }

    function renderInventory() {
        if (!inventoryGrid) return;
        inventoryGrid.innerHTML = '';

        if (userInventory.length === 0) {
            inventoryGrid.innerHTML = '<div class="empty-inventory">Seu inventário está vazio.</div>';
            updateInventoryStats();
            return;
        }

        userInventory.forEach((skin, index) => {
            const skinElement = document.createElement('div');
            skinElement.classList.add('inventory-card', `rarity-${skin.rarity}`);

            skinElement.innerHTML = `
                <div class="inventory-card-top">
                    <span class="inventory-card-price">R$ ${skin.price.toFixed(2).replace('.', ',')}</span>
                </div>
                <div class="inventory-card-image">
                    <img src="${skin.image}" alt="${skin.name}">
                </div>
                <div class="inventory-card-info">
                    <div class="inventory-card-name">${skin.name}</div>
                    <div class="inventory-card-rarity-bar"></div>
                </div>
                <div class="inventory-card-actions">
                    <button class="sell-button-inventory" data-index="${index}">
                        VENDER
                    </button>
                </div>
            `;
            inventoryGrid.appendChild(skinElement);
        });

        updateInventoryStats();

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
