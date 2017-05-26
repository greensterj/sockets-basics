/**
 * Created by faridjafaroff on 5/26/17.
 */
var socket = io();

socket.on('connect', function () {
    console.log("You've connected via socket-io !");
});