console.log('about to fetch a rainbow');

catchRainbow().catch(error => {
    console.log('error!');
    console.error(error);
});

async function catchRainbow() {
    const response = await fetch('rainbow.jpg');
    const blob = await response.blob();
    document.getElementById('rainbow').src = URL.createObjectURL(blob);
};

// fetch('rainbow.jpg').then(response => {
//     console.log(response);
//     return response.blob();    
// })
// .then(blob => {
//     console.log(blob);
//     document.getElementById('rainbow').src = URL.createObjectURL(blob);
// })

