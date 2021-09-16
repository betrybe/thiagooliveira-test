Desenvolva a funcionalidade do botão "Adicionar despesa" de modo que ao clicar no botão, as seguintes ações sejam executadas:

Os valores dos campos devem ser salvos no estado da aplicação, na chave expenses, dentro de um array contendo todos gastos que serão adicionados:

O id da despesa deve ser um número sequencial, começando em 0. Ou seja: a primeira despesa terá id 0, a segunda terá id 1, a terceira id 2, e assim por diante.

Você deverá salvar a cotação do câmbio feita no momento da adição para ter esse dado quando for efetuar uma edição do gasto. Caso você não tenha essa informação salva, o valor da cotação trazida poderá ser diferente do obtido anteriormente.

Atenção nesse ponto: você deverá fazer uma requisição para API e buscar a cotação no momento que o botão de Adicionar despesa for apertado. Para isso você deve utilizar um thunk. Atente-se ao formato do objeto da despesa descrito abaixo: o valor retornado pela API deverá ficar dentro da chave exchangeRates.

Após adicionar a despesa, atualize a soma total das despesas. Essa informação deve ficar no header dentro do elemento com data-testid="total-field"

As despesas salvas no Redux ficarão com um formato semelhante ao seguinte:

expenses: [{
    "id": 0,
    "value": "3",
    "description": "Hot Dog",
    "currency": "USD",
    "method": "Dinheiro",
    "tag": "Alimentação",
    "exchangeRates": {
      "USD": {
        "code": "USD",
        "name": "Dólar Comercial",
        "ask": "5.6208",
        ...
      },
      "CAD": {
        "code": "CAD",
        "name": "Dólar Canadense",
        "ask": "4.2313",
        ...
      },