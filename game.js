document.addEventListener("DOMContentLoaded", function() {
    // 動きをつけたいスライダー（親）と、その中の中央判定したい要素（子）のセット
    const sliderTargets = [
        { parent: '.slider-track', child: '.game-link' }, // ゲーム一覧用
        { parent: '.inside-slider', child: 'img' }        // 店内一覧用（直下にimgがあるため）
    ];

    sliderTargets.forEach(target => {
        const sliders = document.querySelectorAll(target.parent);

        sliders.forEach(slider => {
            const items = slider.querySelectorAll(target.child);

            // 中央に来た要素を判定するセンサー
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active'); // 真ん中に来たらactiveをつける
                    } else {
                        entry.target.classList.remove('active'); // 外れたら外す
                    }
                });
            }, {
                root: slider,
                rootMargin: '0px -25% 0px -25%', // 左右25%を削った「中央エリア」で判定
                threshold: 0.1
            });

            items.forEach(item => {
                observer.observe(item);
            });
        });
    });
});