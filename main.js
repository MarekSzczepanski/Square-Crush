this.newGame = new Game;
const doGame = this.newGame.setPlayerName();
let soundPlayer = null;
        const arrSongs = ["Chopin.mp3", "Vivaldi.mp3", "Mozart.mp3"];
        let i = 0;
        let flag = "mute";
        const music = (change) => {
            const checkMusic = () => {
                if (flag === "music") {
                    /* document.querySelector(".musicChoice").style.color = "black";
                    document.querySelector(".musicChoice").classList.add("musicChoiceActive"); */
                    document.querySelector(".volume").style.display = "block";
                    document.querySelector(".mute").style.display = "none"; 
                }
            }
            document.querySelector(".gameOver").addEventListener("mousedown", checkMusic);
            function playSound(song) {
                soundPlayer = new Audio(song);
                soundPlayer.play();
                soundPlayer.loop = true;
            }
            if (flag === "mute") {
                document.querySelector(".musicChoice").style.color = "black";
                document.querySelector(".musicChoice").classList.add("musicChoiceActive");
                if (soundPlayer) {
                    soundPlayer.pause();
                    soundPlayer.currentTime = 0;  
                    document.querySelector(".volume").style.display = "block";
                    document.querySelector(".mute").style.display = "none";
                    flag = "music";
                }
                else {
                    document.querySelector(".volume").style.display = "block";
                    document.querySelector(".mute").style.display = "none";
                    flag = "music";
                }
                playSound(arrSongs[i]);
            }
            else if (flag === "music" && change === "change") {
                soundPlayer.pause();
                soundPlayer.currentTime = 0;
                if (i === 0) {
                    playSound(arrSongs[1]);
                    i++;
                    return;
                }
                else if (i === 1) {
                    playSound(arrSongs[2]);
                    i++;
                    return;
                }
                else {
                    playSound(arrSongs[0]);
                    i = 0;
                }
            }
            else if (flag === "music") {
                document.querySelector(".musicChoice").classList.remove("musicChoiceActive");
                document.querySelector(".musicChoice").style.color = "#FF3333";
                soundPlayer.pause();
                soundPlayer.currentTime = 0;
                document.querySelector(".volume").style.display = "";
                document.querySelector(".mute").style.display = "block";
                flag = "mute";
            }
        }
        document.querySelector(".music").addEventListener("mousedown", music);
        const musicChoice = () => {
            if (document.querySelector(".volume").style.display === "block") {
                music("change");
            } 
        }
        document.querySelector(".musicChoice").addEventListener("mousedown", musicChoice);


