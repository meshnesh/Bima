
$(function () {

    $('#sending').on('submit', function (e) {

        e.preventDefault();
        $.ajax({
            type: 'post',
            url: 'http://symatechlabs.com/bima/api/getQuotes.php',
            data: $('form').serialize(),
            success: function () {
                alert('form was submitted');

            }
        });

    });


});