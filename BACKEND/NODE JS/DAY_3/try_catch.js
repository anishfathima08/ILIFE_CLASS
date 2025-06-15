const http = require('http')

const server = http.createServer((req, res) => {
    try{
        if(req.url === '/'){
            res.statusCode = 200;
            res.setHeader('Content-type', 'text/html')
            res.end('<h1>Home Page</h1>')
        }
        else if(req.url === '/error'){
            throw new Error('Something Went Wrong')

        }
        else{
            res.statusCode = 404;
            res.setHeader('Content-type', 'text/html')
            res.end('<h1>Page Not Found</h1>')
        }
    }
    catch(err){
        res.statusCode = 500;
        res.setHeader('Content-type', 'text/html')
        res.end(`<h1>Alert : ${err.message}</h1>`)
    }
})

server.listen(8080, () => {
    console.log('Server Running Successfully')
})