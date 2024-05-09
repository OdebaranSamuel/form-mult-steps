export class SelecionaPlano {
    constructor() {
        const formulario = document.querySelector(".form");
        this.voltando();
        this.next();
        this.planoSelecionado();
    }

    voltando() {
        const voltar = document.querySelector(".voltar");
        voltar.addEventListener("click", () => {
            window.location.href = "form1.html";
        });
    }

    next() {
        const proximo = document.querySelector(".btn-submit");
        proximo.addEventListener("click", () => {
            window.location.href = "form3.html";
        });
    }

    planoSelecionado() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            btn.addEventListener("click", () => {
                btns.forEach((botao) => {
                    botao.classList.remove("btn-selecionado");
                });
                btn.classList.add("btn-selecionado");
            });
        });
    }
}

const plano = new SelecionaPlano();
