const e=document.querySelector("iframe");new Vimeo.Player(e).on(timeupdate,(()=>localStorage.setItem("videoplayer-current-time",timeupdate.seconds))),console.log(localStorage.getItem("videoplayer-current-time"));
//# sourceMappingURL=02-video.d8cfc52c.js.map
