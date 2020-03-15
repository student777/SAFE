var intervalID = setInterval(() => {
    var div = document.querySelector('.video-ads.ytp-ad-module');
    if (!div || !div.innerHTML) return; // not loaded
    var skipBtn = document.querySelector('div.ytp-ad-text.ytp-ad-skip-button-text');
    skipBtn.click();
    clearInterval(intervalID);
}, 1000);

document.addEventListener('keydown', (e) => {
    if (e.key === 's')  document.querySelector('div.ytp-ad-text.ytp-ad-skip-button-text').click();
});