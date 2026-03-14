const http = require('http');
const { Pool } = require('pg');

const pool = new Pool({
  database: 'abolisionist_mission',
  user: 'deploy',
  host: '/var/run/postgresql'
});

const PORT = 3100;
const TOKEN = 'm7Xp2sQ9vLkR4wNj';

function esc(s) {
  if (!s) return '';
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

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
  res.setHeader('Access-Control-Allow-Origin', 'https://abolitionistmission.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  if (req.method === 'POST' && req.url === '/api/inscricao') {
    try {
      var data = await parseBody(req);

      if (!data.nome || !data.email || !data.cidade || !data.pais) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Campos obrigatórios em falta' }));
      }

      await pool.query(
        'INSERT INTO inscricoes (nome, email, cidade, pais, telefone, evento, como_soube) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [data.nome, data.email, data.cidade, data.pais, data.telefone || null, data.evento || null, data.como_soube || null]
      );

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true }));
    } catch (err) {
      console.error('Error:', err.message);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Erro interno' }));
    }
  } else if (req.method === 'GET' && req.url.startsWith('/api/inscricoes')) {
    var urlObj = new URL(req.url, 'http://localhost');
    if (urlObj.searchParams.get('token') !== TOKEN) {
      res.writeHead(403, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Acesso negado' }));
    }
    try {
      var result = await pool.query('SELECT * FROM inscricoes ORDER BY id DESC');
      var rows = result.rows;

      var html = '<!DOCTYPE html><html lang="pt"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">'
        + '<title>Inscrições — Abolitionist Mission</title>'
        + '<style>'
        + '*{margin:0;padding:0;box-sizing:border-box}'
        + 'body{font-family:-apple-system,system-ui,sans-serif;background:#0A0A0A;color:#FAFAFA;padding:40px 24px}'
        + 'h1{font-size:1.4rem;margin-bottom:8px}'
        + '.count{color:#888;font-size:.9rem;margin-bottom:32px}'
        + 'table{width:100%;border-collapse:collapse;font-size:.85rem}'
        + 'th{text-align:left;padding:10px 12px;background:#1A1A1A;color:#BBB;font-weight:600;font-size:.72rem;letter-spacing:1px;text-transform:uppercase;border-bottom:2px solid #333}'
        + 'td{padding:10px 12px;border-bottom:1px solid #1E1E1E;color:#CCC}'
        + 'tr:hover td{background:#141414}'
        + '.empty{text-align:center;padding:60px;color:#666}'
        + '</style></head><body>'
        + '<h1>Inscrições</h1>'
        + '<p class="count">' + rows.length + ' registo' + (rows.length !== 1 ? 's' : '') + '</p>';

      if (rows.length === 0) {
        html += '<p class="empty">Sem inscrições ainda.</p>';
      } else {
        html += '<table><thead><tr><th>ID</th><th>Nome</th><th>Email</th><th>Cidade</th><th>País</th><th>Telefone</th><th>Evento</th><th>Como soube</th><th>Data</th></tr></thead><tbody>';
        for (var i = 0; i < rows.length; i++) {
          var r = rows[i];
          var date = r.created_at ? new Date(r.created_at).toLocaleString('pt-PT') : '—';
          html += '<tr>'
            + '<td>' + (r.id || '') + '</td>'
            + '<td>' + esc(r.nome) + '</td>'
            + '<td>' + esc(r.email) + '</td>'
            + '<td>' + esc(r.cidade) + '</td>'
            + '<td>' + esc(r.pais) + '</td>'
            + '<td>' + esc(r.telefone || '—') + '</td>'
            + '<td>' + esc(r.evento || '—') + '</td>'
            + '<td>' + esc(r.como_soube || '—') + '</td>'
            + '<td>' + date + '</td>'
            + '</tr>';
        }
        html += '</tbody></table>';
      }

      html += '</body></html>';
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(html);
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
