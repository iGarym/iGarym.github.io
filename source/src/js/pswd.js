;
(function(window) {
    var input = document.querySelector('.p-main input[type=text]');
    var btn = document.querySelector('.p-main button');
    var resultNode = document.querySelector('.p-main p');
    var radioVal = document.querySelector('input:checked').value;
    btn.addEventListener('click', function(e) {
        var _typeVal = document.querySelector('input[type=radio]:checked');
        var _val = md5(input.value);
        var _tmp = _val.replace(/\d{2,}/g, function(e) {
            return Number(e).toString(16)
        });
        var _len = (_typeVal === '2' ? 12 : 9);
        resultNode.innerHTML = _tmp.substr(0 - _len);
    }, false);
})(window);
