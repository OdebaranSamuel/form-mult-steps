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

    salvandoDados(nome, valor) {
        let dados = {
            modalidade: nome,
            preco: valor,
        };

        localStorage.setItem("dados", JSON.stringify(dados));
    }
    planoSelecionado() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            btn.addEventListener("click", () => {
                btns.forEach((botao) => {
                    botao.classList.remove("btn-selecionado");
                });
                btn.classList.add("btn-selecionado");
                let modalidade = btn
                    .querySelector(".modalidade")
                    .textContent.trim();

                let preco = btn.querySelector(".preco").textContent.trim();
                this.salvandoDados(modalidade, preco);
            });
        });
    }
}

new SelecionaPlano();
