class VerificandoEscolhas {
    constructor() {
        this.voltando();
        this.next();
        this.criaCard();
    }

    voltando() {
        const voltar = document.querySelector(".voltar");
        voltar.addEventListener("click", () => {
            window.location.href = "form3.html";
            localStorage.removeItem("listaDados");
        });
    }

    next() {
        const proximo = document.querySelector(".btn-submit");
        proximo.addEventListener("click", () => {
            window.location.href = "form5.html";
        });
    }

    pegaModalidade() {
        const mode = JSON.parse(localStorage.getItem("dados"));
        return mode;
    }

    pegaComplemento() {
        const listaDados = JSON.parse(localStorage.getItem("listaDados"));
        return listaDados;
    }
    extrairNumero(str) {
        return parseFloat(str.replace(/[^0-9.]/g, ""));
    }

    limpaDados() {
        localStorage.removeItem("dados");
        localStorage.removeItem("sinal");
        localStorage.removeItem("listaDados");
    }

    criaCard() {
        const form = document.querySelector(".form");

        //criando uma div e pondo uma classe
        const div = document.createElement("div");
        div.classList.add("confirmacao");

        const divConfirma = document.createElement("div");
        divConfirma.classList.add("confima-itens");

        const divTotal = document.createElement("div");
        divTotal.classList.add("container-total");

        //criando uma tag p e pondo uma classe
        const textoTotal = document.createElement("p");
        textoTotal.classList.add("text-total");

        const valorTotal = document.createElement("p");
        valorTotal.classList.add("valor-total");

        //capturando os valores retornados por essas funções
        const modalidadeDados = this.pegaModalidade();
        const complementosDados = this.pegaComplemento();

        const sinal = JSON.parse(localStorage.getItem("sinal"));
        div.innerHTML = `
            <div class="confima-itens">
            <div class="itens">
              <p class="titulo-servico">${modalidadeDados.modalidade}</p>
              <a href="form2.html" class="mudar">Change </a>
            </div>
            <p class="preco-adicional">${modalidadeDados.preco}</p>
          </div>
          <hr>`;

        let cont = 0;

        for (let i = 0; i < complementosDados.length; i++) {
            let divModalidade = document.createElement("div");
            divModalidade.classList.add("verifica-servico");

            let textoInfo = document.createElement("p");
            textoInfo.classList.add("text-info");
            textoInfo.innerHTML = ` ${complementosDados[i].modalidade}`;

            let textoPreco = document.createElement("p");
            textoPreco.classList.add("text-preco");
            textoPreco.innerHTML = `${complementosDados[i].preco}`;

            let valorComplemento = this.extrairNumero(
                complementosDados[i].preco
            );

            cont += valorComplemento;
            let valorModalidade = this.extrairNumero(modalidadeDados.preco);
            let totalFinal = cont + valorModalidade;
            if (sinal === true) {
                valorTotal.innerHTML = `
                +$${totalFinal}/yr
                `;

                textoTotal.innerHTML = `
                Total(per year)
                `;
            } else {
                valorTotal.innerHTML = `
                +$${totalFinal}/mo
                `;

                textoTotal.innerHTML = `
                Total(per month)
                `;
            }

            divModalidade.appendChild(textoInfo);
            divModalidade.appendChild(textoPreco);
            div.appendChild(divModalidade);
        }

        divTotal.appendChild(textoTotal);
        divTotal.appendChild(valorTotal);

        form.appendChild(div);
        form.appendChild(divTotal);
        const mudanca = document.querySelector(".mudar");
        mudanca.onclick = this.limpaDados();
    }
}

new VerificandoEscolhas();
