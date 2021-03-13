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



When('Validar Campo nome Está vazio {string}', (elemento) => {
    page.ValidaCampoVazio();
    page.ElementosClick(elemento)

});

Then('Validar Mensagem de Campo Nome é Obrigatorio {string}', (texto) => {
	page.MensagemObrigatorio(texto)
    
    
});

When('Validar Campo Email Está vazio {string}', (elemento) => {
    page.ValidaCampoVazio();
    page.ElementosClick(elemento)

});

Then('Validar Mensagem de Campo Email é Obrigatorio {string}', (texto) => {
	page.MensagemObrigatorio(texto)
    
    
});
