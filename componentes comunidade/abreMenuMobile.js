
    import {botaoMenuMobile} from "../scriptComunidade.js";
    import {divMenu} from "../scriptComunidade.js";
    import { menuLateralTablet } from "../scriptComunidade.js";
    
    export const abreMenu = () => {

        botaoMenuMobile.src = "img/iconeFechaMenu.png";
        divMenu.style.display = "initial";

        /* Tablet */

        menuLateralTablet.src = "img/iconeFechaMenu.png";
    }