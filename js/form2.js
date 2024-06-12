export class SelecionaPlano {
    constructor() {
        this.voltando();
        this.next();
        this.planoSelecionado();
        this.mudaPlano();
    }

    voltando() {
        const voltar = document.querySelector(".voltar");
        voltar.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }

    next() {
        const proximo = document.querySelector(".btn-submit");
        proximo.addEventListener("click", () => {
            window.location.href = "form3.html";
        });
    }

    mudaPlano() {
        const inputCheck = document.querySelector(".switch");
        const divPai = document.querySelector(".btn-principal");

        const mes = [
            {
                modalidade: "Arcade",
                preco: "$9/mo",
            },
            {
                modalidade: "Advanced",
                preco: "$12/mo",
            },

            {
                modalidade: "Pro",
                preco: "$15/mo",
            },
        ];

        const ano = [
            {
                modalidade: "Arcade",
                preco: "$90/yr",
            },
            {
                modalidade: "Advanced",
                preco: "$120/yr",
            },

            {
                modalidade: "Pro",
                preco: "$150/yr",
            },
        ];

        const plano = divPai.querySelectorAll(".modalidade");
        const precoPlano = divPai.querySelectorAll(".preco");
        const btns = document.querySelectorAll(".btn");
        let flag;
        inputCheck.addEventListener("click", () => {
            if (inputCheck.checked) {
                flag = true;
                const p = document.createElement("p");
                p.innerHTML = `2 months free`;
                btns.forEach((el) => {
                    el.classList.remove("btn-selecionado");
                });

                for (let i = 0; i < 3; i++) {
                    plano[i].innerHTML = ano[i].modalidade;
                    precoPlano[i].innerHTML = ano[i].preco;
                }
            } else {
                flag = false;
                btns.forEach((el) => {
                    el.classList.remove("btn-selecionado");
                });
                for (let i = 0; i < 3; i++) {
                    plano[i].innerHTML = mes[i].modalidade;
                    precoPlano[i].innerHTML = mes[i].preco;
                }
            }
            return this.sinal(flag);
        });
    }

    sinal(flag) {
        localStorage.setItem("sinal", JSON.stringify(flag));
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
