const http = require('http');
const { Pool } = require('pg');

const pool = new Pool({
  database: 'abolisionist_mission',
  user: 'deploy',
  host: '/var/run/postgresql'
});

const PORT = 3100;

function parseBody(req) {
  return new Promise(function (resolve, reject) {
    var body = '';
    req.on('data', function (chunk) { body += chunk; });
    req.on('end', function () {
      try { resolve(JSON.parse(body)); }
      catch (e) { reject(e); }
    });
    req.on('error', reject);
  });
}

const server = http.createServer(async function (req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'https://abolitionistmisson.org');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  if (req.method === 'POST' && req.url === '/api/inscricao') {
    try {
      var data = await parseBody(req);

      if (!data.nome || !data.email || !data.cidade) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Campos obrigatórios em falta' }));
      }

      await pool.query(
        'INSERT INTO inscricoes (nome, email, cidade, telefone, como_soube) VALUES ($1, $2, $3, $4, $5)',
        [data.nome, data.email, data.cidade, data.telefone || null, data.como_soube || null]
      );

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true }));
    } catch (err) {
      console.error('Error:', err.message);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Erro interno' }));
    }
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(PORT, '127.0.0.1', function () {
  console.log('API listening on port ' + PORT);
});
