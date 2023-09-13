type Coordinate = {
    x: number;
    y: number;
};

function calculateDistance(pointA: Coordinate, pointB: Coordinate): number {
    const dx = pointB.x - pointA.x;
    const dy = pointB.y - pointA.y;

    const result = Math.sqrt(dx * dx + dy * dy);

    return result;
}

const coordinateA: Coordinate = {
    x: 20,
    y: 8,
};

const coordinatB: Coordinate = {
    x: 10,
    y: 5,
};


console.log(calculateDistance(coordinateA, coordinatB));


//interface

interface Car {
    brand: string;
    model: string;
    year: number;
    startEnfine: () => void
   
}

const myCar: Car = {
    brand: "audi",
    model: "A3",
    year: 2023,
    startEnfine() {
        console.log("O motor do carro está funcionado ");
        
    },
 
}
        

function drive(car:Car) :void {
    console.log(`Driving ${car.brand} ${car.model} ${car.year} `);
    car.startEnfine()
}
drive(myCar)






