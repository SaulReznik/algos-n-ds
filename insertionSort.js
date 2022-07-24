const arr = [3,6,1,2,8,4,5,9,7];

const insertionSort = arr => {
    let curr;
    let temp;

    for (let i = 1; i < arr.length; i++) {
        curr = i;

        for (let j = i - 1; j >= 0; j--) {
            if (arr[curr] < arr[j]) {
                temp = arr[j];
                arr[j] = arr[curr];
                arr[curr] = temp;
                curr--;
            } else {
                break;
            }
        }
    }

    return arr;
};

console.log(insertionSort(arr));
