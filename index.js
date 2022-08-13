let container = document.getElementById("container");

function makeGrid(x) {
    for (let r = 0; r < x; r++) {
        let rows = document.createElement("div");
        rows.className = "rows";
        container.appendChild(rows);
        for (let c = 0; c < x; c++) {
            let grid = document.createElement("div");
            grid.className = "grid";
            container.appendChild(grid);
        };
    };
};

makeGrid(16);