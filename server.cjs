const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 8080

console.log('=== BEARS PTS Server Starting ===')
console.log('Current directory:', process.cwd())
console.log('Node version:', process.version)
console.log('Port:', PORT)
console.log('Environment:', process.env.NODE_ENV || 'development')

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')))

// Handle client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT}`)
  console.log(`✅ Environment: ${process.env.NODE_ENV || 'development'}`)
  console.log(`✅ Process ID: ${process.pid}`)
  console.log(`✅ Server ready to accept connections`)
})

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully')
  process.exit(0)
})

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully')
  process.exit(0)
})

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error)
  process.exit(1)
})

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason)
  process.exit(1)
}) 