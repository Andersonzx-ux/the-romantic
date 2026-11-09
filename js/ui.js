/* UI do player THE ROMANTIC — Bruno Mars
   Anel de progresso ao redor do medalhão, rosas da capa como marcadores,
   correntes que andam enquanto toca e dois modos: papel e noite. */

const ICONS = {
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
    pause: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>',
    repeat: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/></svg>',
    repeatOne: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z"/></svg>'
};

// Rosas recortadas da moldura da capa, uma por faixa (repete a partir da nona).
const ROSES = ['tl', 'mr', 'bla', 'ml', 'tra', 'br', 'blb', 'trb'];
const WORLD_LABEL = { paper: 'Papel', night: 'Noite' };
const WORLD_THEME_COLOR = { paper: '#FAFAFA', night: '#0B0B0B' };
const RING_RADIUS = 52.4;

class UI {
    constructor(player, albumData) {
        this.player = player;
        this.albumData = albumData;
        this.currentLyrics = null;
        this.activeLyricIndex = -1;
        this.ready = false;

        const $ = (id) => document.getElementById(id);
        this.elements = {
            albumMeta: $('album-meta'), tracklist: $('tracklist'),
            currentKicker: $('current-kicker'), currentTitle: $('current-title'), currentComposers: $('current-composers'),
            progressBar: $('progress-bar'), timeCurrent: $('time-current'), timeTotal: $('time-total'),
            btnShuffle: $('btn-shuffle'), btnPrev: $('btn-prev'), btnPlay: $('btn-play-pause'),
            btnNext: $('btn-next'), btnRepeat: $('btn-repeat'), volumeBar: $('volume-bar'),
            lyricsSection: $('lyrics-section'), lyricsTitle: $('lyrics-title'), lyricsComposers: $('lyrics-composers'),
            lyricsContent: $('lyrics-content'), btnToggleLyrics: $('btn-toggle-lyrics'),
            btnExpandLyrics: $('btn-expand-lyrics'), btnTranslation: $('btn-translation'),
            btnAbout: $('btn-about'), btnAwards: $('btn-awards'), btnCredits: $('btn-credits'),
            btnWorld: $('btn-world'), worldLabel: $('world-label'), metaTheme: $('meta-theme-color'),
            medalImg: $('medal-img'), ringFill: $('ring-fill'), ringDot: $('ring-dot'), ringHit: $('ring-hit')
        };

        this.world = 'paper';
        try {
            const saved = localStorage.getItem('romantic_world');
            if (saved === 'paper' || saved === 'night') this.world = saved;
        } catch (e) { /* sem storage */ }

        this.init();
    }

    init() {
        this.setFrameScale();
        window.addEventListener('resize', () => this.setFrameScale());
        this.renderAlbumInfo();
        this.renderTracklist();
        this.renderModals();
        this.setupEventListeners();
        this.setupRing();
        this.elements.btnPlay.innerHTML = ICONS.play;
        this.elements.volumeBar.value = this.player.audio.volume;
        this.updateRangeFill(this.elements.volumeBar, '--volume', this.player.audio.volume * 100);
        this.updateRepeatButton();
        this.elements.btnShuffle.classList.toggle('active', this.player.isShuffle);
        this.applyWorld();
        this.setupMediaSession();

        let showTr = true;
        try { showTr = localStorage.getItem('romantic_translation') !== '0'; } catch (e) { /* padrão: ligado */ }
        this.elements.lyricsSection.classList.toggle('show-tr', showTr);
        this.elements.btnTranslation.setAttribute('aria-pressed', String(showTr));
        this.elements.btnTranslation.addEventListener('click', () =>
            this.setTranslationVisible(!this.elements.lyricsSection.classList.contains('show-tr')));
        requestAnimationFrame(() => { this.ready = true; });
    }

    /* Escala da moldura: quantos px de tela valem 1 px da capa (ver css/frame.css) */
    setFrameScale() {
        const k = Math.min(0.26, Math.max(0.17, window.innerWidth / 4800));
        document.documentElement.style.setProperty('--k', k.toFixed(4));
    }

