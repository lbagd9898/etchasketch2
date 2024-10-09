createGrid(10)

function createGrid(number) {
    createColumns(number)
    createBoxes()
}

function createColumns(number) {
    const container = document.querySelector('#container');
    let height = 100 / number 
    for (i=0; i<number; i++) {
        let row = document.createElement('div');
        row.style.height = number + 'vh';
        row.style.width = '100%';
        row.style.display = 'flex';
        row.classList.add('column')
        container.appendChild(row);
    }
}

function createBoxes() {
    const columns = document.getElementsByClassName('column');
    let width =  100 / columns.length 
    for (i=0; i<columns.length; i++) {
        for (j=0; j<columns.length; j++) {
            let box = document.createElement('div');
            box.classList.add('box')
            box.classList.add('white')
            box.style.width = width + '%';
            columns[i].appendChild(box);


        }
    }
    document.querySelectorAll('.box').forEach(function(box) {
    box.addEventListener('mouseover', () => {
        if (box.classList.contains('white')) {
            color = randomRgbColor();
            box.style.backgroundColor = 'rgb(' + color.join(',') + ')';
            box.classList.remove('white')
        } else {
            console.log('help')
        }
    });
});
}

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}

function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

function deleteGrid () {
    const columns = document.getElementsByClassName('column');
    for (i=0; i<columns.length; i++) {
        while (columns[i].firstChild) {
            columns[i].firstChild.remove()
        }
    }
    const container = document.querySelector('#container');
    while (container.firstChild) {
        container.firstChild.remove()
    }

}

function changeGrid(number) {
    deleteGrid()
    createGrid(number)
}

document.querySelector('#change').addEventListener('click', () => {
    input = document.querySelector('#input').value
    if (input > 0 && input <= 100) {
        changeGrid(input);
    } else {
        alert('Please enter a value between 0 and 100.')
        document.querySelector('#input').value = ''
    }
    
});

document.querySelector('#erase').addEventListener('click', () => {
    let boxes = document.querySelectorAll('.box').forEach(function(box) {
        box.style.backgroundColor = 'white';
    })
})



