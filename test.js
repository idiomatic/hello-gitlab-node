const http = require('http')

http.get('http://localhost:8000', (resp) => {
    let data = ''
    resp.on('data', (chunk) => data += chunk)
    resp.on('end', () => {
        console.assert(data == "aloha\n")
    })
}).on("error", (err) => {
    console.assert(err == nil)
})
