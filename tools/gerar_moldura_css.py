import json, os
HERE=os.path.dirname(os.path.abspath(__file__)); ROOT=os.path.dirname(HERE)
g=json.load(open(os.path.join(HERE,'geo.json'))); P=g['pieces']; T=g['tiles']
L0,T0,R1,B1=100,84,1788,1786; G=70; YC=(T0+B1)/2
u=lambda n:f'calc(var(--u) * {n:g})'
css=['/* GERADO por scripts/romantic_frame_css.py — geometria medida sobre a capa (1900 px). */',
'/* --k = px de tela por px da capa (definido em js/ui.js; 0.2 é o padrão sem JS). */',
':root { --k: 0.2; --u: calc(var(--k) * 1px); --band: calc(var(--u) * 182); }',
'.frame { position: fixed; inset: 0; z-index: 50; pointer-events: none; }',
'.band { position: absolute; background: var(--paper); }',
f'.band.top {{ left: 0; right: 0; top: 0; height: {u(G+98+6)}; }}',
f'.band.bottom {{ left: 0; right: 0; bottom: 0; height: {u(G+86+6)}; }}',
f'.band.left {{ top: 0; bottom: 0; left: 0; width: {u(G+100+6)}; }}',
f'.band.right {{ top: 0; bottom: 0; right: 0; width: {u(G+108+6)}; }}',
'.chain { position: absolute; background: var(--ink); -webkit-mask-repeat: repeat; mask-repeat: repeat; }',
]
def chain(name,pos,size,tile,axis):
    w,h=tile
    css.append(f'.chain.{name} {{ {pos} -webkit-mask-image: url(../assets/art/chain-{name}.webp); mask-image: url(../assets/art/chain-{name}.webp); '
               f'-webkit-mask-size: {u(w)} {u(h)}; mask-size: {u(w)} {u(h)}; --period: {u(w if axis=="x" else h)}; }}')
chain('top',f'top: {u(G)}; left: {u(G+40)}; right: {u(G+40)}; height: {u(98)};',None,(T['top']['w'],98),'x')
chain('bottom',f'bottom: {u(G)}; left: {u(G+40)}; right: {u(G+40)}; height: {u(86)};',None,(T['bottom']['w'],86),'x')
chain('left',f'left: {u(G)}; top: {u(G+40)}; bottom: {u(G+40)}; width: {u(100)};',None,(100,T['left']['h']),'y')
chain('right',f'right: {u(G)}; top: {u(G+40)}; bottom: {u(G+40)}; width: {u(108)};',None,(108,T['right']['h']),'y')
css.append('.rose { position: absolute; }')
css.append('.rose::before, .rose::after { content: ""; position: absolute; inset: 0; -webkit-mask-size: 100% 100%; mask-size: 100% 100%; -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat; }')
css.append('.rose::before { background: var(--paper); }')
css.append('.rose::after { background: var(--ink); }')
for n,p in P.items():
    pos=[]
    if n in('tl','bl','ml'): pos.append(f'left: {u(G+(p["x0"]-L0))};')
    else: pos.append(f'right: {u(G+(R1-p["x1"]))};')
    if n in('tl','tr'): pos.append(f'top: {u(G+(p["y0"]-T0))};')
    elif n in('bl','br'): pos.append(f'bottom: {u(G+(B1-p["y1"]))};')
    else:
        yc=(p['y0']+p['y1'])/2; pos.append(f'top: calc(50% + {u(yc-YC-p["h"]/2)});')
    css.append(f'.rose-{n} {{ {" ".join(pos)} width: {u(p["w"])}; height: {u(p["h"])}; }}')
    css.append(f'.rose-{n}::before {{ -webkit-mask-image: url(../assets/art/rose-{n}-fill.webp); mask-image: url(../assets/art/rose-{n}-fill.webp); }}')
    css.append(f'.rose-{n}::after {{ -webkit-mask-image: url(../assets/art/rose-{n}.webp); mask-image: url(../assets/art/rose-{n}.webp); }}')
# movimento das correntes (sentido horário) — só enquanto toca
dur_x=40; ratio=T['left']['h']/T['top']['w']
css+=['@keyframes chain-right { to { -webkit-mask-position: var(--period) 0; mask-position: var(--period) 0; } }',
 '@keyframes chain-left  { to { -webkit-mask-position: calc(var(--period) * -1) 0; mask-position: calc(var(--period) * -1) 0; } }',
 '@keyframes chain-down  { to { -webkit-mask-position: 0 var(--period); mask-position: 0 var(--period); } }',
 '@keyframes chain-up    { to { -webkit-mask-position: 0 calc(var(--period) * -1); mask-position: 0 calc(var(--period) * -1); } }',
 f'html.is-playing .chain.top {{ animation: chain-right {dur_x}s linear infinite; }}',
 f'html.is-playing .chain.bottom {{ animation: chain-left {dur_x*T["bottom"]["w"]/T["top"]["w"]:.1f}s linear infinite; }}',
 f'html.is-playing .chain.right {{ animation: chain-down {dur_x*T["right"]["h"]/T["top"]["w"]:.1f}s linear infinite; }}',
 f'html.is-playing .chain.left {{ animation: chain-up {dur_x*T["left"]["h"]/T["top"]["w"]:.1f}s linear infinite; }}',
 '@media (prefers-reduced-motion: reduce) { html.is-playing .chain { animation: none; } }']
open(os.path.join(ROOT,'css','frame.css'),'w').write('\n'.join(css)+'\n')
print('\n'.join(css[:12]))
