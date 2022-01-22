    
    import {botaoMenuMobile} from "../scriptComunidade.js";
    import {divMenu} from "../scriptComunidade.js";
    import { menuLateralTablet } from "../scriptComunidade.js";

    export const fechaMenu = () => {

        botaoMenuMobile.src = "img/Menu.png";
        divMenu.style.display = "none";

        /* Tablet */

        menuLateralTablet.src = "img/Menu.png"
    }