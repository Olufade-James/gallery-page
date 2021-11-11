// let cars = ["volvo", "toyota", "benz", 12, {firstName: "adekunle", surName: "olufade"}]

// console.log(cars)
// console.log('there is',cars[3])

// cars[3] = 'segun'
// console.log(cars)
// console.log(typeof(cars))

// console.log('last item is', cars[cars.length -1])

let cars = [
    {
        name: 'VOLVO',
        car_img: 'volvo',
        price: '#10,000,000',
    },
    {
        name: 'VENOM',
        car_img: 'venom',
        price: '#15,000,000',
    },
    {
        name: 'TIKT',
        car_img: 'tikt',
        price: '#13,000,000',
    },
    {
        name: 'PORCHE',
        car_img: 'porche',
        price: '#18,000,000',
    },
    {
        name: 'JAGUAR',
        car_img: 'jaguar',
        price: '#10,000,000',
    },
    {
        name: 'BENZ',
        car_img: 'benz',
        price: '#20,000,000',
    },
    {
        name: 'BMW',
        car_img: 'bmw',
        price: '#20,000,000',
    },
    {
        name: 'CHEVROLET',
        car_img: 'chevrolet',
        price: '#18,000,000',
    },
    {
        name: 'DATSUN',
        car_img: 'datsun',
        price: '#10,000,000',
    },
    {
        name: 'FERRARI',
        car_img: 'ferrari',
        price: '#20,000,000',
    },
    {
        name: 'BLACK',
        car_img: 'black',
        price: '#15,000,000',
    },
    {
        name: 'Ferrari',
        car_img: 'ferrari1',
        price: '#18,000,000',
    },
]

console.log('Collection of cars', cars.length)

// for(let i = 0; i < students.length; i++) {
//     console.log(students[i])
// }

let carSection = document.getElementById('car-wrapper');
let html = "";
cars.forEach(e => {
    html += `
    <div class="car-card">
    <div class="car-image">
        <img src="img/${e.car_img}.jpg" alt="">
    </div>
    <div class="car-info text-light">
        <h1>${e.name}</h1>
        <h3 class="price">${e.price}</h3>
        <h3>Seamuscar</h3>
    </div>
    </div>
`
    console.log(e)
    carSection.innerHTML = html
});