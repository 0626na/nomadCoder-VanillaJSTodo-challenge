const clock = document.querySelector(".clock");

function realTime() {
  const time = new Date();
  const hour = time.getHours().toString().padStart(2, 0);
  const minute = time.getMinutes().toString().padStart(2, 0);
  const second = time.getSeconds().toString().padStart(2, 0);

  clock.innerText = `${hour}:${minute}:${second}`;
}

realTime();
setInterval(realTime, 1000);
