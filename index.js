const DEFAULT_SIZE = 16;
let container = document.getElementById("container");
const grid = document.getElementById("grid");
const sizeValue = document.getElementById("sizeValue");
const sizeSlider = document.getElementById("sizeSlider");
const clearBtn = document.getElementById("clearBtn");
let currentSize = DEFAULT_SIZE;

clearBtn.onclick = () => reloadGrid();
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);


function setCurrentSize(newSize) {
    currentSize = newSize;
}

function changeSize(value) {
    setCurrentSize(value);
    updateSizeValue(value);
    reloadGrid();
}

function reloadGrid() {
    clearGrid();
    makeGrid(currentSize);
}

function clearGrid() {
    grid.innerHTML = "";
}

function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`
}

function makeGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement("div");
        gridElement.classList.add("grid-element");
        gridElement.addEventListener("mouseover", changeColor);
        gridElement.addEventListener("mousedown", changeColor);
        grid.appendChild(gridElement);
    }
};

window.onload = () => {
    makeGrid(DEFAULT_SIZE);
}