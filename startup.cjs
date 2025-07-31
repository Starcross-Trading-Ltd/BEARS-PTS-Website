const { spawn } = require('child_process')
const path = require('path')

console.log('Starting BEARS PTS application...')
console.log('Current directory:', process.cwd())
console.log('Node version:', process.version)

// Start the server
const server = spawn('node', ['server.cjs'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    PORT: process.env.PORT || 8080,
    NODE_ENV: 'production'
  }
})

server.on('error', (error) => {
  console.error('Failed to start server:', error)
  process.exit(1)
})

server.on('exit', (code) => {
  console.log(`Server exited with code ${code}`)
  process.exit(code)
}) 