var map = document.getElementById("map")
var mapx = 0
var mapy = 0
var velocity = 4
map.style.left = mapy
map.style.top = (mapx + "px")

function update(){
    document.addEventListener("keydown",function(event){
        if(event.key == "ArrowDown"){
            mapx -= velocity
            map.style.top = (mapx + "px")
        }
        if(event.key == "ArrowUp"){
            mapx += velocity
            map.style.top = (mapx + "px")
        }
        if(event.key == "ArrowRight"){
            mapy -= velocity
            map.style.left = (mapy + "px")
        }
        if(event.key == "ArrowLeft"){
            mapy += velocity
            map.style.left = (mapy + "px")
        }
    })
}

update()