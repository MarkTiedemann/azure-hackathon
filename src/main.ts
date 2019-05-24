import { connectDatabase } from './database'
import { startServer } from './server'

/**
 * The `main` function. This is the entrypoint for the program.
 */
async function main(): Promise<void> {
  await connectDatabase()
  console.log('> database connected')

  await startServer()
  console.log('> server started')
}

main()
