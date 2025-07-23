export default async function handler(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
    <html>
      <head>
        <title>Subdomain Takeover Successful</title>
        <style>
          body {
            background-color: #0f0f0f;
            color: #00ff99;
            font-family: monospace;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            text-align: center;
            padding: 20px;
          }
          .box {
            border: 2px dashed #00ff99;
            padding: 40px;
            border-radius: 10px;
          }
          h1 {
            font-size: 2rem;
          }
        </style>
      </head>
      <body>
        <div class="box">
          <h1>💥 Pwned by 0xVendetta 💥</h1>
          <p>This is a security report, not an attack.<br>
          Please decommission or secure this subdomain ASAP.</p>
        </div>
      </body>
    </html>
  `);
}
