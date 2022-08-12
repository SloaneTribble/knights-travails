# knights-travails

This assignment from The Odin Project is designed as a final project for the section on data structures and algorithms.  

I have built a function knightMoves that shows the shortest possible way for a knight in chess to get from one square to another.

To implement this function, for each square, a list of possible moves from that square is represented as a tree.  This representation is repeated for each child square until the destination is reached.  

Then a breadth-first search is performed on the resulting tree to find the shortest path.  