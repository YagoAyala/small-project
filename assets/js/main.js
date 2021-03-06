function setImcs() {
    let imcsAtuais = [];

    if (JSON.parse(localStorage.getItem('IMC'))) imcsAtuais = JSON.parse(localStorage.getItem('IMC'));

    imcsAtuais.map((i) => {
        const table = document.querySelector('table');
        const row = table.insertRow(1);
        const imc = row.insertCell(0);
        const date = row.insertCell(1);
        imc.innerHTML = i.imc;
        date.innerHTML = i.date;
    })
}

//
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    if (!peso && !altura) {
        setResultado('Peso e altura inválidas', false);
        return;
    }
    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    let imcsAtuais = [];
    if (JSON.parse(localStorage.getItem('IMC'))) imcsAtuais = JSON.parse(localStorage.getItem('IMC'));
    imcsAtuais.push({ imc, date: new Date().toLocaleDateString() });
    localStorage.setItem('IMC', JSON.stringify(imcsAtuais));

    const table = document.querySelector('table');
    const row = table.insertRow(1);
    const imcElement = row.insertCell(0);
    const dateElement = row.insertCell(1);
    imcElement.innerHTML = imc;
    dateElement.innerHTML = new Date().toLocaleDateString();

    setResultado(msg, true);
});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    if (isValid) {
        p.setAttribute('id', 'certo');
    } else {
        p.setAttribute('id', 'errado');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}

  
