"""Full-page screenshots at review viewports. Run with the preview server on :4321."""
import sys, subprocess, time
from playwright.sync_api import sync_playwright
path = sys.argv[1] if len(sys.argv) > 1 else '/'
views = {'desktop-1440': (1440, 900, 1), 'laptop-1280': (1280, 800, 1), 'tablet-820': (820, 1180, 1), 'mobile-390': (390, 844, 2), 'mobile-360': (360, 740, 2)}
only = sys.argv[2:] or list(views)
srv = subprocess.Popen(['node', 'serve.mjs', '4321'], stdout=subprocess.DEVNULL)
time.sleep(0.8)
try:
  with sync_playwright() as p:
      b = p.chromium.launch()
      for name in only:
          w, h, s = views[name]
          pg = b.new_page(viewport={'width': w, 'height': h}, device_scale_factor=s, reduced_motion='reduce')
          pg.goto('http://localhost:4321' + path); pg.wait_for_load_state('networkidle'); pg.wait_for_timeout(300)
          ov = pg.evaluate('document.documentElement.scrollWidth > window.innerWidth')
          pg.screenshot(path=f'screenshots/home-{name}.png', full_page=True)
          pg.screenshot(path=f'screenshots/home-{name}-fold.png')
          print(name, 'horizontal overflow' if ov else 'no overflow')
      b.close()

finally:
  srv.terminate()
