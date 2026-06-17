Feature: Consulta de informações de uma ação no Trello

  Scenario: Obter o nome da lista associado a uma ação
    Given que possuo acesso à API do Trello
    When consulto uma ação válida pelo endpoint informado
    Then o serviço deve retornar status code 200
    And o campo "list.name" deve ser retornado na resposta
    And o nome da lista deve ser exibido