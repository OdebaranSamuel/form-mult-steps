export class Complementos {
    constructor() {
        const form = document.querySelector(".form");
        this.checando();
        this.voltando();
        this.next();
    }
    voltando() {
        const voltar = document.querySelector(".voltar");
        voltar.addEventListener("click", () => {
            window.location.href = "form2.html";
        });
    }

    next() {
        const proximo = document.querySelector(".btn-submit");
        proximo.addEventListener("click", () => {
            window.location.href = "form4.html";
        });
    }

    checando() {
        const checkbox = document.querySelectorAll(".checkbox");
        checkbox.forEach((caixa) => {
            caixa.addEventListener("click", () => {
                let elemento = caixa.parentElement;
                if (caixa.checked) {
                    elemento.classList.add("btn-selecionado");
                    let preco = elemento
                        .querySelector(".preco-adicional")
                        .textContent.trim();
                    return preco;
                } else {
                    elemento.classList.remove("btn-selecionado");
                }
            });
        });
    }
}
const complemento = new Complementos();
