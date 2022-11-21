document.getElementById("buttom").addEventListener("click", function(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    let i = 0;
    while(randomColor.length< 6){
        randomColor + randomColor[i];
        i ++;
    }
    const color = "#" + randomColor;
    document.querySelector(":root").style.setProperty("--color", color);
    document.getElementById("back").innerText="background-color : " + color;
})