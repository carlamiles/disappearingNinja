$(document).ready(function() {
    console.log('ready!');

    $('img').click(function() {
        $(this).hide('slow');
    })

    $('#btn').click(function() {
        window.location.reload();
    })
})