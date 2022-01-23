
    import { aplicaHighlight } from "./componentes editorCodigo/aplicaHighlight.js";
    import { mudaCor } from "./componentes editorCodigo/mudaCor.js";
    import { mostraMenuLateral } from "./componentes editorCodigo/mostraMenu.js";
    import { fechaMenuLateral } from "./componentes editorCodigo/fechaMenu.js";
    import { mostraBarraDePesquisa } from "./componentes editorCodigo/mostraBarraPesquisa.js";
    import { fechaBarraDePesquisa } from "./componentes editorCodigo/fechaBarraPesquisa.js";
    
    /* Adicionando Highligth JS */
    const botao = document.querySelector('.botaoHighlight');
    botao.addEventListener('click', aplicaHighlight);


    /* Colocando a cor de fundo do input */
    const corInput = document.querySelector('[data-color]');
    corInput.addEventListener('change', mudaCor);


    /* Criando elementos do menu lateral via DOM */
    const divMenuLateral = document.createElement('div');
    const divElementoAutor = document.createElement('div');
    const listaElementos = document.createElement('ul');
    const itensListaFirst = document.createElement('li');
    const itensListaSecond = document.createElement('li'); 
    const iconeEditorDeCodigo = document.createElement('img');
    const iconeComunidade = document.createElement('img');
    const iconeAutor = document.createElement('img');
    const tituloIconeEditorDeCodigo = document.createElement('h2');
    const tituloIconeComunidade = document.createElement('h2');
    const tituloIconeAutor = document.createElement('h2');

    const conteudoPagina = document.querySelector('[data-main]');
    

    /* Estruturando a div */
    divMenuLateral.appendChild(listaElementos);
    divMenuLateral.appendChild(divElementoAutor);
    divElementoAutor.appendChild(iconeAutor);
    divElementoAutor.appendChild(tituloIconeAutor);
    listaElementos.appendChild(itensListaFirst);
    listaElementos.appendChild(itensListaSecond);
    itensListaFirst.appendChild(iconeEditorDeCodigo);
    itensListaFirst.appendChild(tituloIconeEditorDeCodigo);
    itensListaSecond.appendChild(iconeComunidade);
    itensListaSecond.appendChild(tituloIconeComunidade);
    conteudoPagina.appendChild(divMenuLateral);


    /* Adicionando o titulo do menu lateral */
    tituloIconeEditorDeCodigo.textContent = `Editor de código`;
    tituloIconeComunidade.textContent = `Comunidade`;
    tituloIconeAutor.textContent = `William`;


    /* Adicionando imagens */
    iconeEditorDeCodigo.src = "img/iconeEditorDeCodigo.png";
    iconeComunidade.src = "img/IconeComunidade.png";
    iconeAutor.src = "img/williamAutor.png";


    /* Adicionando classes */
    divMenuLateral.classList.add('divMenuLateralLista');
    listaElementos.classList.add('menuLateralLista');
    iconeEditorDeCodigo.classList.add('menuLateralListaFilhos');
    iconeComunidade.classList.add('menuLateralListaFilhos');
    iconeAutor.classList.add('menuLateralAutor');
    itensListaFirst.classList.add('itensLista');
    itensListaSecond.classList.add('itensLista');
    iconeEditorDeCodigo.classList.add('iconeEditorDeCodigoStyle');
    iconeComunidade.classList.add('iconeComunidadeStyle');
    tituloIconeEditorDeCodigo.classList.add('tituloMenu');
    tituloIconeComunidade.classList.add('tituloMenu');
    divElementoAutor.classList.add('elementoAutor');
    tituloIconeAutor.classList.add('tituloMenu');

    /* Desativando display via DOM */
    divMenuLateral.style.display = "none";
    
    /* Funcao da logica do menu lateral */
    const menuLateralOptions = () => {
        if(menuLateral == undefined || menuLateral == false){ 
        mostraMenuLateral();
        menuLateral = true;
        }else{
        fechaMenuLateral();
        menuLateral = false;
        }
    }


    /* Atribuindo a funcao no icone menu */
    let menuLateral;
    const BotaoMenuMobile = document.querySelector('[data-menuMobile]');
    BotaoMenuMobile.addEventListener('click', menuLateralOptions);

    /* Abrir barra de pesquisa */
    const lupaPesquisa = document.querySelector('[data-lupaPesquisa]');
    lupaPesquisa.addEventListener('click', mostraBarraDePesquisa);

    export const cabecalhoBarraPesquisa = document.querySelector('[data-cabecalhoBarraPesquisa]');
    cabecalhoBarraPesquisa.style.display = "none";

    export const elementoLogo = document.querySelector('[data-elementoLogo]');
    export const elementosIcones = document.querySelector('[data-elementoPesquisa]');

    const iconeFechaBarraPesquisa = document.querySelector('[data-iconeFechaBarraPesquisa]');
    iconeFechaBarraPesquisa.addEventListener('click', fechaBarraDePesquisa);

    /* Mostrando menu lateral no tablet */
    const botaoMenuLateralTablet = document.querySelector('[data-menuTablet]');
    botaoMenuLateralTablet.addEventListener('click', menuLateralOptions);

    
    /* Adicionando dados ao servidor do navegador */

    const enviaDadosNavegador = () => { 

        const dadosNavegador = JSON.parse(localStorage.getItem('conteudo'))||[];
        const conteudoProjeto = document.querySelector('[data-conteudoCarta]').innerHTML;
        const tituloProjeto = document.querySelector('[data-tituloProjeto]').value;
        const descricaoProjeto = document.querySelector('[data-descricaoProjeto]').value;
        const linguagemSelecionada = document.querySelector('[data-selecaoLinguagem]').value;
        const valorBackgroundEditorCodigo = document.querySelector('[data-background]').style.backgroundColor;
        
        const dados = {
            conteudoProjeto,
            tituloProjeto,
            descricaoProjeto,
            linguagemSelecionada,
            valorBackgroundEditorCodigo
        }

        const dadosNavegadorAtualizado = [...dadosNavegador, dados];

        localStorage.setItem('conteudo', JSON.stringify(dadosNavegadorAtualizado));
    }

    const botaoSalvarProjeto = document.querySelector('[data-salvarProjeto]');
    botaoSalvarProjeto.addEventListener('click', enviaDadosNavegador);



