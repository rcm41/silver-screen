$(document).ready(function(){
$('#comedyButton').click(function(){
    $('#comedy').effect('slide',{direction:'right'}, 500);
    } );
    //Comedy suggestions appear
$('#dramaButton').click(function(){
    $('#drama').effect('slide',{direction:'right'}, 500);
});
//Drama suggestions appear
$('#suspenseButton').click(function(){
    $('#suspense').effect('slide',{direction:'right'}, 500);
});
//Suspense suggestions appear
$('#changeButton').click(function(){
    $('#comedy').hide();
    $('#drama').hide();
    $('#suspense').hide();
        } );
        //Clears Movie Recccomendations
});













