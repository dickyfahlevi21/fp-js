const csv = `NAME, CATEGORY, PRICE
Xiaomi Redmi 5A, Smartphone, 1199000
Macbook Air, Laptop, 13775000
Samsung Galaxy J7, Smartphone, 3549000
DELL XPS 13, Laptop, 26799000
Xiaomi Mi 6, Smartphone, 5399000
LG V30 Plus, Smartphone, 10499000`

const [header, ...array] = csv.split("\n")
const obj = array.map((value) => {
    const items = value.split(", ")
    const obj = {}
    header.split(", ").map((value) => value.toLowerCase()).forEach((value, index) => {
        if (value == "price") {
            obj[value] = new Intl.NumberFormat("id", {
                style: 'currency',
                currency: "IDR"
            }).format(parseInt(items[index]))
        } else {
            obj[value] = items[index]
        }
    })
    return obj;
})
// Sorting Item By Price
const sortByPrice = (a, b) => {
    const convA = parseInt(a.price.replace(/,.*|[^0-9]/g, ''), 10);
    const convB = parseInt(b.price.replace(/,.*|[^0-9]/g, ''), 10);
    let comparison = 0;
    convA > convB ? comparison = 1 : comparison = -1;
    return comparison;
}
console.log(obj.sort(sortByPrice))