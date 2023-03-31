import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player(document.querySelector('#vimeo-player'));

currentTime();

player.on('timeupdate', throttle(onPlayClick, 1000));

function onPlayClick(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}

function currentTime() {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
  }
}
