const isPrime = (number) => {
    if (!isNaN) {
        return false
    } else {
        for (let i = 2; i < number; i++)
            if (number % i === 0) return false;
        return number > 1;
    }
};

const playWithNumbers = count => {
    let even = [],
        odd = [],
        multipleBy = [],
        prime = [],
        primeLessThan = [];

    for (let i = 0; i < count; i++) {
        i % 2 === 0 ? even.push(i) : odd.push(i);
        multipleBy.push(i * 5);
        isPrime(i) ? prime.push(i) : "";
        if (i < 100) isPrime(i) ? primeLessThan.push(i) : '';
    }

    const output = {
        even: even,
        odd: odd,
        multipleBy: multipleBy,
        prime: prime,
        primeLessThan: primeLessThan,
    };
    console.log(output);
};

playWithNumbers(1000);