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
        $('.d-none').addClass('d-none'); // Oculta todas as seções
        $(`#${targetSection}`).removeClass('d-none'); // Mostra a seção clicada
    });

    $('.back-btn').on('click', function () {
        $('.d-none').addClass('d-none');
        $('#dashboard').removeClass('d-none');
    });

    // Gerenciamento de Orçamentos
    $('#budgetForm').on('submit', function (e) {
        e.preventDefault();
        const description = $('#budgetDescription').val();
        const value = $('#budgetValue').val();
        const budgets = JSON.parse(localStorage.getItem('budgets')) || [];
        budgets.push({ description, value });
        localStorage.setItem('budgets', JSON.stringify(budgets));
        $('#budgetDescription').val('');
        $('#budgetValue').val('');
        renderBudgets();
    });

    function renderBudgets() {
        const budgets = JSON.parse(localStorage.getItem('budgets')) || [];
        $('#budgetList').empty();
        budgets.forEach((budget, index) => {
            $('#budgetList').append(`
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    ${budget.description} - R$ ${budget.value}
                    <button class="btn btn-danger btn-sm delete-budget" data-index="${index}">Excluir</button>
                </li>
            `);
        });
    }

    $(document).on('click', '.delete-budget', function () {
        const index = $(this).data('index');
        const budgets = JSON.parse(localStorage.getItem('budgets')) || [];
        budgets.splice(index, 1);
        localStorage.setItem('budgets', JSON.stringify(budgets));
        renderBudgets();
    });

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
        clients.forEach((client, index) => {
            $('#clientList').append(`
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    ${client.name} - ${client.phone}
                    <button class="btn btn-danger btn-sm delete-client" data-index="${index}">Excluir</button>
                </li>
            `);
        });
    }

    $(document).on('click', '.delete-client', function () {
        const index = $(this).data('index');
        const clients = JSON.parse(localStorage.getItem('clients')) || [];
        clients.splice(index, 1);
        localStorage.setItem('clients', JSON.stringify(clients));
        renderClients();
    });

    // Inicializar Listas
    renderBudgets();
    renderClients();
});

document.addEventListener("DOMContentLoaded", () => {
    const formOrcamento = document.getElementById("form-orcamento");
    const mensagemSucesso = document.getElementById("mensagem-sucesso");

    // Esconde a mensagem de sucesso inicialmente
    mensagemSucesso.style.display = "none";

    formOrcamento.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita o comportamento padrão do formulário

        // Capturar os dados do formulário
        const formData = new FormData(formOrcamento);

        // Simula o envio para um backend
        console.log("Simulando envio de dados...");
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        // Simula uma resposta de sucesso
        setTimeout(() => {
            formOrcamento.reset(); // Limpa o formulário
            mensagemSucesso.style.display = "block"; // Exibe mensagem de sucesso
        }, 1000);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const formOrcamento = document.getElementById("form-orcamento");
    const mensagemSucesso = document.getElementById("mensagem-sucesso");

    // Esconde a mensagem de sucesso inicialmente
    mensagemSucesso.style.display = "none";

    formOrcamento.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita o comportamento padrão do formulário

        // Capturar os dados do formulário
        const formData = new FormData(formOrcamento);

        // Simula o envio para um backend
        console.log("Simulando envio de dados...");
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        // Simula uma resposta de sucesso
        setTimeout(() => {
            formOrcamento.reset(); // Limpa o formulário
            mensagemSucesso.style.display = "block"; // Exibe mensagem de sucesso
        }, 1000);
    });
});
