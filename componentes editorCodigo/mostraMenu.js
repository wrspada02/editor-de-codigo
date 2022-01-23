

    const botaoMenuLateralTablet = document.querySelector('[data-menuTablet]');

    export const mostraMenuLateral = () => {

            const iconeMenu = document.querySelector('[data-menuMobile]');
            iconeMenu.src = "img/iconeFechaMenu.png";
            const menuMobile = document.querySelector(['.divMenuLateralLista']);
            menuMobile.style.display = "initial";
        
            /* Tablet */
            botaoMenuLateralTablet.src = "img/iconeFechaMenu.png";
        
            }