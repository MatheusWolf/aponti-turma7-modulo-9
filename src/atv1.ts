//-----Atividade 1 - Variáveis e Tipos de Dados----------------------------------------------------------------------------------
// -- (Questão 1) - Declare uma variável para cada tipo primitivo básico do TypeScript


let student_name: string = "Matheus Wolf";
// Caracteres, palavras ou frases
const module: number = 9;
// Números inteiros ou decimais
const is_approved: boolean = true;
// Verdadeiro ou falso
let vazio_por_enquanto: null = null;
// Representa a ausência intencional de valor, geralmente antes de ser atribuído um valor depois
let dados: undefined = undefined;
// Representa uma variável que foi declarada, mas ainda não foi inicializada com um valor

console.log("String: " + student_name);
console.log("Number: " + module);
console.log("Boolean: " + is_approved);
console.log("Null: " + vazio_por_enquanto);
console.log("Undefined: " + dados);

//-------------------------------------------------------------------------------------------------------------------------------
// -- (Questão 2) - Declarar uma variável do tipo number e atribuir a ela um valor do tipo string


let globo_number: number = 13;

globo_number = "13";
// Typescript não permite atribuir diretamente o valor de diferentes tipos de dados, por causa da propriedade de tipagem estática
// Se fosse no javascript, seria possível atribuir porque ele tem tipagem dinâmica (a variável atualiza o tipo conforme o dado)
// Mas utilizando metódos nativos do javascript, como criar uma nova variável e converter o valor da variavel para o tipo desejado
// exemplo: let texto_numero_da_globo: string = globo_number.toString()
// essa nova variavel será um texto do numero "13"


//-------------------------------------------------------------------------------------------------------------------------------
// -- (Questão 3) - Crie uma variável idade: number e escreva uma estrutura condicional (if/else) que exiba "Maior de idade" 
// -- se for maior ou igual a 18, e "Menor de idade" caso contrário. 


let idade: number = 126;

if ((idade < 0) || (idade > 125)) {
    console.log("Idade inválida");
    // Uma pequena checagem para a idade em intervalos válidos entre 0 até 125 anos
    // É permitido ter 0 anos para considerar bebês com poucos meses ou dias
}
else {
    if (idade >= 18) {
        console.log("Maior de idade");
    } else {
        console.log("Menor de idade");
    }
}

//-------------------------------------------------------------------------------------------------------------------------------
// -- (Questão 4) - Crie uma variável nota: number e utilize if / else if / else para classificar a nota 
// -- em "Aprovado" (nota >= 7), "Recuperação" (nota >= 5 e < 7) ou "Reprovado" (nota < 5).


let nota: number = 17;


// Checagem para a nota em intervalos válidos entre 0 até 10
if ((nota >= 7) && (nota <= 10)) {
    console.log("Aprovado");
} else if (nota >= 5 && nota < 7) {
    console.log("Recuperação");
} else if ((nota >= 0) && (nota < 5)) {
    console.log("Reprovado");
}
// Estando fora do range nota será invalida
else {
    console.log("Nota inválida");
}


//-------------------------------------------------------------------------------------------------------------------------------
// -- (Questão 5) - Crie uma variável diaDaSemana: number (1 a 7) e utilize um switch para exibir o nome do dia correspondente.


let diaDaSemana: number = 5;

switch (diaDaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-Feira");
        break;
    case 3:
        console.log("Terça-Feira");
        break;
    case 4:
        console.log("Quarta-Feira");
        break;
    case 5:
        console.log("Quinta-Feira");
        break;
    case 6:
        console.log("Sexta-Feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido");
}
// Nesse caso a checagem de intervalo fica para qualquer valor diferente dos estipulados hardcoded, de 1 a 7


//-------------------------------------------------------------------------------------------------------------------------------
// -- (Questão 6) - Utilize um loop for para exibir no console os números de 1 a 10.


for (let i: number = 1; i <= 10; i++) {
    console.log(i);
}
// Declarando a variavel de contagem dentro do for, assim depois de finalizar o loop ela ficará inacessível


//-------------------------------------------------------------------------------------------------------------------------------
// -- (Questão 7) - Utilize um loop while para exibir apenas os números pares entre 1 e 20. 
let numeros_pares: number = 1


if ((numeros_pares < 1) || (numeros_pares > 20)) {
    console.log("Número inválido");
}
else {
    while(numeros_pares <= 20) {
        if (numeros_pares % 2 === 0) {
            console.log(numeros_pares);
        }
        numeros_pares++;
        // adicionando o ++ para incrementar (seria a mesma coisa que numeros_pares = numeros_pares + 1)
    }
}


//-------------------------------------------------------------------------------------------------------------------------------
// -- (Questão 8) - Crie um array numeros: number[] com pelo menos 5 valores e utilize um loop for...of para somar 
// -- todos os elementos, exibindo o total ao final. 


let numeros: number [] = [1,23,35,47,-2];
let soma: number = 0;


for (let n: number = 0; n < numeros.length; n++){
    soma += numeros[n];
}
// Dessa vez segui o contrário da questão 6, criando variáveis fora do loop deixando-as acessíveis depois
console.log("A soma dos números é: " + soma);


//-------------------------------------------------------------------------------------------------------------------------------
// -- (Questão 9) - Utilize um loop for combinado com uma condicional para exibir apenas os números ímpares entre 1 e 15. 


for (let i: number = 1; i <= 15; i++) {
    if (i % 2 === 1 ) {
        console.log(i);
    }
}
// Já essa questão é bem parecida com a questão 7, mas com ajuste matématico, se o resto da divisão por 2 dá 0 os números
// são os pares, os impares o resto precisa sobrar 1


//-------------------------------------------------------------------------------------------------------------------------------
// -- (Questão 10) -Desafio: combine tudo o que foi visto — crie um array de números, percorra com um loop e, para cada número, 
// utilize uma condicional para classificá-lo como "par" ou "ímpar", exibindo o resultado no console.

const numeros_arryados: number [] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i: number = 0; i < numeros_arryados.length; i++) {
    if (numeros_arryados[i] % 2 === 0) {
        console.log("Número par: " + numeros_arryados[i]);
        continue;
        // O continue interrompe aquele loop e passa para a próxima iteração, assim não é necessário colocar um else para os ímpares
    }
    console.log("Número ímpar: " + numeros_arryados[i]);
    // Se o número não for par, ele obrigatoriamente é impar, assim não é necessário colocar uma condicional para os ímpares
}


//-------------------------------------------------------------------------------------------------------------------------------