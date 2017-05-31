/**
 * Created by faridjafaroff on 5/26/17.
 */
var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room');
var socket = io();

console.log(name + ' want to join ' + room);

socket.on('connect', function () {
    console.log("You've connected via socket-io !");
});

socket.on('message', function (message) {
    var momentTimestamp = moment.utc(message.timestamp);
    message.time = momentTimestamp.local().format('h:mma');
    var $message = $('.messages');

    console.log('new Message !');
    console.log(message.text);

    $message.append('<p><strong>' + message.name + ' ' + message.time + '</strong></p>');
    $message.append('<p>' + message.text + '</p>');
});

var $form = $('#message-form');

$form.on('submit', function (event) {
    event.preventDefault(); // to Handle submit on your own, not letting work as it usually works

    var $message = $form.find('input[name=message]');

    socket.emit('message', {
        name: name,
        text: $message.val()
    });

    // $('.messages').append('<p>' + $message.val() + '</p>');

    $message.val('');
});
