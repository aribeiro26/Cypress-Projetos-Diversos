/* global Given, Then, When */

import ComprasPage from '../pageobjects/ComprasPage'
const cmp = new ComprasPage

Given("Acesso o site Automation Pratice", () => {
    cmp.acessarSite();
})

When("Acesso a pagina realizo a busca do Produto", () => {
    cmp.procurar();
})

And("Adiciono o produto no carrinho", () => {
    cmp.addtocart();
    

})

Then("Valido que o produto foi adicionado ao carinho", () => {
    cmp.checkcart();
  
})