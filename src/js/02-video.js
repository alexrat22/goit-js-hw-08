import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player(document.querySelector('#vimeo-player'));

savedCurrentTime();

player.on('timeupdate', throttle(onPlayClick, 1000));

function onPlayClick(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}

function savedCurrentTime() {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
  }
}
