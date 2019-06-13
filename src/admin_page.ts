import { Rating } from './rating'

/**
 * This variable is needed for the "Inline HTML" extension for Visual Studio Code
 * to provide syntax highlighting for HTML and CSS within template strings.
 * @see https://marketplace.visualstudio.com/items?itemName=pushqrdx.inline-html
 */
let html = String.raw

/**
 * Renders the HTML for the `/admin` page based on the given `ratings`.
 */
export function renderAdminPage(ratings: Rating[]): string {
  let ratingCount = ratings.length
  let sumStars = 0
  let oneStar = 0
  let twoStars = 0
  let threeStars = 0
  let fourStars = 0
  let fiveStars = 0

  for (let rating of ratings) {
    sumStars += rating.stars
    switch (rating.stars) {
      case 1:
        oneStar++
        break
      case 2:
        twoStars++
        break
      case 3:
        threeStars++
        break
      case 4:
        fourStars++
        break
      case 5:
        fiveStars++
        break
    }
  }

  let avgStars = sumStars / ratingCount || 0
  let oneStarPercent = (oneStar / ratingCount) * 100 || 0
  let twoStarsPercent = (twoStars / ratingCount) * 100 || 0
  let threeStarsPercent = (threeStars / ratingCount) * 100 || 0
  let fourStarsPercent = (fourStars / ratingCount) * 100 || 0
  let fiveStarsPercent = (fiveStars / ratingCount) * 100 || 0

  return html`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Dashboard</title>
        <link href="styles.css" rel="stylesheet" />
        <style>
          header {
            width: 100%;
            height: 68px;
            padding: 18px 14px 18px 14px;
          }

          header svg {
            width: 86px;
            transform: none !important;
          }

          header h2 {
            display: inline;
            margin: 0;
            text-align: center;
            padding-left: calc(50% - 200px);
          }

          header span {
            float: right;
            line-height: 32px;
            font-weight: 500;
          }

          header button {
            float: right;
            font-size: 17px;
            margin: 0;
            margin-left: 10px;
            background-color: #ea1b0a;
            color: white;
            border: 0;
            border-radius: 9px;
            padding: 3px 15px 5px 15px;
            line-height: 24px;
            font-weight: 500;
            letter-spacing: 0.5px;
            cursor: pointer;
          }

          header button:hover {
            background-color: #cc1407;
          }

          main {
            max-width: 600px;
            margin: 30px auto;
          }

          main h3 {
            text-align: center;
          }

          .stars {
            margin-right: 15px;
          }

          .star {
            font-size: 26px;
            letter-spacing: 2px;
          }

          .side {
            float: left;
            width: 15%;
            margin-top: 10px;
          }

          .middle {
            float: left;
            width: 70%;
            margin-top: 10px;
          }

          .right {
            text-align: right;
          }

          .bar-container {
            width: 100%;
            background-color: #f1f1f1;
            text-align: center;
            color: white;
          }

          .bar-5 {
            width: ${fiveStarsPercent}%;
            height: 18px;
            background-color: mediumseagreen;
          }

          .bar-4 {
            width: ${fourStarsPercent}%;
            height: 18px;
            background-color: dodgerblue;
          }

          .bar-3 {
            width: ${threeStarsPercent}%;
            height: 18px;
            background-color: #1ea2b1;
          }

          .bar-2 {
            width: ${twoStarsPercent}%;
            height: 18px;
            background-color: #e3e000;
          }

          .bar-1 {
            width: ${oneStarPercent}%;
            height: 18px;
            background-color: #ea1b0a;
          }
        </style>
        <link rel="icon" href="favicon.ico" />
      </head>
      <body>
        <svg class="ribbon top" viewBox="0 0 1920 6" preserveAspectRatio="none">
          <path fill="#1ea2b1" d="m 0,0 1305,0 0,6 -1305,0 z"></path>
          <path fill="#e3e000" d="m 1305,0 135,0 0,6 -135,0 z"></path>
          <path fill="#ea1b0a" d="m 1440,0 480,0 0,6 -480,0 z"></path>
        </svg>

        <header>
          <svg class="logo big" viewBox="0 0 96 30">
            <path
              fill="#ea1b0a"
              d="M92.727 24.79a115.456 115.456 0 0 1-1.251 3.82c-.414 1.158-1.203 1.322-2.232 1.322-1.846 0-3.25-.474-3.935-1.053a.708.708 0 0 1-.193-.755c.212-.684.616-1.911 1.069-3.334m-12.36 0c-1.682 1.887-2.971 3.467-3.529 4.13-.597.713-1.471.86-2.5.86-1.26 0-2.617-.716-2.742-.785-.404-.22-.414-.467-.298-.98l.336-1.459c.096-.421.26-1.028.471-1.765h8.263zm-13.071 0c-3.424 5.182-7.762 5.142-12.58 5.142-2.626 0-8.464.03-8.542-5.142h21.122zm-48.49-.57a5.507 5.507 0 0 0 2.963.865 6.319 6.319 0 0 0 3.173-.864h11.821c-.49 2.342-7.32 5.779-13.09 5.779-6.04 0-11.677-2.342-14.735-5.782h9.868zm26.873-8.809c0 .713-.77 2.673-.885 2.962-.703 1.84-2.53 2.137-3.828 2.137-1.934 0-2.597-.74-2.597-1.912 0-.904.712-2.47.808-2.7.875-2.128 2.433-2.361 3.972-2.361 1.308 0 2.53.579 2.53 1.874m-16.563-4.499c0-1.355-.058-3.3-1.048-3.3-3.242 0-8.926 5.282-9.493 5.888-.424.45-.116.414.452.414h7.281c2.577 0 2.808-.466 2.808-3.002zm31.612 1.058c-.674 0-1.684.112-2.146.786-1.711 2.53-2.846 8.855-2.846 10.612 0 1.2.789 1.125 1.828 1.125.615 0 1.596.017 2.145-.599 1.51-1.674 2.809-9.248 2.809-10.614 0-.974-.069-1.31-1.79-1.31zm11.378 12.82c1.125-3.92 3.684-11.622 5.54-16.12.096-.227.182-.416.663-.495.222-.036.954-.217 1.972-.217.75 0 2.203.057 2.924.473 0 0 .01-.012.01 1.289 0 .564.058 2.475 1.741 2.475 2.857 0 8.022-5.211 12.59-5.211 4.021 0 4.925 2.642 4.925 4.687 0 2.396-1.866 8.848-3.203 13.121h-6.54c1.01-3.2 2.271-7.387 2.271-8.578 0-.947-.26-1.654-1.145-1.654-3.721 0-9.628 5.912-13.485 10.235l-8.263-.006zm-25.931 0v-.11c0-2.362 1.933-6.692 3.51-10.8.683-1.744 3.55-7.61 13.332-7.61 4.04 0 9.042.674 9.042 5.36 0 2.889-2.674 9.228-3.54 10.988a19.52 19.52 0 0 1-1.22 2.171H39.632zM18.4 24.22a7.01 7.01 0 0 0 1.75-1.407s3.175-.387 5.204-.387c1.981 0 4.885.336 4.885 1.538 0 .083-.01.17-.018.254H18.4zm-16.004 0C.886 22.525 0 20.566 0 18.488 0 7.942 19.083 0 24.652 0c5.01 0 5.694 8.513 5.694 11.625 0 6.647-3.828 8.024-8.09 8.024h-2.981c-2.992 0-9.003-.187-9.003-.187-.48-.01-.846-.113-.846.187 0 1.472 1.058 3.453 2.838 4.572H2.396z"
            />
          </svg>
          <h2>Admin Dashboard</h2>
          <span>Logged in as admin. <button id="logout">Logout</button></span>
        </header>

        <main>
          <h3>
            <span class="stars">
              <span class="star" style="color: orange">★</span>
              <span class="star" style="color: ${avgStars < 1.5 ? 'black' : 'orange'}">★</span>
              <span class="star" style="color: ${avgStars < 2.5 ? 'black' : 'orange'}">★</span>
              <span class="star" style="color: ${avgStars < 3.5 ? 'black' : 'orange'}">★</span>
              <span class="star" style="color: ${avgStars < 4.5 ? 'black' : 'orange'}">★</span>
            </span>
            <span>${avgStars.toFixed(1)} average, based on ${ratingCount} ratings.</span>
          </h3>

          <!-- Based on https://www.w3schools.com/howto/howto_css_user_rating.asp -->

          <div class="side">
            <div>5 Stars</div>
          </div>
          <div class="middle">
            <div class="bar-container">
              <div class="bar-5"></div>
            </div>
          </div>
          <div class="side right">
            <div>${fiveStars}</div>
          </div>

          <div class="side">
            <div>4 Stars</div>
          </div>
          <div class="middle">
            <div class="bar-container">
              <div class="bar-4"></div>
            </div>
          </div>
          <div class="side right">
            <div>${fourStars}</div>
          </div>

          <div class="side">
            <div>3 Stars</div>
          </div>
          <div class="middle">
            <div class="bar-container">
              <div class="bar-3"></div>
            </div>
          </div>
          <div class="side right">
            <div>${threeStars}</div>
          </div>

          <div class="side">
            <div>2 Stars</div>
          </div>
          <div class="middle">
            <div class="bar-container">
              <div class="bar-2"></div>
            </div>
          </div>
          <div class="side right">
            <div>${twoStars}</div>
          </div>

          <div class="side">
            <div>1 Star</div>
          </div>
          <div class="middle">
            <div class="bar-container">
              <div class="bar-1"></div>
            </div>
          </div>
          <div class="side right">
            <div>${oneStar}</div>
          </div>
        </main>

        <svg class="ribbon bottom" viewBox="0 0 1920 6" preserveAspectRatio="none">
          <path fill="#1ea2b1" d="m 0,0 1305,0 0,6 -1305,0 z"></path>
          <path fill="#e3e000" d="m 1305,0 135,0 0,6 -135,0 z"></path>
          <path fill="#ea1b0a" d="m 1440,0 480,0 0,6 -480,0 z"></path>
        </svg>

        <script>
          document.addEventListener('DOMContentLoaded', function() {
            let logoutButton = document.querySelector('#logout')
            logoutButton.addEventListener('click', function() {
              logout()
            })
            logoutButton.addEventListener('keyup', function(event) {
              if (event.key == 'Enter') {
                logout()
              }
            })
          })
          function logout() {
            let request = new XMLHttpRequest()
            // Logout by sending a request with invalid credentials
            request.open('GET', '/admin', true, 'invalid_username', 'invalid_password')
            request.send()
            request.addEventListener('loadend', function() {
              // Once logged out, go back to homepage
              location = '/'
            })
          }
        </script>
      </body>
    </html>
  `
}
