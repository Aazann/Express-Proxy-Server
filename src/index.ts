import express, { Request, Response } from 'express';
import axios from 'axios';

const app = express();

// Middleware to parse JSON request bodies, if needed
app.use(express.json());

// Route handler with async logic, using proper typing for req and res
app.all('/url', async (req: Request, res: Response): Promise<void> => {
  const targetUrl = req.query.url as string;

  // Check if 'url' query parameter is provided
  if (!targetUrl) {
    // Send a 400 status and an error message if 'url' is missing
    res.status(400).json({ error: 'Missing "url" query parameter' });
    return;  // Ensure the function doesn't continue executing after sending the response
  }


  console.log('Now requesting to: ' + targetUrl);

  const queryParams = req.query;
  const { url, ...params } = queryParams;

  try {
    // Make the HTTP request to the target URL using Axios
    const response = await axios({
      method: req.method,
      url: targetUrl,
      headers: {
        "Accept": "application/json",
      },
      params: params,
    });

    // Send the response from the target API back to the client
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error occurred:', error);
    // Send error response if the request fails
    res.status(500).json({ error: 'Error making request to target URL' });
  }
});

// Set the server port
const port = 6969;
app.listen(port, () => {
  console.log(`Proxy server running on http://localhost:${port}`);
});
