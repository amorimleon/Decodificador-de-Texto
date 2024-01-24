let palavraCriptograda = "";

const selecionar = (classe) => {
  return document.querySelector("." + classe);
};

const palavraDigitada = selecionar('palavraDigitada')

const botaoCriptografar = selecionar("criptografar");

const quadroExibir = selecionar('quadroExibir')

botaoCriptografar.addEventListener('click', ()=>{
  quadroExibir.innerHTML = palavraDigitada.value
  console.log(palavraDigitada.value);
})