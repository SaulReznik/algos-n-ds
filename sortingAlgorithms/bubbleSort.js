const arr = [3,6,1,2,8,4,5,9,7];

const bubbleSort = arr => {
    let isSorted = true;
    let temp;

    for (let i = arr.length - 1; i > 0; i--) {

        for (let j = 1; j < i; j++) {
            if (arr[j-1] > arr[j]) {
                temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
                isSorted = false;
            }
        }

        if (isSorted) return arr;
        isSorted = true;
    }
};

bubbleSort(arr);
console.log(arr);
