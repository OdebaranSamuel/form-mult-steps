import { SelecionaPlano } from "./form2.js";
import { Complementos } from "./form3.js";

// const resultado = new SelecionaPlano();

class VerificandoEscolhas {
    constructor() {
        this.voltando();
        this.next();
        this.pegaInfo();
    }

    voltando() {
        const voltar = document.querySelector(".voltar");
        voltar.addEventListener("click", () => {
            window.location.href = "form3.html";
        });
    }

    next() {
        const proximo = document.querySelector(".btn-submit");
        proximo.addEventListener("click", () => {
            window.location.href = "form3.html";
        });
    }

    pegaInfo() {
        const pegaItens = localStorage.getItem("listaDados");
        const itensObj = JSON.parse(pegaItens);
        console.log(itensObj[itensObj.length - 1]);
    }
}

new VerificandoEscolhas();
console.log("samuel");
