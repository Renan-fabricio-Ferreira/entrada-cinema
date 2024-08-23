function idadeEntrada() {

    const inNome = document.querySelector("#inNome");
    const inIdade = document.querySelector("#inIdade");
    const resultado = document.querySelector("#resultado");

 let nome = inNome.value;
 let idade = Number(inIdade.value);
 

 if (idade >= 16 ){
   resultado.textContent = ` ${nome} permitido a entrada a sua idade é: ${idade}`;
} else {
    resultado.textContent = ` ${nome} Não é permitido a entrada a sua idade é: ${idade}`;

 }
 
}

//pegando a id btCalcular com a manipulação do DOM
const btIdade = document.querySelector("#btIdade");
btIdade.addEventListener("click", idadeEntrada);






 //---------------

//  let dataAtual = new Date();
//   let anoAtual = dataAtual.getFullYear();
//   let idade2 = anoAtual - idade;
   
 //--------------