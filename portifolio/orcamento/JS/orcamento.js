var itensOrcamento = [];

function adicionarItem(){

    // captura elemetnos de input
    var inputDescricao = document.getElementById('descricao');
    var inputValor = document.getElementById('valor');


    // validar dados de entrada
    if (inputDescricao.value == '' || inputValor.value == '') {
        alert('Esqueceu de preencher seu animal - descrição ou valor!!');
        return;

    }
    // montar novo item no formato JSON
    var novoItem = {
        'descricao': inputDescricao.value,
        'valor': inputValor.value
    }

    //adiciona um novo item no array de itens do orçamento
    itensOrcamento.push(novoItem);

    redesenharTabela();

    
    //limpar os campos d entrada
    inputDescricao.value = null;
    inputValor.value = null;

}

function redesenharTabela() {
    var corpoTabelItens = '';

    var somatorio =0;

    for (var i = 0; i < itensOrcamento.length; i++){
        var item = itensOrcamento[i];
        var valor = parseFloat(item['valor']);
        somatorio += valor;

        corpoTabelItens += `
          <tr>
            <td>${item['descricao']}</td>
            <td class="text-right">RS ${valor.toFixed(2)}</td>
          </tr>       
        `
    }

    var tabelaItensOrcamento = document.getElementById('tabela_itens_orcamento');
    tabelaItensOrcamento.innerHTML = corpoTabelItens;

    var inputSomatorio = document.getElementById('somatorio');
    inputSomatorio.value = somatorio;



}