var dpr = window.devicePixelRatio || 1,
    fontEl = document.createElement('style'),
    rem = document.documentElement.clientWidth / 100;
// 设置data-dpr属性，留作的css hack之用
document.documentElement.setAttribute('data-dpr', dpr);
// 动态写入样式
document.documentElement.firstElementChild.appendChild(fontEl);
fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';
