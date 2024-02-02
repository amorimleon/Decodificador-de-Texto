const selecionar = (classe) => {
  return document.querySelector("." + classe);
};

const palavraDigitada = selecionar("palavraDigitada");

const botaoCriptografar = selecionar("criptografar");
const botaoDescriptografar = selecionar("descriptografar");

const quadroExibir = selecionar("quadroExibir");
const alertaValidacao = selecionar("alerta-validacao");

const processarTexto = (operacao) => {
  let texto = palavraDigitada.value;
  quadroExibir.innerHTML = operacao(texto);
};
botaoCriptografar.addEventListener("click", () => {
  if (!verificarMaiusculas(palavraDigitada.value)) {
    processarTexto(criptografar);
    const btn = botaoCriptografar.id;
    alterarCorBotao(btn);
    alertaValidacao.innerHTML = "";
    palavraDigitada.value = "";
  }
});

botaoDescriptografar.addEventListener("click", () => {
  processarTexto(descriptografar);
  const btn = botaoDescriptografar.id;
  alterarCorBotao(btn);
});

const criptografar = (palavra) => {
  let palavraCriptografada = "";
  let novaLetra;
  for (let i = 0; i < palavra.length; i++) {
    novaLetra = palavra[i];

    if (palavra[i] === "e") {
      novaLetra = "enter";

      palavraCriptografada += novaLetra;
    } else if (palavra[i] === "i") {
      novaLetra = "imes";

      palavraCriptografada += novaLetra;
    } else if (palavra[i] === "a") {
      novaLetra = "ai";

      palavraCriptografada += novaLetra;
    } else if (palavra[i] === "o") {
      novaLetra = "ober";

      palavraCriptografada += novaLetra;
    } else if (palavra[i] === "u") {
      novaLetra = "ufat";

      palavraCriptografada += novaLetra;
    } else {
      palavraCriptografada += novaLetra;
    }
  }

  return palavraCriptografada;
};

const descriptografar = (palavra) => {
  let descriptografada = palavra;

  if (palavra.includes("enter")) {
    descriptografada = descriptografada.replace(/enter/g, "e");
  }
  if (palavra.includes("imes")) {
    descriptografada = descriptografada.replace(/imes/g, "i");
  }

  if (palavra.includes("ai")) {
    descriptografada = descriptografada.replace(/ai/g, "a");
  }
  if (palavra.includes("ober")) {
    descriptografada = descriptografada.replace(/ober/g, "o");
  }
  if (palavra.includes("ufat")) {
    descriptografada = descriptografada.replace(/ufat/g, "u");
  }

  return descriptografada;
};

const copiarTexto = () => {
  const palavraCopiada = document.querySelector(".quadroExibir");
  const texto = palavraCopiada.innerText || palavraCopiada.textContent;

  const textoArea = document.createElement("textarea");
  textoArea.value = texto;

  document.body.appendChild(textoArea);

  textoArea.select();
  document.execCommand("copy");

  document.body.removeChild(textoArea);

  const btnCopiar = document.querySelector(".copiar");

  const btn = btnCopiar.id;
  alterarCorBotao(btn);
};

const alterarCorBotao = (botaoId) => {
  const botoes = document.querySelectorAll("button");

  botoes.forEach((botao) => botao.classList.remove("btnAtivo"));

  const botaoClicado = document.getElementById(botaoId);
  botaoClicado.classList.add("btnAtivo");
};

const verificarMaiusculas = (palavra) => {
  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] >= "A" && palavra[i] <= "Z") {
      return (alertaValidacao.innerHTML = "Não é permitido letras maiúsculas");
    }

    if (!/[a-zA-Z]/.test(palavra[i])) {
      return (alertaValidacao.innerHTML =
        "Não é permitido caracteres especiais!");
    }
  }
};
