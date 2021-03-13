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

    ElementosClick(elemento){
        
        fuc.criarTeste('get',''+elemento+'','','{enter}')
       .Escrever();
    }

    MensagemObrigatorio(texto){
        
        fuc.criarTeste('xpath','//*[text()=\''+texto+'\']','have.text',''+texto+'')
        .ValidaTexto();
    }

    EscreverNomes(elemento,texto){
        
        fuc.criarTeste('get',''+elemento+'','',''+texto+'')
       .Escrever();
    }
    button(texto){
        fuc.criarTeste('xpath','//*[text()=\''+texto+'\']','be.visible')
        .Click();

    }

}

    

export default HomePage;