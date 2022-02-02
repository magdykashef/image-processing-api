# Image Processing API

## An API that resizes and saves images to user specifications when visiting a URL.

### NPM Scripts
- Install dependencies: ```npm install```
- Start server from dist: ```npm start```
- Start server from src: ```npm run dev```
- Clean dist files & resized assets: ```npm run clean```
- Copy assets files: ```npm run copyAssets```
- Build: ```npm run build```
- Tests: ```npm run test```
- Lint: ```npm run lint```
- Prettier: ```npm run prettier```

### Usage
The server will listen on port 3000:

#### Endpoint to resize images
http://localhost:3000/api/images/?filename=icelandwaterfall&width=500&height=500

Expected query arguments are:
- _filename_: Available filenames are:
  - fjord
  - icelandwaterfall
  - palmtunnel
- _width_: numerical value > 0
- _height_: numerical value > 0
