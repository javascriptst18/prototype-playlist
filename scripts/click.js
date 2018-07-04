/**
 * Inget att se här, bara ful kod som sköter UI:t. Move along.
 */
const info = document.getElementById('info');

function play(){
	console.log(myPlaylist.isPlaying ? "Det spelas!" : "");
	console.log(myPlaylist.getCurrent());
	info.innerHTML = `
		<h2>Nu spelas:<br /> 
			${myPlaylist.getCurrent().title} 
			av 
			${myPlaylist.getCurrent().artist} 
		</h2>`;
};

function stop(){
	info.innerHTML = `<h2>Nu spelas:</h2>`;
	console.log(myPlaylist.isPlaying ? "" : "Det spelas inte!");
};

function next(){
	info.innerHTML = "<h2>Nu spelas:<br />" + myPlaylist.getCurrent().title + " av " + myPlaylist.getCurrent().artist + "</h2>";
	console.log(myPlaylist.getCurrent());
};

document.getElementById("play").addEventListener("click", play);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("next").addEventListener("click", next);


