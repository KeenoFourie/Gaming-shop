let product = [
    {
        id: 1,
        name: "Xbox 512gb Series S",
        description: "Very useful tool when it comes to gaming and very well rated by the youth.",
        type: "Business",
        price: 'R 6 999,99',
        image: "https://i.postimg.cc/qBSwNtRN/xbox-console.jpg",
    },
    {
        id: 2,
        name: "Astrum 7B Wired Gaming USB Mouse - MG320",
        description: "Very useful tool when it comes to gaming.",
        type: "Business",
        price: 'R 299,99',
        image: "https://i.postimg.cc/hjFT1YJT/mouse.jpg",
    },
    {
        id: 3,
        name: "Logitech G29 Driving Force Racing Wheel (PS4, PS3 & PC)",
        description: "Very useful tool when it comes to gaming especially car games.",
        type: "Business",
        price: 'R 2 999,99',
        image: "https://i.postimg.cc/66rJcNv5/steering.jpg",
    },
    {
        id: 4,
        name: "WINX GAME Supreme Controller for Android and PC",
        description: "Very useful tool when it comes to gaming and actually playing the game.",
        type: "Business",
        price: 'R 499,99',
        image: "https://i.postimg.cc/1RpY7Jnr/controller.jpg",
    },
]


// Output
let output = document.querySelector('.productListing')
product.forEach( item=>{
    output.innerHTML += `
    <div>
    
    </div>
    `
});