    formatTime(seconds) {
        if (isNaN(seconds) || !isFinite(seconds)) return '00:00';
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);
        return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }

    parseLRC(rawText) {
        if (!rawText) return null;
        const timeTag = /\[(\d{1,2}):(\d{2})(?:[.:](\d{1,3}))?\]/g;
        const result = [];
        let hasTimestamps = false;
        rawText.split(/\r?\n/).forEach(line => {
            const tags = [...line.matchAll(timeTag)];
            if (tags.length === 0) return;
            hasTimestamps = true;
            const text = line.replace(timeTag, '').trim();
            tags.forEach(tag => {
                const ms = parseInt((tag[3] || '0').padEnd(3, '0').slice(0, 3), 10);
                result.push({ time: parseInt(tag[1], 10) * 60 + parseInt(tag[2], 10) + ms / 1000, text });
            });
        });
        if (!hasTimestamps) return null;
        return result.sort((a, b) => a.time - b.time);
    }

    updateRangeFill(el, prop, percent) {
        el.style.setProperty(prop, `${Math.max(0, Math.min(100, percent))}%`);
    }

    /* ---------- Anel de progresso ao redor do medalhão ---------- */
    setupRing() {
        const { ringHit, medalImg } = this.elements;
        let dragging = false;
        const seekFromEvent = (e) => {
            const box = ringHit.ownerSVGElement.getBoundingClientRect();
            const cx = box.left + box.width / 2, cy = box.top + box.height / 2;
            let a = Math.atan2(e.clientY - cy, e.clientX - cx) + Math.PI / 2; // 0 = topo, sentido horário
            if (a < 0) a += Math.PI * 2;
            const pct = (a / (Math.PI * 2)) * 100;
            this.player.seek(pct);
            this.updateRing(pct);
        };
        ringHit.addEventListener('pointerdown', (e) => {
            dragging = true;
            try { ringHit.setPointerCapture(e.pointerId); } catch (err) { /* ignora */ }
            seekFromEvent(e);
        });
        ringHit.addEventListener('pointermove', (e) => { if (dragging) seekFromEvent(e); });
        const stop = () => { dragging = false; };
        ringHit.addEventListener('pointerup', stop);
        ringHit.addEventListener('pointercancel', stop);
        medalImg.addEventListener('click', () => this.player.togglePlay());
        this.updateRing(0);
    }

    updateRing(pct) {
        const p = Math.max(0, Math.min(100, pct));
        this.elements.ringFill.style.strokeDasharray = `${p} 100`;
        const ang = (p / 100) * Math.PI * 2 - Math.PI / 2;
        this.elements.ringDot.setAttribute('cx', (50 + RING_RADIUS * Math.cos(ang)).toFixed(2));
        this.elements.ringDot.setAttribute('cy', (50 + RING_RADIUS * Math.sin(ang)).toFixed(2));
    }

    /* ---------- Cabeçalho ---------- */
    renderAlbumInfo() {
        const { elements, albumData } = this;
        const n = albumData.tracks.length;
        const parts = [`${n} faixas`];
        if (albumData.releaseDate) parts.push(albumData.releaseDate);
        if (albumData.totalDuration) parts.push(albumData.totalDuration);
        elements.albumMeta.textContent = parts.join('  ·  ');
    }

    /* ---------- Faixas ---------- */
    renderTracklist() {
        const { tracklist } = this.elements;
        tracklist.innerHTML = '';
        this.albumData.tracks.forEach((track, index) => {
            const li = document.createElement('li');
            li.className = 'track-item';
            li.dataset.index = index;
            li.tabIndex = 0;
            li.setAttribute('role', 'button');

            const num = document.createElement('span');
            num.className = 'track-num';
            num.textContent = String(track.number).padStart(2, '0');

            const rose = document.createElement('span');
            rose.className = 'track-rose';
            rose.setAttribute('aria-hidden', 'true');
            // URL absoluta: dentro de variável CSS, caminho relativo seria resolvido a partir de css/
            const roseUrl = new URL(`assets/art/mark-${ROSES[index % ROSES.length]}.webp`, document.baseURI).href;
            rose.style.setProperty('--rose', `url("${roseUrl}")`);

            const details = document.createElement('div');
            details.className = 'track-details';
            const title = document.createElement('span');
            title.className = 'track-title';
            title.textContent = track.title;
            const note = document.createElement('span');
            note.className = 'track-note';
            note.textContent = track.note || '';
            details.append(title, note);

            const dur = document.createElement('span');
            dur.className = 'track-duration';
            dur.textContent = track.duration || '';

            li.append(num, rose, details, dur);
            const play = () => this.player.playTrack(index);
            li.addEventListener('click', play);
            li.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); play(); }
            });
            tracklist.appendChild(li);
        });
    }

    /* ---------- Modais ---------- */
    renderModals() {
        const { albumData, elements } = this;
        const about = document.getElementById('about-content');
        const meta = [];
        if (albumData.releaseDate) meta.push(`<p><strong>Lançamento:</strong> ${albumData.releaseDate}</p>`);
        if (albumData.genre) meta.push(`<p><strong>Gênero:</strong> ${albumData.genre}</p>`);
        if (albumData.labels && albumData.labels.length) meta.push(`<p><strong>Gravadora:</strong> ${albumData.labels.join(', ')}</p>`);
        about.innerHTML = `<p>${albumData.description || ''}</p><br>${meta.join('')}`;

        const awards = albumData.awards || [];
        if (awards.length === 0) elements.btnAwards.hidden = true;
        else document.getElementById('awards-content').innerHTML = awards.map(a =>
            `<div class="award-card"><h3>${a.title}</h3><p class="award-meta">${a.detail || ''}</p></div>`).join('');

        const credits = albumData.technicalCredits || {};
        const keys = Object.keys(credits);
        if (keys.length === 0) elements.btnCredits.hidden = true;
        else document.getElementById('credits-content').innerHTML =
            `<div class="credits-grid">${keys.map(k => `<div class="credit-item"><h4>${k}</h4><p>${credits[k]}</p></div>`).join('')}</div>`;
    }

    /* ---------- Papel e noite ---------- */
    applyWorld(originEl) {
        const root = document.documentElement;
        const world = this.world;
        const paint = () => {
            root.dataset.world = world;
            this.elements.metaTheme.setAttribute('content', WORLD_THEME_COLOR[world]);
        };
        this.elements.worldLabel.textContent = WORLD_LABEL[world];
        this.elements.btnWorld.setAttribute('aria-label', `Modo: ${WORLD_LABEL[world]}. Clique para alternar.`);
        if (root.dataset.world === world) return;

        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!this.ready || reduce || !document.startViewTransition) { paint(); return; }

        // O círculo de tinta nasce no botão que causou a troca
        const el = originEl || this.elements.btnWorld;
        const r = el.getBoundingClientRect();
        root.style.setProperty('--wx', `${r.left + r.width / 2}px`);
        root.style.setProperty('--wy', `${r.top + r.height / 2}px`);
        root.classList.add('vt');
        const vt = document.startViewTransition(paint);
        vt.finished.finally(() => root.classList.remove('vt'));
    }

    toggleWorld() {
        this.world = this.world === 'paper' ? 'night' : 'paper';
        try { localStorage.setItem('romantic_world', this.world); } catch (e) { /* ignora */ }
        this.applyWorld(this.elements.btnWorld);
    }

    /* As correntes da moldura só andam enquanto toca */
    syncPlaying() {
        document.documentElement.classList.toggle('is-playing', !!this.player.isPlaying);
    }

    /* ---------- Tela bloqueada / central de mídia (Media Session) ---------- */
    setupMediaSession() {
        if (!('mediaSession' in navigator)) return;
        const { player } = this;
        const audio = player.audio;
        const set = (action, fn) => { try { navigator.mediaSession.setActionHandler(action, fn); } catch (e) { /* não suportado */ } };

        set('play', () => audio.play());
        set('pause', () => audio.pause());
        set('previoustrack', () => player.prevTrack());
        set('nexttrack', () => player.nextTrack());
        set('seekto', (d) => {
            if (d.fastSeek && 'fastSeek' in audio) audio.fastSeek(d.seekTime); else audio.currentTime = d.seekTime;
            this.updatePositionState();
        });
        // Sem seekbackward/seekforward, o iOS troca os botões de faixa por ±10 s
        set('seekbackward', null);
        set('seekforward', null);
        set('stop', () => { audio.pause(); audio.currentTime = 0; });
    }

    updateMediaMetadata(track) {
        if (!('mediaSession' in navigator) || typeof MediaMetadata === 'undefined') return;
        const abs = (path) => new URL(path, document.baseURI).href;
        const cover = abs(this.albumData.cover || 'assets/cover.jpg');
        const small = abs('assets/cover-256.jpg');
        navigator.mediaSession.metadata = new MediaMetadata({
            title: track.title,
            artist: track.credit || this.albumData.artist || '',
            album: this.albumData.title || '',
            artwork: [
                { src: cover, sizes: '1024x1024', type: 'image/jpeg' },
                { src: cover, sizes: '512x512', type: 'image/jpeg' },
                { src: small, sizes: '256x256', type: 'image/jpeg' }
            ]
        });
    }

    updatePositionState() {
        if (!('mediaSession' in navigator) || !navigator.mediaSession.setPositionState) return;
        const a = this.player.audio;
        if (!isFinite(a.duration) || a.duration <= 0) return;
        try {
            navigator.mediaSession.setPositionState({
                duration: a.duration,
                playbackRate: a.playbackRate || 1,
                position: Math.min(a.currentTime, a.duration)
            });
        } catch (e) { /* valores inválidos momentâneos */ }
    }

    /* ---------- Eventos ---------- */
    setupEventListeners() {
        const { elements, player } = this;
        elements.btnPlay.addEventListener('click', () => player.togglePlay());
        elements.btnNext.addEventListener('click', () => player.nextTrack());
        elements.btnPrev.addEventListener('click', () => player.prevTrack());
        elements.btnShuffle.addEventListener('click', () => {
            elements.btnShuffle.classList.toggle('active', player.toggleShuffle());
        });
        elements.btnRepeat.addEventListener('click', () => { player.toggleRepeat(); this.updateRepeatButton(); });

        // Teclado: o campo de progresso fica escondido sobre o medalhão, mas continua focável
        elements.progressBar.addEventListener('input', (e) => {
            const v = parseFloat(e.target.value);
            player.seek(v);
            this.updateRing(v);
        });
        elements.volumeBar.addEventListener('input', (e) => {
            const v = parseFloat(e.target.value);
            player.setVolume(v);
            this.updateRangeFill(elements.volumeBar, '--volume', v * 100);
        });

        elements.btnWorld.addEventListener('click', () => this.toggleWorld());

        elements.btnToggleLyrics.addEventListener('click', () => {
            const collapsed = elements.lyricsSection.classList.toggle('lyrics-collapsed');
            elements.btnToggleLyrics.setAttribute('aria-expanded', String(!collapsed));
            elements.btnToggleLyrics.setAttribute('aria-label', collapsed ? 'Mostrar letra' : 'Esconder letra');
        });

        const setFocus = (on) => {
            elements.lyricsSection.classList.toggle('lyrics-focus', on);
            document.body.classList.toggle('lyrics-open', on);
            elements.btnExpandLyrics.setAttribute('aria-pressed', String(on));
            elements.btnExpandLyrics.setAttribute('aria-label', on ? 'Sair da tela cheia' : 'Letra em tela cheia');
            if (on) {
                elements.lyricsSection.classList.remove('lyrics-collapsed');
                elements.btnToggleLyrics.setAttribute('aria-expanded', 'true');
            }
            this.activeLyricIndex = -2; // força recentralizar a linha atual
            this.updateActiveLyric(player.audio.currentTime);
        };
        elements.btnExpandLyrics.addEventListener('click', () => setFocus(!elements.lyricsSection.classList.contains('lyrics-focus')));
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && elements.lyricsSection.classList.contains('lyrics-focus')) setFocus(false);
        });

        [['btn-about', 'modal-about'], ['btn-awards', 'modal-awards'], ['btn-credits', 'modal-credits']].forEach(([b, m]) => {
            const modal = document.getElementById(m);
            document.getElementById(b).addEventListener('click', () => modal.showModal());
            modal.addEventListener('click', (e) => { if (e.target === modal) modal.close(); });
            modal.querySelector('.close-modal').addEventListener('click', () => modal.close());
        });

        document.addEventListener('keydown', (e) => {
            if (e.target.closest && e.target.closest('input, textarea, dialog')) return;
            if (e.code === 'Space') { e.preventDefault(); player.togglePlay(); }
            else if (e.code === 'ArrowRight' && e.shiftKey) player.nextTrack();
            else if (e.code === 'ArrowLeft' && e.shiftKey) player.prevTrack();
        });
    }

    updateRepeatButton() {
        const { btnRepeat } = this.elements;
        const mode = this.player.repeatMode;
        btnRepeat.innerHTML = mode === 2 ? ICONS.repeatOne : ICONS.repeat;
        btnRepeat.classList.toggle('active', mode !== 0);
        btnRepeat.setAttribute('aria-label', ['Repetir: desligado', 'Repetir: álbum', 'Repetir: faixa'][mode]);
    }

    updatePlayerControlsState() {
        this.elements.btnPlay.innerHTML = this.player.isPlaying ? ICONS.pause : ICONS.play;
        this.elements.btnPlay.setAttribute('aria-label', this.player.isPlaying ? 'Pausar' : 'Tocar');
    }

    /* ---------- Faixa atual ---------- */
    onTrackChange(index) {
        const { elements } = this;
        const track = this.albumData.tracks[index];
        if (!track) return;
        const total = this.albumData.tracks.length;
        const pad = (n) => String(n).padStart(2, '0');

        elements.currentKicker.textContent = `Faixa ${pad(track.number)} / ${pad(total)}`;
        elements.currentTitle.textContent = track.title;
        elements.currentComposers.textContent = track.credit || this.albumData.artist || '';
        elements.lyricsTitle.textContent = track.title;
        elements.lyricsComposers.textContent = track.credit || this.albumData.artist || '';
        elements.timeTotal.textContent = track.duration ? track.duration.padStart(5, '0') : '00:00';
        elements.timeCurrent.textContent = '00:00';
        elements.progressBar.value = 0;
        this.updateRing(0);

        elements.tracklist.querySelectorAll('.track-item').forEach((li, i) => {
            const active = i === index;
            li.classList.toggle('active', active);
            if (active) li.setAttribute('aria-current', 'true'); else li.removeAttribute('aria-current');
        });

        this.updateMediaMetadata(track);
        this.renderLyrics(track);
        this.updatePlayerControlsState();
    }

    // Junta a tradução às linhas da letra. Aceita tradução em LRC (casa pelo tempo)
    // ou em texto simples (casa pela ordem das linhas não vazias).
    pairTranslation(originalLines, translationRaw) {
        const out = new Array(originalLines.length).fill('');
        const tr = (translationRaw || '').trim();
        if (!tr) return out;
        const trParsed = this.parseLRC(tr);
        if (trParsed && originalLines[0] && originalLines[0].time !== undefined) {
            originalLines.forEach((line, i) => {
                let best = null, bestDiff = 0.8;
                trParsed.forEach(t => {
                    const d = Math.abs(t.time - line.time);
                    if (d <= bestDiff) { best = t; bestDiff = d; }
                });
                if (best) out[i] = best.text;
            });
            return out;
        }
        const plain = tr.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
        let k = 0;
        originalLines.forEach((line, i) => { if (line.text && line.text.trim() && k < plain.length) out[i] = plain[k++]; });
        return out;
    }

    renderLyrics(track) {
        const { lyricsContent, btnTranslation } = this.elements;
        this.currentLyrics = null;
        this.activeLyricIndex = -1;
        const raw = (track.lyrics || '').trim();
        const hasTr = !!(track.translation || '').trim();
        const ok = !!(raw && hasTr);
        btnTranslation.classList.toggle('no-tr', !ok);
        btnTranslation.title = ok ? 'Tradução' : 'Esta faixa ainda não tem tradução';

        const addLine = (container, text, tr, i) => {
            const p = document.createElement('p');
            p.className = 'lyrics-line';
            if (i !== null) p.dataset.index = i;
            const main = document.createElement('span');
            main.className = 'lyrics-main';
            main.textContent = text || ' ';
            p.appendChild(main);
            if (tr) {
                const t = document.createElement('span');
                t.className = 'lyrics-tr';
                t.textContent = tr;
                p.appendChild(t);
            }
            container.appendChild(p);
        };

        if (!raw) {
            lyricsContent.classList.remove('lyrics-synced', 'lyrics-plain');
            lyricsContent.innerHTML = '<p class="empty-state">Letra ainda não adicionada para esta faixa.</p>';
            return;
        }
        const parsed = this.parseLRC(raw);
        lyricsContent.innerHTML = '';
        if (parsed && parsed.length) {
            this.currentLyrics = parsed;
            lyricsContent.classList.add('lyrics-synced');
            lyricsContent.classList.remove('lyrics-plain');
            const trs = this.pairTranslation(parsed, track.translation);
            parsed.forEach((line, i) => addLine(lyricsContent, line.text, trs[i], i));
        } else {
            lyricsContent.classList.remove('lyrics-synced');
            lyricsContent.classList.add('lyrics-plain');
            const lines = raw.split(/\r?\n/).map(t => ({ text: t.trim() }));
            const trs = this.pairTranslation(lines, track.translation);
            lines.forEach((line, i) => addLine(lyricsContent, line.text, trs[i], null));
        }
        lyricsContent.scrollTop = 0;
    }

    setTranslationVisible(on) {
        this.elements.lyricsSection.classList.toggle('show-tr', on);
        this.elements.btnTranslation.setAttribute('aria-pressed', String(on));
        try { localStorage.setItem('romantic_translation', on ? '1' : '0'); } catch (e) { /* ignora */ }
        this.activeLyricIndex = -2; // recentraliza a linha atual com a nova altura
        this.updateActiveLyric(this.player.audio.currentTime);
    }

    updateActiveLyric(currentTime) {
        if (!this.currentLyrics) return;
        let idx = -1;
        for (let i = 0; i < this.currentLyrics.length; i++) {
            if (currentTime >= this.currentLyrics[i].time) idx = i; else break;
        }
        if (idx === this.activeLyricIndex) return;
        this.activeLyricIndex = idx;

        const container = this.elements.lyricsContent;
        const items = container.querySelectorAll('.lyrics-line');
        items.forEach((el, i) => el.classList.toggle('active', i === idx));

        // Rola só o quadro da letra (nunca a página) e só se ele estiver aberto
        if (idx >= 0 && items[idx] && !this.elements.lyricsSection.classList.contains('lyrics-collapsed')) {
            const el = items[idx];
            const top = el.offsetTop - container.clientHeight / 2 + el.clientHeight / 2;
            container.scrollTo({ top, behavior: 'smooth' });
        }
    }

    onProgressUpdate(currentTime, duration) {
        const { elements } = this;
        elements.timeCurrent.textContent = this.formatTime(currentTime);
        if (isFinite(duration) && duration > 0) {
            elements.timeTotal.textContent = this.formatTime(duration);
            const pct = (currentTime / duration) * 100;
            if (document.activeElement !== elements.progressBar) elements.progressBar.value = pct;
            this.updateRing(pct);
        }
        this.updateActiveLyric(currentTime);
        const now = Date.now();
        if (now - (this.lastPosSync || 0) > 1000) { this.lastPosSync = now; this.updatePositionState(); }
    }

    onStateChange() {
        if ('mediaSession' in navigator) {
            navigator.mediaSession.playbackState = this.player.isPlaying ? 'playing' : 'paused';
            this.updatePositionState();
        }
        this.updatePlayerControlsState();
        // pequeno atraso: trocar de faixa pausa e retoma o áudio, e isso não deve piscar as correntes
        clearTimeout(this.playTimer);
        this.playTimer = setTimeout(() => this.syncPlaying(), 220);
    }
}
