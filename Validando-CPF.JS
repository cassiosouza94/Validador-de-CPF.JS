var cpf = "169.169.000-75";
    //cpf = "469.957.937-06";

function isCPF(cpf = 0){
    console.log(cpf);
    cpf  = cpf.replace(/\.|-/g,""); 
    
    if(!validaPrimeiroDigito(cpf))
       return false;
    if(!validaSegundoDigito(cpf))   
       return false;
    
       return true;   
    
    console.log("2º Dígito : "+soma);
    return true;
}

function validaPrimeiroDigito(cpf){
    let  soma = 0;
    for (var  i = 0; i < cpf.length-2 ; i++) {
         soma += cpf[i] * ((cpf.length -1) -i);
    }
    soma = (soma * 10) % 11;
    if (soma == 10 || soma == 11)
          soma = 0;
    console.log("1º Dígito : "+soma)
    if(soma != cpf[9])
        return false
        
    return true;
}

function validaSegundoDigito(cpf){
    let  soma = 0;
    for (var i = 0; i < cpf.length -1 ; i++) {
        soma += cpf[i] * ((cpf.length)-i);
    }
    soma = (soma * 10) % 11;
    if(soma == 10 || soma == 11)
        soma = 0;
    console.log("2º Dígito : "+soma)
    if(soma != cpf[10])
        return false
        
    return true;    
}
console.log(isCPF(cpf));
