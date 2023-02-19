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

for (let i = 0; i < zodiacSign.length; i++) {
    const signCard = document.createElement('div');
    signCard.classList.add('sign-card', 'd-flex', 'column', 'just-ctr', 'align-ctr', 'rounded');

    const signImg = document.createElement('div');
    signImg.classList.add('sign-img', 'd-flex', 'align-ctr');
    const img = document.createElement('img');
    img.src = `../assets/${i + 1}-${zodiacSign[i]}.svg`;
    img.classList.add('sign-card-img');
    signImg.append(img);

    const signTxt = document.createElement('div');
    signTxt.innerHTML = zodiacSign[i];
    signTxt.classList.add('sign-card-txt', 'text-cap', 'rounded');

    const borderTop = document.createElement('div');
    borderTop.classList.add('sign-card-border-top', 'rounded-top');

    const borderBottom = document.createElement('div');
    borderBottom.classList.add('sign-card-border-bottom', 'rounded-bottom');

    signCard.append(signImg, signTxt, borderTop, borderBottom);

    signCardContainer.append(signCard);
}