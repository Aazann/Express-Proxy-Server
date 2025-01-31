# Express Proxy Server

This is a simple yet customizable proxy server built using **Express** and **Axios**. It allows users to forward requests to a specified target URL, making it a great choice for API integration, testing, or routing requests through a secure server.

## Features
- **Supports any HTTP method**: GET, POST, PUT, DELETE, PATCH, etc.
- **Forward query parameters**: Any query parameters provided in the request will be forwarded to the target URL.
- **JSON Response**: Returns JSON responses from the target server, or custom error messages if something goes wrong.
- **Request Logging**: Logs every incoming request with details to the console.
- **Extensible**: Can be easily modified to forward request headers or request bodies.

## Prerequisites
Before you begin, ensure that you have **Node.js** installed on your system. If you don’t have it installed, you can download and install it from [Node.js official website](https://nodejs.org/).

## Installation
Follow these steps to get your Express Proxy Server running:

1. **Clone the repository** or copy the script into your project folder.

2. **Install dependencies**:
   In the project directory, run the following command to install required dependencies (`express` and `axios`):
   ```sh
   npm install express axios
   ```

3. **Create `.gitignore`** (Optional, if you plan to use version control):
   Make sure to add `node_modules/` and `package-lock.json` to `.gitignore` to avoid committing them to version control.

## Usage

### Start the server:

1. **Install Dependencies**:
   First, make sure you've installed all required dependencies:
   ```bash
   npm install
   ```

2. **Build the Project**:
   Since you're working with TypeScript, you need to compile the TypeScript files before running the server. You can do this by running the following command:
   ```bash
   npm run build
   ```

3. **Run the Server**:
   After the build, start the server with the compiled JavaScript:
   ```bash
   npm start
   ```

   This will start the server on **port 233** (or any other port defined in your code). If you are running in development mode, you can use `npm run dev` to run the server directly from TypeScript without compiling.

4. **Server Access**:
   The server will be accessible at:
   ```sh
   http://localhost:233
   ```

### Make a request to the proxy:
To forward a request, use the following URL structure:

```sh
http://localhost:233/url?url=https://api.example.com/data
```

This will forward your request to the target URL (e.g., `https://api.example.com/data`), and the response will be returned as JSON.

## API Endpoint

### `GET /url`
This endpoint forwards the incoming request to the target URL specified in the `url` query parameter.

#### Query Parameters:
- `url` (string, required): The target URL to forward the request to. This should be a valid URL.
- Additional query parameters (optional): Any additional query parameters will be forwarded to the target URL.

#### Example Request:
```sh
GET http://localhost:233/url?url=https://jsonplaceholder.typicode.com/posts
```

#### Example Response:
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

### Cloudflare Workers Deployment

[![Deploy with Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Aazann/Express-Proxy-Server)

You can deploy the proxy server directly to Cloudflare Workers by clicking the button above.

### Vercel Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Aazann/Express-Proxy-Server)

Deploy the proxy server to **Vercel** with the button above.

## Error Handling
If an error occurs while making the request to the target URL (e.g., if the target server is down or the URL is invalid), the proxy server returns the following error message:

```json
{
  "error": "Error making request to target URL"
}
```

Additionally, if the `url` query parameter is missing, the server responds with:

```json
{
  "error": "Missing 'url' query parameter"
}
```

## Notes
- **Forwarding Headers and Request Bodies**: Currently, only query parameters are forwarded to the target URL. If you need to forward headers or request bodies (e.g., for POST or PUT requests), the script can be modified to support these.
- **Security Considerations**: Ensure that you validate or sanitize input before passing it to any external services to avoid security risks, such as SSRF (Server Side Request Forgery).

## License
This project is licensed under the **Apache 2.0 License**.

## Contributing
If you'd like to contribute to this project, feel free to fork it and submit a pull request. Here's how you can contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to your branch (`git push origin feature-branch`).
5. Submit a pull request.

---
