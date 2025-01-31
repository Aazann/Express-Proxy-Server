# Express Proxy Server

This is a simple proxy server built using Express and Axios. It forwards requests to a specified target URL, allowing users to make requests via this proxy.

## Features
- Accepts any HTTP method (GET, POST, etc.)
- Forwards query parameters to the target URL
- Returns JSON responses
- Logs each request

## Prerequisites
Make sure you have Node.js installed on your system.

## Installation
1. Clone this repository or copy the script.
2. Install dependencies:
   ```sh
   npm install express axios
   ```

## Usage
1. Start the server:
   ```sh
   node server.js
   ```
   The server will run on `http://localhost:233`.

2. Make a request to the proxy:
   ```sh
   http://localhost:233/url?url=https://api.example.com/data
   ```
   This will fetch data from `https://api.example.com/data`.

## API Endpoint
### `GET /url`
**Query Parameters:**
- `url` (string, required) - The target URL to request.
- Additional query parameters will be forwarded to the target URL.

**Example Request:**
```sh
GET http://localhost:233/url?url=https://jsonplaceholder.typicode.com/posts
```

**Example Response:**
```json
[
  {
    "userId": 1,
    "id": 1,
    "title": "sample title",
    "body": "sample content"
  }
]
```

## Deployment on Vercel
This proxy can be deployed on Vercel with a few modifications:
1. Create a `vercel.json` file with the following content:
   ```json
   {
     "routes": [
       { "src": "/url", "dest": "/api/server.js" }
     ]
   }
   ```
2. Move your Express server code into an `api/` directory.
3. Deploy using the Vercel CLI:
   ```sh
   vercel
   ```

## Error Handling
If an error occurs while fetching the target URL, the server returns:
```json
{
  "error": "Error making request to target URL"
}
```

## Notes
- The proxy currently only forwards query parameters. Headers and request bodies are not forwarded.
- You can modify the script to include headers and body forwarding.

## License
This project is licensed under the Apache 2.0 License.

