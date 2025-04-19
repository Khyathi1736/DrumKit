// mouse click listener
function buttonClicked(){
    let button=this.innerHTML
    makeSound(button)
    addAnimation(button)
    
}
function makeSound(key){
    switch (key) {
        case "w" || "W":
            var sound=new Audio("./sounds/tom-1.mp3")
            sound.play()
            
            
            break;
        case "a" || "A":
            sound=new Audio("./sounds/tom-2.mp3")
            sound.play()
            break;
        case "s" || "S":
            sound=new Audio("./sounds/tom-3.mp3")
            sound.play()
            break;
        case "d" || "D":
            sound=new Audio("./sounds/tom-4.mp3")
            sound.play()
            break;
        case "j" || "J":
            sound=new Audio("./sounds/snare.mp3")
            sound.play()
            break;
        case "k" || "K":
            sound=new Audio("./sounds/kick-bass.mp3")
            sound.play()
            break;
        case "l" || "L":
            sound=new Audio("./sounds/crash.mp3")
            sound.play()
            break;
    
        default:
            
            break;
    }

}

let buttons=document.querySelectorAll(".drum")

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",buttonClicked) 
}

// Keyboard event listner
document.addEventListener("keydown",function(event){
    makeSound(event.key)
    addAnimation(event.key)
})

function addAnimation(key){
    var activeButton=document.querySelector("."+key)
    activeButton.classList.add("pressed")
    setTimeout(function(){
    activeButton.classList.remove("pressed")},100)

}
