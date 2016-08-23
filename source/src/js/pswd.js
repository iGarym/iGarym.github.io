;
(function(window) {
    var input = document.querySelector('.p-main input[type=text]');
    var btn = document.querySelector('.p-main button');
    var resultNode = document.querySelector('.p-main p');
    btn.addEventListener('click', function(e) {
        var _val = input.value.replace(/[a-z]/g, function(e) {
        		return e.toLocaleUpperCase();
        });
        var _tmp = md5(_val).replace(/\d{2,}/g, function(e) {
            return Number(e).toString(16)
        });
        var _typeVal = document.querySelector('input[type=radio]:checked').value;
        var _len = (_typeVal === '2' ? 12 : 9);
        resultNode.innerHTML = _tmp.substr(0 - _len);
    }, false);
})(window);
