(function(window, videojs) {
  const player = window.player = videojs('videojs-vr-player');
  player.mediainfo = player.mediainfo || {};
  player.mediainfo.projection = '360';

  const vr = window.vr = player.vr({projection: 'AUTO', debug: true});
}(window, window.videojs));