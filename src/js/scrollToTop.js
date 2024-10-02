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

/**
 * アンカーリンクまでスムースにスクロールする
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        const target = document.getElementById(href.replace('#', ''));
        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});