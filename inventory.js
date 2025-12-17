document.addEventListener('DOMContentLoaded', () => {
    const inventoryGrid = document.getElementById('inventory-grid-page');
    const userBalanceSpan = document.getElementById('user-balance');
    const userInfo = document.querySelector('.user-info');
    const totalItemsSpan = document.getElementById('total-items');
    const totalValueSpan = document.getElementById('total-value');
    const emptyState = document.getElementById('inventory-empty-state');
    const gridContainer = document.getElementById('inventory-grid-container');

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

    function updateInventoryStats() {
        if (totalItemsSpan) {
            totalItemsSpan.textContent = userInventory.length;
        }
        if (totalValueSpan) {
            const total = userInventory.reduce((sum, item) => sum + (item.price || 0), 0);
            totalValueSpan.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
        }

        // Handle empty state
        if (userInventory.length === 0) {
            if (emptyState) emptyState.style.display = 'block';
            if (gridContainer) gridContainer.style.display = 'none';
        } else {
            if (emptyState) emptyState.style.display = 'none';
            if (gridContainer) gridContainer.style.display = 'block'; // Ensure grid is shown? Actually container is flex.
            // Wait, gridContainer uses flex centering.
            if (gridContainer) gridContainer.style.display = 'flex';
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

        updateInventoryStats();

        userInventory.forEach((skin, index) => {
            const skinElement = document.createElement('div');
            skinElement.classList.add('case-skin-item', `rarity-${skin.rarity}`);
            // Add custom class for inventory specific overrides if needed
            // But we use #inventory-grid-page .case-skin-item in CSS

            skinElement.innerHTML = `
                <div class="content">
                    <div class="hexagon-bg"></div>
                    <div class="inventory-price-tag">R$ ${skin.price.toFixed(2).replace('.', ',')}</div>
                    <img src="${skin.image}" alt="${skin.name}">
                    <span>${skin.name}</span>
                    <button class="sell-button-inventory" data-index="${index}">
                        VENDER <span class="btn-price">R$ ${skin.price.toFixed(2).replace('.', ',')}</span>
                    </button>
                </div>
            `;
            inventoryGrid.appendChild(skinElement);
        });

        document.querySelectorAll('.sell-button-inventory').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent card click if we add one later
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
