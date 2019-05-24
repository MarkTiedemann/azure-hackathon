import { createServer } from 'http'
import { createReadStream } from 'fs'
import { createRating } from './rating'
import { renderAdminPage } from './admin_page'
import { storeRating, loadRatings } from './database'

/**
 * The HTTP Status Codes used by this server.
 * @see https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
 */
let OK = 200
let BAD_REQUEST = 400
let UNAUTHENTICATED = 401
let NOT_FOUND = 404
let INTERNAL_SERVER_ERROR = 500

/**
 * The HTTP basic authentication credentials used by this server.
 * @see https://en.wikipedia.org/wiki/Basic_access_authentication
 */
let adminUsername = 'admin'
let adminPassword = 'password'
let adminAuthorization = 'Basic ' + Buffer.from(adminUsername + ':' + adminPassword).toString('base64')

let server = createServer(async function(request, response) {
  try {
    switch (request.url) {
      case '/':
        response.writeHead(OK, { 'Content-Type': 'text/html' })
        createReadStream('www/survey.html').pipe(response)
        break

      case '/thanks':
        let buffer: Buffer[] = []
        request.on('data', function(data) {
          buffer.push(data)
        })
        request.on('end', async function() {
          let body = Buffer.concat(buffer).toString()

          let rating = createRating(body)
          if (rating == null) {
            response.writeHead(BAD_REQUEST)
            response.end()
            return
          }

          await storeRating(rating)

          response.writeHead(OK, { 'Content-Type': 'text/html' })
          createReadStream('www/thanks.html').pipe(response)
        })
        break

      case '/admin':
        if (request.headers.authorization != adminAuthorization) {
          response.writeHead(UNAUTHENTICATED, { 'WWW-Authenticate': 'Basic' })
          response.end()
          break
        }

        let ratings = await loadRatings()
        let adminPage = renderAdminPage(ratings)

        response.writeHead(OK, { 'Content-Type': 'text/html' })
        response.end(adminPage)
        break

      case '/favicon.ico':
        response.writeHead(OK, { 'Content-Type': 'image/x-icon' })
        createReadStream('www/favicon.ico').pipe(response)
        break

      case '/font_bold.woff':
        response.writeHead(OK, { 'Content-Type': 'font/woff' })
        createReadStream('www/font_bold.woff').pipe(response)
        break

      case '/font_medium.woff':
        response.writeHead(OK, { 'Content-Type': 'font/woff' })
        createReadStream('www/font_medium.woff').pipe(response)
        break

      case '/font_regular.woff':
        response.writeHead(OK, { 'Content-Type': 'font/woff' })
        createReadStream('www/font_regular.woff').pipe(response)
        break

      case '/styles.css':
        response.writeHead(OK, { 'Content-Type': 'text/css' })
        createReadStream('www/styles.css').pipe(response)
        break

      default:
        response.writeHead(NOT_FOUND)
        response.end()
    }
  } catch {
    response.writeHead(INTERNAL_SERVER_ERROR)
    response.end()
  }
})

/**
 * Starts the HTTP server on port `80`.
 */
export function startServer(): Promise<void> {
  return new Promise(function(resolve) {
    server.listen(80, resolve)
  })
}
