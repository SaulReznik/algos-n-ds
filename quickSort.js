const arr = [26,23,27,44,17,47,39,42,43,1];

const swap = (arr, first, second) => {
        let temp = arr[first];
        arr[first] = arr[second];
        arr[second] = temp;
}

const pivot = (arr, start = 0, end = arr.length - 1) => {
    let pivot = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }

    swap(arr, swapIndex, start);

    return swapIndex;
};

const quickSort = (arr, start = 0, end = arr.length - 1)=> {
    if (start < end) {
        let pivotindex = pivot(arr, start, end);
        
        quickSort(arr, start, pivotindex - 1);
        quickSort(arr, pivotindex + 1, end);   
    };

    return arr;
};

console.log(quickSort(arr), arr);
