const clockRuner = () => {
    const times = document.querySelectorAll(".times");
    const time = new Date();
    times[0].innerText = time.getHours();
    times[1].innerText = time.getMinutes();
    times[2].innerText = time.getSeconds();
}


setInterval(() => {
    clockRuner();
}, 1000)
