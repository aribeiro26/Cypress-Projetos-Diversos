Feature: Realizar Testes da Interface de Cadastro de Usuarios da Stefanini

    Background: Acessando o Site

    Given Acessar o site Prova Stefanini
    
    Scenario: Validar os campos vazios
        
        When Validar o Layout      
        Then Validar que os campos Input estao vazios

    Scenario Outline: Validar Mensagem de Campos Obrigatorios - Nome

        When Validar Campo nome Está vazio "<nome>"
        Then Validar Mensagem de Campo Nome é Obrigatorio "O campo Nome é obrigatório."

        Examples:
        | pass     | email | nome | Inputnome   | Inputemail        | Inputsenha|
        | #password| #email| #name| Magno Silva | magno@teste.com.br| St123456  |

    Scenario Outline: Validar Mensagem de Campos Obrigatorios - Email

        When Validar Campo Email Está vazio "<email>"
        Then Validar Mensagem de Campo Email é Obrigatorio "O campo E-mail é obrigatório."

            Examples:
            | pass     | email | nome | Inputnome   | Inputemail        | Inputsenha|
            | #password| #email| #name| Magno Silva | magno@teste.com.br| St123456  |

    Scenario Outline: Validar Mensagem de Campos Obrigatorios - Senha

        When Validar Campo senha Está vazio "<pass>"                    
        Then Validar Mensagem de Campo senha é Obrigatorio "O campo Senha é obrigatório."

            Examples:
            | pass     | email | nome | Inputnome   | Inputemail        | Inputsenha|
            | #password| #email| #name| Magno Silva | magno@teste.com.br| St123456  |

    Scenario Outline: Validar Mensagem de Campo email não preenchido - EMAIL

        When Preencher os campos nome e senha "<Inputnome>" "<Inputsenha>"                    
        Then Validar Mensagem de Campo E-mail é Obrigatorio "O campo E-mail é obrigatório."
        
            Examples:
            | pass     | email | nome | Inputnome   | Inputemail        | Inputsenha|
            | #password| #email| #name| Magno Silva | magno@teste.com.br| St123456  |

    Scenario Outline: Validar Mensagem de Campo Senha não preenchido - Senha

        When Preencher os campos nome e email "<Inputnome>" "<Inputemail>"                    
        Then Validar Mensagem de Campo Senha é Obrigatorio "O campo Senha é obrigatório."



        Examples:
        | pass     | email | nome | Inputnome   | Inputemail        | Inputsenha|
        | #password| #email| #name| Magno Silva | magno@teste.com.br| St123456  |

    Scenario Outline: Validar Mensagem de Campos Obrigatorios não preenchido.

        When Clicar no campo Qualquer e Teclar a tecla Enter                   
        Then Validar Mensagens de Alerta dos campos "<MsgNome>" "<MsgEmail>" "<MsgSenha>"

        Examples:
        | MsgNome                    | MsgEmail                    | MsgSenha                     |
        | O campo Nome é obrigatório.|O campo E-mail é obrigatório.| O campo Senha é obrigatório. |

    Scenario Outline: Validar Mensagem de Campo Nome Parcialmente Preenchido - Nome Parcial

        And Preencher o campo Nome incompleto "<nome>" "<Inputnome>" 
        And Preencher o campo email "<email>" "<Inputemail>" 
        And Preencher o campo senha "<pass>" "<Inputsenha>"                   
        When Clicar no campo nome e Teclar a tecla Enter "<nome>"
        Then Validar Mensagens de Alerta do campo Nome "<MsgNome>"

        Examples:
        | pass     | email | nome | Inputnome| Inputemail        | Inputsenha| MsgNome                            |
        | #password| #email| #name| Magno    | magno@teste.com.br| St123456  | Por favor, insira um nome completo.|

    Scenario Outline: Validar Mensagem de Campo Email Incorreto - Email Inválido

        And Preencher o campo Nome completo "<nome>" "<Inputnome>" 
        And Preencher o campo email com email inválido "<email>" "<Inputemail>" 
        And Preencher o campo senha "<pass>" "<Inputsenha>"                   
        When Clicar no campo email e Teclar a tecla Enter "<email>"
        Then Validar Mensagens de Alerta do campo Email "<MsgEmail>"

        Examples:
        | pass     | email | nome | Inputnome  | Inputemail        | Inputsenha| MsgEmail                           |
        | #password| #email| #name| Magno Silva| magno.teste.com.br| St123456  | Por favor, insira um e-mail válido.|

    Scenario Outline: Validar Mensagem do Campo Senha com quantidade de caracter Inválida - Senha Inválido

        And Preencher o campo Nome completo "<nome>" "<Inputnome>" 
        And Preencher o campo email "<email>" "<Inputemail>" 
        And Preencher o campo senha com quantidade de caracteres inválida "<pass>" "<Inputsenha>"                   
        When Clicar no campo senha e Teclar a tecla Enter "<pass>"
        Then Validar Mensagens de Alerta do campo Senha "<MsgSenha>"

        Examples:
        | pass     | email | nome | Inputnome  | Inputemail        | Inputsenha| MsgSenha                                  |
        | #password| #email| #name| Magno Silva| magno@teste.com.br| St123     | A senha deve conter ao menos 8 caracteres.|

    Scenario: Cadastrar Usuario

        And Preencher o campo Nome completo "#name" "Magno Silva" 
        And Preencher o campo email "#email" "magno@teste.com.br" 
        And Preencher o campo senha "#password" "St12345678"                   
        When Clicar no Botão Cadastrar "Cadastrar"
        Then Validar Usuário Cadastrado "Magno Silva" 

    Scenario: Cadastrar Usuarios - Cadastrar Dois Usuários
        
        And Preencher o campo Nome completo "#name" "Magno Silva" 
        And Preencher o campo email "#email" "magno@teste.com.br" 
        And Preencher o campo senha "#password" "St12345678"  
        And Clicar no Botão Cadastrar "Cadastrar"
        And Preencher o campo Nome completo "#name" "Alexi James" 
        And Preencher o campo email "#email" "Alexi@teste.com.br" 
        And Preencher o campo senha "#password" "St123456"               
        When Clicar no Botão Cadastrar "Cadastrar"
        Then Validar Usuários Cadastrados "Magno Silva" "Alexi James" 

    Scenario: Excluir o Primeiro Usuario Cadastrado - Excluir Usuário
        
        And Preencher o campo Nome completo "#name" "Magno Silva" 
        And Preencher o campo email "#email" "magno@teste.com.br" 
        And Preencher o campo senha "#password" "St12345678"  
        And Clicar no Botão Cadastrar "Cadastrar"
        And Preencher o campo Nome completo "#name" "Alexi James" 
        And Preencher o campo email "#email" "Alexi@teste.com.br" 
        And Preencher o campo senha "#password" "St123456"               
        And Clicar no Botão Cadastrar "Cadastrar"
        When Validar Usuários Cadastrados "Magno Silva" "Alexi James"
        Then Excluir o Primeiro Usuario "removeUser1" "Excluir"


