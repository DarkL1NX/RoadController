//* 3. Проверка параметров
function RoadController(speed, weight) {
    const MAX_SPEED = 60;
    const MAX_WEIGHT = 3000;
    //* 4. Высчитывание превышений
    let speeding = speed - MAX_SPEED;
    let overWeight = weight - MAX_WEIGHT;
    //* 5. Рассчёт штрафов
    let speedFine = speeding * 10;
    let weightFine = overWeight * 15 + 200;
    const TOTAL_FINE = speedFine + weightFine;

    if (speeding > 0, overWeight <= 0) {
        console.log("Скорость превышена на: " + speeding + ", вес в порядке, штраф: " + speedFine);
    }
    else if(speeding <= 0, overWeight > 0) {
        console.log("Скорость в порядке, вес выше на: " + overWeight + "штраф: " + weightFine);
    }
    else if(speeding >= 0, overWeight >= 0) {
        console.log("Скорость превышена на: " + speeding + ", вес превышен на: " + overWeight + "штраф: " + TOTAL_FINE);
    }
    else console.log("Все в порядке!")
}

//* 1. Создание автомобилей.
let initialSpeed = 0; // km/h
let initialWeight = 0; // kg

//* 2. Высчитывание параметров каждого автомобиля.
for (let i = 0; i < 10; i++) {
    initialSpeed = Math.floor(Math.random() * 200) + 20;
    initialWeight = Math.floor(Math.random() * 5001) + 1000;

    console.log(`${i+1}: Скорость: ${initialSpeed}, вес: ${initialWeight}`);
    RoadController(initialSpeed, initialWeight);
}