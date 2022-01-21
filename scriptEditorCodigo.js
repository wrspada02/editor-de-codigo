
/*     import capturaElementosNavegador from "./scriptComunidade.js";
 */
    /* Adicionando Highligth JS */

    const linguagem = document.querySelector('.selecaoLinguagem');
    const areaDoCodigo = document.querySelector('.editorDeTextoCaixa');
    const botao = document.querySelector('.botaoHighlight');

    const aplicaHighlight = () => {
        const codigo = areaDoCodigo.innerText;
        areaDoCodigo.innerHTML = `<code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código"></code>`;
        areaDoCodigo.querySelector('code').textContent = codigo;
        hljs.highlightElement(areaDoCodigo.querySelector('code'));
    }

    botao.addEventListener('click', aplicaHighlight);


    /* Colocando a cor de fundo do input */

    const mudaCor = () => {

        corDeFundo.style.backgroundColor = corInput.value;
        
    }
    
    const corDeFundo = document.querySelector('[data-background]');
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
    

    /* Mostrando o menu lateral */
    const mostraMenuLateral = () => {

    const iconeMenu = document.querySelector('[data-menuMobile]');
    iconeMenu.src = "img/iconeFechaMenu.png";
    const menuMobile = document.querySelector(['.divMenuLateralLista']);
    menuMobile.style.display = "initial";

    /* Tablet */
    botaoMenuLateralTablet.src = "img/iconeFechaMenu.png";

    }


    /* Fechando o menu lateral */
    const fechaMenuLateral = () => {

        const iconeMenu = document.querySelector('[data-menuMobile]');
        iconeMenu.src = "img/Menu.png";

        const menuMobile = document.querySelector(['.divMenuLateralLista']);
        menuMobile.style.display = "none";

        /* Tablet */
        botaoMenuLateralTablet.src = "img/Menu.png";

    }


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


    /* Funcao de mostrar barra de pesquisa */

     const mostraBarraDePesquisa = () => {

        fechaMenuLateral();
        
        const elementoLogo = document.querySelector('[data-elementoLogo]');
        const elementoPesquisa = document.querySelector('[data-elementoPesquisa]'); 
        const lupaPesquisar = document.querySelector('[data-lupaPesquisa]');
        const iconeMenu = document.querySelector('[data-fecharBarraPesquisaMobile]');

        elementoLogo.style.display = "none";
        iconeMenu.style.display = "none";
        lupaPesquisar.style.display = "none";
        barraDePesquisaMobile.style.display = "initial"
        fecharBarraDePesquisaMobile.style.display = "initial";

        elementoPesquisa.appendChild(barraDePesquisaMobile);
        elementoPesquisa.appendChild(fecharBarraDePesquisaMobile);
        elementoPesquisa.classList.add('itensListaMobile');
        barraDePesquisaMobile.classList.add('barraDePesquisaMobile');
        barraDePesquisaMobile.classList.add('itensFilhosLista');
        fecharBarraDePesquisaMobile.classList.add('itensFilhosLista');
        
        elementoPesquisa.style.width = "100%";
        barraDePesquisaMobile.placeholder = "Busque por algo";
    }


    /* Funcao de fechar barra de pesquisa */

    const fechaBarraDePesquisa = () => {
        
        const barraDePesquisaMobile = document.querySelector('.barraDePesquisaMobile');
        const elementoLogo = document.querySelector('[data-elementoLogo]');
        const lupaPesquisar = document.querySelector('[data-lupaPesquisa]');
        const iconeMenu = document.querySelector('[data-fecharBarraPesquisaMobile]');

        elementoLogo.style.display = "initial";
        lupaPesquisar.style.display = "initial";
        iconeMenu.style.display = "initial";
        barraDePesquisaMobile.style.display = "none";
        fecharBarraDePesquisaMobile.style.display = "none";
    }


    /* Criando elementos da barra de pesquisa e estruturando a logica */
    const barraDePesquisaMobile = document.createElement('input');
    barraDePesquisaMobile.style.display = "none";
        
    const fecharBarraDePesquisaMobile = document.createElement('img');
    fecharBarraDePesquisaMobile.src = "img/iconeFechaMenu.png";
    fecharBarraDePesquisaMobile.style.display = "none";
    fecharBarraDePesquisaMobile.classList.add('fecharBarraPesquisa');


    /* Abrir barra de pesquisa */
    const lupaPesquisa = document.querySelector('[data-lupaPesquisa]');
    lupaPesquisa.addEventListener('click', mostraBarraDePesquisa);


    /* Fechar barra de pesquisa */
    fecharBarraDePesquisaMobile.addEventListener('click', fechaBarraDePesquisa);


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



