/*this is not right... but I need to do something!!!*/

cosnt url="http://localhost:10017/shop/";

async function getProducts(){
    try{
        const response= await fetch (url);
        cosnt getResults= await response.json
    }
    catch (error){
        console.log (error);
    }
}

getProducts();