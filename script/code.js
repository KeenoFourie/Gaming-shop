let product = [
    {
        id: 3,
        name: 2017,
        price: 'R 6 999,99',
        image: "https://i.postimg.cc/qBSwNtRN/xbox-console.jpg",
    },
]
//
let productlist = document.getElementsByTagName('#Xbox_512gb_Series_S');
product.forEach((data)=> {
    productlist.innerHTML += `
    <div>
        <img src="${product[0].productlist}" alt="xbox_console" width "15rem">
    </div>
    `
})