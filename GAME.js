class Game{

    constructor()
    {


        
    }


    getState()
    {
        var readState=database.ref('gameState')
        readState.on("value",function(data){gameState=data.val()})
        
    }
    updateState(state)
    {
        database.ref('/').update({gameState:state})

    }

    start()
    {
        if (gameState===0)
        {
            player=new Player()
            player.getCount()
            form1=new Form()
            form1.display()
        }
    }














}