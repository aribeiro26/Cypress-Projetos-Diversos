/* global Given, Then, When */

import { Then } from "cypress-cucumber-preprocessor/steps";
import { When } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../pageobjects/HomePage'
const page = new HomePage

Given(/^Acessar o site Prova Stefanini$/, () => {
	page.acessarSite();
});

When(/^Validar o Layout$/, () => {
	page.ValidaLayout();
});

Then(/^Validar que os campos Input estao vazios$/, () => {
	page.ValidaCampoVazio();
});

And('Preencher o campo email {string} {string}', (var1,var2) => {
    page.Escrever(var1,var2)
	
});

And('Preencher o campo senha {string} {string}', (var1,var2) => {
	page.Escrever(var1,var2)
	
});

When('Clicar no botão Cadastrar {string}', (botao) => {
	page.Clicar(botao)

});

Then('Validar Mensagem de Campo Nome é Obrigatorio {string}', (texto) => {
	page.ValidarTexto(texto)
    
    
});

And('Preencher o campo nome {string} {string}', (var1,var2) => {
    page.Escrever(var1,var2)
	
});

And('Preencher o campo senha {string} {string}', (var1,var2) => {
	page.Escrever(var1,var2)
	
});

When('Clicar no botão Cadastrar {string}', (botao) => {
	page.Clicar(botao)

});

Then('Validar Mensagem de Campo Email é Obrigatorio {string}', (texto) => {
	page.ValidarTexto(texto)
    
    
});
And('Preencher o campo nome {string} {string}', (var1,var2) => {
    page.Escrever(var1,var2)
	
});

And('Preencher o campo email {string} {string}', (var1,var2) => {
	page.Escrever(var1,var2)
	
});

When('Clicar no botão Cadastrar {string}', (botao) => {
	page.Clicar(botao)

});

Then('Validar Mensagem de Campo Senha é Obrigatorio {string}', (texto) => {
	page.ValidarTexto(texto)
    
    
});

When('Clicar no botão Cadastrar {string}', (botao) => {
	page.Clicar(botao)
});


Then('Validar Mensagens de Alerta dos campos {string} {string} {string}', (var1,var2,var3) => {
	page.ValidarTexto(var1)
	page.ValidarTexto(var2)
	page.ValidarTexto(var3)    
    
});

And('Preencher o campo Nome incompleto {string} {string}', (var1,var2) => {
    page.Escrever(var1,var2)
	
});

And('Preencher o campo email {string} {string}', (var1,var2) => {
	page.Escrever(var1,var2)
    
    
});

And('Preencher o campo senha {string} {string}', (var1,var2) => {
    page.Escrever(var1,var2)

});

When('Clicar no botão Cadastrar {string}', (botao) => {
	page.Clicar(botao)
    
    
});
Then('Validar Mensagens de Alerta do campo Nome {string}', (Msg) => {
    page.ValidarTexto(Msg)

});

And('Preencher o campo Nome completo {string} {string}', (var1,var2) => {
    page.Escrever(var1,var2)
	
});

And('Preencher o campo email com email inválido {string} {string}', (var1,var2) => {
	page.Escrever(var1,var2)
    
    
});

And('Preencher o campo senha {string} {string}', (var1,var2) => {
    page.Escrever(var1,var2)

});

When('Clicar no botão Cadastrar {string}', (botao) => {
	page.Clicar(botao)
    
    
});
Then('Validar Mensagens de Alerta do campo Email {string}', (Msg) => {
    page.ValidarTexto(Msg)

});

And('Preencher o campo Nome completo {string} {string}', (var1,var2) => {
    page.Escrever(var1,var2)
	
});

And('Preencher o campo email {string} {string}', (var1,var2) => {
	page.Escrever(var1,var2)
    
    
});

And('Preencher o campo senha com quantidade de caracteres inválida {string} {string}', (var1,var2) => {
    page.Escrever(var1,var2)

});

When('Clicar no Botão Cadastrar {string}', (botao) => {
	page.Clicar(botao)
    
    
});
Then('Validar Mensagens de Alerta do campo Senha {string}', (Msg) => {
    page.ValidarTexto(Msg)

});

And('Preencher o campo Nome completo {string} {string}', (var1,var2) => {
    page.Escrever(var1,var2)
	
});

And('Preencher o campo email {string} {string}', (var1,var2) => {
	page.Escrever(var1,var2)
    
    
});

And('Preencher o campo senha {string} {string}', (var1,var2) => {
    page.Escrever(var1,var2)

});

When('Clicar no Botão Cadastrar {string}', (var1) => {
	page.Clicar(var1)
    
    
});
Then('Validar Usuário Cadastrado {string}', (User) => {
    page.ValidarTexto(User)

});

And('Preencher o campo Nome completo {string} {string}', (var1,var2) => {
    page.Escrever(var1,var2)
	
});

And('Preencher o campo email {string} {string}', (var1,var2) => {
	page.Escrever(var1,var2)
    
    
});

And('Preencher o campo senha {string} {string}', (var1,var2) => {
    page.Escrever(var1,var2)

});

And('Clicar no Botão Cadastrar {string}', (var1) => {
	page.Clicar(var1)
	
});

And('Preencher o campo Nome completo {string} {string}', (var1,var2) => {
    page.Escrever(var1,var2)
	
});

And('Preencher o campo email {string} {string}', (var1,var2) => {
	page.Escrever(var1,var2)
    
    
});

And('Preencher o campo senha {string} {string}', (var1,var2) => {
    page.Escrever(var1,var2)

});

When('Clicar no Botão Cadastrar {string}', (var1) => {
	page.Clicar(var1)
    
    
});
Then('Validar Usuários Cadastrados {string} {string}', (User,user) => {
    page.ValidarTexto(User)
	page.ValidarTexto(user)

});

And('Preencher o campo Nome completo {string} {string}', (var1,var2) => {
    page.Escrever(var1,var2)
	
});

And('Preencher o campo email {string} {string}', (var1,var2) => {
	page.Escrever(var1,var2)
    
    
});

And('Preencher o campo senha {string} {string}', (var1,var2) => {
    page.Escrever(var1,var2)

});

And('Clicar no Botão Cadastrar {string}', (var1) => {
	page.Clicar(var1)
	
});

And('Preencher o campo Nome completo {string} {string}', (var1,var2) => {
    page.Escrever(var1,var2)
	
});

And('Preencher o campo email {string} {string}', (var1,var2) => {
	page.Escrever(var1,var2)
    
    
});

And('Preencher o campo senha {string} {string}', (var1,var2) => {
    page.Escrever(var1,var2)

});

And('Clicar no Botão Cadastrar {string}', (var1) => {
	page.Clicar(var1)
	
});

When('Validar Usuários Cadastrados {string} {string}', (User,user) => {
	page.ValidarTexto(User)
	page.ValidarTexto(user)
    
    
});

Then('Excluir o Primeiro Usuario {string} {string}', (excluir,user) => {
    page.ExcluirUsuario(excluir,user)

});

