document.addEventListener('DOMContentLoaded', () => {
    const loans = [
        {
            id: 1,
            amount: '€1000',
            status: 'ongoing',
            instalments: [
                { number: 1, amount: '€200', dueDate: '2023-02-01', status: 'Paid' },
                { number: 2, amount: '€200', dueDate: '2023-03-01', status: 'Paid' },
                { number: 3, amount: '€200', dueDate: '2023-04-01', status: 'To be paid' },
                { number: 4, amount: '€200', dueDate: '2023-05-01', status: 'To be paid' },
                { number: 5, amount: '€200', dueDate: '2023-06-01', status: 'To be paid' }
            ]
        },
        {
            id: 2,
            amount: '€2000',
            status: 'late',
            instalments: [
                { number: 1, amount: '€400', dueDate: '2023-03-01', status: 'Paid' },
                { number: 2, amount: '€400', dueDate: '2023-04-01', status: 'Late' },
                { number: 3, amount: '€400', dueDate: '2023-05-01', status: 'To be paid' },
                { number: 4, amount: '€400', dueDate: '2023-06-01', status: 'To be paid' },
                { number: 5, amount: '€400', dueDate: '2023-07-01', status: 'To be paid' }
            ]
        },
        {
            id: 3,
            amount: '€3000',
            status: 'paid',
            instalments: [
                { number: 1, amount: '€600', dueDate: '2023-04-01', status: 'Paid' },
                { number: 2, amount: '€600', dueDate: '2023-05-01', status: 'Paid' },
                { number: 3, amount: '€600', dueDate: '2023-06-01', status: 'Paid' },
                { number: 4, amount: '€600', dueDate: '2023-07-01', status: 'To be paid' },
                { number: 5, amount: '€600', dueDate: '2023-08-01', status: 'To be paid' }
            ]
        }
    ];

    const loanList = document.getElementById('loan-list');

    loans.forEach(loan => {
        if (loan.status === 'ongoing' || loan.status === 'late') {
            const nextInstalment = loan.instalments.find(instalment => instalment.status === 'To be paid' || instalment.status === 'Late');
            if (nextInstalment) {
                const loanElement = document.createElement('div');
                loanElement.classList.add('loan');
                loanElement.innerHTML = `
                    <p><strong>Loan Amount:</strong> ${loan.amount}</p>
                    <p><strong>Next Instalment:</strong> ${nextInstalment.amount} due on ${nextInstalment.dueDate}</p>
                    <button class="pay-now">Pay Now</button>
                `;
                loanList.appendChild(loanElement);
            }
        }
    });
});