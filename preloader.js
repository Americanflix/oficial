window.onload = function(){
    var div = document.getElementById('preload');
    preload(div, 50);
};
function preload(el, interval){
    var op = 1;
    var timer = setInterval(function () {
        if (op <= 0.0){
            clearInterval(timer);
            el.style.display = 'none';
            el.className = '';
        }
        el.style.opacity = op;
        op -= op * 0.0;
    }, interval);
}
// quando o player cair, troque o valor 0.1 para 0.0 assim ele fica carregando infinitamente
