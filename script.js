const financeCtx = document.getElementById('financeChart').getContext('2d');
new Chart(financeCtx, {
    type: 'pie',
    data: {
        labels: ['Renda', 'Despesas'],
        datasets: [{
            data: [2000, 2900],
            backgroundColor: ['#3498db', '#e74c3c']
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Resumo Financeiro'
        }
    }
});

// Residential Expenses Chart
const residentialCtx = document.getElementById('residentialExpensesChart').getContext('2d');
new Chart(residentialCtx, {
    type: 'bar',
    data: {
        labels: ['Aluguel', 'Internet', 'Alimentação', 'Energia', 'Água'],
        datasets: [{
            label: 'Despesas Residenciais',
            data: [500, 200, 300, 300, 300],
            backgroundColor: '#3498db'
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Car Expenses Chart
const carCtx = document.getElementById('carExpensesChart').getContext('2d');
new Chart(carCtx, {
    type: 'bar',
    data: {
        labels: ['Combustível', 'Manutenção', 'Lavagem', 'Documentação'],
        datasets: [{
            label: 'Despesas do Automóvel',
            data: [500, 200, 300, 300],
            backgroundColor: '#2ecc71'
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});