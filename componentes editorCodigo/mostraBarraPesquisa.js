
    import { fechaMenuLateral } from "./fechaMenu.js";
    import { cabecalhoBarraPesquisa } from "../scriptEditorCodigo.js";
    import { elementoLogo } from "../scriptEditorCodigo.js";
    import { elementosIcones } from "../scriptEditorCodigo.js";



    export const mostraBarraDePesquisa = () => {

        fechaMenuLateral();
        
        cabecalhoBarraPesquisa.style.display = "flex";
        elementoLogo.style.display = "none";
        elementosIcones.style.display = "none";
    
    }