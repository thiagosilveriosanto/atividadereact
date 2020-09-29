console.log('Ta funcionando !');

function calcularIMC(){

// receber dados da tela

var peso = document.getElementById("peso").value;

var altura = document.getElementById("altura").value;

if (peso == '' || peso == 0){

    alert('Campo peso tem quer ser maior que 0 (zero) !');

    document.getElementById('peso').value = '';

    document.getElementById('peso').focus();

}else if (altura== '' || altura == 0){

    alert('Campo altura tem quer ser maior que 0 (zero) !');

    document.getElementById('altura').value = '';

    document.getElementById('altura').focus();

}else{

    var total = peso / ( altura * altura );

    document.getElementById('imc').value = total.toFixed(2);

    document.getElementById('imc').focus();

    // exibir o resultado

    if (total < 16){

        document.getElementById('classificacao').value = 'Baixo peso severo';
        
        document.getElementById('classificacao').focus();
    
    }else if (total >= 16 && total <= 16.9){
    
        document.getElementById('classificacao').value = 'Baixo peso moderado';

        document.getElementById('classificacao').focus();
    
    }else if (total >= 17 && total <= 18.49){
    

        document.getElementById('classificacao').value = 'Baixo peso leve';

        document.getElementById('classificacao').focus();
    
    }else if (total >= 18.5 && total <= 24.9){
    
        document.getElementById('classificacao').value = 'Peso ideal';

        document.getElementById('classificacao').focus();
    
    }else if (total >= 25 && total <= 29.9){
    
        document.getElementById('classificacao').value = 'Pré-obesidade';

        document.getElementById('classificacao').focus();
    
    }else if (total >= 30 && total <= 34.9){
    
        document.getElementById('classificacao').value = 'Obesidade moderada';

        document.getElementById('classificacao').focus();
    
    }else if (total > 35 && total <= 39.9){
    
        document.getElementById('classificacao').value = 'Obesidade alta';

        document.getElementById('classificacao').focus();
    
    }else{
    
        document.getElementById('classificacao').value = 'Obesidade muito alta';

        document.getElementById('classificacao').focus();
    
    }

}

}