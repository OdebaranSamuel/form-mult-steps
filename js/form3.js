export class Complementos {
    constructor() {
        this.checando();
        this.voltando();
        this.next();
        this.checaAno();
    }
    voltando() {
        const voltar = document.querySelector(".voltar");

        voltar.addEventListener("click", () => {
            window.location.href = "form2.html";
            localStorage.removeItem("dados");
            localStorage.removeItem("sinal");
            localStorage.removeItem("listaDados");
        });
    }

    next() {
        const proximo = document.querySelector(".btn-submit");
        proximo.addEventListener("click", () => {
            window.location.href = "form4.html";
        });
    }

    salvaDados(nome, valor) {
        let listaDados = JSON.parse(localStorage.getItem("listaDados")) || [];
        let objDados = {
            modalidade: nome,
            preco: valor,
        };

        listaDados.push(objDados);
        localStorage.setItem("listaDados", JSON.stringify(listaDados));
    }
    removeDados(nome, valor) {
        let listaDados = JSON.parse(localStorage.getItem("listaDados")) || [];
        listaDados = listaDados.filter(
            (item) => !(item.modalidade === nome && item.preco === valor)
        );
        localStorage.setItem("listaDados", JSON.stringify(listaDados));
    }

    checaAno() {
        let flag = JSON.parse(localStorage.getItem("sinal"));
        const preco = document.querySelectorAll(".preco-adicional");

        const precoObj = {
            service: "+$10/yr",
            storage: "+$20/yr",
            profile: "+$20/yr",
        };
        if (flag === true) {
            preco[0].innerHTML = precoObj.service;
            preco[1].innerHTML = precoObj.storage;
            preco[2].innerHTML = precoObj.profile;
        }
        return flag;
    }

    checando() {
        const checkbox = document.querySelectorAll(".checkbox");
        checkbox.forEach((caixa) => {
            caixa.addEventListener("click", () => {
                let elemento = caixa.parentElement;
                let servico = elemento
                    .querySelector(".titulo-servico")
                    .textContent.trim();
                let preco = elemento
                    .querySelector(".preco-adicional")
                    .textContent.trim();
                if (caixa.checked) {
                    elemento.classList.add("btn-selecionado");
                    this.salvaDados(servico, preco);
                } else {
                    elemento.classList.remove("btn-selecionado");
                    this.removeDados(servico, preco);
                }
            });
        });
    }
}
new Complementos();
