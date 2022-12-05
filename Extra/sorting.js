

function smallTobig(numbers) {

    let arr = []
        for(let i = 0; i < numbers.length; i++) {
         for(let j = i; j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                let temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
        arr.push(numbers[i])
    }
    return arr
    }
    console.log(smallTobig([5, 2,2, 1, 4, 23]));