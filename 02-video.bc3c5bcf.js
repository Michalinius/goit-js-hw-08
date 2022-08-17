!function(){var e=document.querySelector("iframe");new Vimeo.Player(e).on(timeupdate,(function(){return localStorage.setItem("videoplayer-current-time",timeupdate.seconds)})),console.log(localStorage.getItem("videoplayer-current-time"))}();
//# sourceMappingURL=02-video.bc3c5bcf.js.map
