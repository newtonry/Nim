###Nim Game vs AI
####http://fadetoproductions.com/nim/

I was posed with the question of how to write a winning AI in a game I hadn't played before. Turns out the game was Nim (http://en.wikipedia.org/wiki/Nim). It's a mathematically based game where the object is to be the person who takes the final straw. You can take as many straw from a particular column as you want.

In Nim, the first player always makes the correct move, they will always win. In fact, you can judge a winning position with xor, exclusive or (http://en.wikipedia.org/wiki/Exclusive_or).

Hence I wrote a little AI program that always finds the correct move. However you go first, so see if you can win! The current version at http://fadetoproductions.com/nim/
