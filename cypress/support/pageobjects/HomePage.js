/// <reference types="Cypress" />

import loc from '../elements/Locators'
import FuncoesElementos from '../elements/FuncoesElementos'
const fuc = new FuncoesElementos
const url = Cypress.config("baseUrl")

class HomePage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
        fuc.criarTeste().screenShot('Alex',200)
        fuc.criarTeste().screenShot('Tela acessada com Sucesso',200)
        
    }

    ValidaLayout(){

        fuc.criarTeste('xpath','//label[text()="Nome"]','have.text','Nome')
        .ValidaTexto();
        fuc.criarTeste('xpath','//label[text()="E-mail"]','have.text','E-mail')
        .ValidaTexto();
        fuc.criarTeste('xpath','//label[text()="Senha"]','have.text','Senha')
        .ValidaTexto();
        fuc.criarTeste('xpath','//h1[text()="Cadastro de usuários"]','have.text','Cadastro de usuários')
        .ValidaTexto();
        fuc.criarTeste('xpath','//p[contains(text(),"Para")]','have.text','Para realizar o cadastro de um usuário, insira dados válidos no formulário e acione a opção Cadastrar :)')
        .ValidaTexto()
        fuc.criarTeste().screenShot('Label Validada com sucesso',200)
    }

    ValidaCampoVazio(){
        
        fuc.criarTeste('get','#name','be.empty')
        .ValidaTexto();
        fuc.criarTeste('get','#email','be.empty')
        .ValidaTexto();
        fuc.criarTeste('get','#password','be.empty')
        fuc.criarTeste().screenShot('Campos Estão vazios',200)
    }

    AcionarAçãoTeclado(elemento){
        
        fuc.criarTeste('get',''+elemento+'','','{enter}')
       .Escrever();
       fuc.criarTeste().screenShot('Mensagem validada do campo',200)
    }

    ValidarTexto(texto){
        
        fuc.criarTeste('xpath','//*[text()=\''+texto+'\']','have.text',''+texto+'')
        .ValidaTexto();
        fuc.criarTeste().screenShot('Texto Validado',200)
    }

    Escrever(elemento,texto){
        
        fuc.criarTeste('get',''+elemento+'','',''+texto+'')
       .Escrever();
       fuc.criarTeste().screenShot('Campo texto Preenchido',200)
    }
    Clicar(texto){
        fuc.criarTeste('xpath','//*[text()=\''+texto+'\']','be.visible')
        .Click();
        fuc.criarTeste().screenShot('Usuário Cadastrado',200)

    }
    ExcluirUsuario(id,texto){
        fuc.criarTeste('xpath','//*[@id=\''+id+'\' and text()=\''+texto+'\']','be.visible')
        .Click();
        fuc.criarTeste().screenShot('Usuário Excluido',200)
    }

}

    

export default HomePage;