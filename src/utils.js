
const generateRandomLightColor = () => {
    let color = '#'

    for (let i = 0; i < 3; i++)
        color += (`0${Math.floor(((1 + Math.random()) * 16 ** 2) / 2).toString(16)}`).slice(-2)

    return color
}

const generateRandomDarkColor = () => {
    let color = "#";

    for (let i = 0; i < 3; i++)
        color += ("0" + Math.floor(Math.random() * Math.pow(16, 2) / 2).toString(16)).slice(-2);
        
    return color;
}


export default { generateRandomLightColor, generateRandomDarkColor }
