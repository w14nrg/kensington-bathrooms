"""Interaction checks: drawer, validation, mobile menu, heading outline, weights."""
import subprocess, time, json
from playwright.sync_api import sync_playwright
srv = subprocess.Popen(['node', 'serve.mjs', '4321'], stdout=subprocess.DEVNULL); time.sleep(0.8)
try:
  with sync_playwright() as p:
    b = p.chromium.launch()
    # Desktop drawer
    pg = b.new_page(viewport={'width': 1440, 'height': 900}, reduced_motion='reduce')
    events=[]
    pg.goto('http://localhost:4321/'); pg.wait_for_load_state('networkidle')
    pg.evaluate("document.addEventListener('kb:track', e => (window.__ev=(window.__ev||[])).push(e.detail.event))")
    pg.click('.site-header__actions [data-open-drawer]'); pg.wait_for_timeout(200)
    pg.screenshot(path='screenshots/drawer-desktop.png')
    print('drawer open:', pg.evaluate("document.getElementById('contact-drawer').open"), 'focus in drawer:', pg.evaluate("document.getElementById('contact-drawer').contains(document.activeElement)"))
    pg.click('#contact-drawer button[type=submit]'); pg.wait_for_timeout(100)
    print('callback errors:', pg.evaluate("[...document.querySelectorAll('#contact-drawer .field__error:not([hidden])')].map(e=>e.textContent)"))
    pg.fill('#cb-name','Test Person'); pg.fill('#cb-tel','020 7946 0000'); pg.click('#contact-drawer button[type=submit]'); pg.wait_for_timeout(100)
    print('callback status:', pg.inner_text('#contact-drawer .form__status'))
    pg.keyboard.press('Escape'); pg.wait_for_timeout(100)
    print('closed:', not pg.evaluate("document.getElementById('contact-drawer').open"), 'focus returned:', pg.evaluate("document.activeElement.textContent.trim()"))
    print('events:', pg.evaluate('window.__ev'))
    # Consultation validation
    pg.click('#consultation button[type=submit]'); pg.wait_for_timeout(100)
    pg.fill('#home-email','not-an-email'); pg.fill('#home-postcode','W14'); pg.click('#consultation button[type=submit]'); pg.wait_for_timeout(100)
    errs=pg.evaluate("[...document.querySelectorAll('#consultation .field__error:not([hidden])')].map(e=>e.textContent)")
    print('consult errors:', errs, '| focused:', pg.evaluate('document.activeElement.id'))
    pg.locator('#consultation').screenshot(path='screenshots/form-errors.png')
    # Outline + a11y basics
    print('headings:', json.dumps(pg.evaluate("[...document.querySelectorAll('h1,h2,h3')].map(h=>h.tagName+': '+h.textContent.trim().slice(0,50))")))
    print('unlabelled controls:', pg.evaluate("[...document.querySelectorAll('input:not([type=hidden]),select,textarea')].filter(i=>!i.labels.length).map(i=>i.id)"))
    print('buttons without name:', pg.evaluate("[...document.querySelectorAll('button,a')].filter(e=>!(e.textContent.trim()||e.getAttribute('aria-label'))).length"))
    print('h1 count:', pg.evaluate("document.querySelectorAll('h1').length"))
    # Mobile drawer + menu
    m = b.new_page(viewport={'width': 390, 'height': 844}, device_scale_factor=2, reduced_motion='reduce')
    m.goto('http://localhost:4321/'); m.wait_for_load_state('networkidle')
    m.screenshot(path='screenshots/home-mobile-390-fold.png')
    m.click('.mobile-bar [data-open-drawer]'); m.wait_for_timeout(200); m.screenshot(path='screenshots/drawer-mobile.png')
    m.keyboard.press('Escape'); m.click('.menu-toggle'); m.wait_for_timeout(100); m.screenshot(path='screenshots/menu-mobile.png')
    # Tap targets under 44px on mobile
    small=m.evaluate("[...document.querySelectorAll('a,button,summary,input,select')].filter(e=>{const r=e.getBoundingClientRect();return r.width&&r.height&&r.height<44&&getComputedStyle(e).display!=='inline'}).map(e=>(e.className||e.tagName)+':'+Math.round(e.getBoundingClientRect().height)).slice(0,12)")
    print('small tap targets (block-level):', small)
    b.close()
finally:
  srv.terminate()
