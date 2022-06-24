function clickSideMenu(data) {
    const sideMenu = document.querySelectorAll('.side_menu-list li');
    sideMenu.forEach(function(el) {
        //вешаем событие
        el.onclick = function(event) {
            //производим действия
            event.preventDefault();
            console.log(this.className);
            if (!this.className.includes('side_menu-list-active')) {
                // const listElements = this.closest('.side_menu-list').getElementsByTagName('li');
                sideMenu.forEach(function(el) {
                    if (el.className.includes('side_menu-list-active')) {
                        el.className = '';
                    }
                });
                this.className = 'side_menu-list-active';
            }
        }
    });
}

function clickBuyBtn() {
    const buyBtn = document.querySelectorAll('.dish_item-btn');
    buyBtn.forEach(function(el) {
        //вешаем событие
        el.onclick = function(event) {
            //производим действия
            event.preventDefault();
            this.classList.remove('dish_item-btn-visible');
            this.closest('.dish_item-price-btn').querySelector('.dish_item-counter').classList.add('dish_item-counter-visible');
            let count = this.closest('.dish_item-price-btn').querySelector('.dish_item-counter-count');
            count.textContent = 1;
        }
    });
}

function clickDishCounter(basket, basketIdList) {
    const dishCounter = document.querySelectorAll('.dish_item-counter svg');
    dishCounter.forEach(function(el) {
        //вешаем событие
        el.onclick = function(event) {
            //производим действия
            event.preventDefault();
            const count = this.closest('.dish_item-counter').querySelector('.dish_item-counter-count');
            if (this.classList.value.includes('dish_item-counter-inc')) {
                count.textContent = Number(count.textContent) + 1;
            }
            else {
                count.textContent = Number(count.textContent) - 1;
                if (Number(count.textContent) < 1) {
                    const counter = this.closest('.dish_item-counter');
                    const buyBtn = this.closest('.dish_item-price-btn').querySelector('.dish_item-btn');
                    counter.classList.remove('dish_item-counter-visible');
                    buyBtn.classList.add('dish_item-btn-visible');
                }
            }
            
            if (basketIdList.includes(Number(dish.dataset.id))) {
                basket.forEach((item, index, array) => {
                    if (item.id === Number(dish.dataset.id)) {
                        if (count.textContent > 0) {
                            item.count = count.textContent;
                        }
                        else {
                            basket.splice(index, 1);
                            basketIdList.splice(index, 1);
                        }
                    }
                });
            }
            else {
                basket.push({
                    id: Number(dish.dataset.id),
                    count: Number(count.textContent)
                });
            }

            console.log(basket);
            console.log(basketIdList);
        }
    });
}

(async () => {
    const baseUrl = 'https://zilon4eg.github.io/sp/';
    const filePath = 'data/dishes.json';
    const dataUrl = `${baseUrl}${filePath}`;

    const response = await fetch(dataUrl);
    const data = await response.json();  // читаем ответ в формате JSON
    console.log(data);

    var basket = [];  // корзина
    var basketIdList = [];

    clickSideMenu(data);
    clickBuyBtn();
    clickDishCounter(basket, basketIdList);
  })()