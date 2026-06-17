Feature: Fluxo de compra com sucesso

  Scenario: Realizar fluxo de compra com sucesso
    Given que o usuário acessa a página de login
    And realiza login com credenciais válidas
    When pesquisa pelo produto "Blue Top"
    And adiciona o produto ao carrinho
    And acessa o carrinho de compras
    And prossegue para o checkout
    Then o produto "Blue Top" deve estar listado na tela de pagamento