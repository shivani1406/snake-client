// establishes a connection with the game server
const net = require("net");
const readline = require('readline');
const connect = function () {
  const conn = net.createConnection({
    host:'192.168.0.16', // IP address here,
    port: 50541// PORT number here,
  });

  conn.on("connect", () => {
    console.log("Successfully connected to the server");
  })

   // interpret incoming data as text
   conn.setEncoding("utf8");
   conn.on('connect', () => {
     conn.write('Name: SS');
   });


  // listening for the connection to be severed
conn.on("end", () => {
  console.log('diconnected from the server');
  rl.close();
})
   return conn;
 };
 
 module.exports=connect;