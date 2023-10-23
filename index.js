calculadora()

let resultado = calculadora(204, 5)

function calculadora(vitorias, derrotas){
    let calculo = vitorias - derrotas
    return calculo       
}

switch(true){
    case resultado <= 10:
        console.log("O Herói tem saldo de " + resultado + ", está no nível Ferro.")
        break
    case resultado <= 20:
        console.log("O Herói tem saldo de " + resultado + ", está no nível Bronze.")
        break
    case resultado <= 50:
        console.log("O Herói tem saldo de " + resultado + ", está no nível Prata.")
        break
    case resultado <= 80:
        console.log("O Herói tem saldo de " + resultado + ", está no nível Ouro.")
        break
    case resultado <= 90:
        console.log("O Herói tem saldo de " + resultado + ", está no nível Diamante.")
        break 
    case resultado <= 100:
        console.log("O Herói tem saldo de " + resultado + ", está no nível Lendário.")
        break   
    case resultado > 100:
        console.log("O Herói tem saldo de " + resultado + ", está no nível Imortal.")
        break    
} 
