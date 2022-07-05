function sideMenuBasketBtnResize() {
    const basketBtn = document.querySelector('.side_menu-backet-btn');
    basketBtn.addEventListener('click', (e) => {
        //производим действия
        console.log('второй файл');
        e.preventDefault();
        const modWindowSize = document.querySelector('.modal_basket_content').offsetHeight;
        const modBackground = document.querySelector('.modal_basket');
        console.log(modWindowSize);
        if (Number(modBackground.offsetHeight) < (Number(modWindowSize) + 50)) {
            modBackground.style.height = `${Number(modWindowSize) + 50}px`;
        }
    });
}

sideMenuBasketBtnResize();