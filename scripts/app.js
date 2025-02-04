// This file contains the JavaScript code for the loan management prototype.
// It handles the functionality and interactivity of the webpage.

document.addEventListener('DOMContentLoaded', () => {
    const loanForm = document.getElementById('loan-form');
    const result = document.getElementById('result');

    loanForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const amount = parseFloat(document.getElementById('amount').value);
        const interestRate = parseFloat(document.getElementById('interest-rate').value);
        const years = parseInt(document.getElementById('years').value);

        if (isNaN(amount) || isNaN(interestRate) || isNaN(years)) {
            result.innerHTML = 'Please enter valid numbers.';
            return;
        }

        const monthlyInterestRate = interestRate / 100 / 12;
        const numberOfPayments = years * 12;
        const x = Math.pow(1 + monthlyInterestRate, numberOfPayments);
        const monthlyPayment = (amount * x * monthlyInterestRate) / (x - 1);

        result.innerHTML = `Your monthly payment is: $${monthlyPayment.toFixed(2)}`;
    });

    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
});