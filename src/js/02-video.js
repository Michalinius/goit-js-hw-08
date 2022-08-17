const iframe = document.querySelector("iframe");
const player = new Vimeo.Player(iframe);

player.on(timeupdate, () => localStorage.setItem("videoplayer-current-time",timeupdate.seconds));
console.log(localStorage.getItem("videoplayer-current-time"));
