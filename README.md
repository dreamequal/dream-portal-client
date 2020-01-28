# Dream Portal Client

This is the Dream Portal Client (DPC) SPA. It's buit using React + Redux and connects to the [Dream Portal Server](https://github.com/noahbuscher/dream-portal-server) to handle, validate, and store data.

## Development

It's quite easy to get a local instance of DPC running on your machine. Just clone this repository, run `npm install`, and start the development server with `npm start`. This will kick off the Babel transpiling and will have a local server running that will watch your files and live-reload as you edit them. Then just visit `http://localhost:3000` to get started!

## Testing

To start DPC's test suite, simply run `npm test`.

## Building

Building DPC into a SPA with client-side routing is as easy as `npm run build`.

## Deployment

To deploy DPC to a Heroku instance, just follow these steps:
1. Use `heroku create` in your cloned repo to generate a new Heroku app
2. Push your repo up with `git push heroku master`
3. DPC will build on Heroku which means you can set your config env vars in the Heroku console instead of locally

_Note: Because DPC uses capitalized directory names, so be sure to set Git to preserve capitalization by running `git config core.ignorecase false` locally before pushing._
