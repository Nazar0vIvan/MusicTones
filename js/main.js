var counter = 0;

function onClickedButton(el){
    counter++;
    el.innerHTML = "Clicked" + counter;

    console.log(el.name)
}