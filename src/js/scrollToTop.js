/**
 * ページトップへスクロールするボタンの関数
 * ボタンid="scrollTopButton"
 */
document.addEventListener('DOMContentLoaded', () => {
    let scrollTopButton = document.getElementById('scrollTopButton');

    window.addEventListener('scroll', () => {
        if(window.scrollY > 300) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    });
    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    })
})