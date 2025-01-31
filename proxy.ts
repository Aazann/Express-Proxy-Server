import express from 'express';
import axios from 'axios';

const app = express();

app.all('/url', async (req, res) => {
  const targetUrl = req.query.url as string;

  if (!targetUrl) {
    return res.status(400).json({ error: 'Missing "url" query parameter' });
  }

  console.log('Now requesting to: ' + targetUrl);

  const queryParams = req.query;

  const { url, ...params } = queryParams;


  try {
    const response = await axios({
      method: req.method, 
      url: targetUrl, 
      headers: {
        "Accept": "application/json",
      },
      params: params
      //headers: req.headers, 
      //data: req.body, 
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ error: 'Error making request to target URL' });
  }
});

const port = 6969;
app.listen(port, () => {
  console.log(`Proxy server running on http://localhost:${port}`);
});
