const https = require('https')
const config = require('config')
const nutrionix = config.get('nutritionix')


module.exports = (query, METHOD, pathName) => {
    return new Promise ((resolve, reject) => {
        let headers = {}
        headers['User-Agent'] = nutrionix.USER_AGENT
        headers['Host'] = nutrionix.HOST_NAME
        headers['Accept'] = nutrionix.ACCEPT_REQUEST_FROM
        headers['cache-control'] = nutrionix.CACHE_CONTROL
        headers['x-app-id'] = nutrionix.API_ID
        headers['x-app-key'] = nutrionix.API_KEY
        
        let options = {}
        options['hostname'] = nutrionix.HOST_NAME
        options['port'] = nutrionix.PORT
        options['path'] = '1'
        options['method'] = METHOD
        options['headers'] = headers
        
        let path = ''

        switch (pathName) {
            case 'getList':
                options['path'] = `/v2/search/instant?query=${query}`
                break;
            case 'getProductProperties':
                options['path'] = '/v2/natural/nutrients'
                break;
            case 'getBrandedProductProperties':
                options['path'] = `/v2/search/item?nix_item_id=${query}`
                break;
            default:
                path = false
                break;
        }

        let APIRequest = https.request(options, (resp) => {
            let data = '';
            
            resp.on('data', (chunk) => {
                data += chunk;
            });    
            
            resp.on('end', () => {
                let json = JSON.parse(data);

                resolve(json)
            });

            resp.on('error', (error) => {
                reject(error);
            });

        })

        let data = {query: query}
        data = JSON.stringify(data);

        if (options.method === 'POST') {
            APIRequest.write(data)
        }

        APIRequest.end();
    })

}
