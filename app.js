

$(document).ready(function () {
    const users = [
        { username: 'admin', password: '1234' },
        { username: 'kr', password: '1' }
    ];

    // Login
    $('#loginForm').on('submit', function (e) {
        e.preventDefault();
        const username = $('#username').val();
        const password = $('#password').val();
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            $('#loginContainer').addClass('d-none');
            $('#dashboard').removeClass('d-none');
        } else {
            alert('Usuário ou senha inválidos.');
        }
    });

    // Logout
    $('#logout').on('click', function () {
        $('#dashboard').addClass('d-none');
        $('#loginContainer').removeClass('d-none');
        $('#loginForm')[0].reset();
    });

    // Navegação entre seções
    $('.section-btn').on('click', function () {
        const targetSection = $(this).data('section');
        $('section').addClass('d-none'); // Oculta todas as seções
        $(`#${targetSection}`).removeClass('d-none'); // Mostra a seção clicada
    });

    $('.back-btn').on('click', function () {
        $('section').addClass('d-none');
        $('#dashboard').removeClass('d-none');
    });

    // Gerenciamento de Orçamentos
    $('#budgetForm').on('submit', function (e) {
        e.preventDefault();
        const description = $('#budgetDescription').val();
        const budgets = JSON.parse(localStorage.getItem('budgets')) || [];
        budgets.push(description);
        localStorage.setItem('budgets', JSON.stringify(budgets));
        $('#budgetDescription').val('');
        renderBudgets();
    });

    function renderBudgets() {
        const budgets = JSON.parse(localStorage.getItem('budgets')) || [];
        $('#budgetList').empty();
        budgets.forEach(budget => {
            $('#budgetList').append(`<li class="list-group-item">${budget}</li>`);
        });
    }

    // Gerenciamento de Clientes
    $('#clientForm').on('submit', function (e) {
        e.preventDefault();
        const name = $('#clientName').val();
        const phone = $('#clientPhone').val();
        const clients = JSON.parse(localStorage.getItem('clients')) || [];
        clients.push({ name, phone });
        localStorage.setItem('clients', JSON.stringify(clients));
        $('#clientName, #clientPhone').val('');
        renderClients();
    });

    function renderClients() {
        const clients = JSON.parse(localStorage.getItem('clients')) || [];
        $('#clientList').empty();
        clients.forEach(client => {
            $('#clientList').append(`<li class="list-group-item">${client.name} - ${client.phone}</li>`);
        });
    }

    // Inicializar Listas
    renderBudgets();
    renderClients();
});
