# Knights Travails

This repository contains solutions in both JavaScript and Ruby for the Knights Travails problem.

## Problem Description

In chess, a knight can move to any square on the standard 8x8 chessboard from any other square on the board, given enough turns. The knight's basic move is two steps forward and one step to the side, or one step forward and two steps to the side. It can face any direction.

The task is to build a function `knight_moves` that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.

## JavaScript Solution

The JavaScript solution is implemented in `knights_travails.js`. It uses Breadth-First Search (BFS) to find the shortest path from the starting square to the target square on the chessboard. The function takes two parameters: the starting square coordinates `[x1, y1]` and the target square coordinates `[x2, y2]`. It then outputs the shortest path as an array of squares visited by the knight.

To run the JavaScript solution, execute the following command in your terminal:

```bash
node knights_travails.js
```

## Ruby Solution

The Ruby solution is implemented in `knights_travails.rb`. It also uses Breadth-First Search (BFS) to find the shortest path from the starting square to the target square. The function takes two parameters: the starting square coordinates `[x1, y1]` and the target square coordinates `[x2, y2]`. It then outputs the shortest path as an array of squares visited by the knight.

To run the Ruby solution, execute the following command in your terminal:

```bash
ruby knights_travails.rb
```

## Examples

Here are some example calls to the `knight_moves` function:

```javascript
knightMoves([0,0],[1,2]);
knightMoves([0,0],[3,3]);
knightMoves([3,3],[0,0]);
knightMoves([0,0],[7,7]);
knightMoves([3,3],[4,3]);
```

## Notes

- Both solutions use Breadth-First Search (BFS) to find the shortest path.
- The chessboard is represented as an 8x8 grid with coordinates `[x, y]`.
- The solutions output the shortest path from the starting square to the target square.
- If no path is found, the solutions output "No path found."