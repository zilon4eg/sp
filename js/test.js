class Backet {
    #basket = [];
    #basketIdList = [];

    add(id, count) {
        if (this.#basket.length === 0) {
            this.#basket.push({id: id, count: count});
            this.#basketIdList.push(id);
        } else {
            if (this.#basketIdList.includes(Number(id))) {
                this.#basket.forEach((item, index, array) => {
                    if (item.id === Number(id)) {
                        item.count += Number(count);
                    }
                });
            } else {
                this.#basket.push({id: Number(id), count: Number(count)});
                this.#basketIdList.push(Number(id));
            }
        }
    }

    remove(id, count) {
        if (this.#basket.length > 0) {
            if (this.#basketIdList.includes(Number(id))) {
                this.#basket.forEach((item, index, array) => {
                    if (item.id === Number(id)) {
                        item.count -= Number(count);
                        if (item.count < 1) {
                            this.#basket.splice(index, 1);
                            this.#basketIdList.splice(index, 1);
                        }
                    }
                });
            }
        }
    }

    getAll() {
        return Object.values(this.#basket);
    }
}

class Data {
    static async getJson() {
        const response = await fetch('https://sferapitaniya.github.io/sp/data/dishes.json');
        return await response.json();
    }
}

(async () => {
const data = await Data.getJson();
const dataList = data.dishes;
let backet = new Backet();
})();