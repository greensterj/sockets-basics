/**
 * Created by faridjafaroff on 5/26/17.
 */
var socket = io();

socket.on('connect', function () {
    console.log("You've connected via socket-io !");
});

socket.on('message', function (message) {
    console.log('new Message !');
    console.log(message.text);
});

var $form = $('#message-form');

$form.on('submit', function (event) {
    event.preventDefault(); // to Handle submit on your own, not letting work as it usually works

    var $message = $form.find('input[name=message]')

    socket.emit('message', {
        text: $message.val()
    });

    $message.val('');
});