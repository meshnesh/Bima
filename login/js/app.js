function checkPass() {
    //Store the password field objects into variables ...
    var password = document.getElementById('password');
    var pass2 = document.getElementById('pass2');
    //Store the Confimation Message Object ...
    var message = document.getElementById('confirmMessage');
    //Set the colors we will be using ...
    var goodColor = "#66cc66";
    var badColor = "#ff6666";

    if (password.value == pass2.value) {



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

        pass2.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Passwords Match!"


    } else {
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Passwords Do Not Match!"
    }
}




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