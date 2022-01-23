

        const linguagem = document.querySelector('.selecaoLinguagem');
        const areaDoCodigo = document.querySelector('.editorDeTextoCaixa');
        

        export const aplicaHighlight = () => {
            const codigo = areaDoCodigo.innerText;
            areaDoCodigo.innerHTML = `<code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código"></code>`;
            areaDoCodigo.querySelector('code').textContent = codigo;
            hljs.highlightElement(areaDoCodigo.querySelector('code'));
        }