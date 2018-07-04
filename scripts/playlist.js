function Playlist(){

    //Array för att lagra alla låtar, alla låtar lagras som objekt
    this.songs = [];
    //Håller reda på vilken låt som spelas, alltså vilket index i arrayen vi är på
    this.playingIndex = 0;
    //Håller reda på om låten spelas eller inte.
    this.isPlaying = false;
}

/**
 * Varje playlist som vi skapar har dessa funktioner efter funktionerna hör till Playlists
 * prototyp. De ärvs så att de kan användas av varje playlist vi skapar så vi slipper skriva om
 * funktionerna för varje ny playlist.
 */

Playlist.prototype.add = function(song){
    //Song i detta fall är ett objekt som vi skapar i app.js utifrån constructorn Song()
    //songs är en array som vi pushar in objektet i med hjälp av array.push
    this.songs.push(song);
};

Playlist.prototype.play = function(){
    //Plockar ut den nuvarande låten från arrayen med att hämta playingIndex.
    //this.songs är listan av låtar som tillhör playlisten. 
    let currentSong = this.songs[this.playingIndex];
    //Vi ändrar boolen isPlaying till true för att indikera att låten spelas.
    currentSong.isPlaying = true;
    //Vi kan även ändra att själva playlisten spelas genom att ändra den boolen.
    this.isPlaying = true;
};


Playlist.prototype.stop = function(){
    //Samma som för play förutom att vi ändrar till false för att visa att låten inte spelas.
    let currentSong = this.songs[this.playingIndex];
    currentSong.isPlaying = false;
    this.isPlaying = false;
};

Playlist.prototype.next = function(){
    //Stoppa låten
    this.stop();
    //Next ökar playingIndex, d.v.s ökar songs[0], songs[1], songs[2] etc. och currentSong
    //ändras till en ny låt.
    this.playingIndex++;

    //Om arrayen är lika lång som playingIndex, alltså den låten vi är på så är vi på
    //sista låten, och då kan vi resetta playingIndex till 0 så vi kommer tillbaka
    //till första platsen i arrayen.
    if(this.playingIndex === this.songs.length){
        this.playingIndex = 0;
    }
    //Starta låten igen
    this.play();
};

Playlist.prototype.getCurrent = function(){
    //Hämta nuvarande låten på samma sätt som vi gjorde i play.
    return this.songs[this.playingIndex];
};









