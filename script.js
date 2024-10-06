let income = [
    { description: 'Renda como motorista de aplicativo', amount: 1500 }
];

let expenses = [
    { description: 'Aluguel', amount: 500 },
    { description: 'gasolina', amount: 300 },
    { description: 'Alimentação', amount: 500 },
    { description: 'Medicamentos', amount: 300 },
    { description: 'manutencao carro', amount: 300 },
    
];

const healthInfo = {
    condition: 'Diabetico',
    medication: 'Insulina diária',
    routine: 'Rotina de trabalho limitada devido à condição de saúde'
};

function updateFinancialSummary() {
    const totalIncome = income.reduce((sum, item) => sum + item.amount, 0);
    const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);
    const balance = totalIncome - totalExpenses;

    document.getElementById('financial-summary').innerHTML = `
        <h2>Resumo Financeiro</h2>
        <p>Renda Total: R$ ${totalIncome.toFixed(2)}</p>
        <p>Despesas Totais: R$ ${totalExpenses.toFixed(2)}</p>
        <p>Saldo: R$ ${balance.toFixed(2)}</p>
    `;
}

function updateLists() {
    document.getElementById('income-list').innerHTML = income.map(item => `
        <div>${item.description}: R$ ${item.amount.toFixed(2)}</div>
    `).join('');

    document.getElementById('expense-list').innerHTML = expenses.map(item => `
        <div>${item.description}: R$ ${item.amount.toFixed(2)}</div>
    `).join('');
}

function updateHealthInfo() {
    document.getElementById('health-info').innerHTML = `
        <h2>Informações de Saúde</h2>
        <p><strong>Condição:</strong> ${healthInfo.condition}</p>
        <p><strong>Medicação:</strong> ${healthInfo.medication}</p>
        <p><strong>Rotina:</strong> ${healthInfo.routine}</p>
    `;
}

document.getElementById('add-item-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;

    if (description && amount) {
        const newItem = { description, amount };
        if (type === 'income') {
            income.push(newItem);
        } else {
            expenses.push(newItem);
        }
        updateFinancialSummary();
        updateLists();
        this.reset();
    }
});

// Inicialização
updateFinancialSummary();
updateLists();
updateHealthInfo();