var toggle = document.getElementById('button')
var body = document.querySelector('body')

toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
}

