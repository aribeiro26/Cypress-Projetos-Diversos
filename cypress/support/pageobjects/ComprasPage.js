/// <reference types="Cypress" />

import loc from '../elements/Locators'
const url = Cypress.config("baseUrl")

class ComprasPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
        loc.Screenshot('Acesso ao Site Realizado', 200)
    }

    // Realiza a busca do produto
    procurar() {
        loc.Escrever('Xpath','//*[@class="search_query form-control ac_input"]','be.visible','','Faded Short Sleeve')
        loc.Click('Xpath','//*[@class="btn btn-default button-search"]','be.visible','',)
        loc.Screenshot('Busca Realizada com Sucesso', 300)
    }
  
    // Adiciona o Produto no carrinho 
    addtocart() {
        loc.Click('Xpath','//*[@class="button ajax_add_to_cart_button btn btn-default"]','be.visible','',)
        loc.Esperar(1500)
        loc.Click('Xpath','//*[@class="btn btn-default button button-medium"]','be.visible','',)
        loc.Screenshot('Produto adicionado ao carrinho com Sucesso', 200)
    }

    // Verifica os produtos que estão no carrinho
    checkcart(){
        loc.ValidaTexto('Xpath','//h1[@id="cart_title"]','have.text','Shopping-cart summary\n\t\t\tYour shopping cart contains:\n\t\t\t1 Product\n\t\t\n\t')
        loc.ValidaTexto('Xpath','//a[text()="Faded Short Sleeve T-shirts"]','have.text','Faded Short Sleeve T-shirts')
        loc.ValidaTexto('Xpath','//*[@class="cart_quantity_input form-control grey" and @value="1"]','have.value','1')
        loc.Screenshot('Produto Verificado e Consta no Carrinho', 400)
    }
}

export default ComprasPage;