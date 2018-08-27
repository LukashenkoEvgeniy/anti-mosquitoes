export function calc(height, width, color, material) {
    if (height > 3e3) alert('Высота сетки должна быть МЕНЬШЕ, чем 3 м');
    if (width > 3e3)  alert('Ширина сетки должна быть МЕНЬШЕ, чем 3 м');
    if (width < 200)  alert('Высота сетки должна быть БОЛЬШЕ, чем 200 мм (0,2 метра)');
    if (width < 200)  alert('Ширина сетки должна быть БОЛЬШЕ, чем 200 мм (0,2 метра)');

    const s = 125;
    const r = 0.75;
    let n = 0;
    let l = 0;
    let baseMargin = 0;


    let square = height * width / 1e6; //получение метров квадратных
    square = +square.toFixed(2); //округление до 2х точек после запятой

    if (square < r) {
        square = 0.75;
        //"Сетки меньше " + r + " м<sup>2</sup>, считаются как " + r + " м<sup>2</sup>"
    }
    if (material === 'plastic') {
        if (square <= 0.76) baseMargin = 75;
        if (square > .76 && square <= .86) baseMargin = 85;
        if (square > .86 && square <= 1.01) baseMargin = 89;
        if (square > 1.01 && square <= 1.08) baseMargin = 100;
        if (square > 1.08 && square <= 1.3) baseMargin = 105;
        if (square > 1.3 && square <= 1.45) baseMargin = 110;
        if (square > 1.45 && square <= 10) baseMargin = 125;
    } else {
        n = 25;
        baseMargin = 107;
    }
    if (color !== 'white') {
        l = 10
    }
    let oldPrice = +(square * (s + l + n) + baseMargin).toFixed(0); //SWITCH WITH PRICE
    let price = +(oldPrice / 0.75).toFixed(0);


    console.log(price, oldPrice)

    return {price, oldPrice, square}
}

export function validator(height, width){
    if (height > 3e3) return('Высота сетки должна быть МЕНЬШЕ, чем 3 м');
    if (width > 3e3)  return('Ширина сетки должна быть МЕНЬШЕ, чем 3 м');
    if (height < 200)  return('Высота сетки должна быть БОЛЬШЕ, чем 200 мм (0,2 метра)');
    if (width < 200)  return('Ширина сетки должна быть БОЛЬШЕ, чем 200 мм (0,2 метра)');
}