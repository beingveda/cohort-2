var btn = document.querySelector('button');

var main = document.querySelector('main')

var arr = ['Hey ! I am Vedant', 'Sheryians is best', 'Sarthak Bhaiya is Best', 'Harsh Bhaiya is best','JS is Love','I have got 30 LPA package', 'loda lassan'];
 
btn.addEventListener('click',function(){
    var h1 = document.createElement('h1')
    var a = Math.floor(Math.random()*arr.length)
    var x = Math.floor(Math.random()*100)
    var y = Math.floor(Math.random()*100)
    var r = Math.floor(Math.random()*361)
    var scl = Math.floor(Math.random()*4)
    h1.innerHTML = arr[a]
    h1.style.position = 'absolute'
    h1.style.left = x+'%'
    h1.style.top = y+'%'
    h1.style.rotate = r+'deg'
    h1.style.scale = scl
    main.appendChild(h1);
})