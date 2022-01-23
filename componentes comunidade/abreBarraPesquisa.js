
    import { fechaMenu } from "./fechaMenuMobile.js";

    const inputBarraPesquisa = document.createElement('input');
    export const imgFecharBarraPesquisa = document.createElement('img');
    const divCabecalho = document.createElement('div');
    const cabecalhoBarraPesquisa = document.querySelector('[data-cabecalhoBarraPesquisa]');
    divCabecalho.classList.add('cabecalhoBarraPesquisa');
    divCabecalho.appendChild(inputBarraPesquisa);
    divCabecalho.appendChild(imgFecharBarraPesquisa);
    cabecalhoBarraPesquisa.appendChild(divCabecalho);
    imgFecharBarraPesquisa.classList.add('fecharBarraPesquisa');
    inputBarraPesquisa.placeholder = "Busque por algo";
    imgFecharBarraPesquisa.src = "img/iconeFechaMenu.png";
    inputBarraPesquisa.classList.add('barraPesquisaMobile');
    inputBarraPesquisa.style.display = "none";
    imgFecharBarraPesquisa.style.display = "none";


   export const abreBarraPesquisa = () => {

        fechaMenu();

        const cabecalhoOriginal = document.querySelector('[data-cabecalho]');
        cabecalhoOriginal.style.display = "none";
        divCabecalho.style.display = "flex";
        

        inputBarraPesquisa.style.display = "initial";
        imgFecharBarraPesquisa.style.display = "initial";

    }
