setTimeout(() => {
    if (document.querySelector('.video-ads.ytp-ad-module').innerHTML) {
        var skipBtn = document.querySelector('div.ytp-ad-text.ytp-ad-skip-button-text');
        if (skipBtn) skipBtn.click();
    }
}, 1000)
