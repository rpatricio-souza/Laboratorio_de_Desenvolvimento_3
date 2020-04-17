document.querySelector("#item1").addEventListener("click", (e)=>{
    var element = document.querySelector("#item1");
    element.setAttribute('animation', 'property: position; dur: 1000; from: 8 0.6 -0.4; to: 0 0.6 -0.4 ;loop: false;');
});

document.querySelector("#item2").addEventListener("click", (e)=>{
    var element = document.querySelector("#item2");
    element.setAttribute('animation', 'property: position; dur: 1000; from: -8 1.6 -0.4; to: 0 1.6 -0.4 ;loop: false;');
});