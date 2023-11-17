$(document).ready(function() {



   $('form').on('submit',function(e) {

    e.preventDefault()

    $('#telefone').val('')

    $('#CPF').val('')

    $('#cep').val('')

    $('#nome').val('')

    $('#emaill').val('')

    $('#Endereço').val('')


    

   })


    

    $('#telefone').mask('(00) 00000-0000',{
        placeholder:'(00) 00000-000'

    })

    $('#CPF').mask('000.000.000-00',{
        placeholder:'000.000.000-00'

    })

    $('#cep').mask('00000-000',{
        placeholder:'00000-000'

    })



})