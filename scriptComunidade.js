  
    const capturaElementosNavegador = () => {
        const packConteudo = JSON.parse(localStorage.getItem(('conteudo')));
        let i = 0;
        
        packConteudo.forEach(() => {
            
            const {conteudoProjeto} = packConteudo[i];
            const {descricaoProjeto} = packConteudo[i];
            const {tituloProjeto} = packConteudo[i];
            const {linguagemSelecionada} = packConteudo[i];
            const {valorBackgroundEditorCodigo} = packConteudo[i];
            
            imprimeConteudoTela({conteudoProjeto, tituloProjeto, descricaoProjeto, linguagemSelecionada, valorBackgroundEditorCodigo});
            i =+ 1;
        });           
    }
    
    const imprimeConteudoTela = ({conteudoProjeto, tituloProjeto, descricaoProjeto, linguagemSelecionada, valorBackgroundEditorCodigo}) => {  
        
        const conteudoEncapsulamento = document.createElement('div');
        conteudoEncapsulamento.classList.add('conteudoEncapsulamento');
        const conteudoCarta = document.createElement('div');
        conteudoCarta.classList.add('conteudoCodigo');
        const conteudoDescricao = document.createElement('div');
        conteudoDescricao.classList.add('conteudoDescricao');
        const divConteudoCartaBackground = document.createElement('div');
        divConteudoCartaBackground.classList.add('backgroundConteudoCarta');
        

        conteudoCarta.innerHTML = conteudoProjeto;
        conteudoDescricao.innerHTML = `<div class="flexTituloLinguagem"><div class="tituloProjeto">${tituloProjeto}</div> 
        <div class="linguagemProjeto">${linguagemSelecionada}</div></div> <br> ${descricaoProjeto}`

        divConteudoCartaBackground.appendChild(conteudoCarta);
        conteudoEncapsulamento.appendChild(divConteudoCartaBackground);
        conteudoEncapsulamento.appendChild(conteudoDescricao);
        conteudoPagina.appendChild(conteudoEncapsulamento);
        
        conteudoCarta.querySelector('code').contentEditable = "false";
        divConteudoCartaBackground.style.backgroundColor = valorBackgroundEditorCodigo;

    }

    const conteudoPagina = document.querySelector('[data-conteudoPrincipal]');
    capturaElementosNavegador();
