const server = require('./server');

const port = process.env.PORT || 8000

server.listen(port, () => {
    console.log(`server is running on post: ${port}`)
})