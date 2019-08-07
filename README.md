# the-express-express

## Base

Do all of your javascript work in one file (`server.js`). No need to break things out into other files yet.

- Add a `.gitignore` file that ignores will not commit your `/node_modules` folder
- Bring `express` into your project using npm (see comments at top of server.js for help)
- Your application should run on `localhost:5000`
- the route `/` should return and `index.html` file that says `Welcome to the Express Express`
- `localhost:5000/train` should return the list of all trains
- `localhost:5000/first-train` should return the first train object in the array
- `localhost:5000/last-train` should return the last train object in the array

## Stretch

- `localhost:5000/count` should return the number of trains in the array
- `localhost:5000/random` should return the last train object in the array
- Move the list of trains into `modules/trains.js`
- Moment is a common javascript module used for time. `npm install moment` and use it to show the time of the next train. Trains run every ten minutes starting at the top of the hour. So visiting `localhost:5000/next` at 2:35pm should should `2:40pm` as the result.
