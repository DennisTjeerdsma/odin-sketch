function drawGrid(gridSize) {
    const containerBox = document.querySelector('div#container');
    let id = 0;

    for (let i = 0; i < gridSize; i++) {
        const gridRow = document.createElement('div');
        gridRow.className = 'grid-row';

        for (let j = 0; j < gridSize; j++) {
            const gridBox = document.createElement('div');
            gridBox.className = 'grid-item';
            gridBox.setAttribute('id', id++);
            gridBox.style.width = 400/gridSize + 'px';
            gridBox.style.height = 400/gridSize + 'px';
            gridBox.addEventListener('mouseover', colorGridBox);
            gridRow.appendChild(gridBox);
        }

        containerBox.appendChild(gridRow);
    }
}

function colorGridBox(e) {
    console.log(e);
}


drawGrid(16)