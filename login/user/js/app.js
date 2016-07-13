$('form').on('submit', function (event) {
    event.preventDefault();
    var form = $(this);
    $.ajax('http://symatechlabs.com/bima/api/userLogin.php', {
        type: 'POST'
        , data: form.serialize()
        , dataType: 'json'
        , success: function (result) {
            console.log(result)
        }
    });
});





$('form').on('submit', function (event) {
    event.preventDefault();
    var form = $(this);
    $.ajax('http://symatechlabs.com/bima/api/userRegistration.php', {
        type: 'POST'
        , data: form.serialize()
        , dataType: 'json'
        , success: function (result) {
            console.log(result)
        }
    });
});