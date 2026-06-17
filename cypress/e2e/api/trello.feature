Feature: Consulta API Trello

  Scenario: Obter nome da lista
    When envio uma requisição GET para API do Trello
    Then o status code deve ser 200
    And exibo o nome da lista