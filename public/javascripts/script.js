   //Computers GET
    $.get('http://127.0.0.1:3000/computers', function(data){
        
        console.log(data);

        let table = $('.table-computers tbody');
        data.forEach(element => {
            let td_id = $(document.createElement('td'));
            let td_memoria_ram = $(document.createElement('td'));
            let td_hd = $(document.createElement('td'));
            let td_sistema_operacional = $(document.createElement('td'));
            let td_fabricante = $(document.createElement('td'));

            td_id.text(element.id);
            td_memoria_ram.text(element.memoria_ram);
            td_hd.text(element.hd);
            td_sistema_operacional.text(element.sistema_operacional);
            td_fabricante.text(element.fabricante);

            let tr = $(document.createElement('tr'));

            tr.append(td_id);
            tr.append(td_memoria_ram);
            tr.append(td_hd);
            tr.append(td_sistema_operacional);
            tr.append(td_fabricante);

            tr.append(`<div class='btn-group' role='group'><button type='button' class='btn btn-sm btn-danger' onclick='deleteComputerById(${element.id})'> Excluir </button> <button type='button' class='btn btn-sm btn-info' onclick="editarComputerFormShow(${element.id})"> Editar </button></div>`);

            table.append(tr);
        });
    });

    //Computers POST
    $('#btnAdicionarComputador').on('click', function(){
        let memoria_ram = document.getElementById('memoria_ram');
        let hd = document.getElementById('hd');
        let sistema_operacional = document.getElementById('sistema_operacional');
        let fabricante = document.getElementById('fabricante');

        let formData = {
            memoria_ram: memoria_ram.value,
            hd: hd.value,
            sistema_operacional: sistema_operacional.value,
            fabricante: fabricante.value
        };

        $.post('http://127.0.0.1:3000/computers', formData, function(data){
            console.log(data);
            if(data[1].changes === 1){
                alert('Computador adicionado com sucesso!');
                window.location.href = 'http://127.0.0.1:3000';
            }else{
                alert('Erro ao adicionar computador, tente novamente...');
            }
        });
    });

//Computers DELETE
function deleteComputerById(id){

    $.ajax({
        url: `http://127.0.0.1:3000/computers/${id}`,
        method: 'DELETE'
    }).done(function(){
        window.location.href = 'http://127.0.0.1:3000';
    });
}

function getComputerById(){

    let id = $('#computador').val();

    $.get(`http://127.0.0.1:3000/computers/${id}`, function(element){

        console.log(element);
            let table = $('.table-computers tbody');

            let td_id = $(document.createElement('td'));
            let td_memoria_ram = $(document.createElement('td'));
            let td_hd = $(document.createElement('td'));
            let td_sistema_operacional = $(document.createElement('td'));
            let td_fabricante = $(document.createElement('td'));

            td_id.text(element.id);
            td_memoria_ram.text(element.memoria_ram);
            td_hd.text(element.hd);
            td_sistema_operacional.text(element.sistema_operacional);
            td_fabricante.text(element.fabricante);

            let tr = $(document.createElement('tr'));

            tr.append(td_id);
            tr.append(td_memoria_ram);
            tr.append(td_hd);
            tr.append(td_sistema_operacional);
            tr.append(td_fabricante);

            tr.append(`<div class='btn-group' role='group'><button type='button' class='btn btn-sm btn-danger' onclick='deleteComputerById(${element.id})'> Excluir </button> <button type='button' class='btn btn-sm btn-info' onclick="editarComputerFormShow(${element.id})"> Editar </button></div>`);

            table.html(tr);
    });

}

function recarregarListaComputers(){
    window.location.href = "http://127.0.0.1:3000";
}

function editarComputerFormShow(id){

    $.get(`http://127.0.0.1:3000/computers/${id}`, function(res){
        let modal = $('#myModalComputadorEditar');

        modal.find('#id').val(res.id);
        modal.find('#memoria_ram').val(res.memoria_ram);
        modal.find('#hd').val(res.hd);
        modal.find('#sistema_operacional').val(res.sistema_operacional);
        modal.find('#fabricante').val(res.fabricante);

        $('#myModalComputadorEditar').modal();
    });
}

// Computers PUT
function editarComputer(){
    let modal = $('#myModalComputadorEditar');

    let id = modal.find('#id').val();
    let memoria_ram = modal.find('#memoria_ram').val();
    let hd = modal.find('#hd').val();
    let sistema_operacional = modal.find('#sistema_operacional').val();
    let fabricante = modal.find('#fabricante').val();

    let formData = {
        id: id,
        memoria_ram: memoria_ram,
        hd: hd,
        sistema_operacional: sistema_operacional,
        fabricante: fabricante
    };

    $.ajax({
        url: 'http://127.0.0.1:3000/computers',
        data: formData,
        method: 'PUT'
    }).done(function(res){
        window.location.href = 'http://127.0.0.1:3000';
    });
}

