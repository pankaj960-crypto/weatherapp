//const { title } = require("process");

 /*async function api (){
let request =  fetch("https://goweather.herokuapp.com/weather/Curitiba");
let response = await request.json();
   console.log(response);


}
api()

let options = {
    mehot: "POST",
    Headers: {
        "content-type": "application/json;",
    },
body: json.stringify({
         title:"pankaj kumar",
         body: "bhai",
         userid: 7852,
}),
    
}
*/
let a = [
    "welcome mr roy",
    "what will you do",
    "hackin toll is opening",
    "enter id",
    "your given id id....",
    "your given password is fetching",
    "cracked id faild wrong password",
"yes your id password is cracking",
"yes cracked id",
"hacking successfull",

]; 
 const sleep =  async(seconds)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve (true)},seconds *1000);
    });
 }

 const showHack = async (message) => {
    await sleep(2);
    text.innerHTML = text.innerHTML + message + "<br>";
 }

 (async () => {
    for (let i=0; i <a.length; i++){
        await showHack(a[i]);
    }
 })();