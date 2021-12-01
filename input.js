const stdin = process.stdin;

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   return stdin;
// };
const handleUserInput = function (key) {
  // your code here
  // \u0003 maps to ctrl+c input
if (key === '\u0003') {
  console.log("hello");
  process.exit();
}

if (key === 'w')
{
  console.log("Move: up");
}


};
stdin.on("data", handleUserInput);

module.exports=setupInput;
