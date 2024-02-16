function knightMoves(start, end) {
    // Define the possible moves a knight can make
    const moves = [
        [-2, -1], [-2, 1], [2, -1], [2, 1],
        [-1, -2], [-1, 2], [1, -2], [1, 2]
    ];

    // Helper function to check if a position is valid on the board
    function isValid(x, y) {
        return x >= 0 && y >= 0 && x < 8 && y < 8;
    }

    // Perform BFS to find the shortest path
    function bfs(start, end) {
        const queue = [[start]];
        const visited = new Set([start.toString()]);

        while (queue.length > 0) {
            const path = queue.shift();
            const [x, y] = path[path.length - 1];

            if (x === end[0] && y === end[1]) {
                return path;
            }

            for (const move of moves) {
                const newX = x + move[0];
                const newY = y + move[1];
                if (isValid(newX, newY)) {
                    const newPath = path.concat([[newX, newY]]);
                    const key = newPath[newPath.length - 1].toString();
                    if (!visited.has(key)) {
                        queue.push(newPath);
                        visited.add(key);
                    }
                }
            }
        }

        // If no path is found
        return null;
    }

    // Call BFS to find the shortest path
    const shortestPath = bfs(start, end);

    // Output the result
    if (shortestPath) {
        console.log(`You made it in ${shortestPath.length - 1} moves! Here's your path:`);
        for (const pos of shortestPath) {
            console.log(pos);
        }
        return shortestPath;
    } else {
        console.log("No path found.");
        return null;
    }
}

// Test cases
knightMoves([0,0],[1,2]);
knightMoves([0,0],[3,3]);
knightMoves([3,3],[0,0]);
knightMoves([0,0],[7,7]);
knightMoves([3,3],[4,3]);
