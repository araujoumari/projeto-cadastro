var cadastro = [];
var qtdeElementos = 0;
var tbody = document.getElementById("animeTabela"); 

function guardarDados(event){
    var nomeAnime = document.getElementById("nomeAnime").value;
    var genero = document.getElementById("genero").options[document.getElementById("genero").selectedIndex].innerHTML;
    var ano = document.getElementById("ano").value;
    var nota = document.getElementById("nota").value;

    cadastro.push ({
        'nomeAnime': nomeAnime,
        'genero': genero,
        'ano': ano,
        'nota': nota
    });
    
    event.preventDefault();

    limpar();
    exibirCadastros();
}

function limpar(){
    document.getElementById("nomeAnime").value = "";
    document.getElementById("genero").selectedIndex = "0"; 
    document.getElementById("ano").value = "";
    document.getElementById("nota").value = "";
}

function exibirCadastros() {
    var linha = document.createElement("tr");

    var data1 = document.createElement("td");
    data1.textContent = cadastro[qtdeElementos].nomeAnime;
    linha.appendChild(data1);

    var data2 = document.createElement("td");
    data2.textContent = cadastro[qtdeElementos].genero;
    linha.appendChild(data2);

    var data3 = document.createElement("td");
    data3.textContent = cadastro[qtdeElementos].ano;
    linha.appendChild(data3);

    var data4 = document.createElement("td");
    data4.textContent = cadastro[qtdeElementos].nota;
    linha.appendChild(data4);

    tbody.appendChild(linha);

    qtdeElementos++;
}