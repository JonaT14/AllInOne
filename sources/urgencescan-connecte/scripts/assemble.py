from pathlib import Path
root=Path(__file__).resolve().parent.parent
s=(root/'source/base.html').read_text()
s=s.replace('</style>','\n'+(root/'source/v2.css').read_text()+'\n'+(root/'source/oauth.css').read_text()+'\n</style>',1)
s=s.replace('</body>','<script>\n'+(root/'source/v2.js').read_text()+'\n</script><script>\n'+(root/'source/central.js').read_text()+'\n</script></body>')
s=s.replace('<title>UrgenceScan — Votre trousse, sous contrôle</title>','<title>UrgenceScan — La trousse prête. L’esprit libre.</title>')
(root/'dist').mkdir(exist_ok=True)
(root/'dist/index.html').write_text(s)
(root/'public').mkdir(exist_ok=True)
(root/'public/app.html').write_text(s)
