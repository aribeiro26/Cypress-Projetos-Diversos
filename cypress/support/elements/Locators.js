const locators ={
  
    Esperar(tempo){
        cy.wait(tempo)
    },
    Screenshot(nome, tempo){
        cy.screenshot(''+nome+'',{delay: tempo})
    },
    ScroolPage(Elemento){
        cy.get(''+Elemento+'')
        .scrollIntoView({ offset: { top: 150, left: 0 } })
    },    
    ValidaTexto(chave,ref,texto,classe,tag,text,clase,id,eq,valor){
        if(chave == 'xpath'){  
        cy.xpath('//'+ref+'[text()=\''+texto+'\' or @class=\''+classe+'\']/../'+tag+'[text()=\''+text+'\' or @class=\''+clase+'\' or @id=\''+id+'\']',{timeout:2000})
        .should(''+eq+'',valor)
        }else if(chave == 'Xpath'){
            cy.xpath(''+ref+'',{timeout:2000}).should(''+texto+'',classe)
        }else if(chave == 'get'){
            cy.get(''+ref+'',{timeout:2000}).should(''+texto+'',classe)        
        }else{
            console.log('Sem definição de Parametros')
        }
    },
    Click(chave,ref,texto,classe,tag,text,clase,id,eq,valor,click){
        if(chave =='Xpath'){
            cy.xpath(''+ref+'',{timeout: 4000}).should(''+texto+'',classe).click(classe)
        }else if(chave == 'xpath'){
            cy.xpath('//'+ref+'[text()=\''+texto+'\' or @class=\''+classe+'\']/../'+tag+'[text()=\''+text+'\' or @class=\''+clase+'\' or @id=\''+id+'\']',{timeout:2000})
            .should(''+eq+'',valor).click(click)
        }else if(chave == 'get'){             
            cy.get(''+ref+'',{timeout: 4000}).should(''+texto+'',classe).click(tag)         
        }else{
            console.log('Sem definição de Parametros')
        }
    },
    Escrever(chave,ref,texto,classe,tag,text,clase,id,eq,valor){
        if(chave =='Xpath'){
            cy.xpath(''+ref+'',{timeout: 4000}).should(''+texto+'',classe).type(''+tag+'')
        }else if(chave == 'xpath'){
            cy.xpath('//'+ref+'[text()=\''+texto+'\' or @class=\''+classe+'\']/../'+tag+'[text()=\''+text+'\' or @class=\''+clase+'\' or @id=\''+id+'\']',{timeout:2000})
            .should(''+eq+'',valor).type(click)
        }else if(chave == 'get'){             
            cy.get(''+ref+'',{timeout: 4000}).should(''+texto+'',classe).type(''+tag+'')         
        }else{
            console.log('Sem definição de Parametros')
        }
    },
    
}
    


export default locators;