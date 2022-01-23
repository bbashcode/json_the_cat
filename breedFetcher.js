const request = require('request');
/**
 * api endpoint: https://api.thecatapi.com/v1/breeds?=%27siberian%27 or  https://api.thecatapi.com/v1/breeds?=%27siberian%27
 *  
 * 
 */ 

let userInput = process.argv.slice(2);
let url = 'https://api.thecatapi.com/v1/breeds/search?q=Siberian';

request((url), (error, response, body) => {

    if(error){
      console.log(error);
    }
    console.log(response);
    console.log(body);

  });
