function makeTracker(numberBalls, baseColor, time) {
    const timeInterval = time / numberBalls;
    const els = [];
    const $el = document.createElement('div');
    $el.style.width = '20px';
    $el.style.height = '20px';
    $el.style.borderRadius = '20px';
    $el.style.backgroundColor = baseColor;
    $el.style.position = 'absolute';
    $el.style.zIndex = 1000;
    els.push($el);
    document.body.appendChild($el);
    for (let i = 0; i < numberBalls - 1; i++) {
        const $nextEl = $el.cloneNode();
        els.push($nextEl);
        document.body.appendChild($nextEl);
        // TODO: opacity
        $nextEl.style.opacity = 1 - i / numberBalls;
    }
    document.body.addEventListener('mousemove', function (ev) {
        for (let i = 0; i < els.length; i++) {
            const element = els[i];
            setTimeout(() => {
                element.style.left = `${ev.pageX}px`;
                element.style.top = `${ev.pageY}px`;
            }, timeInterval * (i + 1));
            
        }
    });
}

makeTracker(8, 'red', 1000);

// const $el1 = $el.cloneNode();
// $el1.style.opacity = 0.8;
// const $el2 = $el.cloneNode();
// $el2.style.opacity = 0.6;
// document.body.appendChild($el);
// document.body.appendChild($el1);
// document.body.appendChild($el2);

// document.body.addEventListener('mousemove', function (ev) {
//     setTimeout(() => {
//         $el.style.left = `${ev.pageX}px`;
//         $el.style.top = `${ev.pageY}px`;
//     }, 200);
//     setTimeout(() => {
//         $el1.style.left = `${ev.pageX}px`;
//         $el1.style.top = `${ev.pageY}px`;
//     }, 400);
//     setTimeout(() => {
//         $el2.style.left = `${ev.pageX}px`;
//         $el2.style.top = `${ev.pageY}px`;
//     }, 600);
// });