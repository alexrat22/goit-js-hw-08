import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player(document.querySelector('#vimeo-player'));

player.on('timeupdate', throttle(onPlayClick, 1000));

function onPlayClick(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
