function findCircleNum(isConnected) {


    const n = isConnected.length;


    const visited = new Array(n).fill(false);

    
    let provinces = 0;

    function dfs(city) {
        for (let neighbor = 0; neighbor < n; neighbor++) {
            if (isConnected[city][neighbor] === 1 && !visited[neighbor]) {
                visited[neighbor] = true;
                dfs(neighbor);
            }
        }
    }

    for (let city = 0; city < n; city++) {
        if (!visited[city]) {
            provinces++;
            visited[city] = true;
            dfs(city);
        }
    }

    return provinces;
}
