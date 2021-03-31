$(document).ready(function(){
    $("#inputCpf").mask("000.000.000-00")
    $("#inputCnpj").mask("00.000.000/0000-00")
    $("#inputValor").mask("999.999.990,00", {reverse: true})
    $(".numero").mask("999.999.990", {reverse: true})
    $("#inputCep").mask("00.000-000")
    $("#inputData").mask("00/00/0000")
    
    $("#inputRg").mask("999.999.999-W", {
        translation: {
            'W': {
                pattern: /[X0-9]/
            }
        },
        reverse: true
    })
    
    var options = {
        translation: {
            'A': {pattern: /[A-Z]/},
            'a': {pattern: /[a-zA-Z]/},
            'S': {pattern: /[a-zA-Z0-9]/},
            'L': {pattern: /[a-z]/},
        }
    }
    
    $("#inpurPlaca").mask("AAA-0000", options)
        
    $("#inputTelefone").mask("(00) 0000-00009")
    
    $("#inputTelefone").blur(function(event){
        if ($(this).val().length == 15){
            $("#celular").mask("(00) 00000-0009")
        }else{
            $("#celular").mask("(00) 0000-00009")
        }
    })
})