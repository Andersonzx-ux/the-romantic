"""Gera os recortes reais da capa The Romantic (máscaras de tinta em webp) e o CSS da moldura."""
import os, json
from PIL import Image, ImageFilter
import numpy as np
from scipy import ndimage as ndi

HERE=os.path.dirname(os.path.abspath(__file__)); ROOT=os.path.dirname(HERE)
SRC=os.path.join(HERE,'cover-source.png')
OUT=os.path.join(ROOT,'assets','art')+os.sep
os.makedirs(OUT,exist_ok=True)
rgb=Image.open(SRC).convert('RGB'); L=np.array(rgb.convert('L')).astype(float)
H,W=L.shape

def alpha_ink(box, scale=None):
    x0,y0,x1,y1=box
    a=np.clip((244-L[y0:y1,x0:x1])/(244-30),0,1)
    return a
def save_mask(a, path, size=None):
    img=Image.fromarray((a*255).astype('uint8'),'L')
    if size: img=img.resize(size,Image.LANCZOS)
    rgba=Image.new('RGBA',img.size,(0,0,0,0)); rgba.putalpha(img)
    rgba.save(path,'WEBP',quality=86,method=4)
    return os.path.getsize(path)

# --- trilhos (extensões medidas na capa) ---
rails=dict(top=(340,84,1480,182), left=(100,300,200,790), right=(1680,1120,1788,1600))
# trilho inferior: mede a faixa de tinta abaixo do texto
ink=L<150
p=ink[1665:1840,470:1580].mean(axis=1); ys=[1665+i for i,v in enumerate(p) if v>0.08]
bot_y0,bot_y1=ys[0]-3,ys[-1]+3
rails['bottom']=(470,bot_y0,1580,bot_y1)
print('trilho inferior y',bot_y0,bot_y1)
tiles={}
for name,(x0,y0,x1,y1) in rails.items():
    a=alpha_ink((x0,y0,x1,y1))
    if name in('top','bottom'): a=np.concatenate([a,a[:,::-1]],axis=1)   # espelha: emenda sem costura
    else: a=np.concatenate([a,a[::-1,:]],axis=0)
    sz=save_mask(a,OUT+f'chain-{name}.webp'); tiles[name]=dict(w=a.shape[1],h=a.shape[0],kb=sz//1024)
print('tiles',tiles)

# --- peças da moldura (rosas dos cantos e do meio) ---
pieces=dict(tl=(66,16,306,266), tr=(1505,44,1830,770), bl=(84,1455,425,1826),
            br=(1615,1630,1835,1842), ml=(66,826,270,1096), mr=(1600,870,1856,1096))
geo={}
for name,(x0,y0,x1,y1) in pieces.items():
    a=alpha_ink((x0,y0,x1,y1))
    m=a>0.35
    m=ndi.binary_closing(m,structure=np.ones((3,3)),iterations=9)
    m=ndi.binary_fill_holes(m)
    m=ndi.binary_dilation(m,iterations=3)
    sil=ndi.gaussian_filter(m.astype(float),1.2)
    k1=save_mask(a,OUT+f'rose-{name}.webp'); k2=save_mask(np.clip(sil,0,1),OUT+f'rose-{name}-fill.webp')
    geo[name]=dict(x0=x0,y0=y0,x1=x1,y1=y1,w=x1-x0,h=y1-y0)
    print(name,x1-x0,'x',y1-y0,k1//1024,'KB +',k2//1024,'KB')

def clean(a, ellipse=None, min_area=0):
    """Remove restos da moldura (componentes que tocam a borda) e pontinhos; opcionalmente recorta por elipse."""
    h,w=a.shape
    if ellipse:
        yy,xx=np.mgrid[0:h,0:w]; rx,ry=ellipse
        a=a*(((xx-w/2)/rx)**2+((yy-h/2)/ry)**2<=1)
    m=a>0.3
    lab,n=ndi.label(m,structure=np.ones((3,3)))
    border=set(np.unique(np.concatenate([lab[0,:],lab[-1,:],lab[:,0],lab[:,-1]])))-{0}
    keep=np.ones(n+1,bool); keep[0]=False
    for l in border: keep[l]=False
    if min_area:
        sizes=ndi.sum(m,lab,range(n+1)); keep&=(sizes>=min_area)
    mask=ndi.binary_dilation(keep[lab],iterations=3)
    return a*mask

# --- medalhão, título, assinatura ---
mx0,my0,mx1,my1=363,376,1537,1524
a=clean(alpha_ink((mx0-6,my0-6,mx1+6,my1+6)),ellipse=(587+9,574+9))
print('medalhão',save_mask(a,OUT+'medallion.webp',size=(1200,1200))//1024,'KB')
tx=(232-6,213-6,717+6,653+6); a=clean(alpha_ink(tx),min_area=40); print('título',a.shape,save_mask(a,OUT+'title.webp')//1024,'KB')
ax=(1181-6,1525-6,1638+6,1650+6); a=clean(alpha_ink(ax),min_area=40); print('artista',a.shape,save_mask(a,OUT+'artist.webp')//1024,'KB')

# --- marcadores de rosa (vinheta elíptica tira as pontas de corrente) ---
marks=dict(tl=(70,18,300,258), tra=(1575,50,1832,285), trb=(1505,228,1725,432), ml=(66,826,270,1096),
           mr=(1600,870,1856,1096), bla=(176,1452,392,1642), blb=(180,1630,428,1830), br=(1615,1630,1835,1842))
for name,(x0,y0,x1,y1) in marks.items():
    a=alpha_ink((x0,y0,x1,y1)); h,w=a.shape
    yy,xx=np.mgrid[0:h,0:w]; r=np.sqrt(((xx-w/2)/(w/2))**2+((yy-h/2)/(h/2))**2)
    v=np.clip((1.0-r)/0.12,0,1)
    a=a*v
    # recorte quadrado centrado
    s=max(w,h); canvas=np.zeros((s,s)); canvas[(s-h)//2:(s-h)//2+h,(s-w)//2:(s-w)//2+w]=a
    save_mask(canvas,OUT+f'mark-{name}.webp',size=(220,220))
json.dump(dict(pieces=geo,rails=rails,tiles=tiles),open(os.path.join(HERE,'geo.json'),'w'),indent=1)

# --- capa inteira (Media Session / favicon) ---
rgb.resize((1024,1024),Image.LANCZOS).save(os.path.join(ROOT,'assets','cover.jpg'),quality=88)
rgb.resize((256,256),Image.LANCZOS).save(os.path.join(ROOT,'assets','cover-256.jpg'),quality=88)
print('ok')
