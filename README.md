# THE ROMANTIC — Bruno Mars (player)

Player estático (HTML/CSS/JS puro) feito só para o álbum *The Romantic* (2026, 9 faixas).
Funciona no GitHub Pages: suba a pasta inteira.

## Estrutura
- `index.html`, `css/style.css`, `css/frame.css` (gerado), `js/` (player.js, ui.js, app.js)
- `data/album.js` — faixas, durações, arquivos de áudio, letras e traduções
- `assets/art/` — recortes REAIS da capa (máscaras de tinta em .webp): medalhão, título, assinatura, correntes, rosas
- `assets/fonts/` — Just Another Hand (Apache 2.0), IM Fell English e IM Fell English SC (OFL); licenças incluídas
- `tools/` — scripts que geram os recortes e o CSS da moldura a partir de `tools/cover-source.png`

## Áudio, letras e tradução
- Áudio em `audio/01.flac` … `audio/09.flac` (ou mude `audio` em cada faixa).
- `lyrics`: texto simples ou LRC (`[01:23.45]linha`) para sincronizar.
- `translation`: LRC com os mesmos tempos (casa em ±0,8 s) ou texto simples, uma linha por linha cantada. O botão **PT** liga/desliga.
- `awards` e `technicalCredits` vazios escondem os botões Paradas / Ficha técnica.

## Como o design funciona
- **Paleta fiel à capa** (croma 0): papel `#FAFAFA`, tinta `#0B0B0B`. Texto secundário e linhas são misturas das duas.
- **Papel e noite**: a mesma gravura em negativo. A troca é um círculo que cresce a partir do botão (View Transitions; sem suporte, troca direto).
- **Moldura da capa em tela**: correntes e rosas recortadas da arte. As correntes andam enquanto toca. A escala vem de `--k` (definida em `js/ui.js`).
- **Medalhão**: o retrato é o botão de tocar/pausar; o anel ao redor é a barra de progresso (clique ou arraste para buscar; teclado funciona pelo campo escondido).
- **Lista**: cada faixa leva uma das rosas da moldura como marcador.
- **Letra**: tela cheia (Esc sai), esconder, tradução. **Tela bloqueada**: Media Session com título, capa e botões de faixa.

## Avisos
- Faixas e durações vieram da Wikipedia (31:30 no total); confira com seus arquivos.
- Compositores e autoria da arte da capa não foram confirmados pelas fontes e por isso não aparecem.
- A capa de origem tem 1900 px. Com uma maior, troque `tools/cover-source.png`, ajuste as caixas em `tools/gerar_recortes.py` se precisar e rode `python3 tools/gerar_recortes.py && python3 tools/gerar_moldura_css.py` (precisa de Pillow, numpy e scipy).
