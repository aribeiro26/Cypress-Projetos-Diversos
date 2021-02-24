Feature: Realiza compra no Site Automation

    Scenario: Visualizar o Produto "faded Short Sleeve"
        Given Acesso o site Automation Pratice
        When Acesso a pagina realizo a busca do Produto 
        And Adiciono o produto no carrinho
        Then Valido que o produto foi adicionado ao carinho