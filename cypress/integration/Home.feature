Feature: Realizar compra no Site Automation

    Background: Acessando o Site

    Given Acessar o site Prova Stefanini
    
    Scenario: Validar os campos vazios
        
        When Validar o Layout      
        Then Validar que os campos Input estao vazios

    Scenario: Validar Mensagem de Campos Obrigatorios - Nome

        When Validar Campo nome Está vazio "#name"
        Then Validar Mensagem de Campo Nome é Obrigatorio "O campo Nome é obrigatório."

    Scenario: Validar Mensagem de Campos Obrigatorios - Email

        When Validar Campo Email Está vazio "#email"
        Then Validar Mensagem de Campo Email é Obrigatorio "O campo E-mail é obrigatório."

    Scenario: Validar Mensagem de Campos Obrigatorios - Email

        When Validar Campo Email Está vazio "#email"
        |Joao|joao@emai.com|12345678|
        |joaquim|joaquim@email.com|12345678|
        Then Validar Mensagem de Campo Email é Obrigatorio "Cadastrar"