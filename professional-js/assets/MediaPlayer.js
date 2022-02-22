function MediaPlayer (config) {
    this.media = config.element
  }

  MediaPlayer.prototype.play = function () {
    if (this.media.paused) {
      this.media.play();
    }
    else {
      this.media.pause();
    }
  } 

  export default MediaPlayer;