document.addEventListener('DOMContentLoaded', () => {
    const addCardButton = document.getElementById('add-card-button');
    const addCardForm = document.getElementById('add-card-form');
    const newCardForm = document.getElementById('new-card-form');
    const cardList = document.getElementById('card-list');

    addCardButton.addEventListener('click', () => {
        addCardForm.style.display = addCardForm.style.display === 'none' ? 'block' : 'none';
    });

    newCardForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const cardNumber = document.getElementById('card-number').value;
        const cardStatus = 'active'; // Default status for new cards

        const cardEnding = cardNumber.slice(-4);
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `
            <span>Card ending in ${cardEnding}</span>
            <span class="card-status ${cardStatus}">${cardStatus.charAt(0).toUpperCase() + cardStatus.slice(1)}</span>
            <div class="card-actions">
                <button>Update</button>
                <button class="set-default">Set as Default</button>
            </div>
        `;

        cardList.appendChild(cardElement);
        addCardForm.style.display = 'none';
        newCardForm.reset();
    });

    cardList.addEventListener('click', (event) => {
        if (event.target.classList.contains('set-default')) {
            const currentDefault = document.querySelector('.card-status.default');
            if (currentDefault) {
                currentDefault.classList.remove('default');
                currentDefault.classList.add('active');
                currentDefault.textContent = 'Active';
            }

            const newDefaultCard = event.target.closest('.card');
            const newDefaultStatus = newDefaultCard.querySelector('.card-status');
            newDefaultStatus.classList.remove('active', 'expired');
            newDefaultStatus.classList.add('default');
            newDefaultStatus.textContent = 'Default';
        }
    });
});