//Users GET
$.get('http://127.0.0.1:3000/users', function(data){
        
    console.log(data);

    let table = $('.table-users tbody');
    data.forEach(element => {
        let td_id = $(document.createElement('td'));
        let td_nome = $(document.createElement('td'));
        let td_email = $(document.createElement('td'));
        let td_idade = $(document.createElement('td'));
        let td_profissao = $(document.createElement('td'));

        td_id.text(element.id);
        td_nome.text(element.nome);
        td_email.text(element.email);
        td_idade.text(element.idade);
        td_profissao.text(element.profissao);

        let tr = $(document.createElement('tr'));

        tr.append(td_id);
        tr.append(td_nome);
        tr.append(td_email);
        tr.append(td_idade);
        tr.append(td_profissao);

        tr.append(`<div class='btn-group' role='group'><button type='button' class='btn btn-sm btn-danger' onclick='deleteUserById(${element.id})'> Excluir </button> <button type='button' class='btn btn-sm btn-info' onclick="editarUserFormShow(${element.id})"> Editar </button></div>`);

        table.append(tr);
    });
});

//Users POST
$('#btnAdicionarUser').on('click', function(){
    let nome = document.getElementById('nome');
    let email = document.getElementById('email');
    let idade = document.getElementById('idade');
    let profissao = document.getElementById('profissao');

    let formData = {
        nome: nome.value,
        email: email.value,
        idade: idade.value,
        profissao: profissao.value
    };

    $.post('http://127.0.0.1:3000/users', formData, function(data){
        console.log(data);
        if(data[1].changes === 1){
            alert('Usuário adicionado com sucesso!');
            window.location.href = 'http://127.0.0.1:3000';
        }else{
            alert('Erro ao adicionar usuário, tente novamente...');
        }
    });
});

//Users DELETE
function deleteUserById(id){

    $.ajax({
        url: `http://127.0.0.1:3000/users/${id}`,
        method: 'DELETE'
    }).done(function(){
        window.location.href = 'http://127.0.0.1:3000';
    });   
}

function getUserById(){

    let id = $('#users').val();

    $.get(`http://127.0.0.1:3000/users/${id}`, function(element){
        let table = $('.table-users tbody');

        let td_id = $(document.createElement('td'));
        let td_nome = $(document.createElement('td'));
        let td_email = $(document.createElement('td'));
        let td_idade = $(document.createElement('td'));
        let td_profissao = $(document.createElement('td'));

        td_id.text(element.id);
        td_nome.text(element.nome);
        td_email.text(element.email);
        td_idade.text(element.idade);
        td_profissao.text(element.profissao);

        let tr = $(document.createElement('tr'));

        tr.append(td_id);
        tr.append(td_nome);
        tr.append(td_email);
        tr.append(td_idade);
        tr.append(td_profissao);

        tr.append(`<div class='btn-group' role='group'><button type='button' class='btn btn-sm btn-danger' onclick='deleteUserById(${element.id})'> Excluir </button> <button type='button' class='btn btn-sm btn-info' onclick="editarUserFormShow(${element.id})"> Editar </button></div>`);

        table.html(tr);
    });
}

function editarUserFormShow(id){

    $.get(`http://127.0.0.1:3000/users/${id}`, function(res){
        let modal = $('#myModalUserEditar');

        modal.find('#id').val(res.id);
        modal.find('#nome').val(res.nome);
        modal.find('#email').val(res.email);
        modal.find('#idade').val(res.idade);
        modal.find('#profissao').val(res.profissao);

        $('#myModalUserEditar').modal();
    });
}

// Users PUT
function editarUser(){
    let modal = $('#myModalUserEditar');

    let id = modal.find('#id').val();
    let nome = modal.find('#nome').val();
    let email = modal.find('#email').val();
    let idade = modal.find('#idade').val();
    let profissao = modal.find('#profissao').val();

    let formData = {
        id: id,
        nome: nome,
        email: email,
        idade: idade,
        profissao: profissao
    };

    $.ajax({
        url: 'http://127.0.0.1:3000/users',
        data: formData,
        method: 'PUT'
    }).done(function(res){
        window.location.href = 'http://127.0.0.1:3000';
    });
}

