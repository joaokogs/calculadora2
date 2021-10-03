function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    if(numero.length < 10){
    document.getElementById('resultado').innerHTML = numero + num;
}
}
function limpar(){
    document.getElementById('resultado').innerHTML = "";
}
function apagar(){
    var res = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = res.substring(0,res.length -1)
}
function calcular(){
    var res = document.getElementById('resultado').innerHTML;
    if(res){
        document.getElementById('resultado').innerHTML = eval(res)
    }
}