const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Northstar — Build with clarity</title>
    <style>
      :root { --ink:#10213b; --muted:#64748b; --blue:#4568f5; --soft:#f5f7ff; --line:#e7ebf4; }
      * { box-sizing:border-box; margin:0; padding:0; }
      body { font-family:Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; color:var(--ink); background:#fff; line-height:1.5; }
      nav { max-width:1160px; margin:auto; height:80px; display:flex; align-items:center; justify-content:space-between; padding:0 24px; }
      .logo { display:flex; align-items:center; gap:10px; font-size:20px; font-weight:800; letter-spacing:-.5px; }
      .mark { width:34px; height:34px; display:grid; place-items:center; color:white; border-radius:11px; background:linear-gradient(135deg,#6d88ff,#4054e9); box-shadow:0 8px 20px #526bf544; }
      .links { display:flex; gap:32px; align-items:center; color:var(--muted); font-size:14px; font-weight:600; }
      .links a { color:inherit; text-decoration:none; }
      .links a:hover { color:var(--blue); }
      .nav-button, .primary { border:0; border-radius:10px; color:white; background:var(--blue); padding:12px 19px; font-weight:700; cursor:pointer; box-shadow:0 8px 18px #4568f52e; transition:transform .2s, box-shadow .2s; }
      button:hover { transform:translateY(-2px); box-shadow:0 12px 24px #4568f544; }
      .hero { max-width:1160px; margin:auto; min-height:540px; display:grid; grid-template-columns:1fr 1fr; gap:65px; align-items:center; padding:65px 24px 85px; }
      .eyebrow { color:var(--blue); text-transform:uppercase; letter-spacing:2px; font-size:12px; font-weight:800; margin-bottom:18px; }
      h1 { max-width:580px; font-size:clamp(42px,5vw,68px); line-height:1.04; letter-spacing:-3px; margin-bottom:24px; }
      h1 span { color:var(--blue); }
      .hero p { max-width:490px; color:var(--muted); font-size:18px; margin-bottom:32px; }
      .actions { display:flex; align-items:center; gap:19px; }
      .secondary { background:none; border:0; color:var(--ink); font-weight:700; cursor:pointer; }
      .visual { position:relative; min-height:370px; display:grid; place-items:center; }
      .orb { position:absolute; width:320px; height:320px; border-radius:50%; background:linear-gradient(145deg,#edf0ff,#dce5ff); }
      .dashboard { position:relative; width:min(430px,100%); padding:20px; border:1px solid #fff; border-radius:18px; background:#fff; box-shadow:0 22px 55px #21336d20; transform:rotate(3deg); }
      .dash-top { display:flex; justify-content:space-between; align-items:center; padding-bottom:18px; border-bottom:1px solid var(--line); font-size:13px; font-weight:800; }
      .dots { display:flex; gap:5px; } .dots i { width:7px; height:7px; border-radius:50%; background:#dbe1ef; }
      .metrics { display:grid; grid-template-columns:1fr 1fr; gap:12px; margin:18px 0; }
      .metric { padding:15px; border-radius:11px; background:var(--soft); } .metric small { color:var(--muted); font-size:11px; } .metric strong { display:block; font-size:23px; margin-top:3px; }
      .chart { height:135px; border-radius:11px; padding:18px 13px 10px; background:linear-gradient(180deg,#f6f8ff,#fff); } .chart svg { width:100%; height:100%; overflow:visible; }
      .section { background:var(--soft); padding:70px 24px; text-align:center; } .section h2 { font-size:32px; letter-spacing:-1px; margin-bottom:10px; } .section > p { color:var(--muted); }
      .features { max-width:1100px; margin:38px auto 0; display:grid; grid-template-columns:repeat(3,1fr); gap:18px; text-align:left; }
      .card { background:#fff; padding:26px; border:1px solid var(--line); border-radius:15px; } .icon { width:40px; height:40px; display:grid; place-items:center; color:var(--blue); background:#edf0ff; border-radius:11px; font-size:20px; margin-bottom:18px; } .card h3 { margin-bottom:8px; font-size:17px; } .card p { color:var(--muted); font-size:14px; }
      footer { max-width:1160px; margin:auto; padding:28px 24px; display:flex; justify-content:space-between; color:var(--muted); font-size:13px; }
      @media (max-width:700px) { .links a { display:none; } .hero { grid-template-columns:1fr; padding-top:45px; gap:25px; } h1 { letter-spacing:-2px; } .visual { min-height:320px; } .features { grid-template-columns:1fr; } footer { flex-direction:column; gap:8px; } }
    </style>
  </head>
  <body>
    <nav><div class="logo"><div class="mark">✦</div> northstar</div><div class="links"><a href="#features">Features</a><a href="#about">About</a><button class="nav-button" onclick="startNow()">Get started</button></div></nav>
    <main>
      <section class="hero" id="about"><div><div class="eyebrow">A better way forward</div><h1>Turn big ideas into <span>real momentum.</span></h1><p>Northstar gives ambitious teams the clarity, tools, and focus to do their best work every day.</p><div class="actions"><button class="primary" onclick="startNow()">Start building&nbsp; →</button><button class="secondary" onclick="learnMore()">See how it works&nbsp; ↗</button></div></div>
        <div class="visual"><div class="orb"></div><div class="dashboard"><div class="dash-top"><span>Workspace overview</span><div class="dots"><i></i><i></i><i></i></div></div><div class="metrics"><div class="metric"><small>Weekly progress</small><strong>84%</strong></div><div class="metric"><small>Tasks completed</small><strong>128</strong></div></div><div class="chart"><svg viewBox="0 0 380 100" preserveAspectRatio="none"><path d="M0 82 C35 74 48 80 75 61 S120 65 147 48 S185 57 215 36 S258 48 282 22 S330 38 380 8" fill="none" stroke="#4568f5" stroke-width="4" stroke-linecap="round"/><path d="M0 82 C35 74 48 80 75 61 S120 65 147 48 S185 57 215 36 S258 48 282 22 S330 38 380 8 V100 H0Z" fill="#4568f5" opacity=".08"/></svg></div></div></div>
      </section>
      <section class="section" id="features"><div class="eyebrow">Everything in one place</div><h2>Make progress feel effortless.</h2><p>Simple tools for meaningful work.</p><div class="features"><article class="card"><div class="icon">◈</div><h3>One clear view</h3><p>See priorities, projects, and progress without the clutter.</p></article><article class="card"><div class="icon">⌁</div><h3>Move as a team</h3><p>Keep everyone aligned with context that is easy to find.</p></article><article class="card"><div class="icon">↗</div><h3>Grow with confidence</h3><p>Turn your activity into insights that guide what comes next.</p></article></div></section>
    </main><footer><strong>✦ northstar</strong><span>© 2025 Northstar. Built for better work.</span></footer>
    <script>function startNow(){ alert('Welcome to Northstar — let’s get started!'); } function learnMore(){ document.querySelector('#features').scrollIntoView({behavior:'smooth'}); }</script>
  </body></html>`);
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));