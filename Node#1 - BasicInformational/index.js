const http = require('http');
const fs = require('fs');
const PORT = 5000;

const server = http.createServer((req, res) => {
  let filePath = '.' + req.url + '.html';

  // If the URL is the root, set filePath to 'index.html'
  if (filePath === './.html') {
    filePath = './index.html';
  }

  const contentType = 'text/html';

  // Read the requested file from the file system
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // If file not found (ENOENT), serve the 404 page
        fs.readFile('./404.html', (err, content) => {
          // Set the response status to 200 and content type to text/html
          res.writeHead(200, { 'Content-Type': contentType });
          // Send the 404.html content as the response
          res.end(content, 'utf8');
        });
      } else {
        // For other errors, set response status to 500 (Server Error)
        res.writeHead(500);
        // Send an error message as the response
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // If no error, set response status to 200 and content
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

