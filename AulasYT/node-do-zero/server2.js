import { createServer } from 'node:http'

const server = createServer((request, response)=>{
    console.log('hello world');
})

server.listen(3333)
