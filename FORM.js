class Form{

    constructor()
    {}

    display()
{
     var tittle=createElement('h3') 
     tittle.html("Welcome to the car racer game!")
     var textbox=createInput("Enter Your Name")
     var button=createButton("Click to Play")  
     tittle.position(130,0)
     textbox.position(400,300)
     button.position(400,350)
      
     var greeting=createElement('h4')
     greeting.position(230,300)
     button.mousePressed(

        function()
        {
            textbox.hide()
            button.hide()
            var playerName=textbox.value()
            playerCount=playerCount+1
            greeting.html("Hello : "+playerName)
            player.updateName(playerName)
            player.updateCount(playerCount)
        }
     )
}

}














