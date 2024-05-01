const products = reactive([
    { id: 1, name: 'Apples', price: 5.50 },
    { id: 2, name: 'Oranges', price: 3.10 },
    { id: 3, name: 'Bananas', price: 8.99 },
    { id: 4, name: 'Tomatoes', price: 2.75 },
    { id: 5, name: 'Carrots', price: 4.20 }
  ]);

let values =[
    { id: 1, name: 'Centimeters', value: 100 }, // 100 см
    { id: 2, name: 'Meters', value: 5 },        // 5 м
    { id: 3, name: 'Celsius', value: 20 }       // 20°C    
]
// inches= .centimeters * 0.393701, дюйми
// feet= meters * 3.28084, фути
// fahrenheit= celsius * 1.8 + 32 фаренгейти