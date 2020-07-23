const leapYear = (start, end) => {
    for (let i = start; i <= end; i++) {
        (((i % 4 == 0) && (i % 100 != 0)) || (i % 400 == 0)) ?
        console.log(`${i}: Tahun kabisat`):
            console.log(`${i}: Bukan tahun kabisat`)
    }
}

leapYear(2000, 2020)