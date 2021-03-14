Feature: Realizar Testes da Interface de Cadastro de Usuarios da Stefanini

    Background: Acessando o Site

    Given Acessar o site Prova Stefanini
    
    Scenario: Validar os campos vazios - Cenario 1
        
        When Validar o Layout      
        Then Validar que os campos Input estao vazios

    Scenario Outline: Validar Mensagem de Campos Obrigatorios - Nome - Cenario 2

        And Preencher o campo email "<email>" "<Inputemail>"
        And Preencher o campo senha "<pass>" "<Inputsenha>"
        When Clicar no botão Cadastrar "<Botao>"
        Then Validar Mensagem de Campo Nome é Obrigatorio "<MsgNome>"

        Examples:
        | pass     | email | Inputemail        | Inputsenha| Botao    | MsgNome                     |
        | #password| #email| magno@teste.com.br| St123456  | Cadastrar| O campo Nome é obrigatório. |

    Scenario Outline: Validar Mensagem de Campos Obrigatorios - Email - Cenario 3

        And Preencher o campo nome "<nome>" "<Inputnome>"
        And Preencher o campo senha "<pass>" "<Inputsenha>"
        When Clicar no botão Cadastrar "<Botao>"
        Then Validar Mensagem de Campo Email é Obrigatorio "<Msgemail>"
        
            Examples:
           | pass     | nome | Inputnome  | Inputsenha| Botao    | Msgemail                       |
           | #password| #name| Magno Silva| St123456  | Cadastrar| O campo E-mail é obrigatório.  |

    Scenario Outline: Validar Mensagem de Campos Obrigatorios - Senha - Cenario 4

        And Preencher o campo nome "<nome>" "<Inputnome>"
        And Preencher o campo email "<email>" "<Inputemail>"
        When Clicar no botão Cadastrar "<Botao>"
        Then Validar Mensagem de Campo Senha é Obrigatorio "<Msgsenha>"
        
            Examples:
           | email     | nome | Inputnome  | Inputemail           | Botao    | Msgsenha                       |
           | #email    | #name| Magno Silva| magno@teste.com.br   | Cadastrar| O campo Senha é obrigatório.   |

    Scenario Outline: Validar Mensagem de Campos Obrigatorios não preenchido  - Cenario 5

        When Clicar no botão Cadastrar "<Botao>"                   
        Then Validar Mensagens de Alerta dos campos "<MsgNome>" "<MsgEmail>" "<MsgSenha>"

        Examples:
        | MsgNome                    | MsgEmail                    | MsgSenha                     | Botao    |
        | O campo Nome é obrigatório.|O campo E-mail é obrigatório.| O campo Senha é obrigatório. | Cadastrar|

    Scenario Outline: Validar Mensagem de Campo Nome Parcialmente Preenchido - Nome Parcial  - Cenario 6

        And Preencher o campo Nome incompleto "<nome>" "<Inputnome>" 
        And Preencher o campo email "<email>" "<Inputemail>" 
        And Preencher o campo senha "<pass>" "<Inputsenha>"                   
        When Clicar no botão Cadastrar "Cadastrar" 
        Then Validar Mensagens de Alerta do campo Nome "<MsgNome>"

        Examples:
        | pass     | email | nome | Inputnome| Inputemail        | Inputsenha| MsgNome                            |
        | #password| #email| #name| Magno    | magno@teste.com.br| St123456  | Por favor, insira um nome completo.|

    Scenario Outline: Validar Mensagem de Campo Email Incorreto - Email Inválido - Cenario 7

        And Preencher o campo Nome completo "<nome>" "<Inputnome>" 
        And Preencher o campo email com email inválido "<email>" "<Inputemail>" 
        And Preencher o campo senha "<pass>" "<Inputsenha>"                   
        When Clicar no botão Cadastrar "<Botao>" 
        Then Validar Mensagens de Alerta do campo Email "<MsgEmail>"

        Examples:
        | pass     | Botao     | email | nome | Inputnome  | Inputemail        | Inputsenha| MsgEmail                           |
        | #password| Cadastrar | #email| #name| Magno Silva| magno.teste.com.br| St123456  | Por favor, insira um e-mail válido.|

    Scenario Outline: Validar Mensagem do Campo Senha com quantidade de caracter Inválida - Senha Inválido - Cenario 8

        And Preencher o campo Nome completo "<nome>" "<Inputnome>" 
        And Preencher o campo email "<email>" "<Inputemail>" 
        And Preencher o campo senha com quantidade de caracteres inválida "<pass>" "<Inputsenha>"                   
        When Clicar no botão Cadastrar "<Botao>" 
        Then Validar Mensagens de Alerta do campo Senha "<MsgSenha>"

        Examples:
        | pass     | Botao     | email | nome | Inputnome  | Inputemail        | Inputsenha| MsgSenha                                  |
        | #password| Cadastrar | #email| #name| Magno Silva| magno@teste.com.br| St123     | A senha deve conter ao menos 8 caracteres.|

    Scenario: Cadastrar Usuario - Cenario 9

        And Preencher o campo Nome completo "#name" "Magno Silva" 
        And Preencher o campo email "#email" "magno@teste.com.br" 
        And Preencher o campo senha "#password" "St12345678"                   
        When Clicar no Botão Cadastrar "Cadastrar"
        Then Validar Usuário Cadastrado "Magno Silva" 

    Scenario: Cadastrar Usuarios - Cadastrar Dois Usuários - Cenario 10
        
        And Preencher o campo Nome completo "#name" "Magno Silva" 
        And Preencher o campo email "#email" "magno@teste.com.br" 
        And Preencher o campo senha "#password" "St12345678"  
        And Clicar no Botão Cadastrar "Cadastrar"
        And Preencher o campo Nome completo "#name" "Alexi James" 
        And Preencher o campo email "#email" "Alexi@teste.com.br" 
        And Preencher o campo senha "#password" "St123456"               
        When Clicar no Botão Cadastrar "Cadastrar"
        Then Validar Usuários Cadastrados "Magno Silva" "Alexi James" 

    Scenario: Excluir o Primeiro Usuario Cadastrado - Excluir Usuário - Cenario 11
        
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


