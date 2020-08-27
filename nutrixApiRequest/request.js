const https = require('https')
const API_ID = require('nutrixApiID')
const API_KEY = require('nutrix_ApiKey')

module.exports = (data, METHOD, path) => {
    const HOST_NAME = 'trackapi.nutritionix.com'
    const PORT = 443
    const USER_AGENT = 'Nutritionix API/1.0.0'
    const ACCEPT_REQUEST_FROM = '* / *'
    const CACHE_CONTROL = 'no-cache'
    
    const APIRequestHeaders = {
        'User-Agent' : USER_AGENT,
        'Host' : HOST_NAME,
        'Accept' : ACCEPT_REQUEST_FROM,
        'cache-control' : CACHE_CONTROL,
        'x-app-id': API_ID,
        'x-app-key': API_KEY
    }

    let path = ''

    switch (path) {
        case value:
            path = '/v2/search/instant?query=app'
            break;
    
        default:
            break;
    }

    /*
    const APIRequestOptions = {
        hostname: 'trackapi.nutritionix.com',
        port: 443,
        path: '/v2/natural/nutrients',
        method: 'POST',
        headers: APIRequestHeaders
        
    }
    */



    let APIRequestOptions = {
        hostname: HOST_NAME,
        port: PORT,
        path: path,
        method: METHOD,
        headers: APIRequestHeaders,
        
    }

    let APIRequest = https.request(APIRequestOptions, (resp) => {
        let data = '';
        
        resp.on('data', (chunk) => {
            data += chunk;
        });    
        
        resp.on('end', () => {
            let json = JSON.parse(data);

        console.log(json);
        //    console.log('tags:', json.foods[0].tags)
        //    console.log('full_nutrient:', json.foods[0].full_nutrients)
        //    console.log('alt_measures:', json.foods[0].alt_measures)



        //    console.log(json.common.length);
        //    console.log(json.branded.length);
            return {
                statusCode: resp.statusCode,
                headers: resp.headers,
                response: json
            };
        });

    })

    let data = {query: 'Apple'}
    data = JSON.stringify(data);

    if (APIRequestOptions.method === 'POST') {
        APIRequest.write(data)
    }

    APIRequest.end();

}