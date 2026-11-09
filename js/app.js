document.addEventListener("DOMContentLoaded", () => {
    if (typeof window.album === "undefined") {
        console.error("Dados do álbum não encontrados. Certifique-se de que data/album.js foi carregado corretamente.");
        return;
    }

    const player = new Player();
    const ui = new UI(player, window.album);

    player.onTrackChange = (index) => ui.onTrackChange(index);
    player.onProgressUpdate = (current, duration) => ui.onProgressUpdate(current, duration);
    player.onStateChange = () => ui.onStateChange();

    // Mostra a primeira faixa sem tocar
    if (player.tracks.length > 0) {
        player.currentTrackIndex = 0;
        ui.onTrackChange(0);
        player.isPlaying = false;
        ui.updatePlayerControlsState();
        ui.syncPlaying();
    }
});
