function canVisitAllRooms(rooms) {
    const visited = new Set();

    function dfs(room) {
        visited.add(room); 

        for (const key of rooms[room]) {
            if (!visited.has(key)) {
                dfs(key); 
            }
        }
    }

    dfs(0); 

    return visited.size === rooms.length; 
}
