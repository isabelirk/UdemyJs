//alert("Olá mundo!");

/*
comentário também
*/

var mensagem = "Olá mundo!";
alert(mensagem);

var a = 2;
var b = 3;
var soma = a + b;
var sub = a - b;
var mult = a * b;
var div = a / b;

//alert(soma);
//alert(sub);
//alert(mult);
//alert(div);

var mod = a % b;
//alert(mod);

if(b % 2 == 1){
    alert("Número ímpar!");
}else if (b % 2 == 0){
    alert("Número par!");
}else{
    alert("Valor inválido!");
}

var numero = 9;
var decimal = 9.9;
var string = "teste";
var lista = ["laranja", "maça", "banana", 1234];

for(i in lista){
    alert(lista[i]);
}

function subtracao (a, b){
    return a - b;
}

var aux = subtracao(5, 3);
console.log(aux);

//evento
function mensagem(nome){
    alert("Não clique aqui!"+nome);
}

//DOM
function mudaCor(cor){
    var elemento = document.getElementById("mensagem");
    elemento.style.color = cor;
}