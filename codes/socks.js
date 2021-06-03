'use strict';

const fs = require('fs');


let n = 9;
let arr = [10,20,20,10,10,30,50,10,20];

function sockMerchant(n, ar) {

  let pairsOfSock = 0;
  let sockMap = new Map();

  ar.map( sock => {   
    
    // check if sock exist 
    if(!sockMap.has(sock)){
      sockMap.set(sock, 1); // add the new sock with one value
    } else {
      sockMap.set(sock, sockMap.get(sock)+1); // increment the value by one
    }
  });

  for (let sock of sockMap.keys()) {
    const sockValues = sockMap.get(sock);
    pairsOfSock += Math.floor(sockValues / 2);
  }

  console.log(sockMap);
  console.log(`Total Sock pairs is: ${pairsOfSock}`);

  return pairsOfSock;

}

function main() {
  sockMerchant(n, arr);
}

main();