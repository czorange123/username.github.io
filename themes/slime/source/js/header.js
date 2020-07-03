
// 监听页面是否滚动到顶端
function handlerScroll() {
  let scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollHeight > 0) {
    document.querySelector('#site-header').className = 'not-at-the-top';
  } else {
    document.querySelector('#site-header').className = 'at-the-top';
  }
}

function backToTop() {
  setTimeout(() => {
    if(document.body.scrollTop > 0) {
      window.scrollTo(0, -1);
      document.body.scrollTop = 0;
    }
    window.scrollTo(0, -1);
    document.body.scrollTop = 0;
  }, 0)
}

handlerScroll();
document.addEventListener('scroll', handlerScroll, false);
window.addEventListener('load', backToTop, false);
