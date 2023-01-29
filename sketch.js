function drawGrid(gridSize) {
    const wrapperBox = document.querySelector('div#wrapper');
    const containerBox = document.createElement('div');
    containerBox.setAttribute('id', 'container');
    wrapperBox.appendChild(containerBox);

    let id = 0;

    for (let i = 0; i < gridSize; i++) {
        const gridRow = document.createElement('div');
        gridRow.className = 'grid-row';

        for (let j = 0; j < gridSize; j++) {
            const gridBox = document.createElement('div');
            gridBox.className = 'grid-item';
            gridBox.setAttribute('id', id++);
            gridBox.style.width = (600 - (gridSize * 2))/gridSize + 'px';
            gridBox.style.height = (600 - (gridSize * 2))/gridSize + 'px';
            gridBox.addEventListener('mouseover', colorGridBox);
            gridRow.appendChild(gridBox);
        }
        containerBox.appendChild(gridRow);
    }
}

function colorGridBox(e) {
    const targetBox = document.getElementById(e.target.id);
    targetBox.classList.add('hovered');
}

function adjustGridSize() {

    let newSize;

    do {
        newSize = prompt('Please enter a grid Size less than 100 boxes per side');

    } while (newSize > 100 || newSize < 0 || isNaN(newSize))

    const containerBox = document.getElementById('container');
    containerBox.remove();

    drawGrid(newSize);

}


function run() {
    drawGrid(16);

    document.querySelector('.btn').addEventListener('click', adjustGridSize);


}

run();