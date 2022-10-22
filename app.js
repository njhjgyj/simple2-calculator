// calculator work
function foo1(a){
    var b = document.getElementById('inp1');
    b.value += a;
    
}

function foo2(){
    var c = document.getElementById('inp1');
    c.value = eval(c.value);
}

function clear1(){
    var d = document.getElementById('inp1');
    d.value = 'Cleared';
}
// calculator work finish here