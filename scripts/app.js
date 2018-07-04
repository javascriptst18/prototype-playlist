
/**
 * Skapar nya låtar med hjälp av constructorn Song()
 */

let song1 = new Song("The Stranger Song", "Leonard Cohen");
let song2 = new Song('Helgen V.48', "bob hund");
let song3 = new Song("What's Golden", "Jurassic 5");
let song4 = new Song("Pale Blue Eyes", "The Velvet Underground");

//Skapar en ny playlist som ska hålla alla låtar
let myPlaylist = new Playlist();

//Lägger till alla låtar till playlisten. I bakgrunden pushas låtarna till arrayen.
myPlaylist.add(song1);
myPlaylist.add(song2);
myPlaylist.add(song3);
myPlaylist.add(song4);


//Vi kan även simulera playlisten i kod här.

// myPlaylist.play();
// myPlaylist.next();
// myPlaylist.stop();
// myPlaylist.getCurrent();

