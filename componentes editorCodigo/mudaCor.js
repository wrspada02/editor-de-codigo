
    const corDeFundo = document.querySelector('[data-background]');
    const corInput = document.querySelector('[data-color]');

    export const mudaCor = () => {

        corDeFundo.style.backgroundColor = corInput.value;
        
    }

    