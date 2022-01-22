

    export const fechaBarraPesquisa = () => {

    const cabecalhoOriginal = document.querySelector('[data-cabecalho]');
    const cabecalhoBarraPesquisa = document.querySelector('.cabecalhoBarraPesquisa');

    cabecalhoBarraPesquisa.style.display = "none";
    cabecalhoOriginal.style.display = "initial";

    }