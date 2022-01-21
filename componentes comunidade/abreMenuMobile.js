
    import {botaoMenuMobile} from "../scriptComunidade.js";
    import {divMenu} from "../scriptComunidade.js";
    
    export const abreMenuMobile = () => {
        botaoMenuMobile.src = "img/iconeFechaMenu.png";
        divMenu.style.display = "initial";
    }