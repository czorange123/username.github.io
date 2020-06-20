
// 监听页面是否滚动到顶端
function handlerScroll() {
  let scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollHeight > 0) {
    document.querySelector('#site-header').className = 'not-at-the-top';
  } else {
    document.querySelector('#site-header').className = 'at-the-top';
  }
}

handlerScroll();
document.addEventListener('scroll', handlerScroll, false);
