
function adicionarUC() {
    const novaUC = prompt("Digite o nome da nova UC:");
    if (novaUC) {
        const li = document.createElement("li");
        li.innerHTML = `${novaUC} <button onclick="moverCima(this)">⬆️</button> <button onclick="moverBaixo(this)">⬇️</button>`;
        document.getElementById("listaUCs").appendChild(li);
    }
}

function moverCima(botao) {
    const item = botao.parentNode;
    const anterior = item.previousElementSibling;
    if (anterior) {
        item.parentNode.insertBefore(item, anterior);
    }
}

function moverBaixo(botao) {
    const item = botao.parentNode;
    const proximo = item.nextElementSibling;
    if (proximo) {
        item.parentNode.insertBefore(proximo, item);
    }
}

function validarCpf(cpf) {
    const regexCpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    if (!regexCpf.test(cpf)) {
        alert("CPF inválido. Use o formato ddd.ddd.ddd-dd");
    }
}

function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("E-mail inválido.");
    }
}

function inserirDescricao() {
    const texto = document.getElementById("novaDescricao").value;
    if (texto.trim()) {
        const div = document.getElementById("conteudoDescricao");
        const p = document.createElement("p");
        p.textContent = texto;
        div.appendChild(p);
        document.getElementById("novaDescricao").value = "";
    }
}
