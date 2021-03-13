/// <reference types="Cypress" />

class FuncoesTeste {

    criarTeste(chave,elemento,validacao,texto,acao){
        return{
            TipoChave: chave,
            elemento: elemento,
            texto: texto,
            validacao: validacao,
            acao: acao,            
            screenShot(titulo,tempo){
                cy.screenshot(''+titulo+'',{delay: tempo});
        
            },
            Iframe(iframe,Body){
                if(this.TipoChave == 'get'){
                    const getIframeDocument = () =>{
                        return cy
                        .get(''+iframe+'')
                        .its('0.contentDocument').should('exist')
                    }
                    const getIframeBody = () =>{
                        return getIframeDocument()
                        .its('body').should('not.be.undefined')
                        .then(cy.wrap)
                    }
                }else if(this.TipoChave == 'xpath'){
                    const getIframeDocument = () =>{
                        return cy
                        .xpath(''+iframe+'')
                        .its('0.contentDocument').should('exist')
                    }
                    const getIframeBody = () =>{
                        return getIframeDocument()
                        .its('body').should('not.be.undefined')
                        .then(cy.wrap)
                    }

                }else{
                    console.log('Parametros Não definidos')
                }

            },
            //npm i cypress-waitfor
            WaitFor(element,timeout,tries){
                cy.waitFor(''+element+'', {
                    timeout: timeout, // The time in ms to poll for changes
                    tries: tries,   // How many times to try before failing
                                  // 300 tries at 200ms timeout = 1min
                  });
            },
            Esperar(tempo){
                cy.wait(tempo)
            },
            ScrollPage(Elemento,top,left){
                cy.get(''+Elemento+'')
                .scrollIntoView({ offset: { top: top, left: left } })
            },
            ValidaTexto(){
                if(this.TipoChave == 'get'){
                 cy.get(''+elemento+'',{timeout:2000})
                 .should(''+validacao+'', texto);
                }else if(this.TipoChave == 'xpath'){
                    cy.xpath(''+elemento+'',{timeout:2000})
                    .should(''+validacao+'', texto)

                }else{
                    console.log('Paramentros Não Definidos')
                }

             },
            Click(){
                if(this.TipoChave == 'get'){
                    cy.get(''+elemento+'',{timeout:2000}).
                    should(''+validacao+'', texto).click(acao);
                }else if(this.TipoChave == 'xpath'){
                    cy.xpath(''+elemento+'',{timeout:2000})
                    .should(''+validacao+'', texto).click(acao);

                }else{
                    console.log('Paramentros Não Definidos');
                }

            },
            Escrever(){
                if(this.TipoChave == 'get'){
                    cy.get(''+elemento+'',{timeout: 2000}).clear({delay: 200}) 
                    cy.focused().clear()
                    cy.get(''+elemento+'',{timeout:2000}).click(validacao).clear()
                    .type(''+texto+'');
                }else if(this.TipoChave == 'xpath'){
                    cy.xpath(''+elemento+'',{timeout: 2000}).clear({delay: 200}) 
                    cy.focused().clear()
                    cy.xpath(''+elemento+'',{timeout:2000}).click(validacao).clear()
                    .type(''+texto+'');

                }else{
                    console.log('Paramentros Não Definidos');
                }

            },
            ToastMensage(text,mensagem){
                if(this.TipoChave == 'get'){
                    cy.get(''+elemento+'',{timeout: 2000}).then(MSG => {
                        if (MSG.text().includes(text)) {
            
                            cy.get(''+elemento+'\']').should(''+validacao+'', mensagem)
                            cy.screenshot('Usuario criado com Sucesso')
                                
                        }else{   

                            cy.get(''+elemento+'',{timeout: 6000})
                            .should(''+validacao+'',mensagem)
                            cy.screenshot('Usuario Já Existe')
                        }
                    })
                }else if(this.TipoChave == 'xpath'){
                    cy.xpath(''+elemento+'',{timeout: 2000}).then(MSG => {
                        if (MSG.text().includes(text)) {

                            cy.xpath(''+elemento+'\']').should(''+validacao+'', mensagem)
                            cy.screenshot('Usuario criado com Sucesso')
                            
                        }else{

                            cy.xpath(''+elemento+'',{timeout: 6000})
                            .should(''+validacao+'',mensagem)
                            cy.screenshot('Usuario Já Existe')                       

                        }
                    })
                }else{

                    console.log('Paramentros Não Definidos');
                }
            },
            Decisao(text,text2,elem1,mensagem,mensage){
                if(this.TipoChave == 'get'){
                    cy.get(''+elemento+'').then(SMS => {
                        if (SMS.text().includes(''+text+'')) {
    
                            cy.get(''+elemento+'',{timeout: 2000}).should(''+validacao+'', text).click(acao)
                            cy.get(''+elem1+'',{timeout: 6000})
                            .should(''+validacao+'', mensagem)
                            
    
                        }else{                 
                            cy.get(''+elemento+'',{timeout: 2000}).should(''+validacao+'', text2).click()
                            cy.get(''+elem1+'',{timeout: 6000})
                            .should(''+validacao+'', mensage)
                        }
                    })
                }else if(this.TipoChave == 'xpath'){
                    cy.xpath(''+elemento+'').then(SMS => {
                        if (SMS.text().includes(''+text+'')) {
    
                            cy.xpath(''+elemento+'',{timeout: 2000}).should(''+validacao+'', text).click(acao)
                            cy.xpath(''+elem1+'',{timeout: 6000})
                            .should(''+validacao+'', mensagem)
                            
    
                        }else{                 
                            cy.xpath(''+elemento+'',{timeout: 2000}).should(''+validacao+'', text2).click()
                            cy.xpath(''+elem1+'',{timeout: 6000})
                            .should(''+validacao+'', mensage)
                        }
                    })

                }else{

                    console.log('Paramentros Não Definidos');
                }
             
            }  

        }
    }   
    
}

export default FuncoesTeste;