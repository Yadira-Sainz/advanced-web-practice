const app = document.getElementById('app');

const createCounter = () => {
    let count = 0;
    const counterElement = document.createElement('div');
    const incrementButton = document.createElement('button');
    const decrementButton = document.createElement('button');

    const updateCounter = () => {
        counterElement.textContent = `Contador: ${count}`;
    };

    incrementButton.textContent = 'Incrementar';
    incrementButton.addEventListener('click', () => {
        count++;
        updateCounter();
    });

    decrementButton.textContent = 'Decrementar';
    decrementButton.addEventListener('click', () => {
        if (count > 0) {
            count--;
            updateCounter();
        }
    });

    updateCounter();
    app.appendChild(counterElement);
    app.appendChild(incrementButton);
    app.appendChild(decrementButton);
};

createCounter();

// Ejemplo de desestructuración de objetos
const person = {
    name: 'Juan',
    age: 30,
    city: 'Zapopan'
};

const { name, age, city } = person;
console.log(`Nombre: ${name}, Edad: ${age}, Ciudad: ${city}`);
