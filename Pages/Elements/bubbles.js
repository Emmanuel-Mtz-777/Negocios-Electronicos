const bubbles=()=>{
    const containBubbles = document.querySelector(".bubbles");
    const numBubbles = Math.floor(window.innerWidth / 50);  
    containBubbles.innerHTML = "";  

    for (let i = 0; i < numBubbles; i++) {
        const bubble = document.createElement('span');

        const randomSpeed = Math.random() * 10 + 5;  
        bubble.style.setProperty('--i', `${randomSpeed}s`);
        containBubbles.appendChild(bubble);
    }
}

window.onload = bubbles;


window.onresize = bubbles;
