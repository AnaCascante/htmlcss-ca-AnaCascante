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


/* to allow cross-origin requests from your headless application - use twenty twenty-one as headless use the following js code!:  

add_action( 'rest_api_init', function () {
    remove_filter( 'rest_pre_serve_request', 'rest_send_cors_headers' );
    add_filter( 'rest_pre_serve_request', function( $value ) {
        header( 'Access-Control-Allow-Origin: *' );
        header( 'Access-Control-Allow-Methods: GET, POST, OPTIONS' );
        header( 'Access-Control-Allow-Credentials: true' );
        return $value;
    });
}, 15 );

*/