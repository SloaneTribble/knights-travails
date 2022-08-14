# knights-travails

This assignment from The Odin Project is designed as a final project for the section on data structures and algorithms.  

I have built a function knightMoves that shows the shortest possible way (or one of them, if there are multiple) for a knight in chess to get from one square to another.

To implement this function, for each square, a list of possible moves from that square is represented as a graph.  This representation is repeated for each child square using a breadth-first approach until the destination is reached.  

The breadth-first approach ensures that the shortest path possible (or a shortest path, if applicable) will be the first that is generated.  

