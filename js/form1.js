class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector(".form");
        this.evento();
    }

    evento() {
        const btn = document.querySelector(".btn-submit");
        btn.addEventListener("click", () => {
            this.submit();
        });
    }

    submit() {
        const inputValido = this.validaInput();
        if (inputValido) {
            window.location.href = "form2.html";
        }
    }

    validaInput() {
        let valida = true;
        for (let errorText of this.formulario.querySelectorAll(".error-text")) {
            errorText.remove();
        }
        for (let campo of this.formulario.querySelectorAll(".input")) {
            if (campo.classList.contains("nome")) {
                if (!this.validaNome(campo)) {
                    valida = false;
                }
            }
            if (campo.classList.contains("email")) {
                if (!this.validaEmail(campo)) {
                    valida = false;
                }
            }
            if (campo.classList.contains("phone")) {
                if (!this.validaPhone(campo)) {
                    valida = false;
                }
            }
        }

        return valida;
    }

    validaNome(campo) {
        const nome = campo.value;
        let valida = true;
        if (!nome) {
            this.erro(campo, "this field is required");
            valida = false;
        }
        return valida;
    }

    validaEmail(campo) {
        const email = campo.value;
        let valida = true;
        if (!email) {
            this.erro(campo, "this field is required");
            valida = false;
        }

        return valida;
    }

    validaPhone(campo) {
        const tel = campo.value;
        let valida = true;
        if (!tel) {
            this.erro(campo, "this field is required");
            valida = false;
        }
        return valida;
    }

    erro(campo, mensagem) {
        const div = document.createElement("div");
        div.innerHTML = mensagem;
        div.classList.add("error-text");
        campo.insertAdjacentElement("beforebegin", div);
    }
}
const form = new ValidaFormulario();
