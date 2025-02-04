document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const loanId = urlParams.get('loanId');

    const loans = [
        {
            id: 1,
            originationDate: '2023-01-01',
            merchant: 'Merchant A',
            amount: '€1000',
            status: 'ongoing',
            terms: '5 months',
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
            originationDate: '2023-02-01',
            merchant: 'Merchant B',
            amount: '€2000',
            status: 'late',
            terms: '5 months',
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
            originationDate: '2023-03-01',
            merchant: 'Merchant C',
            amount: '€3000',
            status: 'paid',
            terms: '5 months',
            instalments: [
                { number: 1, amount: '€600', dueDate: '2023-04-01', status: 'Paid' },
                { number: 2, amount: '€600', dueDate: '2023-05-01', status: 'Paid' },
                { number: 3, amount: '€600', dueDate: '2023-06-01', status: 'Paid' },
                { number: 4, amount: '€600', dueDate: '2023-07-01', status: 'To be paid' },
                { number: 5, amount: '€600', dueDate: '2023-08-01', status: 'To be paid' }
            ]
        }
    ];

    const loan = loans.find(l => l.id == loanId);

    if (loan) {
        document.getElementById('origination-date').textContent = loan.originationDate;
        document.getElementById('merchant').textContent = loan.merchant;
        document.getElementById('amount').textContent = loan.amount;
        document.getElementById('status').textContent = loan.status.charAt(0).toUpperCase() + loan.status.slice(1);
        document.getElementById('status').classList.add(loan.status);
        document.getElementById('terms').textContent = loan.terms;

        const instalmentsList = document.getElementById('instalments-list');
        loan.instalments.forEach(instalment => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${instalment.number}</td>
                <td>${instalment.amount}</td>
                <td>${instalment.dueDate}</td>
                <td><span class="instalment-status ${instalment.status.toLowerCase().replace(/ /g, '-')}">${instalment.status}</span></td>
            `;
            instalmentsList.appendChild(row);
        });
    }
});