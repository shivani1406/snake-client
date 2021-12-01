// establishes a connection with the game server
const net = require("net");
const readline = require('readline');
const {IP,PORT} = require('./constants');
const connect = function () {
  const conn = net.createConnection({
    host:IP, // IP address here,
    port: PORT// PORT number here,
  });

  conn.on("connect", () => {
    console.log("Successfully connected to the server");
  })

   // interpret incoming data as text
   conn.setEncoding("utf8");
   conn.on('connect', () => {
     conn.write('Name: SS');
   });
  //  conn.on('connect',() => {
  //  setTimeout(() => {
    
  //     conn.write('Move: down');
    
  //  },1000)});
   
  //  conn.on('connect',() => {
  //   conn.write('Move: left');
  // })


  // listening for the connection to be severed
conn.on("end", () => {
  console.log('diconnected from the server');
  rl.close();
})

   return conn;
 };
 
 module.exports=connect;