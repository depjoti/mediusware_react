const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy middleware configuration
const apiProxy = createProxyMiddleware({
    target: 'http://contact.mediusware.com',
    changeOrigin: true,
});

// Proxy API requests
app.use('/api', apiProxy);

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Proxy server is running on port ${port}`);
});
