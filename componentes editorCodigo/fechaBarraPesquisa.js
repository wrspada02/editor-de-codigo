

    import { elementoLogo } from "../scriptEditorCodigo.js"
    import { elementosIcones } from "../scriptEditorCodigo.js"
    import { cabecalhoBarraPesquisa } from "../scriptEditorCodigo.js"


    export const fechaBarraDePesquisa = () => {
        
        cabecalhoBarraPesquisa.style.display = "none";
        elementoLogo.style.display = "initial";
        elementosIcones.style.display = "flex";

    }