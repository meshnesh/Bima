


$("form").submit(function(e) {
    e.preventDefault();    // avoid to execute the actual submit of the form.
    var url = "http://symatechlabs.com/bima/api/getQuotes.php"; // the script where you handle the form input.

    $.ajax({
        type: "POST",
        url: url,
        data: $("form").serialize(), // serializes the form's elements.
        success: function(data){
            console.log(data); // show response from the php script.


            var text = '';
            for (var i=0;i<data.partnerQoutes.length;i++){
                text += '<div class="row">' +
                            '<div id="logname" class="large-3 columns">' +
                                '<div class="row">' +
                                    '<div class="small-3 columns logos"><img class="logo" data.partnerQoutes[i].partnerLogo src=" http://design.ubuntu.com/wp-content/uploads/ubuntu-logo32.png"></div>' +
                                    '<div class="small-9 columns names">' + data.partnerQoutes[i].partnerName + '</div>' +
                                '</div>' +
                            '</div>' + //logo and name

                            '<div class="large-6 columns">' +
                                '<ul>' +
                                    '<li>' + data.partnerQoutes[i].partnerBenefits +  '</li>'+
                                '</ul>'+
                            '</div>' +

                            '<div class="large-3 columns">' +
                                '<div class="large-6 columns"><p class="cost">'  + data.partnerQoutes[i].partnerCost +'</p></div>' +
                                '<div class="large-6 columns"><fieldset><input type="radio" type="commit " class="butt" name="partnerID" value="'+data.partnerQoutes[i].partnerID+'" id="'+data.partnerQoutes[i].partnerID+'"></fieldset></div>' +
                            '</div>' +
                        '</div>';

                $(document).on('click', '.butt', function (e) {
                    console.log(e);
                });

                // end of the function

            }
            $( '#card' ).html( text );



        }
    });

    $("form :input").focusout(function(){
        console.log($("form").serialize());
    });

});
