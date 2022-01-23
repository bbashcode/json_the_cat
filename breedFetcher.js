const request = require('request');

let userInput = process.argv.slice(2);
let url = 'https://api.thecatapi.com/v1/breeds/search?q=Siberian';

request((url), (error, response, body) => {

    if(error){
      console.log({error});
    }
    console.log(`body: `, body);

    console.log(`type of body`, typeof body);
    
    console.log('--------------------------------------');
    const data = JSON.parse(body);
    console.log(`data`, data);
    console.log(`type of data`, typeof data);
  });
