// Module Name: DATAGRAM
// Description: Provides implementation of UDP datagram sockets

var dgram = require('dgram');
var s = dgram.createSocket('udp4');
s.send(Buffer.from('abc'), 8080, 'localhost');