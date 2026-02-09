import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/fidelity', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
    
    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err)
    })

    mongoose.connection.on('disconnected', () => {
      console.warn('MongoDB disconnected. Attempting to reconnect...')
    })

    process.on('SIGINT', async () => {
      await mongoose.connection.close()
      console.error('MongoDB connection closed through app termination')
      process.exit(0)
    })

    return conn
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`)
    console.log('Continuing without database connection...')
    // Don't exit, allow app to run without DB in development
    if (process.env.NODE_ENV === 'production') {
      process.exit(1)
    }
  }
}

export default connectDB
