"""Render PNG brand assets (apple-touch-icon, default Open Graph image) from the SVG marks.
Run: python3 tools/make_raster.py  (needs Playwright + Chromium)."""
from playwright.sync_api import sync_playwright
import pathlib
root = pathlib.Path(__file__).resolve().parent.parent / 'public'
og = f'''<body style="margin:0;width:1200px;height:630px;background:#F5F1E8;display:flex;align-items:center;justify-content:center;flex-direction:column">
<img src="file://{root}/brand/wordmark-green.svg" style="width:760px">
<p style="font:600 22px Georgia,serif;color:#4d4f4a;margin-top:48px">Bathroom design and installation in Kensington</p></body>'''
icon = f'<body style="margin:0"><img src="file://{root}/brand/monogram-green-bg.svg" style="width:180px;height:180px;display:block"></body>'
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={'width': 1200, 'height': 630}); pg.set_content(og); pg.wait_for_timeout(200)
    pg.screenshot(path=str(root / 'brand/og-default.png'))
    pg = b.new_page(viewport={'width': 180, 'height': 180}); pg.set_content(icon); pg.wait_for_timeout(200)
    pg.screenshot(path=str(root / 'apple-touch-icon.png'))
    b.close()
print('ok')
