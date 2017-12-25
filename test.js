const http = require('http')

http.get('http://localhost:8000', (resp) => {
    let data = ''
    resp.on('data', (chunk) => data += chunk)
    resp.on('end', () => console.log(JSON.parse(data).explanation))
}).on("error", (err) => {
    console.log("Error: " + err.message)
})
