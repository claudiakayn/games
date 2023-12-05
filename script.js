var roomCode; // Make roomCode a global variable to share between functions

function generateRoomCode() {
    // Generate a random room code (you can use a more sophisticated method)
    roomCode = Math.random().toString(36).substring(2, 8).toUpperCase();

    // Display the room code and show the player input section
    document.getElementById("roomCode").innerText = roomCode;
    document.getElementById("roomPage").classList.remove("hidden");
    document.getElementById("friendEntry").classList.remove("hidden");
}

function startGame() {
    // Get the selected number of players and player name
    var selectedPlayers = document.getElementById("playerCount").value;
    var playerName = document.getElementById("playerName").value;

    // You can use the selectedPlayers and playerName variables to initiate the game
    console.log("Starting game with " + selectedPlayers + " players");
    console.log("Player name: " + playerName);
    // Add your game initiation logic here
}

function joinGame() {
    // Get the friend's name
    var friendPlayerName = document.getElementById("friendPlayerName").value;

    // You can use the friendPlayerName and roomCode variables to join the game
    console.log("Joining game with friend's name: " + friendPlayerName);
    console.log("Room code: " + roomCode);
    // Add your join game logic here
}
