const zodiacSign = [
    'aries',
    'taurus',
    'gemini',
    'cancer',
    'leo',
    'virgo',
    'libra',
    'scorpio',
    'sagittarius',
    'capricorn',
    'aquarius',
    'pisces'
]

const signCardContainer = document.getElementById('sign-card-container');
let containerInitWidth = 0;
let scrollSpeed = null;
let scrollPos = 0;
let mode = null;

if (window.screen.width > 1140) {
    scrollSpeed = 0.85;
} else if (window.screen.width > 768) {
    scrollSpeed = 0.7;
} else if (window.screen.width > 480) {
    scrollSpeed = 0.55;
} else {
    scrollSpeed = 0.4;
}



for (let i = 0; i < zodiacSign.length; i++) {
    createSignCard(i);
}

containerInitWidth = signCardContainer.offsetWidth;

animateScroll();



function createSignCard(index, mode = null) {
    let scrollClassIndex = index;

    if (mode === 'repeat') {
        scrollClassIndex = index + 12;
    }

    const signCard = document.createElement('div');
    signCard.classList.add('sign-card', 'd-flex', 'column', 'just-ctr', 'align-ctr', 'rounded', `SCROLL-EL_${scrollClassIndex}`);

    const signImg = document.createElement('div');
    signImg.classList.add('sign-img', 'd-flex', 'align-ctr');
    const img = document.createElement('img');
    img.src = `../assets/${index + 1}-${zodiacSign[index]}.svg`;
    img.classList.add('sign-card-img');
    signImg.append(img);

    const signTxt = document.createElement('div');
    signTxt.innerHTML = zodiacSign[index];
    signTxt.classList.add('sign-card-txt', 'text-cap', 'rounded');

    const borderTop = document.createElement('div');
    borderTop.classList.add('sign-card-border-top', 'rounded-top');

    const borderBottom = document.createElement('div');
    borderBottom.classList.add('sign-card-border-bottom', 'rounded-bottom');

    signCard.append(signImg, signTxt, borderTop, borderBottom);

    signCardContainer.append(signCard);
}

function animateScroll() {
    scrollPos += scrollSpeed;
    signCardContainer.style.transform = `translateX(-${scrollPos}px)`;

    if (scrollPos >= (signCardContainer.offsetWidth - window.screen.width)) {
        for (let i = 0; i < zodiacSign.length; i++) {
            if (mode === 'repeat') {
                createSignCard(i, mode);
                mode = null;
            } else {
                createSignCard(i);
            }
        }
    }

    if (scrollPos >= containerInitWidth) {
        for (let i = 0; i < zodiacSign.length; i++) {
            const scrollSign = document.querySelector(`.SCROLL-EL_${i}`);
            scrollSign.remove();
        }

        scrollPos = 0;
    }

    window.requestAnimationFrame(animateScroll);
}