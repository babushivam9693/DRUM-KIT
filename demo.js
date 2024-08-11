var numberOfDrumButtons=document.
querySelectorAll(".drum").length;
for(var i=0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       console.log("string is",this.innerHTML)
        var buttonInnerHtml=this.innerHTML;
        // alert(buttonInnerHtml)
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}
document.addEventListener("keypress", function(event){
    console.log(event.key)
        makeSound(event.key.toUpperCase());
        // buttonAnimation(event.key);
    });

    function makeSound(key){
        switch(key){
            case"S":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

            case"H":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

            case"I":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

            case"V":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

            case"A":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;

            case"M":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

            default:console.log(key);
        }
    }
    function buttonAnimation(currentkey){
        console.log("currentkey is :", currentkey)
        var activeButton =document.querySelector("."+ currentkey);
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        },100)
    }
