$( document ).ready(function() {
    $.ajax({
        url : 'test',
        type: 'POST',  // http method
        data: { myData: 'This is my data.' },  // data to submit
        success : function(data){
            console.log(data);
        },

        error : function(resultat, statut, erreur){
console.log(resultat, statut, erreur)
        }

    });
});