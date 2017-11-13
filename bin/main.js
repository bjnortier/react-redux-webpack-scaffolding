#!/usr/bin/env babel-node

import http from 'http'

import httpApp from '../src/server/http'

const normalizePort = (val) => {
  const port = parseInt(val, 10)
  if (isNaN(port) || (port < 0) || (port >= 65535)) {
    console.error(`${val} is not a valid port number`)
    process.exit(1)
  }
  return port
}

const createErrorHandler = (port) => {
  return (error) => {
    if (error.syscall !== 'listen') {
      throw error
    }
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(`port ${port} requires elevated privileges`)
        process.exit(1)
      case 'EADDRINUSE':
        console.error(`port ${port} is already in use`)
        process.exit(1)
      default:
        throw error
    }
  }
}

const httpPort = normalizePort(process.env.PORT || '8000')
httpApp.set('port', httpPort)

const httpServer = http.createServer(httpApp)
httpServer.listen(httpPort)
httpServer.on('error', createErrorHandler(httpPort))
httpServer.on('listening', () => {
  const address = httpServer.address()
  console.log(`http listening ${address.address}:${address.port}`)
})
