function addUser(){
    player_1_user=document.getElementById("player_1_user").value;
    player_2_user=document.getElementById("player_2_user").value;

    localStorage.setItem("player_1_user",player_1_user);
    localStorage.setItem("player_2_user",player_2_user);
    
    window.location="quiz_game_page.html";
}