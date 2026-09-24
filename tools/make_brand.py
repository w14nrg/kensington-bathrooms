"""Generate outlined SVG brand marks (wordmark + KB monogram) from the site fonts.
Run: python3 tools/make_brand.py  (needs fontTools; uses system Lora + Lato sources)."""
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
import os
LORA='/usr/share/fonts/truetype/google-fonts/Lora-Variable.ttf'
LATO='/usr/local/lib/python3.12/dist-packages/mkdocs/themes/readthedocs/css/fonts/lato-bold.woff'
serif=instantiateVariableFont(TTFont(LORA),{'wght':480})
sans=TTFont(LATO)
def run(font,text,size,x0,y0,track):
    gs=font.getGlyphSet(); cmap=font.getBestCmap(); upm=font['head'].unitsPerEm; sc=size/upm
    parts=[]; x=x0
    for ch in text:
        g=cmap[ord(ch)]; pen=SVGPathPen(gs)
        gs[g].draw(TransformPen(pen,(sc,0,0,-sc,x,y0)))
        d=pen.getCommands()
        if d: parts.append(d)
        x+=gs[g].width*sc+track*size
    return ' '.join(parts), x-track*size
def mark(colour_main,colour_rule,colour_sub,name,bg=None):
    t,w=run(serif,'KENSINGTON BATHROOMS',40,0,40,0.16)
    s,sw=run(sans,'DESIGN · SUPPLY · INSTALLATION',11,0,0,0.32)
    # centre subline under wordmark
    off=(w-sw)/2
    s,_=run(sans,'DESIGN · SUPPLY · INSTALLATION',11,off,78,0.32)
    W=round(w+2); H=84
    rect=f'<rect width="{W}" height="{H}" fill="{bg}"/>' if bg else ''
    svg=f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}" role="img" aria-label="Kensington Bathrooms">{rect}<path fill="{colour_main}" d="{t}"/><rect x="{W/2-36:.1f}" y="55" width="72" height="1" fill="{colour_rule}"/><path fill="{colour_sub}" d="{s}"/></svg>'''
    open(f'public/brand/{name}.svg','w').write(svg)
mark('#21362D','#B29361','#222321','wordmark-green')
mark('#F5F1E8','#B29361','#F5F1E8','wordmark-ivory')
mark('#000000','#000000','#000000','wordmark-black')
def mono(name,fg,bg,rule):
    k,kw=run(serif,'K',120,0,0,0); b,bw=run(serif,'B',120,0,0,0)
    # K and B side by side with tight spacing, centred in 256 square
    gap=4; total=kw+gap+bw; x0=(256-total)/2
    k,_=run(serif,'K',120,x0,168,0); b,_=run(serif,'B',120,x0+kw+gap,168,0)
    rect=f'<rect width="256" height="256" rx="0" fill="{bg}"/>' if bg else ''
    svg=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" role="img" aria-label="KB">{rect}<path fill="{fg}" d="{k} {b}"/><rect x="88" y="192" width="80" height="2" fill="{rule}"/></svg>'
    open(f'public/brand/{name}.svg','w').write(svg)
mono('monogram-green-bg','#F5F1E8','#21362D','#B29361')
mono('monogram-green','#21362D',None,'#B29361')
os.makedirs('public',exist_ok=True)
import shutil; shutil.copy('public/brand/monogram-green-bg.svg','public/favicon.svg')
print('ok')
