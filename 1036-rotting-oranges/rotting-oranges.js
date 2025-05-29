function orangesRotting(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const queue = [];
    let fresh = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) queue.push([r, c]);
            if (grid[r][c] === 1) fresh++;
        }
    }

    if (fresh === 0) return 0; 
    let minutes = 0;
    const dirs = [[1,0], [-1,0], [0,1], [0,-1]]; 


    while (queue.length > 0) {
        let size = queue.length;
        let infected = false;

        for (let i = 0; i < size; i++) {
            const [r, c] = queue.shift();

            for (let [dr, dc] of dirs) {
                const nr = r + dr, nc = c + dc;

                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {
                    grid[nr][nc] = 2;
                    fresh--;
                    infected = true;
                    queue.push([nr, nc]);
                }
            }
        }

        if (infected) minutes++;
    }

    return fresh === 0 ? minutes : -1;
}
