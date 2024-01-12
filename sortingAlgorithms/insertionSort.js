const arr = [3,6,1,2,8,4,5,9,7];

// The idea is that we are taking a pointer in the beginnning and assuming that left from that pointer is already sorted, which is 1 element in the beginning
// and then by going to the right we are taking the new element and INSERTING to the left, sorted part of the array
// So one by one we are sorting the array

// Big(O) is O squared but to be more precise the best case scenario is linear and the worst case scenario is Big O of n squared divided by 2
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
