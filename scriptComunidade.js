
     /* Fazer uma verificacao no localStorage para saber se foi adicionado mais algum item  */
     const contadorVerificacao = () => {
         const arrayIndiceNavegador = JSON.parse(localStorage.getItem(('conteudo'))).length;
         while(true){
            if(arrayIndiceNavegador >= 0){
                capturaElementosNavegador();
                break;
            }
        }
     }
    
    const capturaElementosNavegador = () => {
        const packConteudo = JSON.parse(localStorage.getItem(('conteudo')));
        let i = 0;
        
        packConteudo.forEach(() => {
            
            const {conteudoProjeto} = packConteudo[i];
            const {descricaoProjeto} = packConteudo[i];
            const {tituloProjeto} = packConteudo[i];
            const {linguagemSelecionada} = packConteudo[i];
    
            i =+ 1;
            imprimeConteudoTela({conteudoProjeto, tituloProjeto, descricaoProjeto, linguagemSelecionada});
        });
        
                
    }
    
    const imprimeConteudoTela = ({conteudoProjeto, tituloProjeto, descricaoProjeto, linguagemSelecionada}) => {  
     
    const conteudoCarta = document.createElement('div');
    conteudoCarta.classList.add('divisaoCarta');
    conteudoCarta.innerHTML = `${conteudoProjeto} <div class="flexTituloLinguagem"> ${tituloProjeto} ${linguagemSelecionada}</div> <br> ${descricaoProjeto}`
    conteudoPagina.appendChild(conteudoCarta);
    }

    const conteudoPagina = document.querySelector('[data-conteudoPrincipal]');
    contadorVerificacao();
    
