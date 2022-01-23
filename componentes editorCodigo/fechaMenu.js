
    const botaoMenuLateralTablet = document.querySelector('[data-menuTablet]');

    export const fechaMenuLateral = () => {

        const iconeMenu = document.querySelector('[data-menuMobile]');
        iconeMenu.src = "img/Menu.png";

        const menuMobile = document.querySelector(['.divMenuLateralLista']);
        menuMobile.style.display = "none";

        /* Tablet */
        botaoMenuLateralTablet.src = "img/Menu.png";

    }