class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        const PRIME_NUM = 31;

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            const char = key[i];
            const charCode = char.charCodeAt(0) - 96;

            total = (total * PRIME_NUM + charCode) % this.keyMap.length;
        }

        return total;
    }

    set(key, value) {
        const hashedKey = this._hash(key);
        !this.keyMap[hashedKey] ? this.keyMap[hashedKey] = [[key, value]] : this.keyMap[hashedKey].push([key, value]);
    }

    get(key) {
        const hashedKey = this._hash(key);
        if (this.keyMap[hashedKey]) {
            for (let i = 0; i < this.keyMap[hashedKey].length; i++) {
                if (this.keyMap[hashedKey][i][0] === key) {
                    return this.keyMap[hashedKey][i][1];
                }
            }
        }
    }

    keys() {
        const result = [];

        for(let i = 0; i < this.keyMap.length; i++) {
            const element = this.keyMap[i];

            if (element) {
                for (let j = 0; j < element.length; j++) {
                    result.push(element[j][0]);
                }
            }
        }

        return result;
    }

    values() {
        const result = [];

        for(let i = 0; i < this.keyMap.length; i++) {
            const element = this.keyMap[i];

            if (element) {
                for (let j = 0; j < element.length; j++) {
                    result.push(element[j][1]);
                }
            }
        }

        return result;
    }
}

const ht = new HashTable(3);

ht.set('bruh', '14');
ht.set('yee', '4');
ht.set('eh', '1');
ht.set('bruh', '124');

// console.log(ht.get('eh'));

console.log(ht.values());