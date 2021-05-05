

// lange versie
$(document).ready(function(){
    $("#form").keyup(function(){
        // als er geen waarde is in de input voeg attr disable toe
        if (!$('#input').val()) {
            $('#btnSubmit').attr('disabled', 'true');
          }
        // anders verwijder attr disable
        else{
            $('#btnSubmit').removeAttr('disabled');
        }

    });
    // als er op de knop wordt gedrukt zet data in array en plaats in output
    $("#btnSubmit").click(function(){
        $("#output").html('');
        var arraySerialize = $("#form").serializeArray();
        $.each(arraySerialize, function(index,field){
            $("#output").append(field.value);
        });
        $('#input').val('');
    });
      

});

