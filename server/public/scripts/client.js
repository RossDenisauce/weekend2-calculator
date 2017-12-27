console.log("You're in");

$(document).ready(start);

function start(){
    console.log('In JQ'); 
    $('.argumentButton').on('click', getValues);
    $('#clearButton').on('click', clearSpace);
}


function getValues(){
    let type = $(this)["0"].textContent;
    console.log('Clicked Button', type);
    
    let firstInput = parseInt($('#firstInput').val());
    let secondInput = parseInt($('#secondInput').val());

    $.ajax({
        method: 'POST',
        url: '/calc',
        data: {
            x: firstInput,
            y: secondInput,
            type: type
        },
        success: function(response){
            console.log('Success post', response);

            $.ajax({
                method: 'GET',
                url: '/calc',
                success: function(response){
                    console.log('Success get', response);
                    $('#calcSpace').append('<ul>' + firstInput + ' ' + type + ' ' + secondInput + ' =' + response + '</ul>');
                    $('#history').append('<p>' + firstInput + ' ' + type + ' ' + secondInput + ' =' + response + '</p>')
                }
            });
        }
    });
}

function clearSpace(){
    $('#calcSpace').children().remove();
}